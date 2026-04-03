import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Explanation from "../components/Explanation";

function renderExplanation() {
  return render(
    <MemoryRouter>
      <Explanation />
    </MemoryRouter>,
  );
}

describe("Explanation", () => {
  it("renders without crashing", () => {
    renderExplanation();
  });

  it("renders the main heading", () => {
    renderExplanation();
    expect(
      screen.getByRole("heading", { name: /What's This All About/i }),
    ).toBeInTheDocument();
  });

  it("renders vibe-driven description text", () => {
    renderExplanation();
    expect(
      screen.getByText(/vibe-driven experience/i),
    ).toBeInTheDocument();
  });

  it("renders survey explanation text", () => {
    renderExplanation();
    expect(
      screen.getByText(/survey you just took/i),
    ).toBeInTheDocument();
  });

  it("renders a back link to the home page", () => {
    renderExplanation();
    const backLink = screen.getByText(/Back to afterGlow/i);
    expect(backLink).toBeInTheDocument();
    expect(backLink.closest("a")).toHaveAttribute("href", "/");
  });
});
