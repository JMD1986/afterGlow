import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import WhatIs from "../components/pages/WhatIs";
import Atrium from "../components/pages/Atrium";
import Soundbath from "../components/pages/Soundbath";
import ThePortal from "../components/pages/ThePortal";
import TheTeam from "../components/pages/TheTeam";
import TheVenue from "../components/pages/TheVenue";

function withRouter(Component) {
  return render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>,
  );
}

describe("WhatIs page", () => {
  it("renders without crashing", () => {
    withRouter(WhatIs);
  });

  it("renders the main heading", () => {
    withRouter(WhatIs);
    expect(
      screen.getByRole("heading", { name: /What is Afterglow/i }),
    ).toBeInTheDocument();
  });

  it("renders descriptive body text", () => {
    withRouter(WhatIs);
    expect(screen.getByText(/old Austin still exists/i)).toBeInTheDocument();
  });

  it("renders a back link to event info", () => {
    withRouter(WhatIs);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});

describe("Atrium page", () => {
  it("renders without crashing", () => {
    withRouter(Atrium);
  });

  it("renders the main heading", () => {
    withRouter(Atrium);
    expect(
      screen.getByRole("heading", { name: /The Atrium/i }),
    ).toBeInTheDocument();
  });

  it("renders lobby images", () => {
    withRouter(Atrium);
    expect(screen.getByAltText("Atrium Lobby")).toBeInTheDocument();
    expect(screen.getByAltText("Atrium Lobby 2")).toBeInTheDocument();
  });

  it("mentions BYOB", () => {
    withRouter(Atrium);
    expect(screen.getByText(/BYOB/i)).toBeInTheDocument();
  });

  it("renders a back link to event info", () => {
    withRouter(Atrium);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});

describe("Soundbath page", () => {
  it("renders without crashing", () => {
    withRouter(Soundbath);
  });

  it("renders the main heading", () => {
    withRouter(Soundbath);
    expect(
      screen.getByRole("heading", { name: /Soundbath/i }),
    ).toBeInTheDocument();
  });

  it("renders all three performer names", () => {
    withRouter(Soundbath);
    expect(
      screen.getByRole("heading", { name: /Jayk Wilson/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Bryan Gary/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Couchbound/i }),
    ).toBeInTheDocument();
  });

  it("renders performer images with correct alt text", () => {
    withRouter(Soundbath);
    expect(screen.getByAltText("Jayk Wilson")).toBeInTheDocument();
    expect(screen.getByAltText("Bryan Gary")).toBeInTheDocument();
    expect(screen.getByAltText("Couchbound")).toBeInTheDocument();
  });

  it("renders Bandcamp links for Bryan Gary and Couchbound", () => {
    withRouter(Soundbath);
    const bandcampLinks = screen.getAllByRole("link", { name: /bandcamp/i });
    expect(bandcampLinks.length).toBe(2);
    bandcampLinks.forEach((link) => {
      expect(link).toHaveAttribute("target", "_blank");
    });
  });

  it("renders a back link to event info", () => {
    withRouter(Soundbath);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});

describe("ThePortal page", () => {
  it("renders without crashing", () => {
    withRouter(ThePortal);
  });

  it("renders the main heading", () => {
    withRouter(ThePortal);
    expect(
      screen.getByRole("heading", { name: /The Portal/i }),
    ).toBeInTheDocument();
  });

  it("renders Driftside EP section heading", () => {
    withRouter(ThePortal);
    expect(
      screen.getByRole("heading", { name: /Driftside/i }),
    ).toBeInTheDocument();
  });

  it("renders stage images", () => {
    withRouter(ThePortal);
    expect(screen.getByAltText("The Portal Stage")).toBeInTheDocument();
    expect(screen.getByAltText("The Portal Stage 2")).toBeInTheDocument();
  });

  it("renders an Instagram embed iframe", () => {
    withRouter(ThePortal);
    const iframe = document.querySelector("iframe");
    expect(iframe).toBeTruthy();
    expect(iframe.src).toContain("instagram.com");
  });

  it("renders a back link to event info", () => {
    withRouter(ThePortal);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});

describe("TheTeam page", () => {
  it("renders without crashing", () => {
    withRouter(TheTeam);
  });

  it("renders the main heading", () => {
    withRouter(TheTeam);
    expect(
      screen.getByRole("heading", { name: /The Team/i }),
    ).toBeInTheDocument();
  });

  it("renders all four team member names", () => {
    withRouter(TheTeam);
    expect(
      screen.getByRole("heading", { name: /Vibe Reader/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /The Jester/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Colorburn/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Trey Abraham/i }),
    ).toBeInTheDocument();
  });

  it("renders team member images", () => {
    withRouter(TheTeam);
    expect(screen.getByAltText("Vibe Reader")).toBeInTheDocument();
    expect(screen.getByAltText("The Jester")).toBeInTheDocument();
    expect(screen.getByAltText("Colorburn")).toBeInTheDocument();
    expect(screen.getByAltText("Trey Abraham")).toBeInTheDocument();
  });

  it("renders a back link to event info", () => {
    withRouter(TheTeam);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});

describe("TheVenue page", () => {
  it("renders without crashing", () => {
    withRouter(TheVenue);
  });

  it("renders the main heading", () => {
    withRouter(TheVenue);
    expect(
      screen.getByRole("heading", { name: /Fallout Theater/i }),
    ).toBeInTheDocument();
  });

  it("renders venue exterior image", () => {
    withRouter(TheVenue);
    expect(
      screen.getByAltText("Fallout Theater exterior"),
    ).toBeInTheDocument();
  });

  it("renders the venue address link", () => {
    withRouter(TheVenue);
    const mapLink = screen.getByText(/616 Lavaca St/i);
    expect(mapLink).toBeInTheDocument();
    expect(mapLink.closest("a")).toHaveAttribute("target", "_blank");
  });

  it("renders a static map image", () => {
    withRouter(TheVenue);
    const mapImg = screen.getByAltText(
      /Map showing Fallout Theater/i,
    );
    expect(mapImg).toBeInTheDocument();
  });

  it("renders a back link to event info", () => {
    withRouter(TheVenue);
    const link = screen.getByText(/Back to Event Info/i);
    expect(link.closest("a")).toHaveAttribute("href", "/eventInfo");
  });
});
