import React from "react";
import Container from "./container";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div>
      <LayoutHeader />
      {props.children}
    </div>
  );
};

const LayoutHeader = (props) => {
  return (
    <div className="container">
      <header>
        <img src="/logo.svg" height="50px" />
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Project</a>
          </Link>
          <Link href="/">
            <a>About</a>
          </Link>
          <Link href="/">
            <a>Contact</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
      </header>
    </div>
  );
};

const createLayout = (children) => {
  return () => <Layout>{children}</Layout>;
};

export default createLayout;
