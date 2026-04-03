import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MusicToggle from "../components/MidiBackground";

describe("MusicToggle", () => {
  it("renders without crashing", () => {
    render(<MusicToggle playing={false} onToggle={() => {}} />);
  });

  it("shows unmuted icon when playing is false", () => {
    render(<MusicToggle playing={false} onToggle={() => {}} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("♪");
    expect(btn).toHaveAttribute("aria-label", "Unmute music");
  });

  it("shows muted icon when playing is true", () => {
    render(<MusicToggle playing={true} onToggle={() => {}} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveTextContent("♫");
    expect(btn).toHaveAttribute("aria-label", "Mute music");
  });

  it("calls onToggle when the button is clicked", async () => {
    const user = userEvent.setup();
    const onToggle = vi.fn();
    render(<MusicToggle playing={false} onToggle={onToggle} />);

    await user.click(screen.getByRole("button"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("has a title attribute matching the aria-label", () => {
    render(<MusicToggle playing={true} onToggle={() => {}} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveAttribute("title", "Mute music");
  });
});
