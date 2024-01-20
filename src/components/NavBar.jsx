import React from "react";

function NavBar() {
  return (
    <nav className="sticky z-10 bg-white backdrop-filter backdrop-blur-3xl bg-opacity-30 rounded-2xl border max-w-xs">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="flex items-center justify-end h-16">
          <div className="flex space-x-4 text-gray-900">
            <a href="#">Projects</a>
            <a href="#">Resume</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
