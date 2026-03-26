import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EventInfo from "../components/EventInfo.tsx";

function renderEventInfo() {
  return render(
    <MemoryRouter>
      <EventInfo />
    </MemoryRouter>,
  );
}

describe("EventInfo", () => {
  it("renders without crashing", () => {
    renderEventInfo();
  });

  it("renders the hero image", () => {
    renderEventInfo();
    const heroImg = screen.getByAltText("Afterglow Hero");
    expect(heroImg).toBeInTheDocument();
  });

  it("renders the welcome text", () => {
    renderEventInfo();
    expect(screen.getByText("welcome to afterglow")).toBeInTheDocument();
  });

  it("renders all six section titles", () => {
    renderEventInfo();
    const expectedTitles = [
      "What is Afterglow?",
      "The Atrium",
      "The Soundbath",
      "The Portal",
      "The Team",
      "The Venue",
    ];
    expectedTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders section images with alt text matching titles", () => {
    renderEventInfo();
    const expectedTitles = [
      "What is Afterglow?",
      "The Atrium",
      "The Soundbath",
      "The Portal",
      "The Team",
      "The Venue",
    ];
    expectedTitles.forEach((title) => {
      expect(screen.getByAltText(title)).toBeInTheDocument();
    });
  });

  it('renders the "what is it really?" link', () => {
    renderEventInfo();
    const link = screen.getByText("what is it really?");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/forReal");
  });

  it("renders the Eventbrite ticket link in The Venue section", () => {
    renderEventInfo();
    const ticketLink = screen.getByText("purchase tickets here");
    expect(ticketLink).toBeInTheDocument();
    expect(ticketLink).toHaveAttribute(
      "href",
      expect.stringContaining("eventbrite.com"),
    );
    expect(ticketLink).toHaveAttribute("target", "_blank");
  });
});
