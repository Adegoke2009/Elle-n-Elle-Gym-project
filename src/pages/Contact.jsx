import { useState } from "react";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="border-b border-zinc-800 bg-zinc-950 px-6 py-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-400">
            Contact Us
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Let's talk about your{" "}
            <span className="text-green-400">fitness journey.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Have a question about our membership plans, training sessions, or
            gym facilities? Send us a message and the Elle ’n’ Elle team will be
            ready to help.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="font-semibold uppercase tracking-[0.2em] text-green-400">
              Get in touch
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              We're here to help.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-gray-400">
              Whether you're visiting us for the first time or you're already
              part of our fitness community, feel free to reach out. We can help
              you learn more about our services, membership options and training
              programs.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-10 space-y-6">
              {/* LOCATION */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-xl text-black">
                    📍
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Our Location</h3>

                    <p className="mt-2 leading-7 text-gray-400">
                      Akobo, Ibadan,
                      <br />
                      Oyo State, Nigeria
                    </p>

                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block font-semibold text-green-400 transition hover:text-green-300"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-xl text-black">
                    📞
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Phone</h3>

                    <p className="mt-2 text-gray-400">
                      Have a quick question? Give us a call.
                    </p>

                    <a
                      href="tel:+2340000000000"
                      className="mt-3 inline-block font-semibold text-green-400 transition hover:text-green-300"
                    >
                      +234 000 000 0000
                    </a>
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-500 text-xl text-black">
                    ✉️
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Email</h3>

                    <p className="mt-2 text-gray-400">
                      Send us an email for enquiries and questions.
                    </p>

                    <a
                      href="mailto:info@elleandellegym.com"
                      className="mt-3 inline-block break-all font-semibold text-green-400 transition hover:text-green-300"
                    >
                      info@elleandellegym.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 md:p-8">
            <div>
              <p className="font-semibold uppercase tracking-[0.2em] text-green-400">
                Send a message
              </p>

              <h2 className="mt-3 text-3xl font-bold">How can we help?</h2>

              <p className="mt-3 leading-7 text-gray-400">
                Fill in the form below and we'll receive your enquiry.
              </p>
            </div>

            {submitted && (
              <div className="mt-6 rounded-2xl border border-green-500/30 bg-green-500/10 p-4">
                <p className="font-semibold text-green-400">
                  Message submitted successfully! ✅
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  Thank you for contacting Elle ’n’ Elle Gym Centre.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* NAME */}
              <div>
                <label htmlFor="fullName" className="mb-2 block font-semibold">
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-6 md:grid-cols-2">
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
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-semibold">
                    Phone Numbere
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                  />
                </div>
              </div>

              {/* SUBJECT */}
              <div>
                <label htmlFor="subject" className="mb-2 block font-semibold">
                  What can we help you with?
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition focus:border-green-400"
                >
                  <option value="">Select an option</option>
                  <option value="Membership">Membership</option>
                  <option value="Personal Training">Personal Training</option>
                  <option value="Group Training">Group Training</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
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
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-green-400"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-xl bg-green-500 px-6 py-4 font-bold text-black transition hover:bg-green-400 active:scale-[0.99]"
              >
                Send Message →
              </button>

              <p className="text-center text-sm text-gray-500">
                We'll get back to you as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* GYM IMAGE */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <img
              src="/images/gym-team.png"
              alt="Elle ’n’ Elle Gym Centre team"
              className="h-[300px] w-full object-cover md:h-[450px]"
            />
          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section className="px-6 pb-20 md:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="font-semibold uppercase tracking-[0.2em] text-green-400">
              Find Us
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Visit Elle ’n’ Elle Gym Centre
            </h2>

            <p className="mt-3 text-gray-400">
              Find our gym in Akobo, Ibadan using the map below.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3202217275425!2d3.9397762000000003!3d7.429771799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed2f725bf14d%3A0x982a16f72364e15b!2sElle'n'Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre!5e0!3m2!1sen!2sng!4v1789040979220!5m2!1sen!2sng"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Elle ’n’ Elle Fitness, Arts & I.T Centre location"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-green-500 px-7 py-3 font-bold text-black transition hover:bg-green-400"
            >
              Open Location in Google Maps →
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-zinc-800 bg-zinc-950 px-6 py-20 text-center md:px-16">
        <div className="mx-auto max-w-3xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-green-400">
            Ready to get started?
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Your fitness journey starts with one step.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Visit Elle ’n’ Elle Gym Centre and become part of a community
            focused on strength, confidence and progress.
          </p>
        </div>
      </section>
    </main>
  );
}
