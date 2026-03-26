import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";

// Set test env vars before importing app
beforeAll(() => {
  process.env.NODE_ENV = "test";
  process.env.SITE_LINK = "https://test.example.com/afterGlow";
  process.env.TWILIO_ACCOUNT_SID = "ACtest";
  process.env.TWILIO_AUTH_TOKEN = "testtoken";
});

describe("Twilio SMS Webhook", () => {
  let app;

  beforeAll(async () => {
    const mod = await import("../twilio-sms.js");
    app = mod.app;
  });

  it("POST /sms returns 200", async () => {
    const res = await request(app).post("/sms").send("Body=hello");
    expect(res.status).toBe(200);
  });

  it("POST /sms returns XML content type", async () => {
    const res = await request(app).post("/sms").send("Body=hello");
    expect(res.headers["content-type"]).toMatch(/xml/);
  });

  it("POST /sms returns TwiML with welcome message", async () => {
    const res = await request(app).post("/sms").send("Body=hello");
    expect(res.text).toContain("Welcome to Afterglow");
    expect(res.text).toContain("https://test.example.com/afterGlow");
  });

  it("POST /sms returns valid TwiML structure", async () => {
    const res = await request(app).post("/sms").send("Body=hello");
    expect(res.text).toContain("<Response>");
    expect(res.text).toContain("<Message>");
    expect(res.text).toContain("</Message>");
    expect(res.text).toContain("</Response>");
  });

  it("GET /sms returns 404 or 405 (only POST allowed)", async () => {
    const res = await request(app).get("/sms");
    expect([404, 405]).toContain(res.status);
  });
});
