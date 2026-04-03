import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TrippyTriangles from "../components/animations/TrippyTriangles";
import TrippyRings from "../components/animations/TrippyRings";
import TriangleTravelers from "../components/animations/TriangleTravelers";

describe("TrippyTriangles", () => {
  it("renders without crashing", () => {
    render(<TrippyTriangles />);
  });

  it("renders an SVG element", () => {
    const { container } = render(<TrippyTriangles />);
    expect(container.querySelector("svg")).toBeTruthy();
  });

  it("renders 20 polygon elements", () => {
    const { container } = render(<TrippyTriangles />);
    const polygons = container.querySelectorAll("polygon");
    expect(polygons.length).toBe(20);
  });

  it("each polygon has the correct points attribute", () => {
    const { container } = render(<TrippyTriangles />);
    const polygons = container.querySelectorAll("polygon");
    polygons.forEach((polygon) => {
      expect(polygon).toHaveAttribute("points", "500,200 759,650 241,650");
    });
  });

  it("renders inside a .tri-wrapper div", () => {
    const { container } = render(<TrippyTriangles />);
    expect(container.querySelector(".tri-wrapper")).toBeTruthy();
  });
});

describe("TrippyRings", () => {
  it("renders without crashing", () => {
    render(<TrippyRings />);
  });

  it("renders 30 ring elements", () => {
    const { container } = render(<TrippyRings />);
    const rings = container.querySelectorAll(".ring");
    expect(rings.length).toBe(30);
  });

  it("renders inside a .trippy-container div", () => {
    const { container } = render(<TrippyRings />);
    expect(container.querySelector(".trippy-container")).toBeTruthy();
  });

  it("each ring has an animationDelay style applied", () => {
    const { container } = render(<TrippyRings />);
    const rings = container.querySelectorAll(".ring");
    rings.forEach((ring) => {
      expect(ring.style.animationDelay).toBeTruthy();
    });
  });
});

describe("TriangleTravelers", () => {
  it("renders without crashing", () => {
    render(<TriangleTravelers />);
  });

  it("renders 200 traveler elements", () => {
    const { container } = render(<TriangleTravelers />);
    const travelers = container.querySelectorAll(".triangle-traveler");
    expect(travelers.length).toBe(200);
  });

  it("renders inside a .triangle-travelers-wrap div", () => {
    const { container } = render(<TriangleTravelers />);
    expect(container.querySelector(".triangle-travelers-wrap")).toBeTruthy();
  });
});
