import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ForReal from "../components/ForReal";

describe("ForReal", () => {
  it("renders without crashing", () => {
    render(<ForReal />);
  });

  it("renders the main heading", () => {
    render(<ForReal />);
    expect(
      screen.getByRole("heading", { name: /What is it really/i }),
    ).toBeInTheDocument();
  });

  it("renders description text about the event being playful and immersive", () => {
    render(<ForReal />);
    expect(screen.getByText(/playful, immersive event/i)).toBeInTheDocument();
  });

  it("renders description text about the afterparty experience", () => {
    render(<ForReal />);
    expect(screen.getByText(/afterparty experience/i)).toBeInTheDocument();
  });

  it("renders mention of Austin", () => {
    render(<ForReal />);
    expect(screen.getAllByText(/Austin/i).length).toBeGreaterThan(0);
  });
});
