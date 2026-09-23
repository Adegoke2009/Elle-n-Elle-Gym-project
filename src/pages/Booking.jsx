import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PaystackPop from "@paystack/inline-js";

const bookingOptions = [
  {
    id: "daily",
    name: "Daily Membership",
    price: 3500,
    description: "Perfect for a single gym visit.",
  },
  {
    id: "weekly",
    name: "Weekly Membership",
    price: 17000,
    description: "Great for short-term fitness goals.",
  },
  {
    id: "monthly",
    name: "Monthly Membership",
    price: 30000,
    description: "Best value for regular gym members.",
    popular: true,
  },
  {
    id: "family",
    name: "Family Package",
    price: 30000,
    description: "A membership option designed for families.",
  },
  {
    id: "personal",
    name: "Personal Training",
    price: 5000,
    description: "One-on-one guidance from a trainer.",
  },
  {
    id: "strength",
    name: "Strength Training",
    price: 0,
    description: "Specialized training. Price confirmed by the gym.",
  },
  {
    id: "group",
    name: "Group Workouts",
    price: 0,
    description: "Energetic group sessions. Price confirmed by the gym.",
  },
];

const timeOptions = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getTodayDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function dateToString(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function stringToDate(value) {
  if (!value) return new Date();

  const [year, month, day] = value.split("-").map(Number);

  return new Date(year, month - 1, day);
}

function formatDisplayDate(value) {
  if (!value) return "Select a date";

  const date = stringToDate(value);

  return date.toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function isSameDate(date1, date2) {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function formatNaira(amount) {
  if (!amount) return "Price to be confirmed";

  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Booking() {
  const today = getTodayDate();
  const todayDate = stringToDate(today);

  const calendarRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "monthly",
    date: "",
    time: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [calendarOpen, setCalendarOpen] = useState(false);

  const [calendarMonth, setCalendarMonth] = useState(
    new Date(todayDate.getFullYear(), todayDate.getMonth(), 1)
  );

  const [submitted, setSubmitted] = useState(false);
  const [paymentReference, setPaymentReference] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const selectedOption = useMemo(() => {
    return (
      bookingOptions.find((option) => option.id === formData.service) ||
      bookingOptions[0]
    );
  }, [formData.service]);

  const selectedPrice = selectedOption.price;

  const currentYear = todayDate.getFullYear();

  const years = [currentYear, currentYear + 1, currentYear + 2];

  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target)
      ) {
        setCalendarOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  function updateForm(field, value) {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));

    setPaymentError("");
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.date) {
      newErrors.date = "Please select your preferred date.";
    }

    if (!formData.time) {
      newErrors.time = "Please select your preferred time.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function createPaymentReference() {
    return `ENE-${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase()}`;
  }

  async function sendBookingToBackend(reference = null) {
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          service: selectedOption.name,
          date: formData.date,
          time: formData.time,
          message: formData.message.trim(),
          amount: selectedPrice,
          paymentReference: reference,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "The booking could not be saved."
        );
      }

      console.log("Booking saved to backend:", data);

      return true;
    } catch (error) {
      console.error("Backend booking error:", error);

      setPaymentError(
        error.message ||
          "Could not connect to the gym booking server. Please try again."
      );

      return false;
    }
  }

  async function handlePaymentSuccess(transaction) {
    const reference =
      transaction?.reference || transaction?.trxref || "Completed";

    setIsProcessingPayment(true);

    const saved = await sendBookingToBackend(reference);

    if (!saved) {
      setIsProcessingPayment(false);
      return;
    }

    setPaymentReference(reference);
    setIsProcessingPayment(false);
    setSubmitted(true);

    console.log("Paystack payment successful:", transaction);
  }

  function handlePaymentCancel() {
    setIsProcessingPayment(false);

    setPaymentError(
      "Payment was cancelled. Your booking has not been completed."
    );
  }

  function handlePaymentError(error) {
    setIsProcessingPayment(false);

    console.error("Paystack error:", error);

    setPaymentError(
      error?.message ||
        "Something went wrong while opening the payment window. Please try again."
    );
  }

  function startPaystackPayment() {
    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

    if (!publicKey) {
      setPaymentError(
        "Paystack is not configured yet. Please add VITE_PAYSTACK_PUBLIC_KEY to your .env file and restart the Vite server."
      );
      return;
    }

    if (!publicKey.startsWith("pk_")) {
      setPaymentError(
        "The Paystack public key does not look valid. Please check your .env file."
      );
      return;
    }

    setPaymentError("");
    setIsProcessingPayment(true);

    const paystack = new PaystackPop();

    const reference = createPaymentReference();

    paystack.newTransaction({
      key: publicKey,

      email: formData.email.trim(),

      amount: selectedPrice * 100,

      currency: "NGN",

      reference,

      firstName: formData.fullName.trim().split(" ")[0] || "",

      phone: formData.phone.trim(),

      metadata: {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        service: selectedOption.name,
        bookingDate: formData.date,
        bookingTime: formData.time,
        message: formData.message.trim(),
      },

      onSuccess: handlePaymentSuccess,

      onCancel: handlePaymentCancel,

      onError: handlePaymentError,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    /*
      Free-price services do not go through Paystack.
      They are sent directly to the gym backend.
    */
    if (selectedPrice === 0) {
      setPaymentError("");
      setIsProcessingPayment(true);

      const saved = await sendBookingToBackend();

      setIsProcessingPayment(false);

      if (!saved) {
        return;
      }

      setPaymentReference("");
      setSubmitted(true);

      return;
    }

    startPaystackPayment();
  }

  function handleCalendarDateSelect(date) {
    const selectedDate = dateToString(date);

    updateForm("date", selectedDate);
    setCalendarOpen(false);
  }

  function goToPreviousMonth() {
    const previousMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() - 1,
      1
    );

    const currentMonth = new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      1
    );

    if (previousMonth < currentMonth) {
      return;
    }

    setCalendarMonth(previousMonth);
  }

  function goToNextMonth() {
    const maximumMonth = new Date(currentYear + 2, 11, 1);

    const nextMonth = new Date(
      calendarMonth.getFullYear(),
      calendarMonth.getMonth() + 1,
      1
    );

    if (nextMonth > maximumMonth) {
      return;
    }

    setCalendarMonth(nextMonth);
  }

  function handleMonthChange(event) {
    const month = Number(event.target.value);

    setCalendarMonth(
      new Date(calendarMonth.getFullYear(), month, 1)
    );
  }

  function handleYearChange(event) {
    const year = Number(event.target.value);

    setCalendarMonth(
      new Date(year, calendarMonth.getMonth(), 1)
    );
  }

  function renderCalendarDays() {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();

    const firstDay = new Date(year, month, 1).getDay();

    const daysInMonth = new Date(
      year,
      month + 1,
      0
    ).getDate();

    const days = [];

    for (let index = 0; index < firstDay; index++) {
      days.push(
        <div
          key={`empty-${index}`}
          className="h-10 w-10"
        />
      );
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);

      const dateString = dateToString(date);

      const isPast = dateString < today;

      const isSelected =
        formData.date && dateString === formData.date;

      const isToday = isSameDate(date, todayDate);

      days.push(
        <button
          key={dateString}
          type="button"
          disabled={isPast}
          onClick={() => handleCalendarDateSelect(date)}
          className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition ${
            isPast
              ? "cursor-not-allowed text-zinc-700"
              : isSelected
                ? "bg-green-500 text-black"
                : isToday
                  ? "border border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  : "text-white hover:bg-zinc-800"
          }`}
        >
          {day}
        </button>
      );
    }

    return days;
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-black px-6 py-20 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-green-500/30 bg-zinc-950 p-8 text-center shadow-2xl md:p-14">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500 text-4xl text-black">
              ✓
            </div>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Booking Successful
            </p>

            <h1 className="mt-3 text-4xl font-black md:text-5xl">
              You're booked!
            </h1>

            <p className="mx-auto mt-5 max-w-xl leading-8 text-gray-300">
              Thank you, {formData.fullName}. Your booking request for{" "}
              <span className="font-bold text-white">
                {selectedOption.name}
              </span>{" "}
              has been recorded.
            </p>

            {paymentReference && (
              <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-zinc-800 bg-black p-5 text-left">
                <p className="text-sm text-gray-500">
                  Paystack payment reference
                </p>

                <p className="mt-2 break-all font-mono text-sm font-bold text-green-400">
                  {paymentReference}
                </p>
              </div>
            )}

            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-zinc-800 bg-black p-6 text-left">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="mt-1 font-bold text-white">
                    {selectedOption.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Amount</p>
                  <p className="mt-1 font-bold text-green-400">
                    {selectedPrice
                      ? formatNaira(selectedPrice)
                      : "To be confirmed"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="mt-1 font-bold text-white">
                    {formatDisplayDate(formData.date)}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="mt-1 font-bold text-white">
                    {formData.time}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-green-500/10 p-5 text-left">
              <p className="font-bold text-green-400">
                What's next?
              </p>

              <p className="mt-2 leading-7 text-gray-300">
                Please keep your booking details. The gym can use
                your contact information to confirm your visit and
                provide additional instructions if necessary.
              </p>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to="/"
                className="rounded-full bg-green-500 px-7 py-3 font-bold text-black transition hover:bg-green-400"
              >
                Back to Home
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-zinc-700 px-7 py-3 font-bold text-white transition hover:border-green-500 hover:text-green-400"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-900 bg-zinc-950 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Elle ’n’ Elle Gym Centre
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight md:text-7xl">
            Book your next{" "}
            <span className="text-green-400">
              fitness session.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Choose your membership or training option, select your
            preferred date and time, and complete your booking
            securely.
          </p>
        </div>
      </section>

      {/* MAIN BOOKING AREA */}
      <section className="px-6 py-16 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* INFORMATION PANEL */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                Your visit
              </p>

              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Everything starts with one booking.
              </h2>

              <p className="mt-5 leading-8 text-gray-300">
                Whether you're joining for a day, committing to a
                monthly membership, or looking for personal
                training, we're ready to help you get started.
              </p>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
              <img
                src="/images/gym-training.png"
                alt="Training at Elle ’n’ Elle Gym Centre"
                className="h-72 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-xl font-bold">
                  A place to train with purpose.
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Our gym environment is designed to support
                  strength, consistency, confidence, and progress.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">
              <h3 className="text-xl font-bold text-green-400">
                How booking works
              </h3>

              <div className="mt-6 space-y-6">
                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-black text-black">
                    1
                  </span>

                  <div>
                    <h4 className="font-bold">
                      Choose your service
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Select the membership or training option that
                      works for you.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-black text-black">
                    2
                  </span>

                  <div>
                    <h4 className="font-bold">
                      Pick your date and time
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Use the calendar to select a convenient date
                      and choose your preferred time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-black text-black">
                    3
                  </span>

                  <div>
                    <h4 className="font-bold">
                      Complete your booking
                    </h4>

                    <p className="mt-1 text-sm leading-6 text-gray-400">
                      Paid services continue to Paystack Test Mode
                      for payment simulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/5 p-7">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Find us
              </p>

              <h3 className="mt-2 text-2xl font-black">
                Akobo, Ibadan
              </h3>

              <p className="mt-3 leading-7 text-gray-400">
                Elle ’n’ Elle Fitness, Arts & I.T Centre
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-bold text-green-400 underline hover:text-green-300"
              >
                Open Google Maps →
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl md:p-10">
            <div className="mb-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                Booking form
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Reserve your spot
              </h2>

              <p className="mt-3 text-gray-400">
                Fill in your details below. Fields marked with *
                are required.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block font-semibold"
                >
                  Full Name *
                </label>

                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(event) =>
                    updateForm("fullName", event.target.value)
                  }
                  placeholder="Enter your full name"
                  className={`w-full rounded-2xl border bg-black px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-500 ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-zinc-800"
                  }`}
                />

                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-7 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block font-semibold"
                  >
                    Email Address *
                  </label>

                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      updateForm("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    className={`w-full rounded-2xl border bg-black px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-500 ${
                      errors.email
                        ? "border-red-500"
                        : "border-zinc-800"
                    }`}
                  />

                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-semibold"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      updateForm("phone", event.target.value)
                    }
                    placeholder="08012345678"
                    className={`w-full rounded-2xl border bg-black px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-500 ${
                      errors.phone
                        ? "border-red-500"
                        : "border-zinc-800"
                    }`}
                  />

                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block font-semibold"
                >
                  Membership / Service *
                </label>

                <select
                  id="service"
                  value={formData.service}
                  onChange={(event) =>
                    updateForm("service", event.target.value)
                  }
                  className={`w-full rounded-2xl border bg-black px-5 py-4 text-white outline-none transition focus:border-green-500 ${
                    errors.service
                      ? "border-red-500"
                      : "border-zinc-800"
                  }`}
                >
                  {bookingOptions.map((option) => (
                    <option
                      key={option.id}
                      value={option.id}
                    >
                      {option.name} —{" "}
                      {option.price
                        ? formatNaira(option.price)
                        : "Price to be confirmed"}
                    </option>
                  ))}
                </select>

                {errors.service && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.service}
                  </p>
                )}

                <div className="mt-4 rounded-2xl border border-zinc-800 bg-black p-5">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-bold text-white">
                        {selectedOption.name}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {selectedOption.description}
                      </p>
                    </div>

                    <p className="text-xl font-black text-green-400">
                      {formatNaira(selectedPrice)}
                    </p>
                  </div>
                </div>
              </div>

              {/* DATE */}
              <div
                ref={calendarRef}
                className="relative"
              >
                <label className="mb-2 block font-semibold">
                  Preferred Date *
                </label>

                <button
                  type="button"
                  onClick={() =>
                    setCalendarOpen(!calendarOpen)
                  }
                  className={`flex w-full items-center justify-between rounded-2xl border bg-black px-5 py-4 text-left outline-none transition hover:border-green-500 ${
                    errors.date
                      ? "border-red-500"
                      : "border-zinc-800"
                  }`}
                >
                  <span
                    className={
                      formData.date
                        ? "text-white"
                        : "text-gray-600"
                    }
                  >
                    {formData.date
                      ? formatDisplayDate(formData.date)
                      : "Choose a date"}
                  </span>

                  <span className="text-xl text-green-400">
                    📅
                  </span>
                </button>

                {errors.date && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.date}
                  </p>
                )}

                {calendarOpen && (
                  <div className="absolute left-0 right-0 z-30 mt-3 rounded-3xl border border-zinc-700 bg-zinc-950 p-5 shadow-2xl">
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={goToPreviousMonth}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-white transition hover:border-green-500 hover:text-green-400"
                      >
                        ←
                      </button>

                      <div className="flex gap-2">
                        <select
                          value={calendarMonth.getMonth()}
                          onChange={handleMonthChange}
                          className="rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-green-500"
                        >
                          {monthNames.map(
                            (month, index) => (
                              <option
                                key={month}
                                value={index}
                              >
                                {month}
                              </option>
                            )
                          )}
                        </select>

                        <select
                          value={calendarMonth.getFullYear()}
                          onChange={handleYearChange}
                          className="rounded-xl border border-zinc-700 bg-black px-3 py-2 text-sm text-white outline-none focus:border-green-500"
                        >
                          {years.map((year) => (
                            <option
                              key={year}
                              value={year}
                            >
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        type="button"
                        onClick={goToNextMonth}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-700 text-white transition hover:border-green-500 hover:text-green-400"
                      >
                        →
                      </button>
                    </div>

                    <div className="mt-6 grid grid-cols-7 gap-1 text-center text-xs font-bold uppercase tracking-wide text-gray-600">
                      <span>Sun</span>
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>

                    <div className="mt-3 grid grid-cols-7 gap-1">
                      {renderCalendarDays()}
                    </div>

                    <p className="mt-5 text-center text-xs text-gray-600">
                      Past dates cannot be selected.
                    </p>
                  </div>
                )}
              </div>

              {/* TIME */}
              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block font-semibold"
                >
                  Preferred Time *
                </label>

                <select
                  id="time"
                  value={formData.time}
                  onChange={(event) =>
                    updateForm("time", event.target.value)
                  }
                  className={`w-full rounded-2xl border bg-black px-5 py-4 text-white outline-none transition focus:border-green-500 ${
                    errors.time
                      ? "border-red-500"
                      : "border-zinc-800"
                  }`}
                >
                  <option value="">
                    Select a time
                  </option>

                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>

                {errors.time && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.time}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-semibold"
                >
                  Additional Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={(event) =>
                    updateForm(
                      "message",
                      event.target.value
                    )
                  }
                  placeholder="Tell us anything important about your booking..."
                  className="w-full resize-none rounded-2xl border border-zinc-800 bg-black px-5 py-4 text-white outline-none transition placeholder:text-gray-600 focus:border-green-500"
                />
              </div>

              {/* PAYMENT SUMMARY */}
              <div className="rounded-3xl border border-zinc-800 bg-black p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-500">
                      Booking total
                    </p>

                    <p className="mt-1 text-xl font-black">
                      {selectedPrice
                        ? formatNaira(selectedPrice)
                        : "Price to be confirmed"}
                    </p>
                  </div>

                  {selectedPrice > 0 && (
                    <div className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-xs font-bold text-green-400">
                      Paystack Test Mode
                    </div>
                  )}
                </div>

                {selectedPrice > 0 && (
                  <p className="mt-4 text-sm leading-6 text-gray-500">
                    This demo uses Paystack Test Mode. No real
                    payment should be made while testing with
                    your test credentials.
                  </p>
                )}
              </div>

              {/* ERROR */}
              {paymentError && (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
                  <p className="font-bold text-red-400">
                    Booking message
                  </p>

                  <p className="mt-2 text-sm leading-6 text-red-300">
                    {paymentError}
                  </p>
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isProcessingPayment}
                className="w-full rounded-2xl bg-green-500 px-6 py-5 text-lg font-black text-black transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isProcessingPayment
                  ? selectedPrice > 0
                    ? "Processing..."
                    : "Sending Booking..."
                  : selectedPrice > 0
                    ? `Continue to Payment — ${formatNaira(
                        selectedPrice
                      )}`
                    : "Submit Booking Request"}
              </button>

              <p className="text-center text-xs leading-5 text-gray-600">
                By continuing, you confirm that the information
                provided is accurate.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}