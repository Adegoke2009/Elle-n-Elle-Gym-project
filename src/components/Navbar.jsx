import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/95 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-16">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src="/images/Logo.jfif"
            alt="Elle & Elle Gym logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="transition hover:text-green-400">
            Home
          </Link>

          <Link to="/services" className="transition hover:text-green-400">
            Services & Membership
          </Link>

          <Link to="/booking" className="transition hover:text-green-400">
            Booking
          </Link>

          <Link to="/contact" className="transition hover:text-green-400">
            Contact
          </Link>

          <Link
            to="/booking"
            className="rounded-full bg-green-500 px-5 py-3 font-bold text-black transition hover:bg-green-400"
          >
            Join Now
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-2xl text-green-400 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              onClick={closeMenu}
              className="text-lg transition hover:text-green-400"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={closeMenu}
              className="text-lg transition hover:text-green-400"
            >
              Services & Membership
            </Link>

            <Link
              to="/booking"
              onClick={closeMenu}
              className="text-lg transition hover:text-green-400"
            >
              Booking
            </Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="text-lg transition hover:text-green-400"
            >
              Contact
            </Link>

            <Link
              to="/booking"
              onClick={closeMenu}
              className="rounded-full bg-green-500 px-5 py-3 text-center font-bold text-black transition hover:bg-green-400"
            >
              Join Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
