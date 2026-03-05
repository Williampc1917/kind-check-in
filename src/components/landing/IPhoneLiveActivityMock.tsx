import { useEffect, useState } from "react";
import "./IPhoneLiveActivityMock.css";

type IPhoneLiveActivityMockProps = {
  minutesRemaining: number;
  deadline: Date | string;
};

function safeByText(deadline: Date | string): string {
  const date = typeof deadline === "string" ? new Date(deadline) : deadline;
  if (Number.isNaN(date.getTime())) return "soon";
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

const IPhoneLiveActivityMock = ({ minutesRemaining, deadline }: IPhoneLiveActivityMockProps) => {
  const baselineMinutes = Math.max(15, Math.round(minutesRemaining));
  const [minutes, setMinutes] = useState(baselineMinutes);
  const [progressFillAmount, setProgressFillAmount] = useState(0.5);
  const [showExtendPulse, setShowExtendPulse] = useState(false);
  const [extendPressed, setExtendPressed] = useState(false);
  const [showSafePulse, setShowSafePulse] = useState(false);
  const [safePressed, setSafePressed] = useState(false);
  const [showMarkedSafeState, setShowMarkedSafeState] = useState(false);

  useEffect(() => {
    let isCancelled = false;
    let firstCycle = true;

    const wait = async (ms: number): Promise<boolean> => {
      await new Promise((resolve) => window.setTimeout(resolve, ms));
      return !isCancelled;
    };

    const runLoop = async () => {
      while (!isCancelled) {
        if (!firstCycle) {
          setShowMarkedSafeState(false);
          if (!(await wait(350))) return;
        }
        firstCycle = false;

        setMinutes(25);
        setProgressFillAmount(0.5);
        setShowExtendPulse(false);
        setExtendPressed(false);
        setShowSafePulse(false);
        setSafePressed(false);

        if (!(await wait(1000))) return;
        setMinutes(10);
        setProgressFillAmount(0.2);

        if (!(await wait(850))) return;
        setMinutes(5);
        setProgressFillAmount(0.1);

        if (!(await wait(800))) return;
        setShowExtendPulse(true);

        if (!(await wait(1050))) return;
        setShowExtendPulse(false);
        setExtendPressed(true);

        if (!(await wait(120))) return;
        setExtendPressed(false);
        setMinutes(20);
        setProgressFillAmount(0.4);

        if (!(await wait(1000))) return;
        setMinutes(10);
        setProgressFillAmount(0.2);

        if (!(await wait(900))) return;
        setShowSafePulse(true);

        if (!(await wait(1000))) return;
        setShowSafePulse(false);
        setSafePressed(true);

        if (!(await wait(120))) return;
        setSafePressed(false);
        setShowMarkedSafeState(true);

        if (!(await wait(1800))) return;
      }
    };

    runLoop();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <div className="hiw-card2-wrap" aria-label="iPhone lock screen live activity preview">
      <div className="hiw-card2-phone">
        <div className="hiw-card2-phone-shell" />

        <div className="hiw-card2-phone-screen">
          <div className="hiw-card2-wallpaper">
            <div className="hiw-card2-bloom" />
            <div className="hiw-card2-plate" />
          </div>

          <div className="hiw-card2-bottom-shade" />

          <div className="hiw-card2-live-activity-wrap">
            {showMarkedSafeState ? (
              <section className="hiw-card2-live-activity hiw-card2-live-activity-safe">
                <div className="hiw-card2-safe-icon">✓</div>
                <p className="hiw-card2-safe-title">You&apos;re marked safe</p>
                <p className="hiw-card2-safe-subtitle">Check-in complete</p>
              </section>
            ) : (
              <section className="hiw-card2-live-activity">
                <div className="hiw-card2-brand-dot" aria-hidden="true">
                  <span>✓</span>
                </div>

                <div className="hiw-card2-activity-top">
                  <p className="hiw-card2-title">{minutes} min left</p>

                  <div className="hiw-card2-actions">
                    <button
                      type="button"
                      className={`hiw-card2-pill hiw-card2-pill-safe ${
                        showSafePulse ? "is-pulsing" : ""
                      } ${safePressed ? "is-pressed" : ""}`}
                      tabIndex={-1}
                    >
                      I&apos;m safe
                    </button>
                    <button
                      type="button"
                      className={`hiw-card2-pill hiw-card2-pill-extend ${
                        showExtendPulse ? "is-pulsing" : ""
                      } ${extendPressed ? "is-pressed" : ""}`}
                      tabIndex={-1}
                    >
                      <span className="hiw-card2-timer-icon">⏱</span>+15
                    </button>
                  </div>
                </div>

                <p className="hiw-card2-subtitle">Safe by {safeByText(deadline)}</p>

                <div className="hiw-card2-progress-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progressFillAmount * 100)}>
                  <div className="hiw-card2-progress-fill" style={{ width: `${Math.max(0, Math.min(1, progressFillAmount)) * 100}%` }} />
                </div>
              </section>
            )}
          </div>

          <div className="hiw-card2-home-indicator" />
        </div>
      </div>
    </div>
  );
};

export default IPhoneLiveActivityMock;
