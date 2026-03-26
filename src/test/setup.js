import "@testing-library/jest-dom";

// Mock IntersectionObserver (not available in jsdom)
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe() {}
  unobserve() {}
  disconnect() {}
}
globalThis.IntersectionObserver = MockIntersectionObserver;

// Mock window.scrollTo (not implemented in jsdom)
window.scrollTo = () => {};
