import { useState } from "react";
import { Link } from "react-router-dom";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form:", formData);

    alert("Thank you! Your message has been received.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-black to-black" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.3em] text-green-400">
              Contact Us
            </p>

            <h1 className="mt-5 text-5xl font-extrabold leading-tight md:text-7xl">
              Let's talk about
              <span className="block text-green-400">
                your fitness journey.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Have a question about our gym, membership plans, training
              services, or booking? Get in touch with the Elle ’n’ Elle team.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT INFORMATION
      ================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Location */}
            <div className="rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500">
              <div className="text-4xl">📍</div>

              <h2 className="mt-5 text-xl font-bold">Our Location</h2>

              <p className="mt-3 leading-7 text-zinc-400">
                Akobo, Ibadan,
                <br />
                Oyo State, Nigeria
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-bold text-green-400 hover:text-green-300"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500">
              <div className="text-4xl">📞</div>

              <h2 className="mt-5 text-xl font-bold">Phone</h2>

              <p className="mt-3 leading-7 text-zinc-400">
                Speak directly with our team for enquiries and bookings.
              </p>

              <a
                href="tel:+2340000000000"
                className="mt-5 inline-block font-bold text-green-400 hover:text-green-300"
              >
                Call Us →
              </a>
            </div>

            {/* Email */}
            <div className="rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500">
              <div className="text-4xl">✉️</div>

              <h2 className="mt-5 text-xl font-bold">Email</h2>

              <p className="mt-3 leading-7 text-zinc-400">
                Send us your questions and we'll get back to you.
              </p>

              <a
                href="mailto:info@ellenellegym.com"
                className="mt-5 inline-block font-bold text-green-400 hover:text-green-300"
              >
                Send Email →
              </a>
            </div>

            {/* Opening Hours */}
            <div className="rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:-translate-y-1 hover:border-green-500">
              <div className="text-4xl">🕐</div>

              <h2 className="mt-5 text-xl font-bold">Opening Hours</h2>

              <div className="mt-3 space-y-2 text-sm leading-6 text-zinc-400">
                <p>Mon – Fri: 6:00 AM – 10:00 PM</p>
                <p>Saturday: 7:00 AM – 9:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT FORM
      ================================================== */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
            {/* Left Content */}
            <div>
              <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                Send Us A Message
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Have something to ask?
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
                Whether you want to know more about membership, personal
                training, group workouts, or visiting the gym, send us a message
                and we'll be happy to help.
              </p>

              <div className="mt-10 rounded-3xl border border-green-500/30 bg-green-500/5 p-7">
                <p className="text-xl font-bold">Ready to start training?</p>

                <p className="mt-3 leading-7 text-zinc-400">
                  Skip the questions and go straight to booking your next
                  training session.
                </p>

                <Link
                  to="/booking"
                  className="mt-6 inline-block rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400"
                >
                  Book a Visit →
                </Link>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7 md:p-9"
            >
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-2 block font-semibold">
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-2 block font-semibold">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-500"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-500"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="mb-2 block font-semibold">
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your message about?"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-500"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block font-semibold">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows="6"
                  required
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-500"
                />
              </div>

              <button
                type="submit"
                className="mt-7 w-full rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400"
              >
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ==================================================
          GOOGLE MAPS
      ================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="mb-10">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Find Us
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Visit Elle ’n’ Elle Gym Centre
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              We're located in Akobo, Ibadan. Use the map below to find our
              location and plan your visit.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3202217275425!2d3.9397762000000003!3d7.429771799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed2f725bf14d%3A0x982a16f72364e15b!2sElle'n'Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre!5e0!3m2!1sen!2sng!4v1789040979220!5m2!1sen!2sng"
              title="Elle ’n’ Elle Gym Centre location"
              className="h-[400px] w-full md:h-[500px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block rounded-full border border-green-500 px-7 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-black"
          >
            Open Google Maps →
          </a>
        </div>
      </section>

      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="bg-green-500">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-black">
            Your Fitness Journey
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
            Ready to take the next step?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black">
            Explore our services and choose the training option that works best
            for you.
          </p>

          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-900"
          >
            Book Your Visit →
          </Link>
        </div>
      </section>
    </main>
  );
}
