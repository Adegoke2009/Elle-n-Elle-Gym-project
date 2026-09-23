import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden">
        <img
          src="/images/gym-training.png"
          alt="People training in the gym"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
          <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-green-400">
            Welcome to Elle ’n’ Elle
          </p>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-tight md:text-7xl">
            Train Hard.
            <br />
            Live Strong.
            <br />
            <span className="text-green-400">Become Unstoppable.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Your fitness journey starts here. Get stronger, healthier, and more
            confident with expert trainers and a supportive community.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/membership"
              className="rounded-full bg-green-500 px-7 py-3 font-bold text-black transition hover:bg-green-400"
            >
              Join the Gym
            </Link>

            <Link
              to="/services"
              className="rounded-full border border-white px-7 py-3 font-bold text-white transition hover:border-green-400 hover:text-green-400"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="font-semibold uppercase tracking-widest text-green-400">
            More than a gym
          </p>

          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            Your strength is built here.
          </h2>

          <p className="mt-6 leading-8 text-gray-400">
            At Elle ’n’ Elle Gym Centre, we believe fitness is not just about
            appearance. It is about energy, discipline, confidence, and becoming
            a better version of yourself.
          </p>

          <Link
            to="/about"
            className="mt-6 inline-block font-semibold text-green-400 hover:text-green-300"
          >
            Discover our story →
          </Link>
        </div>

        <img
          src="/images/group-training.png"
          alt="Gym members training together"
          className="h-80 w-full rounded-3xl object-cover shadow-2xl md:h-96"
        />
      </section>

      {/* Services Preview */}
      <section className="bg-zinc-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-green-400">
              What we offer
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              Everything you need to get stronger
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <div className="text-4xl">🏋️</div>
              <h3 className="mt-5 text-2xl font-bold">Strength Training</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Build strength and improve your fitness with quality equipment
                and structured workouts.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <div className="text-4xl">🔥</div>
              <h3 className="mt-5 text-2xl font-bold">Personal Training</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Receive guidance and motivation from trainers who understand
                your fitness goals.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-black p-8">
              <div className="text-4xl">🤝</div>
              <h3 className="mt-5 text-2xl font-bold">Group Workouts</h3>
              <p className="mt-3 leading-7 text-gray-400">
                Train with others, stay motivated, and enjoy a supportive
                fitness community.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="font-semibold text-green-400 hover:text-green-300"
            >
              View all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-24 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Ready to start your journey?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-gray-400">
          Take the first step toward a stronger and healthier lifestyle.
        </p>

        <Link
          to="/booking"
          className="mt-8 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400"
        >
          Book a Visit
        </Link>
      </section>
    </main>
  );
}
