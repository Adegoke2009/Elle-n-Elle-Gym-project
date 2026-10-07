import { useState } from "react";
import { Link } from "react-router-dom";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre&output=embed";

const faqs = [
  {
    question: "How can I contact Elle ’n’ Elle Gym?",
    answer:
      "You can contact us through the contact form on this page or visit the gym in Akobo, Ibadan. You can also use the available phone, email and Google Maps options when your official contact details are added.",
  },
  {
    question: "Can I ask about membership before joining?",
    answer:
      "Yes. You can send us a message about daily, weekly, monthly or family membership options before making a booking.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. Personal training is one of the training options available at Elle ’n’ Elle Gym Centre.",
  },
  {
    question: "Do you offer group workouts?",
    answer:
      "Yes. Group workouts are available as part of the gym's training options.",
  },
  {
    question: "Where is Elle ’n’ Elle located?",
    answer:
      "Elle ’n’ Elle Gym Centre is located in Akobo, Ibadan, Oyo State, Nigeria.",
  },
  {
    question: "Can I visit the gym before booking?",
    answer:
      "Yes. You can use the Google Maps option on this page to find the gym and plan your visit.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="group relative min-h-[650px] overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0">
          <img
            src="/images/gym-training.png"
            alt="Elle 'n' Elle gym training"
            className="h-full w-full object-cover opacity-35 transition duration-[2000ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>

        {/* Decorative animated circles */}
        <div className="absolute -right-24 top-20 h-72 w-72 animate-pulse rounded-full bg-green-400/10 blur-3xl"></div>
        <div className="absolute -left-20 bottom-10 h-60 w-60 animate-pulse rounded-full bg-green-500/10 blur-3xl delay-500"></div>

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl animate-[fadeInUp_1s_ease-out]">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.4em] text-green-400">
              Contact Elle ’n’ Elle
            </p>

            <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl md:text-8xl">
              Let's Talk About Your{" "}
              <span className="text-green-400">Fitness Goals.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Have questions about membership, personal training, group workouts
              or visiting the gym? Reach out and let's get you moving in the
              right direction.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact-form"
                className="group/button rounded-xl bg-green-400 px-8 py-4 text-center font-bold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-green-300 hover:shadow-[0_15px_40px_rgba(74,222,128,0.25)]"
              >
                Send Us a Message
                <span className="ml-2 inline-block transition-transform duration-300 group-hover/button:translate-x-2">
                  →
                </span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/30 px-8 py-4 text-center font-bold transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Find Our Gym
              </a>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-widest text-gray-400">
            <span>Explore</span>
            <span className="text-lg text-green-400">↓</span>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-[fadeInUp_1s_ease-out]">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              We're Here For You
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              More Than Just A Place To Work Out.
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              At Elle ’n’ Elle Gym Centre, fitness is about more than completing
              a workout. It's about discipline, consistency, confidence and
              creating habits that help you become stronger over time.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you're completely new to the gym, returning to training or
              looking for a more structured fitness routine, we're here to help
              you understand your options.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              From memberships and personal training to group workouts, you can
              contact us before getting started and ask the questions that
              matter to you.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-green-400/30 bg-green-400/5 px-5 py-2 text-sm text-green-400">
                Fitness
              </span>

              <span className="rounded-full border border-green-400/30 bg-green-400/5 px-5 py-2 text-sm text-green-400">
                Training
              </span>

              <span className="rounded-full border border-green-400/30 bg-green-400/5 px-5 py-2 text-sm text-green-400">
                Community
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-800">
            <img
              src="/images/gym-team.png"
              alt="Elle 'n' Elle gym team"
              className="h-[500px] w-full object-cover transition duration-1000 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 transition duration-500 group-hover:-translate-y-2">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Community
              </p>

              <h3 className="mt-2 text-3xl font-bold">
                Train Around People Who Keep Moving.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Get In Touch
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Contact Information
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Choose the easiest way to connect with us or visit the gym
              directly.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Location */}
            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition-all duration-500 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(74,222,128,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-2xl text-black transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                📍
              </div>

              <h3 className="mt-6 text-xl font-bold">Our Location</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Akobo, Ibadan,
                <br />
                Oyo State, Nigeria
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-semibold text-green-400 transition hover:translate-x-2"
              >
                Get Directions →
              </a>
            </div>

            {/* Phone */}
            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition-all duration-500 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(74,222,128,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-2xl text-black transition duration-500 group-hover:-rotate-6 group-hover:scale-110">
                📞
              </div>

              <h3 className="mt-6 text-xl font-bold">Call Us</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Have an urgent question?
                <br />
                Speak directly with us.
              </p>

              <a
                href="tel:+2340000000000"
                className="mt-6 inline-block font-semibold text-green-400 transition hover:translate-x-2"
              >
                +234 000 000 0000
              </a>
            </div>

            {/* Email */}
            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition-all duration-500 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(74,222,128,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-2xl text-black transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                ✉️
              </div>

              <h3 className="mt-6 text-xl font-bold">Email Us</h3>

              <p className="mt-3 leading-7 text-gray-400">
                Send us your questions,
                <br />
                enquiries or feedback.
              </p>

              <a
                href="mailto:info@ellenellegym.com"
                className="mt-6 inline-block break-all font-semibold text-green-400 transition hover:translate-x-2"
              >
                info@ellenellegym.com
              </a>
            </div>

            {/* Hours */}
            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition-all duration-500 hover:-translate-y-3 hover:border-green-400 hover:shadow-[0_20px_50px_rgba(74,222,128,0.08)]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400 text-2xl text-black transition duration-500 group-hover:-rotate-6 group-hover:scale-110">
                🕒
              </div>

              <h3 className="mt-6 text-xl font-bold">Opening Hours</h3>

              <div className="mt-3 space-y-1 text-sm leading-7 text-gray-400">
                <p>Mon – Fri: 6:00 AM – 10:00 PM</p>
                <p>Saturday: 7:00 AM – 9:00 PM</p>
                <p>Sunday: 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          LARGE IMAGE SHOWCASE
      ====================================================== */}
      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Inside Elle ’n’ Elle
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            A Place Built For Movement.
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Get a glimpse of the training environment and the energy that makes
            every workout an opportunity to improve.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Large image */}
          <div className="group relative overflow-hidden rounded-[2rem] lg:col-span-7">
            <img
              src="/images/gym-training.png"
              alt="Gym training"
              className="h-[560px] w-full object-cover transition duration-[1200ms] group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0 p-8 transition duration-500 group-hover:-translate-y-3">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Training
              </p>

              <h3 className="mt-2 text-3xl font-black md:text-4xl">
                Train With Purpose.
              </h3>
            </div>
          </div>

          {/* Small images */}
          <div className="grid gap-6 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/group-training.png"
                alt="Group training"
                className="h-[270px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-7">
                <h3 className="text-2xl font-bold">Group Training</h3>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem]">
              <img
                src="/images/workout-poster.png"
                alt="Workout poster"
                className="h-[270px] w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-7">
                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Fitness
                </p>

                <h3 className="mt-2 text-2xl font-bold">Keep Moving.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    ANIMATED MOVING IMAGE STRIP
====================================================== */}
      <section className="overflow-hidden border-y border-zinc-800 bg-zinc-950 py-5">
        <div className="relative overflow-hidden">
          <div className="flex w-max animate-gym-gallery">
            {[
              "/images/gym-training.png",
              "/images/gym-team.png",
              "/images/group-training.png",
              "/images/workout-poster.png",
              "/images/gym-training.png",
              "/images/gym-team.png",
              "/images/group-training.png",
              "/images/workout-poster.png",
            ].map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="group relative h-40 w-64 shrink-0 overflow-hidden border-r border-zinc-900 sm:h-44 sm:w-72 md:h-48 md:w-80"
              >
                <img
                  src={image}
                  alt={`Elle 'n' Elle fitness ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/0"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =====================================================
          HOW CAN WE HELP?
      ====================================================== */}
      <section className="bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              How Can We Help?
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Whatever Your Goal, Let's Talk.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Not sure which membership or training option is right for you?
              Send us a message and ask anything you need to know before getting
              started.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "💪",
                title: "Membership",
                text: "Ask about daily, weekly, monthly and family membership options.",
              },
              {
                icon: "🏋️",
                title: "Personal Training",
                text: "Learn more about one-on-one training and personalized fitness guidance.",
              },
              {
                icon: "👥",
                title: "Group Workouts",
                text: "Find out how group training can become part of your routine.",
              },
              {
                icon: "❓",
                title: "General Questions",
                text: "Have another question? Send us a message and we'll help.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-zinc-800 bg-black p-8 transition-all duration-500 hover:-translate-y-4 hover:border-green-400 hover:bg-zinc-900"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <span className="text-4xl transition duration-500 group-hover:scale-125">
                  {item.icon}
                </span>

                <h3 className="mt-6 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 leading-7 text-gray-400">{item.text}</p>

                <div className="mt-6 h-1 w-0 rounded-full bg-green-400 transition-all duration-500 group-hover:w-12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT FORM
      ====================================================== */}
      <section
        id="contact-form"
        className="relative mx-auto max-w-7xl px-6 py-28"
      >
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Send A Message
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Tell Us How We Can Help.
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              Fill out the form and provide the information we need to
              understand your enquiry. Whether you are interested in membership,
              personal training, group workouts or something else, we're ready
              to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Get information about membership plans",
                "Ask about training programs",
                "Learn about personal training",
                "Get directions to the gym",
                "Send feedback or general enquiries",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center gap-4 transition duration-300 hover:translate-x-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-400 text-sm font-bold text-black transition duration-300 group-hover:scale-110">
                    ✓
                  </span>

                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="group mt-10 overflow-hidden rounded-3xl border border-zinc-800">
              <img
                src="/images/group-training.png"
                alt="Group workout"
                className="h-72 w-full object-cover transition duration-1000 group-hover:scale-110"
              />

              <div className="border-t border-zinc-800 bg-zinc-950 p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Let's Connect
                </p>

                <p className="mt-2 text-gray-400">
                  Have something on your mind? Start the conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950 p-7 shadow-2xl md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234..."
                    className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-zinc-700 bg-black px-4 py-4 text-white outline-none transition-all duration-300 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                >
                  <option value="">Select an option</option>
                  <option value="membership">Membership</option>
                  <option value="personal-training">Personal Training</option>
                  <option value="group-training">Group Training</option>
                  <option value="general-enquiry">General Enquiry</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help..."
                  rows="7"
                  required
                  className="w-full resize-none rounded-xl border border-zinc-700 bg-black px-4 py-4 text-white outline-none transition-all duration-300 placeholder:text-zinc-600 focus:border-green-400 focus:ring-2 focus:ring-green-400/10"
                ></textarea>
              </div>

              {submitted && (
                <div className="animate-[fadeInUp_0.5s_ease-out] rounded-xl border border-green-400/30 bg-green-400/10 p-5 text-green-400">
                  <p className="font-bold">✓ Message received successfully.</p>

                  <p className="mt-1 text-sm text-green-300/80">
                    Thank you for contacting Elle ’n’ Elle Gym Centre.
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="group w-full rounded-xl bg-green-400 px-6 py-4 font-bold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-green-300 hover:shadow-[0_15px_40px_rgba(74,222,128,0.2)]"
              >
                Send Message
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================
          VISIT US / MAP
      ====================================================== */}
      <section className="border-y border-zinc-800 bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
                Visit Us
              </p>

              <h2 className="mt-4 text-4xl font-black md:text-6xl">
                Come Train With Us.
              </h2>

              <p className="mt-6 leading-8 text-gray-400">
                Ready to see the gym for yourself? Find us in Akobo, Ibadan and
                take the next step toward your fitness goals.
              </p>

              <div className="mt-8 space-y-6">
                <div className="group transition duration-300 hover:translate-x-2">
                  <h3 className="font-bold">📍 Address</h3>

                  <p className="mt-1 text-gray-400">
                    Akobo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>

                <div className="group transition duration-300 hover:translate-x-2">
                  <h3 className="font-bold">🕒 Opening Hours</h3>

                  <p className="mt-1 text-gray-400">
                    Monday – Friday: 6:00 AM – 10:00 PM
                  </p>

                  <p className="text-gray-400">Saturday: 7:00 AM – 9:00 PM</p>

                  <p className="text-gray-400">Sunday: 8:00 AM – 6:00 PM</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-block rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition-all duration-500 hover:-translate-y-1 hover:bg-green-300 hover:shadow-[0_15px_40px_rgba(74,222,128,0.2)]"
              >
                Open Google Maps →
              </a>
            </div>

            <div className="group relative overflow-hidden rounded-[2rem] border border-zinc-800">
              <iframe
                title="Elle 'n' Elle Gym Location"
                src={mapEmbedUrl}
                className="h-[500px] w-full transition duration-700 group-hover:scale-[1.02]"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section className="mx-auto max-w-5xl px-6 py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-6xl">
            Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Here are some common questions you may have before contacting or
            visiting Elle ’n’ Elle Gym Centre.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-green-400/50 bg-zinc-950"
                    : "border-zinc-800 bg-black"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left transition hover:bg-zinc-950 md:px-8"
                >
                  <span className="text-lg font-bold">{faq.question}</span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-400 text-xl text-black transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-7 leading-8 text-gray-400 md:px-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="group relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0">
          <img
            src="/images/workout-poster.png"
            alt=""
            className="h-full w-full object-cover opacity-25 transition duration-[1500ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-400/10 blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Your Next Step
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-7xl">
            Ready To Start Your Fitness Journey?
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300">
            Don't wait for the perfect time. Take the first step, visit Elle ’n’
            Elle and start working towards becoming stronger, healthier and more
            consistent.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="group/button rounded-xl bg-green-400 px-9 py-4 font-bold text-black transition-all duration-500 hover:-translate-y-2 hover:bg-green-300 hover:shadow-[0_20px_50px_rgba(74,222,128,0.25)]"
            >
              Book A Session
              <span className="ml-2 inline-block transition-transform duration-300 group-hover/button:translate-x-2">
                →
              </span>
            </Link>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/30 px-9 py-4 font-bold transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:text-black"
            >
              Visit Our Gym
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
