import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "₦15,000",
    period: "per month",
    description: "A simple way to begin your fitness journey.",
    features: [
      "Gym access",
      "Basic workout guidance",
      "Supportive gym community",
    ],
  },
  {
    name: "Pro",
    price: "₦25,000",
    period: "per month",
    description: "More guidance and flexibility for consistent training.",
    features: [
      "Gym access",
      "Personal training guidance",
      "Group workout sessions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    price: "₦40,000",
    period: "per month",
    description: "A more personalised training experience.",
    features: [
      "Gym access",
      "Personal training sessions",
      "Priority booking",
    ],
  },
];

export default function Membership() {
  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-green-400">
            Membership
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            Choose your training plan.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
            Find a membership option that fits your routine and helps you stay
            consistent.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-green-400 bg-green-950/30"
                  : "border-zinc-800 bg-zinc-950"
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-black">
                  Popular
                </span>
              )}

              <h2 className="text-2xl font-bold">{plan.name}</h2>

              <p className="mt-4 text-gray-400">{plan.description}</p>

              <div className="mt-8">
                <span className="text-4xl font-extrabold text-green-400">
                  {plan.price}
                </span>

                <span className="ml-2 text-gray-400">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-gray-300">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className="mt-8 block rounded-full bg-green-500 px-6 py-3 text-center font-bold text-black hover:bg-green-400"
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-500">
          Membership details and prices can be updated to match your gym’s
          actual offers.
        </p>
      </div>
    </main>
  );
}