import React, { useEffect, useState } from "react";
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
  const [isHamMenuVisible, openHamMenu] = useState(false);

  const resizeHandler = () => {
    if (window.innerWidth > 767) {
      openHamMenu(false);
      document.querySelector("body").classList.remove("fixedScroll");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container">
      <header className="d-flex mt-3">
        <img
          src={`/logo${isHamMenuVisible ? "-white" : ""}.svg`}
          height="50px"
        />
        <div className="right-section">
          <div
            className={`d-md-flex align-items-center menu-link-container ${
              isHamMenuVisible
                ? "justify-content-center"
                : "d-none justify-content-between"
            }`}
          >
            <div
              className={`${
                isHamMenuVisible ? "container flex-column" : "flex-row"
              } d-flex`}
            >
              <div>
                <Link href="/">
                  <a className="active">Home</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>Project</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>About</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </div>
              <div>
                <Link href="/">
                  <a>Blog</a>
                </Link>
              </div>

              <div className="mt-5 d-block d-md-none">
                <Button
                  type="primary"
                  shape="circle"
                  icon={
                    <i className="fa fa-stack-overflow" aria-hidden="true" />
                  }
                  onClick={() => {}}
                  size="large"
                />
                <Button
                  className="mx-4"
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
          </div>
          <div className="d-block d-md-none">
            <Button
              type="primary"
              shape="circle"
              icon={
                <div className={`ham-menu-icon ${isHamMenuVisible && "open"}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              }
              onClick={() => {
                document.querySelector("body").classList.toggle("fixedScroll");
                openHamMenu(!isHamMenuVisible);
              }}
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

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default createLayout;
