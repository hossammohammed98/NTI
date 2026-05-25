"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Your Logo</h2>

      <ul className="nav-links">
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/about">AboutUs</Link>
        </li>

        <li>
          <Link href="/courses">Courses</Link>
        </li>

        <li>
          <Link href="/pages">Pages</Link>
        </li>

        <li>
          <Link href="/blog">Blog</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <button className="register-btn">Register Now</button>
    </nav>
  );
}
