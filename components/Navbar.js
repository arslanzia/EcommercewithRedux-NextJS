import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Link from "next/link";
import { useSelector } from "react-redux";
const Navbar = () => {

    const quantity = useSelector((state)=>state.cards.totalQuantity,
    );
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="wrapper">
            <div className="logo">
              <Link href={"/"}>
                <img src="./images/logo.png" alt="images" />
              </Link>
            </div>
            <div className="navbar">
              <nav className="menu">
                <ul>
                  <li>
                    <Link href={"/"}>
                      <a>home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/about"}>
                      <a>about</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={"/products"}>
                      <a>products</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="searchicon">
              <Link href={"/cart"}>
                <AddShoppingCartIcon />
              </Link>
              {quantity}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
