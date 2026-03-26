import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

function renderApp(route = "/") {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>,
  );
}

describe("App", () => {
  it("renders without crashing", () => {
    renderApp();
  });

  it("renders the survey on the home route", () => {
    renderApp("/");
    expect(
      screen.getByText("How would you consider your vibe?"),
    ).toBeInTheDocument();
  });

  it("renders EventInfo on /eventInfo route", () => {
    renderApp("/eventInfo");
    expect(screen.getByText("What is Afterglow?")).toBeInTheDocument();
  });

  it("renders ForReal on /forReal route", () => {
    renderApp("/forReal");
    expect(screen.getByText("What is it really?")).toBeInTheDocument();
  });

  it("renders WhatIs page on /whatIs route", () => {
    renderApp("/whatIs");
    expect(
      screen.getByRole("heading", { name: /What is Afterglow/i }),
    ).toBeInTheDocument();
  });

  it("renders Atrium page on /atrium route", () => {
    renderApp("/atrium");
    expect(
      screen.getByRole("heading", { name: /The Atrium/i }),
    ).toBeInTheDocument();
  });

  it("renders Soundbath page on /soundbath route", () => {
    renderApp("/soundbath");
    expect(
      screen.getByRole("heading", { name: /Soundbath/i }),
    ).toBeInTheDocument();
  });

  it("renders ThePortal page on /thePortal route", () => {
    renderApp("/thePortal");
    expect(
      screen.getByRole("heading", { name: /The Portal/i }),
    ).toBeInTheDocument();
  });

  it("renders TheTeam page on /theTeam route", () => {
    renderApp("/theTeam");
    expect(
      screen.getByRole("heading", { name: /The Team/i }),
    ).toBeInTheDocument();
  });

  it("renders TheVenue page on /theVenue route", () => {
    renderApp("/theVenue");
    expect(
      screen.getByRole("heading", { name: /Fallout Theater/i }),
    ).toBeInTheDocument();
  });
});
