import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

/* =========================================================
   SCROLL TO TOP
========================================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const root = document.getElementById("root");

    if (root) {
      root.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className="group fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-green-400 text-black shadow-lg shadow-green-400/20 transition-all duration-300 hover:-translate-y-2 hover:scale-110 hover:bg-green-300 sm:bottom-8 sm:right-8 sm:h-14 sm:w-14"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="h-6 w-6 transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question: "What membership plans do you offer?",
    answer:
      "We offer Daily, Weekly, Monthly and Family membership options. You can also book Personal Training sessions if you prefer more focused one-on-one training.",
  },
  {
    question: "How much does gym membership cost?",
    answer:
      "Our current membership options are Daily – ₦3,500, Weekly – ₦17,000, Monthly – ₦30,000 and Family Package – ₦30,000. Personal Training is ₦5,000.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. Personal Training is available for members who want more focused guidance, structured workouts and individual attention during their training sessions.",
  },
  {
    question: "Can beginners join the gym?",
    answer:
      "Yes. You don't need to be an experienced gym user before joining. Our gym environment is designed for people at different stages of their fitness journey.",
  },
  {
    question: "Do you offer group workouts?",
    answer:
      "Yes. Group workouts are part of the training experience at Elle ’n’ Elle. They provide an opportunity to train alongside other members while staying motivated and consistent.",
  },
  {
    question: "Where is Elle ’n’ Elle Gym located?",
    answer:
      "We are located in Akobo, Ibadan, Oyo State, Nigeria. You can use the Google Maps link on our Contact page to get directions.",
  },
  {
    question: "What time does the gym open?",
    answer:
      "We are open Monday to Friday from 6:00 AM to 10:00 PM, Saturday from 7:00 AM to 9:00 PM and Sunday from 8:00 AM to 6:00 PM.",
  },
  {
    question: "How do I book a training session?",
    answer:
      "You can use the Booking page on this website to select the service you want, provide your information and submit your booking.",
  },
];

/* =========================================================
   FAQ COMPONENT
========================================================= */

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-zinc-950 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Got Questions?
            <span className="block text-green-400">We've Got Answers.</span>
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            Here are some of the most common questions people ask before joining
            Elle ’n’ Elle Gym Centre.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                  isOpen
                    ? "border-green-400 bg-black"
                    : "border-zinc-800 bg-black hover:border-zinc-600"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left md:px-8"
                >
                  <span className="text-lg font-bold md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-green-400 text-black"
                        : "bg-zinc-800 text-white"
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

        <div className="mt-12 text-center">
          <p className="text-gray-400">Still have a question?</p>

          <Link
            to="/contact"
            className="mt-4 inline-block font-bold text-green-400 transition hover:text-green-300"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   HOME PAGE
========================================================= */

function Home() {
  const feedbacks = [
    {
      name: "Gym Member",
      text: "The environment makes it easier to stay consistent with training.",
    },
    {
      name: "Gym Member",
      text: "I enjoy the energy and the people around me during workouts.",
    },
    {
      name: "Gym Member",
      text: "It is a great place to focus on fitness and personal progress.",
    },
    {
      name: "Gym Member",
      text: "The gym gives me the motivation to keep showing up.",
    },
    {
      name: "Gym Member",
      text: "I like the training environment and the sense of community.",
    },
    {
      name: "Gym Member",
      text: "Every session gives me another reason to keep improving.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[750px] overflow-hidden">
        <img
          src="/images/gym-training.png"
          alt="Elle 'n' Elle gym training"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

        <div className="relative mx-auto flex min-h-[750px] max-w-7xl items-center px-6 py-24">
          <div className="max-w-4xl animate-[fadeIn_1s_ease-out]">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-green-400"></span>

              <p className="text-sm font-bold uppercase tracking-[0.35em] text-green-400">
                Elle ’n’ Elle Gym Centre
              </p>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] sm:text-6xl md:text-8xl">
              Train Hard.
              <br />
              Live Strong.
              <br />
              <span className="text-green-400">Become Unstoppable.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Build strength. Improve your fitness. Develop discipline. Become
              part of a community focused on progress and consistency.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="rounded-xl bg-green-400 px-8 py-4 text-center font-bold text-black shadow-lg shadow-green-400/10 transition duration-300 hover:-translate-y-1 hover:bg-green-300"
              >
                Book Your Session →
              </Link>

              <Link
                to="/services"
                className="rounded-xl border border-white/30 px-8 py-4 text-center font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating bottom information */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/40 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
            <div className="p-6 text-center">
              <p className="text-2xl font-black text-green-400">6AM</p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                Weekday Opening
              </p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-black text-green-400">7 Days</p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                Open Weekly
              </p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-black text-green-400">Akobo</p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                Ibadan
              </p>
            </div>

            <div className="p-6 text-center">
              <p className="text-2xl font-black text-green-400">10PM</p>

              <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
                Weekday Closing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              More Than A Gym
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Your Environment
              <span className="block text-green-400">Matters.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              Elle ’n’ Elle Gym Centre is designed to give people a place where
              they can focus on their fitness, build discipline and develop
              better training habits.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Whether you're taking your first steps into fitness or you're
              already familiar with training, the goal is simple: show up, put
              in the work and keep progressing.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="font-bold text-green-400 transition hover:text-green-300"
              >
                Learn More About Us →
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-green-400/10 blur-3xl"></div>

            <img
              src="/images/gym-team.png"
              alt="Elle 'n' Elle gym team"
              className="relative h-[500px] w-full rounded-[2rem] object-cover shadow-2xl transition duration-700 hover:scale-[1.02]"
            />

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/80 p-6 backdrop-blur-md">
              <p className="text-3xl font-black text-green-400">Progress</p>

              <p className="mt-1 text-sm text-gray-300">
                One workout at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE STRIP
      ====================================================== */}

      <section className="relative overflow-hidden border-y border-zinc-800 bg-zinc-950">
        <div className="grid md:grid-cols-3">
          <div className="group relative h-[400px] overflow-hidden">
            <img
              src="/images/gym-training.png"
              alt="Strength training"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20"></div>

            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Strength
              </p>

              <h3 className="mt-2 text-3xl font-black">Build Strength</h3>
            </div>
          </div>

          <div className="group relative h-[400px] overflow-hidden">
            <img
              src="/images/group-training.png"
              alt="Group training"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20"></div>

            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Community
              </p>

              <h3 className="mt-2 text-3xl font-black">Train Together</h3>
            </div>
          </div>

          <div className="group relative h-[400px] overflow-hidden">
            <img
              src="/images/workout-poster.png"
              alt="Gym workout"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/20"></div>

            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                Fitness
              </p>

              <h3 className="mt-2 text-3xl font-black">Keep Moving</h3>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              About Elle ’n’ Elle
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              A Fitness Community
              <span className="block text-green-400">Built For Progress.</span>
            </h2>

            <p className="mt-7 leading-8 text-gray-400">
              Located in Akobo, Ibadan, Elle ’n’ Elle provides a training
              environment where members can focus on becoming stronger,
              healthier and more consistent.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition duration-500 hover:-translate-y-2 hover:border-green-400">
              <span className="text-5xl font-black text-green-400">01</span>

              <h3 className="mt-7 text-2xl font-bold">Train</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Create a training routine that works for your goals and commit
                yourself to showing up.
              </p>
            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition duration-500 hover:-translate-y-2 hover:border-green-400">
              <span className="text-5xl font-black text-green-400">02</span>

              <h3 className="mt-7 text-2xl font-bold">Improve</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Focus on building better habits and improving your training over
                time.
              </p>
            </div>

            <div className="group rounded-3xl border border-zinc-800 bg-black p-8 transition duration-500 hover:-translate-y-2 hover:border-green-400">
              <span className="text-5xl font-black text-green-400">03</span>

              <h3 className="mt-7 text-2xl font-bold">Progress</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Keep challenging yourself and work towards your personal fitness
                goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              What We Offer
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Train Your Way.
            </h2>
          </div>

          <Link
            to="/services"
            className="font-bold text-green-400 hover:text-green-300"
          >
            View All Services →
          </Link>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-hidden">
              <img
                src="/images/gym-training.png"
                alt="Strength training"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <p className="text-sm font-bold text-green-400">01</p>

              <h3 className="mt-3 text-2xl font-bold">Strength Training</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Build strength and develop a consistent approach to your
                workouts.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-hidden">
              <img
                src="/images/group-training.png"
                alt="Personal training"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <p className="text-sm font-bold text-green-400">02</p>

              <h3 className="mt-3 text-2xl font-bold">Personal Training</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Get focused training support designed around your individual
                needs.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
            <div className="overflow-hidden">
              <img
                src="/images/workout-poster.png"
                alt="Group workout"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="p-8">
              <p className="text-sm font-bold text-green-400">03</p>

              <h3 className="mt-3 text-2xl font-bold">Group Workouts</h3>

              <p className="mt-4 leading-7 text-gray-400">
                Train with others and enjoy an environment that encourages
                consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINING EXPERIENCE
      ====================================================== */}

      <section className="relative overflow-hidden bg-zinc-950 py-28">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-green-400/5 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Training Experience
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Show Up.
              <span className="block text-green-400">Put In The Work.</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Build Strength",
                "Develop physical strength through consistent training.",
              ],
              [
                "Stay Energized",
                "Create an active routine that keeps you moving.",
              ],
              ["Set Goals", "Give your workouts direction and purpose."],
              [
                "Stay Consistent",
                "Keep showing up and build long-term habits.",
              ],
            ].map(([title, text], index) => (
              <div
                key={title}
                className="group rounded-3xl border border-zinc-800 bg-black p-8 transition duration-500 hover:-translate-y-3 hover:border-green-400"
              >
                <span className="text-sm font-bold text-green-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-2xl font-bold">{title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Getting Started
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Your Journey Starts Here.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            [
              "Choose Your Plan",
              "Select the membership or training option that fits your needs.",
            ],
            [
              "Book Your Visit",
              "Complete your booking and choose when you want to train.",
            ],
            [
              "Start Training",
              "Show up, put in the work and keep progressing.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="relative rounded-3xl border border-zinc-800 bg-zinc-950 p-9"
            >
              <span className="text-6xl font-black text-green-400/20">
                0{index + 1}
              </span>

              <h3 className="mt-2 text-2xl font-bold">{title}</h3>

              <p className="mt-4 leading-7 text-gray-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          IMAGE FEATURE SECTION
      ====================================================== */}

      <section className="bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="group relative overflow-hidden rounded-3xl lg:col-span-7">
              <img
                src="/images/gym-training.png"
                alt="Training at Elle 'n' Elle"
                className="h-[550px] w-full object-cover transition duration-1000 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-9">
                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Train Hard
                </p>

                <h3 className="mt-3 text-4xl font-black">
                  Every Session Counts.
                </h3>
              </div>
            </div>

            <div className="grid gap-8 lg:col-span-5">
              <div className="group relative overflow-hidden rounded-3xl">
                <img
                  src="/images/gym-team.png"
                  alt="Gym community"
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-0 left-0 p-7">
                  <h3 className="text-2xl font-bold">Stronger Together</h3>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-3xl">
                <img
                  src="/images/workout-poster.png"
                  alt="Fitness workout"
                  className="h-[260px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/30"></div>

                <div className="absolute bottom-0 left-0 p-7">
                  <h3 className="text-2xl font-bold">Keep Moving Forward</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CHOOSE US
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Why Elle ’n’ Elle
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Built Around
              <span className="block text-green-400">Your Progress.</span>
            </h2>

            <div className="mt-10 space-y-7">
              <div>
                <h3 className="text-xl font-bold">Quality Training</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  A training environment designed to help members stay focused
                  and consistent.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Supportive Community</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Train alongside people who are also working towards their own
                  goals.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold">Focus On Progress</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Keep challenging yourself and develop better training habits
                  over time.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/group-training.png"
              alt="Group training"
              className="h-[600px] w-full rounded-[2rem] object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/80 p-7 backdrop-blur-md">
              <p className="text-2xl font-black">Consistency</p>

              <p className="mt-2 text-gray-400">
                The goal is not to be perfect. The goal is to keep moving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MEMBER FEEDBACK
      ====================================================== */}

      <section className="overflow-hidden border-y border-zinc-800 bg-zinc-950 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
              Member Feedback
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              The Community
              <span className="block text-green-400">Keeps Moving.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
              Training becomes easier to stay committed to when you're
              surrounded by an environment that encourages consistency.
            </p>
          </div>
        </div>

        {/* ROW ONE - MOVES LEFT */}

        <div className="mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee gap-6">
            {[...feedbacks, ...feedbacks].map((feedback, index) => (
              <div
                key={`row1-${index}`}
                className="w-[330px] rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:border-green-400"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-400 font-black text-black">
                    ★
                  </div>

                  <div>
                    <h3 className="font-bold">{feedback.name}</h3>

                    <p className="text-sm text-green-400">Gym Member</p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  "{feedback.text}"
                </p>

                <div className="mt-5 tracking-widest text-green-400">★★★★★</div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW TWO - MOVES RIGHT */}

        <div className="mt-6 overflow-hidden">
          <div className="flex w-max animate-marquee-reverse gap-6">
            {[...feedbacks, ...feedbacks].map((feedback, index) => (
              <div
                key={`row2-${index}`}
                className="w-[330px] rounded-3xl border border-zinc-800 bg-black p-7 transition duration-300 hover:border-green-400"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-400 text-green-400">
                    ★
                  </div>

                  <div>
                    <h3 className="font-bold">{feedback.name}</h3>

                    <p className="text-sm text-gray-500">Member Experience</p>
                  </div>
                </div>

                <p className="mt-6 leading-7 text-gray-400">
                  "{feedback.text}"
                </p>

                <div className="mt-5 tracking-widest text-green-400">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <FAQ />

      {/* =====================================================
          LOCATION
      ====================================================== */}

      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img
            src="/images/Logo.jfif"
            alt=""
            className="h-full w-full object-cover opacity-10"
          />

          <div className="absolute inset-0 bg-black/90"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
                Visit Our Gym
              </p>

              <h2 className="mt-5 text-4xl font-black md:text-6xl">
                Find Us In
                <span className="block text-green-400">Akobo.</span>
              </h2>

              <p className="mt-7 leading-8 text-gray-400">
                Ready to see the gym for yourself? Come visit Elle ’n’ Elle in
                Akobo, Ibadan and take the next step in your fitness journey.
              </p>

              <div className="mt-8 space-y-3 text-gray-300">
                <p>📍 Akobo, Ibadan, Oyo State, Nigeria</p>

                <p>🕒 Monday – Friday: 7:00 AM – 7:00 PM</p>

                <p>🕒 Saturday: 8:00 AM – 7:00 PM</p>

                <p>🕒 Sunday: 8:00 AM – 6:00 PM</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-xl bg-green-400 px-8 py-4 font-bold text-black transition hover:-translate-y-1 hover:bg-green-300"
              >
                Open Google Maps →
              </a>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-800">
              <iframe
                title="Elle 'n' Elle Gym Location"
                src="https://www.google.com/maps?q=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre&output=embed"
                className="h-[450px] w-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative overflow-hidden border-t border-zinc-800">
        <div className="absolute inset-0">
          <img
            src="/images/gym-training.png"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-black/85"></div>
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-32 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-400">
            Your Next Step
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Ready To
            <span className="block text-green-400">Start Training?</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-gray-300">
            Don't wait for the perfect moment. Take the first step, choose your
            plan and start working towards your fitness goals.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="rounded-xl bg-green-400 px-9 py-4 font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-green-300"
            >
              Book A Session →
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border border-white/30 px-9 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   APP
========================================================= */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <ScrollToTopButton />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/booking" element={<Booking />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
