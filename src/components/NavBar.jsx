import React from "react";

const NavBar = () => {
  const menuLists = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iphone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
  ];

  return (
    <header>
      <nav>
        <img src="/logo.svg" />
        <ul>
          {menuLists.map(({ label }, index) => (
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
