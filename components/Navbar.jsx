import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"> ESound Store</Link>
      </p>
      <button type="button" className="cart-icon" onClick=""></button>

      <AiOutlineShopping style={{ width: "25px", height: "25px" }} />
      <span className="cart-item-qty">1</span>
    </div>
  );
};

export default Navbar;
