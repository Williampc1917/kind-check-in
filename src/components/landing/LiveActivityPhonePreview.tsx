import { useEffect, useRef, useState, useCallback } from "react";
import safecheckLogo from "@/imgs/safecheck-high-resolution-logo-transparent.png";
import "./LiveActivityPhonePreview.css";

type Phase =
  | "countdown1"
  | "countdown2"
  | "countdown3"
  | "pulseExtend"
  | "tapExtend"
  | "extended"
  | "countdown4"
  | "pulseSafe"
  | "tapSafe"
  | "markedSafe"
  | "reset";

type AnimState = {
  minutes: number;
  progress: number;
  phase: Phase;
  extendPulse: boolean;
  extendPressed: boolean;
  safePulse: boolean;
  safePressed: boolean;
  showMarkedSafe: boolean;
};

const INITIAL: AnimState = {
  minutes: 25,
  progress: 0.5,
  phase: "countdown1",
  extendPulse: false,
  extendPressed: false,
  safePulse: false,
  safePressed: false,
  showMarkedSafe: false,
};

const LiveActivityPhonePreview = () => {
  const [s, setS] = useState<AnimState>(INITIAL);
  const cancelled = useRef(false);
  const timeoutIds = useRef<number[]>([]);

  const wait = useCallback((ms: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const id = window.setTimeout(() => {
        resolve(!cancelled.current);
      }, ms);
      timeoutIds.current.push(id);
    });
  }, []);

  const runSequence = useCallback(async () => {
    cancelled.current = false;

    // Reset
    setS(INITIAL);

    // 1. 25 → 10
    if (!(await wait(1200))) return;
    setS((p) => ({ ...p, minutes: 10, progress: 0.2, phase: "countdown2" }));

    // 2. 10 → 5
    if (!(await wait(1000))) return;
    setS((p) => ({ ...p, minutes: 5, progress: 0.1, phase: "countdown3" }));

    // 3. Pulse +15
    if (!(await wait(900))) return;
    setS((p) => ({ ...p, extendPulse: true, phase: "pulseExtend" }));

    // 4. Tap +15
    if (!(await wait(1100))) return;
    setS((p) => ({ ...p, extendPulse: false, extendPressed: true, phase: "tapExtend" }));

    if (!(await wait(140))) return;
    setS((p) => ({
      ...p,
      extendPressed: false,
      minutes: 20,
      progress: 0.4,
      phase: "extended",
    }));

    // 5. 20 → 10
    if (!(await wait(1100))) return;
    setS((p) => ({ ...p, minutes: 10, progress: 0.2, phase: "countdown4" }));

    // 6. Pulse I'm safe
    if (!(await wait(1000))) return;
    setS((p) => ({ ...p, safePulse: true, phase: "pulseSafe" }));

    // 7. Tap I'm safe
    if (!(await wait(1100))) return;
    setS((p) => ({ ...p, safePulse: false, safePressed: true, phase: "tapSafe" }));

    if (!(await wait(140))) return;
    setS((p) => ({ ...p, safePressed: false }));

    // 8. Marked safe
    if (!(await wait(200))) return;
    setS((p) => ({ ...p, showMarkedSafe: true, phase: "markedSafe" }));

    // 9. Hold, then loop
    if (!(await wait(2200))) return;
    setS((p) => ({ ...p, showMarkedSafe: false, phase: "reset" }));

    if (!(await wait(400))) return;
    runSequence();
  }, [wait]);

  useEffect(() => {
    runSequence();
    return () => {
      cancelled.current = true;
      timeoutIds.current.forEach(clearTimeout);
      timeoutIds.current = [];
    };
  }, [runSequence]);

  const safeScale = s.safePressed ? 0.9 : s.safePulse ? 1.06 : 1;
  const extendScale = s.extendPressed ? 0.9 : s.extendPulse ? 1.06 : 1;

  return (
    <div className="la-phone-shell">
      {/* Phone bezel */}
      <div className="la-phone-bezel">
        <div className="la-phone-screen">
          {/* Wallpaper */}
          <div className="la-wallpaper" />
          <div className="la-wallpaper-overlay" />

          {/* Live Activity Card */}
          <div className="la-card-wrapper">
            <div className={`la-card-container ${s.showMarkedSafe ? "la-card-fade-out" : "la-card-fade-in"}`}>
              <div className="la-live-card">
                <div className="la-card-top">
                  <div className="la-card-left">
                    <img src={safecheckLogo} alt="" className="la-logo" />
                    <span className="la-minutes" key={s.minutes}>
                      {s.minutes} min left
                    </span>
                  </div>
                  <div className="la-card-buttons">
                    <button
                      className="la-btn-safe"
                      style={{
                        transform: `scale(${safeScale})`,
                        boxShadow: s.safePulse
                          ? "0 0 12px rgba(34,197,94,0.4)"
                          : "none",
                      }}
                    >
                      I'm safe
                    </button>
                    <button
                      className="la-btn-extend"
                      style={{
                        transform: `scale(${extendScale})`,
                        boxShadow: s.extendPulse
                          ? "0 0 12px rgba(250,217,25,0.5)"
                          : "none",
                      }}
                    >
                      <span className="la-timer-icon">⏱</span>
                      <span>+15</span>
                    </button>
                  </div>
                </div>
                <span className="la-safe-by">Safe by 5:57 AM</span>
                <div className="la-progress-track">
                  <div
                    className="la-progress-fill"
                    style={{ width: `${s.progress * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Marked safe overlay */}
            <div className={`la-card-container la-marked-safe-card ${s.showMarkedSafe ? "la-card-fade-in" : "la-card-fade-out"}`}>
              <div className="la-live-card la-safe-state">
                <div className="la-safe-check">✓</div>
                <span className="la-safe-title">You're marked safe</span>
                <span className="la-safe-subtitle">Check-in complete</span>
              </div>
            </div>
          </div>

          {/* Home indicator */}
          <div className="la-home-indicator" />
        </div>
      </div>

      {/* Top fade mask */}
      <div className="la-phone-top-fade" />
    </div>
  );
};

export default LiveActivityPhonePreview;
