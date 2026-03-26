import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import CountdownModal from "../components/CountdownModal";

describe("CountdownModal", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders without crashing", () => {
    render(<CountdownModal />);
  });

  it("displays a countdown time string", () => {
    // Set a known time before the target date
    vi.setSystemTime(new Date("2026-04-20T00:00:00"));
    render(<CountdownModal />);

    // The countdown should render a time element with day:hour:min:sec format
    const timeEl = document.querySelector(".time");
    expect(timeEl).toBeTruthy();
    expect(timeEl.textContent).toMatch(
      /\d{2}\s*:\s*\d{2}\s*:\s*\d{2}\s*:\s*\d{2}/,
    );
  });

  it("shows 00:00:00:00 when target date has passed", () => {
    vi.setSystemTime(new Date("2026-05-01T00:00:00"));
    render(<CountdownModal />);

    const timeEl = document.querySelector(".time");
    expect(timeEl.textContent).toBe("00 : 00 : 00 : 00");
  });

  it("updates countdown every second", () => {
    vi.setSystemTime(new Date("2026-04-25T22:59:55"));
    render(<CountdownModal />);

    const timeEl = document.querySelector(".time");
    const initialText = timeEl.textContent;

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(timeEl.textContent).not.toBe(initialText);
  });
});
