import React from "react";
import Container from "./container";

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
    <header className="container">
      <img src="/logo.svg" height="50px" />
    </header>
  );
};

const createLayout = (children) => {
  return () => <Layout>{children}</Layout>;
};

export default createLayout;
