import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MonitoringStateCard from "@/components/landing/MonitoringStateCard";

describe("MonitoringStateCard", () => {
  it("renders minute-only and hour+minute countdown titles", () => {
    const deadline = new Date("2026-02-09T18:45:00");
    const { rerender } = render(<MonitoringStateCard minutesRemaining={22} deadline={deadline} />);

    expect(screen.getByRole("heading", { name: "22 min left" })).toBeInTheDocument();

    rerender(<MonitoringStateCard minutesRemaining={83} deadline={deadline} />);
    expect(screen.getByRole("heading", { name: "1 hour 23 min left" })).toBeInTheDocument();
  });

  it("renders safe-by text using local short time", () => {
    const deadline = new Date("2026-02-09T13:05:00");
    const expected = deadline.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    render(<MonitoringStateCard minutesRemaining={22} deadline={deadline} />);

    expect(screen.getByText(`Safe by ${expected}`)).toBeInTheDocument();
  });

  it("maps progress fill to monitoring bucket widths", () => {
    const deadline = new Date("2026-02-09T18:45:00");
    const { rerender } = render(<MonitoringStateCard minutesRemaining={11} deadline={deadline} />);

    const fill = screen.getByTestId("monitoring-progress-fill");

    expect(fill).toHaveStyle({ width: "25%" });

    rerender(<MonitoringStateCard minutesRemaining={16} deadline={deadline} />);
    expect(fill).toHaveStyle({ width: "50%" });

    rerender(<MonitoringStateCard minutesRemaining={21} deadline={deadline} />);
    expect(fill).toHaveStyle({ width: "75%" });

    rerender(<MonitoringStateCard minutesRemaining={26} deadline={deadline} />);
    expect(fill).toHaveStyle({ width: "100%" });
  });

  it("renders the two action pills", () => {
    render(<MonitoringStateCard minutesRemaining={22} deadline={new Date("2026-02-09T18:45:00")} />);

    expect(screen.getByRole("button", { name: "I'm safe" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /(\+15)/ })).toBeInTheDocument();
  });
});
