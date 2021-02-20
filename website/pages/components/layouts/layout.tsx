import React from "react";
import Link from "next/link";
import { Button } from "antd";

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
      <header className="d-flex mt-3">
        <img src="/logo.svg" height="50px" />
        <div className="right-section">
          <div className="d-none d-md-flex align-items-center justify-content-between">
            <Link href="/">
              <a className="active">Home</a>
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
          <div className="d-block d-md-none">
            <Button
              type="primary"
              shape="circle"
              icon={
                <div id="nav-icon3">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              }
              onClick={() => {}}
              size="large"
              className="bar-menu-button"
            />
          </div>
          <div className="social-media vertical">
            <Button
              type="primary"
              shape="circle"
              icon={<i className="fa fa-stack-overflow" aria-hidden="true" />}
              onClick={() => {}}
              size="large"
            />
            <Button
              type="primary"
              shape="circle"
              icon={<i className="fa fa-github" aria-hidden="true" />}
              onClick={() => {}}
              size="large"
            />
            <Button
              type="primary"
              shape="circle"
              icon={<i className="fa fa-linkedin" aria-hidden="true" />}
              onClick={() => {}}
              size="large"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

const createLayout = (children) => {
  return () => <Layout>{children}</Layout>;
};

export default createLayout;
