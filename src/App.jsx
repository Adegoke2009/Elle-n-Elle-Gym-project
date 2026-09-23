import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import Booking from "./pages/Booking";
import About from "./pages/About";

// ==================================================
// HOME PAGE
// ==================================================
function Home() {
  const feedbacks = [
    {
      text: "A supportive environment that keeps you motivated to stay consistent.",
      author: "Gym Member",
    },
    {
      text: "A great place to focus on training and personal progress.",
      author: "Gym Member",
    },
    {
      text: "The atmosphere makes every workout feel more purposeful.",
      author: "Gym Member",
    },
    {
      text: "A fitness community built around consistency and progress.",
      author: "Gym Member",
    },
    {
      text: "A good place to stay active, train and keep improving.",
      author: "Gym Member",
    },
  ];

  return (
    <main className="overflow-hidden bg-black text-white">

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">

        <img
          src="/images/gym-training.png"
          alt="People training at Elle ’n’ Elle Gym Centre"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 md:px-16">

          <div className="max-w-3xl">

            <p className="mb-5 font-bold uppercase tracking-[0.3em] text-green-400">
              Elle ’n’ Elle Gym Centre
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Train Hard.
              <br />
              Live Strong.
              <br />

              <span className="text-green-400">
                Become Unstoppable.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white md:text-xl">
              Build strength, improve your fitness, boost your confidence,
              and become part of a supportive fitness community in
              Akobo, Ibadan.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/booking"
                className="rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400"
              >
                Join the Gym →
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-white px-7 py-4 font-bold text-white transition hover:border-green-400 hover:text-green-400"
              >
                Explore Services
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* ==================================================
          MORE THAN A GYM
      ================================================== */}
      <section className="border-b border-zinc-800 bg-zinc-950">

        <div className="mx-auto max-w-7xl px-6 py-20 md:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                More Than A Gym
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Your strength is built here.
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-white">
                At Elle ’n’ Elle Gym Centre, fitness is more than lifting
                weights. It is about discipline, consistency, confidence,
                energy, and developing healthy exercise habits.
              </p>

              <p className="mt-5 text-lg leading-8 text-white">
                Whether you are beginning your fitness journey or working
                toward a higher level of performance, our gym provides a
                welcoming environment where you can work toward your goals.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          ABOUT US
      ================================================== */}
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div className="group overflow-hidden rounded-3xl border border-zinc-800">

              <img
                src="/images/gym-team.png"
                alt="Elle ’n’ Elle Gym Centre team"
                className="h-[420px] w-full object-cover object-center transition duration-700 group-hover:scale-105"
              />

            </div>

            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                About Us
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                A fitness community built for progress.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white">
                Elle ’n’ Elle Gym Centre is a fitness destination located
                in Akobo, Ibadan. Our goal is to create an environment
                where people can train, stay motivated, and develop
                healthier exercise habits.
              </p>

              <p className="mt-5 text-lg leading-8 text-white">
                We believe that progress comes from consistency. Our gym
                provides access to fitness services and training
                opportunities designed to help members stay active and
                focused on their personal goals.
              </p>

              <p className="mt-5 text-lg leading-8 text-white">
                From individual training to group workouts, we want every
                visit to be a step forward in your fitness journey.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  <p className="text-3xl font-extrabold text-green-400">
                    01
                  </p>
                  <p className="mt-2 font-bold">
                    Train
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  <p className="text-3xl font-extrabold text-green-400">
                    02
                  </p>
                  <p className="mt-2 font-bold">
                    Improve
                  </p>
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  <p className="text-3xl font-extrabold text-green-400">
                    03
                  </p>
                  <p className="mt-2 font-bold">
                    Progress
                  </p>
                </div>

              </div>

              <Link
                to="/services"
                className="mt-8 inline-block rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400"
              >
                View Our Services →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          WHAT WE OFFER
      ================================================== */}
      <section className="bg-zinc-950">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="max-w-3xl">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Training options for different goals.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white">
              Choose the type of training that fits your goals and
              make every session count.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {/* Strength */}
            <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="/images/gym-training.png"
                  alt="Strength training"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Training
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Strength Training
                </h3>

                <p className="mt-4 leading-7 text-white">
                  Work on strength, fitness, consistency and overall
                  physical development through structured training.
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-block font-bold text-green-400 hover:text-green-300"
                >
                  Learn More →
                </Link>

              </div>
            </div>


            {/* Personal Training */}
            <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="/images/group-training.png"
                  alt="Personal and guided training"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Guidance
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Personal Training
                </h3>

                <p className="mt-4 leading-7 text-white">
                  Get a more focused training experience designed around
                  your individual fitness goals.
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-block font-bold text-green-400 hover:text-green-300"
                >
                  Learn More →
                </Link>

              </div>
            </div>


            {/* Group Workouts */}
            <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black">

              <div className="h-64 overflow-hidden">

                <img
                  src="/images/workout-poster.png"
                  alt="Group workout"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Community
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Group Workouts
                </h3>

                <p className="mt-4 leading-7 text-white">
                  Train alongside others, stay motivated and enjoy the
                  energy of a shared workout environment.
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-block font-bold text-green-400 hover:text-green-300"
                >
                  Learn More →
                </Link>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          TRAINING EXPERIENCE
      ================================================== */}
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                The Training Experience
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                Show up. Put in the work. Keep progressing.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white">
                Your fitness journey does not have to be complicated.
                The most important thing is showing up consistently and
                putting in the work.
              </p>

              <p className="mt-5 text-lg leading-8 text-white">
                At Elle ’n’ Elle, every session gives you another
                opportunity to stay active, improve your fitness and
                work toward your personal goals.
              </p>

              <Link
                to="/booking"
                className="mt-8 inline-block rounded-full bg-green-500 px-7 py-4 font-bold text-black transition hover:bg-green-400"
              >
                Start Your Journey →
              </Link>

            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">

                <div className="text-4xl">
                  💪
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Build Strength
                </h3>

                <p className="mt-3 leading-7 text-white">
                  Stay consistent with training that supports your
                  physical development.
                </p>

              </div>


              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">

                <div className="text-4xl">
                  ⚡
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Stay Energized
                </h3>

                <p className="mt-3 leading-7 text-white">
                  Keep your body active and make movement part of
                  your routine.
                </p>

              </div>


              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">

                <div className="text-4xl">
                  🎯
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Set Goals
                </h3>

                <p className="mt-3 leading-7 text-white">
                  Give your workouts direction by focusing on
                  meaningful personal goals.
                </p>

              </div>


              <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-7">

                <div className="text-4xl">
                  🔥
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Stay Consistent
                </h3>

                <p className="mt-3 leading-7 text-white">
                  Progress comes from continuing to show up and
                  putting in the work.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          HOW IT WORKS
      ================================================== */}
      <section className="bg-zinc-950">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Getting Started
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Your journey starts in three simple steps.
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="relative rounded-3xl border border-zinc-800 bg-black p-8">

              <span className="text-6xl font-black text-green-400/30">
                01
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Choose Your Plan
              </h3>

              <p className="mt-4 leading-7 text-white">
                Explore our available memberships and training
                options to find the one that suits you.
              </p>

            </div>


            <div className="relative rounded-3xl border border-zinc-800 bg-black p-8">

              <span className="text-6xl font-black text-green-400/30">
                02
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Book Your Visit
              </h3>

              <p className="mt-4 leading-7 text-white">
                Select your preferred service, date and time through
                our booking page.
              </p>

            </div>


            <div className="relative rounded-3xl border border-zinc-800 bg-black p-8">

              <span className="text-6xl font-black text-green-400/30">
                03
              </span>

              <h3 className="mt-4 text-2xl font-bold">
                Start Training
              </h3>

              <p className="mt-4 leading-7 text-white">
                Show up, stay consistent and keep working toward
                your fitness goals.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          WHY CHOOSE US
      ================================================== */}
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Why Choose Elle ’n’ Elle
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Everything you need to keep moving.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white">
              We want your gym experience to be simple, motivating,
              and focused on progress.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500">

              <div className="text-4xl">
                🏋️
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Quality Training
              </h3>

              <p className="mt-4 leading-7 text-white">
                Train with access to fitness services designed to
                support your personal goals and development.
              </p>

            </div>


            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500">

              <div className="text-4xl">
                🤝
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Supportive Community
              </h3>

              <p className="mt-4 leading-7 text-white">
                Become part of an environment where members can stay
                motivated and encourage one another.
              </p>

            </div>


            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition duration-300 hover:-translate-y-2 hover:border-green-500">

              <div className="text-4xl">
                📈
              </div>

              <h3 className="mt-5 text-2xl font-bold">
                Focus on Progress
              </h3>

              <p className="mt-4 leading-7 text-white">
                Build consistency and keep working toward becoming a
                stronger and healthier version of yourself.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          MEMBER FEEDBACK
      ================================================== */}
      <section className="overflow-hidden bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6 md:px-16">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Member Feedback
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              What keeps us moving.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white">
              A strong community makes the fitness journey better.
            </p>

          </div>

        </div>


        {/* CONTINUOUS MARQUEE */}
        <div className="relative mt-12 w-full overflow-hidden">

          <div className="flex w-max animate-marquee gap-6">

            {feedbacks.map((feedback, index) => (
              <div
                key={`first-${index}`}
                className="w-[320px] shrink-0 rounded-3xl border border-zinc-800 bg-black p-7 md:w-[380px]"
              >

                <div className="text-2xl text-green-400">
                  ★★★★★
                </div>

                <p className="mt-5 text-lg leading-8 text-white">
                  "{feedback.text}"
                </p>

                <p className="mt-6 font-bold text-green-400">
                  — {feedback.author}
                </p>

              </div>
            ))}


            {feedbacks.map((feedback, index) => (
              <div
                key={`second-${index}`}
                className="w-[320px] shrink-0 rounded-3xl border border-zinc-800 bg-black p-7 md:w-[380px]"
              >

                <div className="text-2xl text-green-400">
                  ★★★★★
                </div>

                <p className="mt-5 text-lg leading-8 text-white">
                  "{feedback.text}"
                </p>

                <p className="mt-6 font-bold text-green-400">
                  — {feedback.author}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          VISIT OUR GYM
      ================================================== */}
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                Visit Us
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Find us in Akobo, Ibadan.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white">
                Ready to take the next step? Visit Elle ’n’ Elle Gym
                Centre and become part of our fitness community.
              </p>

              <div className="mt-8 space-y-5">

                <div>
                  <p className="font-bold text-green-400">
                    📍 Location
                  </p>

                  <p className="mt-2 text-white">
                    Akobo, Ibadan, Oyo State, Nigeria
                  </p>
                </div>

                <div>
                  <p className="font-bold text-green-400">
                    🕐 Opening Hours
                  </p>

                  <p className="mt-2 text-white">
                    Monday – Friday: 6:00 AM – 10:00 PM
                  </p>

                  <p className="mt-1 text-white">
                    Saturday: 7:00 AM – 9:00 PM
                  </p>

                  <p className="mt-1 text-white">
                    Sunday: 8:00 AM – 6:00 PM
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full border border-green-500 px-7 py-4 font-bold text-green-400 transition hover:bg-green-500 hover:text-black"
              >
                Open Google Maps →
              </a>

            </div>


            <div className="overflow-hidden rounded-3xl border border-zinc-800">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3202217275425!2d3.9397762000000003!3d7.429771799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed2f725bf14d%3A0x982a16f72364e15b!2sElle'n'Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre!5e0!3m2!1sen!2sng!4v1789040979220!5m2!1sen!2sng"
                title="Elle ’n’ Elle Fitness, Arts & I.T Centre location"
                className="h-[350px] w-full md:h-[450px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          FINAL CTA
      ================================================== */}
      <section className="border-t border-zinc-800 bg-green-500">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center md:px-16">

          <p className="font-bold uppercase tracking-[0.25em] text-black">
            Your Next Step
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
            Ready to start training?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black">
            Choose a membership or training service and take the next
            step toward your fitness goals.
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


// ==================================================
// APP
// ==================================================
export default function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/contact"
          element={
            <main className="min-h-screen bg-black px-6 py-24 text-white">

              <div className="mx-auto max-w-4xl">

                <p className="font-bold uppercase tracking-[0.25em] text-green-400">
                  Contact Us
                </p>

                <h1 className="mt-4 text-5xl font-extrabold">
                  Get in touch with Elle ’n’ Elle.
                </h1>

                <p className="mt-6 text-lg leading-8 text-white">
                  Our complete contact page will include the gym
                  location, Google Maps, contact information and
                  feedback form.
                </p>

                <Link
                  to="/booking"
                  className="mt-8 inline-block rounded-full bg-green-500 px-7 py-4 font-bold text-black"
                >
                  Book a Visit →
                </Link>

              </div>

            </main>
          }
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}