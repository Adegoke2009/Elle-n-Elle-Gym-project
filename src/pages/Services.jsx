import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Strength Training",
    category: "Training",
    image: "/images/gym-training.png",
    description:
      "Build strength, improve your fitness, and develop consistency through focused training sessions.",
    longDescription:
      "Our strength-focused training environment gives you space to work on your fitness at your own pace while staying committed to your goals. Whether you are building a routine or looking to become more consistent, every session is an opportunity to improve.",
    features: [
      "Strength-focused workouts",
      "Fitness development",
      "Progress-focused training",
      "Training at your own pace",
    ],
  },
  {
    title: "Personal Training",
    category: "Guided Training",
    image: "/images/group-training.png",
    description:
      "Get a more focused training experience designed around your individual fitness goals.",
    longDescription:
      "Personal training provides a more focused experience with individual guidance during your workout. It is designed for members who want additional structure, attention and direction during their training sessions.",
    features: [
      "Individual attention",
      "Goal-focused sessions",
      "Guided workouts",
      "Personalized training experience",
    ],
  },
  {
    title: "Group Workouts",
    category: "Community",
    image: "/images/workout-poster.png",
    description:
      "Train alongside other members and enjoy the motivation and energy of a shared workout environment.",
    longDescription:
      "Group workouts bring energy and community into your training experience. Train alongside other members, stay active and enjoy an environment that encourages consistency.",
    features: [
      "Group training environment",
      "Community motivation",
      "Active workout sessions",
      "Shared training experience",
    ],
  },
];

const memberships = [
  {
    name: "Daily Membership",
    price: "₦3,500",
    duration: "1 Day",
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
    duration: "1 Week",
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
    duration: "1 Month",
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
    duration: "Family",
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
    duration: "Per Session",
    description:
      "A focused training option for members who want additional individual guidance.",
    features: [
      "Personal training session",
      "Individual guidance",
      "Goal-focused workout",
    ],
  },
];

const faqs = [
  {
    question: "What membership plans do you offer?",
    answer:
      "Elle ’n’ Elle offers Daily, Weekly, Monthly and Family membership options. Personal training is also available for members who want additional individual guidance.",
  },
  {
    question: "How much is monthly membership?",
    answer: "The monthly membership plan is ₦30,000.",
  },
  {
    question: "Can beginners join the gym?",
    answer:
      "Yes. The gym is designed to provide a training environment where members can work toward their fitness goals at their own pace.",
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes. Personal training is available at ₦5,000 per session.",
  },
  {
    question: "Do you offer group workouts?",
    answer:
      "Yes. Group workouts provide a shared training environment where members can train alongside others and enjoy the energy of the community.",
  },
  {
    question: "Can I book before coming to the gym?",
    answer:
      "Yes. You can use the booking page to select your service or membership option and submit your booking details.",
  },
  {
    question: "Where is Elle ’n’ Elle Gym located?",
    answer:
      "Elle ’n’ Elle Gym Centre is located in Akobo, Ibadan, Oyo State, Nigeria.",
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative min-h-[650px] overflow-hidden">
        <img
          src="/images/gym-training.png"
          alt="Elle 'n' Elle Gym training"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-[2000ms] hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-6 py-24 md:px-16">
          <div className="max-w-4xl">
            <p className="animate-pulse font-bold uppercase tracking-[0.3em] text-green-400">
              Services & Membership
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              Train with purpose.
              <span className="block text-green-400">Choose your path.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Whether you are looking for flexible gym access, personal
              guidance, group workouts or a consistent monthly routine, Elle ’n’
              Elle gives you different ways to stay committed to your fitness
              journey.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/booking"
                className="rounded-full bg-green-500 px-8 py-4 text-center font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-green-400"
              >
                Book Your Visit →
              </Link>

              <a
                href="#memberships"
                className="rounded-full border border-white/30 px-8 py-4 text-center font-bold transition duration-300 hover:-translate-y-1 hover:border-green-400 hover:text-green-400"
              >
                View Memberships
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:px-16">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              More Than A Membership
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Build a training routine you can actually maintain.
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              Fitness is not only about one workout. It is about showing up,
              developing discipline and continuing to work toward your goals.
              Our services and membership options give you the flexibility to
              choose how you want to train.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              From a single-day visit to a monthly routine or personal training
              session, you can choose an option that fits your schedule and
              current training needs.
            </p>

            <Link
              to="/booking"
              className="mt-8 inline-block font-bold text-green-400 transition hover:translate-x-2 hover:text-green-300"
            >
              Start Your Fitness Journey →
            </Link>
          </div>

          <div className="group overflow-hidden rounded-[2rem] border border-zinc-800">
            <img
              src="/images/gym-team.png"
              alt="Elle 'n' Elle Gym community"
              className="h-[450px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE SHOWCASE
      ===================================================== */}
      <section className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-16">
          <div className="mb-12">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              The Training Environment
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              A place built for movement.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="group overflow-hidden rounded-3xl md:col-span-2">
              <img
                src="/images/gym-training.png"
                alt="Gym training"
                className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl">
              <img
                src="/images/workout-poster.png"
                alt="Gym workout"
                className="h-[400px] w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Our Services
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Training options built around your goals.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Different people have different training needs. Choose the
              experience that fits the way you want to train.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black transition duration-500 hover:-translate-y-3 hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                    {service.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{service.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400">
                    {service.description}
                  </p>

                  <p className="mt-4 leading-7 text-gray-500">
                    {service.longDescription}
                  </p>

                  <div className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <p key={feature} className="flex gap-3 text-gray-300">
                        <span className="font-bold text-green-400">✓</span>

                        {feature}
                      </p>
                    ))}
                  </div>

                  <Link
                    to="/booking"
                    className="mt-8 inline-block font-bold text-green-400 transition hover:translate-x-2 hover:text-green-300"
                  >
                    Book This Service →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          MEMBERSHIP
      ===================================================== */}
      <section id="memberships" className="scroll-mt-20 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Membership Plans
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Choose the plan that fits your routine.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Whether you need one day, one week, a full month or a
              family-focused option, choose a membership that matches your
              training schedule.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`group relative rounded-3xl border p-8 transition duration-500 hover:-translate-y-3 ${
                  plan.popular
                    ? "border-green-500 bg-zinc-950 shadow-xl shadow-green-500/10"
                    : "border-zinc-800 bg-zinc-950 hover:border-green-500"
                }`}
              >
                {plan.popular && (
                  <div className="absolute right-6 top-6 rounded-full bg-green-500 px-4 py-2 text-xs font-black uppercase tracking-wider text-black">
                    Most Popular
                  </div>
                )}

                <p className="text-sm font-bold uppercase tracking-widest text-green-400">
                  Membership
                </p>

                <h3 className="mt-4 pr-28 text-2xl font-bold">{plan.name}</h3>

                <p className="mt-2 text-sm text-gray-500">{plan.duration}</p>

                <div className="mt-7">
                  <span className="text-4xl font-black">{plan.price}</span>
                </div>

                <p className="mt-5 min-h-[90px] leading-7 text-gray-400">
                  {plan.description}
                </p>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <p key={feature} className="flex gap-3 text-gray-300">
                      <span className="font-bold text-green-400">✓</span>

                      {feature}
                    </p>
                  ))}
                </div>

                <Link
                  to="/booking"
                  className={`mt-8 block rounded-full px-6 py-3 text-center font-bold transition duration-300 hover:-translate-y-1 ${
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

      {/* =====================================================
          WHICH OPTION?
      ===================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:px-16">
          <div className="group overflow-hidden rounded-[2rem]">
            <img
              src="/images/group-training.png"
              alt="Group training at Elle 'n' Elle"
              className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Find Your Fit
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Which option is right for you?
            </h2>

            <div className="mt-8 space-y-6">
              <div className="border-l-2 border-green-500 pl-5">
                <h3 className="text-xl font-bold">Choose Daily</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  If you only need occasional gym access or want a flexible
                  single-day option.
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-5">
                <h3 className="text-xl font-bold">Choose Weekly</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  A practical option if you want to train throughout a
                  particular week.
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-5">
                <h3 className="text-xl font-bold">Choose Monthly</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  A good option when you want to establish a regular training
                  routine.
                </p>
              </div>

              <div className="border-l-2 border-green-500 pl-5">
                <h3 className="text-xl font-bold">Choose Personal Training</h3>

                <p className="mt-2 leading-7 text-gray-400">
                  Choose personal training when you want additional individual
                  guidance during your workouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRAINING EXPERIENCE
      ===================================================== */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/workout-poster.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              The Experience
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Show up. Put in the work. Keep progressing.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your membership gives you access to a place where you can focus on
              your training, develop consistency and keep working toward your
              personal fitness goals.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Build Strength",
                "Work toward becoming stronger and more capable.",
              ],
              [
                "02",
                "Stay Active",
                "Make movement and training part of your routine.",
              ],
              ["03", "Set Goals", "Give your workouts direction and purpose."],
              [
                "04",
                "Stay Consistent",
                "Keep showing up and continue progressing.",
              ],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-3xl border border-zinc-800 bg-black/80 p-7 backdrop-blur transition duration-500 hover:-translate-y-2 hover:border-green-500"
              >
                <p className="text-5xl font-black text-green-500/30">
                  {number}
                </p>

                <h3 className="mt-5 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Getting Started
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Getting started is simple.
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-400">
              You do not need a complicated process. Choose your option, make
              your booking and get ready to train.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose Your Option",
                text: "Select a membership or training service that matches your needs.",
              },
              {
                number: "02",
                title: "Make a Booking",
                text: "Choose your preferred service, date and time through our booking page.",
              },
              {
                number: "03",
                title: "Start Training",
                text: "Complete your booking and get ready for your training experience.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="group rounded-3xl border border-zinc-800 bg-black p-8 transition duration-500 hover:-translate-y-2 hover:border-green-500"
              >
                <p className="text-7xl font-black text-green-500/20 transition group-hover:text-green-500/40">
                  {step.number}
                </p>

                <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-gray-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BENEFITS
      ===================================================== */}
      <section className="bg-black">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 md:grid-cols-2 md:items-center md:px-16">
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Why Train With Us
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Your fitness journey deserves consistency.
            </h2>

            <div className="mt-8 space-y-5">
              {[
                "Flexible membership options",
                "Personal training available",
                "Group workout environment",
                "Progress-focused training",
                "Supportive fitness community",
                "Convenient booking process",
              ].map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition duration-300 hover:border-green-500"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-500 font-black text-black">
                    ✓
                  </span>

                  <span className="font-medium text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="group overflow-hidden rounded-[2rem] border border-zinc-800">
            <img
              src="/images/gym-team.png"
              alt="Elle 'n' Elle fitness community"
              className="h-[550px] w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}
      <section className="bg-zinc-950">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-400">
              Frequently Asked Questions
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Questions about membership?
            </h2>

            <p className="mt-5 leading-8 text-gray-400">
              Here are some common questions about our services, membership
              options and booking process.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border transition duration-300 ${
                    isOpen
                      ? "border-green-500 bg-black"
                      : "border-zinc-800 bg-black hover:border-zinc-600"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left md:px-8"
                  >
                    <span className="text-lg font-bold">{faq.question}</span>

                    <span
                      className={`text-2xl text-green-400 transition duration-300 ${
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
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-green-500">
        <div className="absolute inset-0">
          <img
            src="/images/gym-training.png"
            alt=""
            className="h-full w-full object-cover opacity-10"
          />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-black">
            Ready To Start?
          </p>

          <h2 className="mt-4 text-4xl font-black text-black md:text-6xl">
            Your next workout starts with one decision.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/80">
            Choose your membership or training option and take the next step
            toward building a consistent fitness routine.
          </p>

          <Link
            to="/booking"
            className="mt-9 inline-block rounded-full bg-black px-9 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-zinc-900"
          >
            Go To Booking →
          </Link>
        </div>
      </section>
    </main>
  );
}
