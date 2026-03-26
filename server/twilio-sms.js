// server/twilio-sms.js
// Express server for Twilio SMS auto-responder
// Loads credentials and site link from .env

import dotenv from "dotenv";
import express from "express";
import twilio from "twilio";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Twilio Auth (not needed for webhook response, but shown for completeness)
const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const SITE_LINK = process.env.SITE_LINK;

// Parse incoming POST data as URL-encoded (Twilio sends as form data)

app.use(bodyParser.urlencoded({ extended: false }));

// Twilio webhook endpoint

app.post("/sms", (req, res) => {
  const twiml = new twilio.twiml.MessagingResponse();
  twiml.message(
    `Welcome to Afterglow! 🌈✨\nCheck out the event: ${SITE_LINK}`,
  );
  res.type("text/xml");
  res.send(twiml.toString());
});

export { app };

if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Twilio SMS auto-responder running on port ${PORT}`);
  });
}
