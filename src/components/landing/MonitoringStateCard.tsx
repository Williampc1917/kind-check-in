import { useEffect, useMemo, useState } from "react";
import "./MonitoringStateCard.css";
import safecheckLogo from "@/imgs/safecheck-high-resolution-logo-transparent.png";

type MonitoringStateCardProps = {
  minutesRemaining: number;
  deadline: Date | string;
  onImSafe?: () => void;
  onExtend15?: () => void;
};

type MonitoringSnapshot = {
  minutesRemaining: number;
  deadline: Date;
  progressPct: number;
};

type ActivityCardProps = {
  snapshot: MonitoringSnapshot;
  onImSafe?: () => void;
  onExtend15?: () => void;
  ariaHidden?: boolean;
  includeTestId?: boolean;
};

const SWIPE_INTERVAL_MS = 3200;
const SWIPE_DURATION_MS = 600;

function minutesText(minutes: number): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    const hourLabel = hours === 1 ? "hour" : "hours";

    return mins === 0
      ? `${hours} ${hourLabel} left`
      : `${hours} ${hourLabel} ${mins} min left`;
  }

  return `${minutes} min left`;
}

function progressFill(minutes: number): number {
  if (minutes >= 26) return 1;
  if (minutes >= 21) return 0.75;
  if (minutes >= 16) return 0.5;
  if (minutes > 0) return 0.25;
  return 0;
}

function safeByText(deadline: Date | string): string {
  const date = typeof deadline === "string" ? new Date(deadline) : deadline;
  return date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
}

function safeDate(deadline: Date | string): Date {
  const date = typeof deadline === "string" ? new Date(deadline) : deadline;
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

function buildSnapshots(minutesRemaining: number, deadline: Date | string): MonitoringSnapshot[] {
  const baseMinutes = Math.max(1, Math.round(minutesRemaining));
  const baseDeadline = safeDate(deadline);

  return [
    {
      minutesRemaining: baseMinutes,
      deadline: baseDeadline,
      progressPct: progressFill(baseMinutes) * 100,
    },
    {
      minutesRemaining: Math.max(1, baseMinutes - 5),
      deadline: addMinutes(baseDeadline, -5),
      progressPct: 66,
    },
    {
      minutesRemaining: Math.max(1, baseMinutes - 12),
      deadline: addMinutes(baseDeadline, -12),
      progressPct: 44,
    },
    {
      minutesRemaining: Math.max(1, baseMinutes - 17),
      deadline: addMinutes(baseDeadline, -17),
      progressPct: 24,
    },
  ];
}

const ActivityCard = ({
  snapshot,
  onImSafe,
  onExtend15,
  ariaHidden = false,
  includeTestId = false,
}: ActivityCardProps) => {
  const fillPct = `${snapshot.progressPct}%`;

  return (
    <section
      className="monitoring-card monitoring-live-card"
      aria-label="Safety check-in monitoring"
      aria-hidden={ariaHidden || undefined}
    >
      {/* Logo icon */}
      <div className="monitoring-logo">
        <img src={safecheckLogo} alt="MadeIt" className="monitoring-logo-img" />
      </div>

      <header className="monitoring-top">
        <h2 className="monitoring-title">{minutesText(snapshot.minutesRemaining)}</h2>

        <div className="monitoring-actions">
          <button
            type="button"
            className="monitoring-pill monitoring-pill-primary"
            onClick={onImSafe}
            tabIndex={ariaHidden ? -1 : 0}
          >
            I&apos;m safe
          </button>
          <button
            type="button"
            className="monitoring-pill monitoring-pill-extend"
            onClick={onExtend15}
            tabIndex={ariaHidden ? -1 : 0}
          >
            <span aria-hidden="true">⏱</span>
            <span>+15</span>
          </button>
        </div>
      </header>

      <p className="monitoring-subtitle">Safe by {safeByText(snapshot.deadline)}</p>

      <div
        className="monitoring-progress-track"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(snapshot.progressPct)}
      >
        <div
          className="monitoring-progress-fill"
          data-testid={includeTestId ? "monitoring-progress-fill" : undefined}
          style={{ width: fillPct }}
        />
      </div>
    </section>
  );
};

const MonitoringStateCard = ({
  minutesRemaining,
  deadline,
  onImSafe,
  onExtend15,
}: MonitoringStateCardProps) => {
  const snapshots = useMemo(
    () => buildSnapshots(minutesRemaining, deadline),
    [minutesRemaining, deadline]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"visible" | "exiting" | "entering">("visible");
  const nextIndex = (currentIndex + 1) % snapshots.length;

  useEffect(() => {
    setCurrentIndex(0);
    setPhase("visible");
  }, [minutesRemaining, deadline]);

  useEffect(() => {
    if (snapshots.length < 2) return;

    const interval = window.setInterval(() => {
      setPhase("exiting");
    }, SWIPE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [snapshots.length]);

  useEffect(() => {
    if (phase === "exiting") {
      const timeout = window.setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % snapshots.length);
        setPhase("entering");
      }, SWIPE_DURATION_MS / 2);
      return () => window.clearTimeout(timeout);
    }

    if (phase === "entering") {
      const timeout = window.setTimeout(() => {
        setPhase("visible");
      }, SWIPE_DURATION_MS / 2);
      return () => window.clearTimeout(timeout);
    }
  }, [phase, snapshots.length]);

  const displayIndex = phase === "exiting" ? currentIndex : phase === "entering" ? nextIndex : currentIndex;

  return (
    <div className="monitoring-shell">
      <div className="monitoring-carousel" aria-live="polite">
        <div className={`monitoring-fade-wrapper monitoring-phase-${phase}`}>
          <ActivityCard
            snapshot={snapshots[displayIndex]}
            onImSafe={onImSafe}
            onExtend15={onExtend15}
            includeTestId
          />
        </div>
      </div>

      {/* Dot indicators */}
      <div className="monitoring-dots">
        {snapshots.map((_, i) => (
          <span
            key={i}
            className={`monitoring-dot ${i === displayIndex ? "monitoring-dot-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MonitoringStateCard;
