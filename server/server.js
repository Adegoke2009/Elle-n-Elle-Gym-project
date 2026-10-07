import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = 5000;

// Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Allow our React frontend to communicate with this server
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

// Allow the server to receive JSON data
app.use(express.json());

// =====================================================
// HEALTH CHECK
// =====================================================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Elle ’n’ Elle Gym backend is running!",
  });
});

// =====================================================
// BOOKING ROUTE
// =====================================================

app.post("/api/bookings", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      service,
      date,
      time,
      message,
      amount,
      paymentReference,
    } = req.body;

    // Basic validation
    if (!fullName || !email || !phone || !service || !date || !time) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required booking information.",
      });
    }

    // =================================================
    // BOOKING INFORMATION
    // =================================================

    const booking = {
      fullName,
      email,
      phone,
      service,
      date,
      time,
      message: message || "",
      amount: amount || 0,
      paymentReference: paymentReference || null,
      receivedAt: new Date().toISOString(),
    };

    // =================================================
    // DISPLAY BOOKING IN TERMINAL
    // =================================================

    console.log("\n====================================");
    console.log("NEW GYM BOOKING");
    console.log("====================================");
    console.log("Name:", booking.fullName);
    console.log("Email:", booking.email);
    console.log("Phone:", booking.phone);
    console.log("Service:", booking.service);
    console.log("Date:", booking.date);
    console.log("Time:", booking.time);
    console.log("Amount:", booking.amount);

    console.log(
      "Payment Reference:",
      booking.paymentReference || "No payment reference",
    );

    console.log("Message:", booking.message);
    console.log("Received:", booking.receivedAt);
    console.log("====================================\n");

    // =================================================
    // SEND CONFIRMATION EMAIL WITH RESEND
    // =================================================

    let emailSent = false;

    try {
      const { data, error } = await resend.emails.send({
        from:
          process.env.RESEND_FROM_EMAIL ||
          "onboarding@resend.dev",

        to: [booking.email],

        subject: "Elle ’n’ Elle Gym - Booking Confirmation",

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 40px 20px;
              color: #111111;
            "
          >

            <div
              style="
                max-width: 600px;
                margin: auto;
                background: #ffffff;
                border-radius: 16px;
                overflow: hidden;
              "
            >

              <!-- HEADER -->

              <div
                style="
                  background: #000000;
                  padding: 30px;
                  text-align: center;
                "
              >

                <h1
                  style="
                    margin: 0;
                    color: #22c55e;
                    font-size: 28px;
                  "
                >
                  Elle ’n’ Elle Gym Centre
                </h1>

                <p
                  style="
                    color: #ffffff;
                    margin-top: 10px;
                  "
                >
                  Akobo, Ibadan
                </p>

              </div>

              <!-- CONTENT -->

              <div style="padding: 35px;">

                <h2
                  style="
                    margin-top: 0;
                    color: #111111;
                  "
                >
                  Booking Confirmation
                </h2>

                <p>
                  Hello <strong>${booking.fullName}</strong>,
                </p>

                <p style="line-height: 1.7;">
                  Thank you for booking with
                  <strong>Elle ’n’ Elle Gym Centre</strong>.
                  Your booking request has been received successfully.
                </p>

                <!-- BOOKING DETAILS -->

                <div
                  style="
                    background: #f7f7f7;
                    border-radius: 12px;
                    padding: 20px;
                    margin: 25px 0;
                  "
                >

                  <h3 style="margin-top: 0;">
                    Booking Details
                  </h3>

                  <p>
                    <strong>Service:</strong>
                    ${booking.service}
                  </p>

                  <p>
                    <strong>Date:</strong>
                    ${booking.date}
                  </p>

                  <p>
                    <strong>Time:</strong>
                    ${booking.time}
                  </p>

                  <p>
                    <strong>Amount:</strong>
                    ₦${Number(booking.amount || 0).toLocaleString()}
                  </p>

                  ${
                    booking.paymentReference
                      ? `
                        <p>
                          <strong>Payment Reference:</strong>
                          ${booking.paymentReference}
                        </p>
                      `
                      : ""
                  }

                  ${
                    booking.message
                      ? `
                        <p>
                          <strong>Message:</strong>
                          ${booking.message}
                        </p>
                      `
                      : ""
                  }

                </div>

                <!-- NEXT STEP -->

                <div
                  style="
                    border-left: 4px solid #22c55e;
                    padding-left: 15px;
                    margin: 25px 0;
                  "
                >

                  <p style="margin: 0; line-height: 1.7;">
                    Please keep this email for your records.
                    The gym may contact you using the phone number
                    or email address provided during your booking.
                  </p>

                </div>

                <p style="line-height: 1.7;">
                  We look forward to seeing you at
                  <strong>Elle ’n’ Elle Gym Centre, Akobo, Ibadan.</strong>
                </p>

                <p
                  style="
                    color: #22c55e;
                    font-weight: bold;
                    font-size: 18px;
                  "
                >
                  Train Hard. Live Strong. Become Unstoppable.
                </p>

              </div>

              <!-- FOOTER -->

              <div
                style="
                  background: #000000;
                  padding: 20px;
                  text-align: center;
                "
              >

                <p
                  style="
                    margin: 0;
                    color: #999999;
                    font-size: 13px;
                  "
                >
                  Elle ’n’ Elle Gym Centre
                </p>

                <p
                  style="
                    margin: 6px 0 0;
                    color: #666666;
                    font-size: 12px;
                  "
                >
                  Akobo, Ibadan, Oyo State, Nigeria
                </p>

              </div>

            </div>

          </div>
        `,
      });

      if (error) {
        console.error("Resend email error:", error);
      } else {
        emailSent = true;

        console.log("====================================");
        console.log("EMAIL SENT SUCCESSFULLY");
        console.log("Email ID:", data?.id);
        console.log("Sent to:", booking.email);
        console.log("====================================\n");
      }
    } catch (emailError) {
      console.error("Resend email failed:", emailError);
    }

    // =================================================
    // SEND RESPONSE TO REACT
    // =================================================

    return res.status(201).json({
      success: true,
      message: emailSent
        ? "Booking received successfully. Confirmation email sent."
        : "Booking received successfully, but confirmation email could not be sent.",
      booking,
      emailSent,
    });
  } catch (error) {
    console.error("Booking server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while processing the booking.",
    });
  }
});

// =====================================================
// START SERVER
// =====================================================

app.listen(PORT, () => {
  console.log("====================================");
  console.log("Elle ’n’ Elle Gym Backend");
  console.log("====================================");
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Waiting for bookings...");
  console.log("====================================");
});