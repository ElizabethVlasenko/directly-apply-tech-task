import React from "react";

export default function Header() {
  return (
    <header className="primary-bg">
      <div className="wrapper">
        <a href="/" className="header-logo">
          Directly Apply
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
