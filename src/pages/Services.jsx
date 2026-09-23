import { Link } from "react-router-dom";

const services = [
  {
    title: "Strength Training",
    category: "Training",
    image: "/images/gym-training.png",
    description:
      "Build strength, improve your fitness, and develop consistency through focused training sessions.",
    features: [
      "Strength-focused workouts",
      "Fitness development",
      "Progress-focused training",
    ],
  },
  {
    title: "Personal Training",
    category: "Guided Training",
    image: "/images/group-training.png",
    description:
      "Get a more focused training experience designed around your individual fitness goals.",
    features: [
      "Individual attention",
      "Goal-focused sessions",
      "Guided workouts",
    ],
  },
  {
    title: "Group Workouts",
    category: "Community",
    image: "/images/workout-poster.png",
    description:
      "Train alongside other members and enjoy the motivation and energy of a shared workout environment.",
    features: [
      "Group training environment",
      "Community motivation",
      "Active workout sessions",
    ],
  },
];

const memberships = [
  {
    name: "Daily Membership",
    price: "₦3,500",
    description: "Perfect when you want flexible access for a single day.",
    features: [
      "Gym access for one day",
      "Flexible option",
      "Great for occasional visits",
    ],
  },
  {
    name: "Weekly Membership",
    price: "₦17,000",
    description:
      "A convenient option for members who want to train throughout the week.",
    features: [
      "Weekly gym access",
      "Flexible training schedule",
      "Good for short-term training",
    ],
  },
  {
    name: "Monthly Membership",
    price: "₦30,000",
    popular: true,
    description:
      "Our monthly option for members who want to build a consistent training routine.",
    features: [
      "Monthly gym access",
      "Better long-term consistency",
      "Ideal for regular training",
    ],
  },
  {
    name: "Family Package",
    price: "₦30,000",
    description:
      "A membership option designed for families who want to stay active together.",
    features: [
      "Family-focused option",
      "Shared fitness journey",
      "Encourages active living",
    ],
  },
  {
    name: "Personal Training",
    price: "₦5,000",
    description:
      "A focused training option for members who want additional individual guidance.",
    features: [
      "Personal training session",
      "Individual guidance",
      "Goal-focused workout",
    ],
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ==================================================
          PAGE HERO
      ================================================== */}
      <section className="relative overflow-hidden border-b border-zinc-800">

        <div className="absolute inset-0">
          <img
            src="/images/gym-training.png"
            alt=""
            className="h-full w-full object-cover object-center opacity-20"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16 md:py-32">

          <p className="font-bold uppercase tracking-[0.3em] text-green-400">
            Services & Membership
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            Find the right way to
            <span className="text-green-400"> train.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white md:text-xl">
            Whether you want flexible gym access, personal guidance or
            group training, choose an option that fits your fitness
            journey.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-block rounded-full bg-green-500 px-8 py-4 font-bold text-black transition hover:bg-green-400"
          >
            Book Your Visit →
          </Link>

        </div>
      </section>


      {/* ==================================================
          SERVICES
      ================================================== */}
      <section className="bg-zinc-950">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="max-w-3xl">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Training built around your goals.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white">
              Choose from different training options depending on the
              type of fitness experience you are looking for.
            </p>

          </div>


          <div className="mt-14 grid gap-7 md:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black transition duration-300 hover:-translate-y-2 hover:border-green-500"
              >

                <div className="h-64 overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-7">

                  <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                    {service.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-white">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3">

                    {service.features.map((feature) => (
                      <p
                        key={feature}
                        className="flex items-start gap-3 text-white"
                      >
                        <span className="font-bold text-green-400">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </p>
                    ))}

                  </div>

                  <Link
                    to="/booking"
                    className="mt-7 inline-block font-bold text-green-400 transition hover:text-green-300"
                  >
                    Book This Service →
                  </Link>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* ==================================================
          MEMBERSHIP
      ================================================== */}
      <section className="bg-black">

        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Membership Plans
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Choose your membership.
            </h2>

            <p className="mt-5 text-lg leading-8 text-white">
              Pick the option that works best for your schedule and
              training routine.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-green-500 bg-zinc-950"
                    : "border-zinc-800 bg-zinc-950"
                }`}
              >

                {plan.popular && (
                  <div className="absolute right-6 top-6 rounded-full bg-green-500 px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Membership
                </p>

                <h3 className="mt-4 pr-24 text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-6">

                  <span className="text-4xl font-extrabold">
                    {plan.price}
                  </span>

                </div>

                <p className="mt-5 min-h-[80px] leading-7 text-white">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">

                  {plan.features.map((feature) => (
                    <p
                      key={feature}
                      className="flex items-start gap-3 text-white"
                    >
                      <span className="font-bold text-green-400">
                        ✓
                      </span>

                      <span>{feature}</span>
                    </p>
                  ))}

                </div>

                <Link
                  to="/booking"
                  className={`mt-8 block rounded-full px-6 py-3 text-center font-bold transition ${
                    plan.popular
                      ? "bg-green-500 text-black hover:bg-green-400"
                      : "border border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  }`}
                >
                  Choose This Plan
                </Link>

              </article>
            ))}

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
              Getting started is simple.
            </h2>

          </div>


          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-zinc-800 bg-black p-8">

              <p className="text-6xl font-black text-green-400/30">
                01
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Pick Your Option
              </h3>

              <p className="mt-4 leading-7 text-white">
                Select a membership or training service that matches
                your needs.
              </p>

            </div>


            <div className="rounded-3xl border border-zinc-800 bg-black p-8">

              <p className="text-6xl font-black text-green-400/30">
                02
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Make a Booking
              </h3>

              <p className="mt-4 leading-7 text-white">
                Choose your preferred date and time through our booking
                form.
              </p>

            </div>


            <div className="rounded-3xl border border-zinc-800 bg-black p-8">

              <p className="text-6xl font-black text-green-400/30">
                03
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Start Training
              </h3>

              <p className="mt-4 leading-7 text-white">
                Complete your booking and get ready for your training
                experience.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ==================================================
          PRICING CTA
      ================================================== */}
      <section className="bg-green-500">

        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-black">
            Ready?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-black md:text-5xl">
            Your next workout starts with one decision.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-black">
            Choose your membership or training option and book your
            visit today.
          </p>

          <Link
            to="/booking"
            className="mt-8 inline-block rounded-full bg-black px-8 py-4 font-bold text-white transition hover:bg-zinc-900"
          >
            Go to Booking →
          </Link>

        </div>

      </section>

    </main>
  );
}