import { Link } from "react-router-dom";

const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Elle%27n%27Elle%20Fitness%2C%20Arts%20%26%20I.T%20Centre";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:px-16 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <img
            src="/images/logo.png"
            alt="Elle ’n’ Elle Gym Centre logo"
            className="h-24 w-auto object-contain"
          />

          <p className="mt-5 leading-7 text-gray-400">
            Elle ’n’ Elle Gym Centre is a fitness community in Akobo,
            Ibadan, dedicated to helping people build strength,
            confidence, and healthy exercise habits.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-bold text-green-400">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              to="/"
              className="text-gray-400 transition hover:text-green-400"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="text-gray-400 transition hover:text-green-400"
            >
              Services & Membership
            </Link>

            <Link
              to="/booking"
              className="text-gray-400 transition hover:text-green-400"
            >
              Booking
            </Link>

            <Link
              to="/contact"
              className="text-gray-400 transition hover:text-green-400"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-xl font-bold text-green-400">
            Contact Us
          </h3>

          <div className="mt-5 space-y-5 text-gray-400">

            {/* LOCATION */}
            <div>
              <p className="font-semibold text-white">
                📍 Location
              </p>

              <p className="mt-1 leading-7">
                Akobo, Ibadan, Oyo State, Nigeria
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-bold text-green-400 underline transition hover:text-green-300"
              >
                View on Google Maps →
              </a>
            </div>

            {/* PHONE */}
            <div>
              <p className="font-semibold text-white">
                📞 Phone
              </p>

              <a
                href="tel:+2340000000000"
                className="mt-1 block transition hover:text-green-400"
              >
                +234 000 000 0000
              </a>
            </div>

            {/* EMAIL */}
            <div>
              <p className="font-semibold text-white">
                ✉️ Email
              </p>

              <a
                href="mailto:info@elleandellegym.com"
                className="mt-1 block break-all transition hover:text-green-400"
              >
                info@elleandellegym.com
              </a>
            </div>
          </div>
        </div>

        {/* OPENING HOURS */}
        <div>
          <h3 className="text-xl font-bold text-green-400">
            Opening Hours
          </h3>

          <div className="mt-5 space-y-3 text-gray-400">
            <p>Monday – Friday: 6:00 AM – 10:00 PM</p>
            <p>Saturday: 7:00 AM – 9:00 PM</p>
            <p>Sunday: 8:00 AM – 6:00 PM</p>
          </div>

          <Link
            to="/booking"
            className="mt-6 inline-block rounded-full bg-green-500 px-6 py-3 font-bold text-black transition hover:bg-green-400"
          >
            Book a Visit
          </Link>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="border-t border-zinc-800 px-6 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Elle ’n’ Elle Gym Centre.
          All rights reserved.
        </p>

        <p className="mt-2">
          Built for strength, confidence, and progress.
        </p>

        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-semibold text-green-400 transition hover:text-green-300"
        >
          📍 Find Us on Google Maps
        </a>
      </div>
    </footer>
  );
}