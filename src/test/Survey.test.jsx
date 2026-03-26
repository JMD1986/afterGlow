import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Survey from "../components/Survey";

function renderSurvey(props = {}) {
  const defaultProps = {
    onComplete: () => {},
    onStartMusic: () => {},
  };
  return render(
    <MemoryRouter>
      <Survey {...defaultProps} {...props} />
    </MemoryRouter>,
  );
}

describe("Survey", () => {
  it("renders the first question", () => {
    renderSurvey();
    expect(
      screen.getByText("How would you consider your vibe?"),
    ).toBeInTheDocument();
  });

  it("shows two choice buttons on step 1", () => {
    renderSurvey();
    expect(screen.getByText("Chill")).toBeInTheDocument();
    expect(screen.getByText("Could Be Chiller")).toBeInTheDocument();
  });

  it("advances to step 2 when 'Chill' is clicked", async () => {
    const user = userEvent.setup();
    const onStartMusic = vi.fn();
    renderSurvey({ onStartMusic });

    await user.click(screen.getByText("Chill"));

    expect(onStartMusic).toHaveBeenCalled();
    expect(
      screen.getByText(/would you like to share your vibe/i),
    ).toBeInTheDocument();
  });

  it("advances to step 2 when 'Could Be Chiller' is clicked", async () => {
    const user = userEvent.setup();
    const onStartMusic = vi.fn();
    renderSurvey({ onStartMusic });

    await user.click(screen.getByText("Could Be Chiller"));

    expect(onStartMusic).toHaveBeenCalled();
    expect(
      screen.getByText(/would you like assistance elevating your vibe/i),
    ).toBeInTheDocument();
  });

  it("calls onComplete when final choice is made (chill path)", async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    renderSurvey({ onComplete });

    await user.click(screen.getByText("Chill"));
    await user.click(screen.getByText("Yes, I'm Chill Like That"));

    expect(onComplete).toHaveBeenCalledWith({ vibe: "chill", share: true });
  });

  it("calls onComplete when final choice is made (chiller path)", async () => {
    const user = userEvent.setup();
    const onComplete = vi.fn();
    renderSurvey({ onComplete });

    await user.click(screen.getByText("Could Be Chiller"));
    await user.click(screen.getByText("Yes, Elevate My Vibe"));

    expect(onComplete).toHaveBeenCalledWith({
      vibe: "could be chiller",
      assist: true,
    });
  });

  it("has a link to the explanation page", () => {
    renderSurvey();
    const link = screen.getByText("what's this all about?");
    expect(link).toBeInTheDocument();
  });
});
