import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

// Allow our React frontend to communicate with this server
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Allow the server to receive JSON data
app.use(express.json());

// Test route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Elle ’n’ Elle Gym backend is running!",
  });
});

// Booking route
app.post("/api/bookings", (req, res) => {
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

    // Booking information received by the server
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
      booking.paymentReference || "No payment reference"
    );
    console.log("Message:", booking.message);
    console.log("Received:", booking.receivedAt);
    console.log("====================================\n");

    return res.status(201).json({
      success: true,
      message: "Booking received successfully.",
      booking,
    });
  } catch (error) {
    console.error("Booking server error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while processing the booking.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log("====================================");
  console.log("Elle ’n’ Elle Gym Backend");
  console.log("====================================");
  console.log(`Server running on http://localhost:${PORT}`);
  console.log("Waiting for bookings...");
  console.log("====================================");
});