import React from "react";
import { navLinks } from "../constants/index";

const NavBar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" />
        <ul>
          {navLinks.map(({ label }, index) => (
            <li key={index}>
              <a href={label}>{label} </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart " />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
