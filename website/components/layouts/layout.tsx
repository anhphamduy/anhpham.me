import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import SocialMedia from "../SocialMedia";
import { useRouter } from "next/router";

const Layout = (props) => {
  return (
    <div>
      <LayoutHeader
        greenBackground={props.greenBackground}
        socialMediaSection={props.socialMediaSection}
      />
      {props.children}
      {props.contactSection && (
        <div className="contact-redirect-section">
          <div className="container py-5">
            <Title
              className="text-center mb-1 font-weight-extra-bold"
              level={2}
            >
              {props.footerText}
            </Title>
            <Title className="text-center mb-4" level={4}>
              Let's have a chat!
            </Title>
            <Link href="/contact">
              <a>
                <Button
                  className="font-weight-bold d-block mx-auto"
                  type="primary"
                  size="large"
                >
                  START THE CONVERSATION
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
      <footer className="bg-primary color py-5">
        <Title className="text-center mb-0 font-weight-extra-bold" level={4}>
          © Anh Pham — Official Website 2022
        </Title>
      </footer>
    </div>
  );
};

const LayoutHeader = (props) => {
  const [isHamMenuVisible, openHamMenu] = useState(false);

  const router = useRouter();

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
    <div className={props.greenBackground && "greenBackground"}>
      <style jsx>{`
        .greenBackground {
          background-color: #014841;
        }

        .greenBackground a {
          color: white;
        }
      `}</style>
      <div className="container">
        <header className="d-flex pt-3">
          <Link href="/">
            <a className="ms-0">
              <img
                src={`/logo${
                  isHamMenuVisible || props.greenBackground ? "-white" : ""
                }.svg`}
                height="50px"
                alt="Anh Pham's logo"
              />
            </a>
          </Link>
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
                <div
                  onClick={() => {
                    openHamMenu(false);
                    document
                      .querySelector("body")
                      .classList.remove("fixedScroll");
                  }}
                >
                  <Link href="/">
                    <a className={router.pathname == "/" && "active"}>Home</a>
                  </Link>
                </div>
                <div>
                  <Link href="/project">
                    <a
                      className={
                        router.pathname.startsWith("/project") && "active"
                      }
                    >
                      Work
                    </a>
                  </Link>
                </div>
                <div
                  onClick={() => {
                    openHamMenu(false);
                    document
                      .querySelector("body")
                      .classList.remove("fixedScroll");
                  }}
                >
                  <Link href="/about">
                    <a
                      className={
                        router.pathname.startsWith("/about") && "active"
                      }
                    >
                      About
                    </a>
                  </Link>
                </div>
                <div>
                  <Link href="/contact">
                    <a
                      className={
                        router.pathname.startsWith("/contact") && "active"
                      }
                    >
                      Contact
                    </a>
                  </Link>
                </div>
                {/*<div>*/}
                {/*  <Link href="/blog">*/}
                {/*    <a*/}
                {/*      className={*/}
                {/*        router.pathname.startsWith("/blog") && "active"*/}
                {/*      }*/}
                {/*    >*/}
                {/*      Blog*/}
                {/*    </a>*/}
                {/*  </Link>*/}
                {/*</div>*/}

                <div className="mt-5 d-block d-md-none">
                  <SocialMedia />
                </div>
              </div>
            </div>
            <div className="d-block d-md-none">
              <Button
                type="primary"
                shape="circle"
                icon={
                  <div
                    className={`ham-menu-icon ${isHamMenuVisible && "open"}`}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                }
                onClick={() => {
                  document
                    .querySelector("body")
                    .classList.toggle("fixedScroll");
                  openHamMenu(!isHamMenuVisible);
                }}
                size="large"
                className="bar-menu-button"
              />
            </div>
            {props.socialMediaSection && (
              <div className="social-media vertical">
                <a
                  href="https://stackoverflow.com/users/8005315/anh-pham"
                  target="_blank"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={
                      <i className="fa fa-stack-overflow" aria-hidden="true" />
                    }
                    onClick={() => {}}
                    size="large"
                  />
                </a>
                <a href="https://github.com/anhphamduy" target="_blank">
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<i className="fa fa-github" aria-hidden="true" />}
                    onClick={() => {}}
                    size="large"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/anhphamduy/"
                  target="_blank"
                >
                  <Button
                    type="primary"
                    shape="circle"
                    icon={<i className="fa fa-linkedin" aria-hidden="true" />}
                    onClick={() => {}}
                    size="large"
                  />
                </a>
              </div>
            )}
          </div>
        </header>
      </div>
    </div>
  );
};

const createLayout = (
  children,
  contactSection = true,
  socialMediaSection = true,
  greenBackground = false,
  footerText = "Ready to start your own project?"
) => {
  return (props) => (
    <Layout
      contactSection={contactSection}
      socialMediaSection={socialMediaSection}
      greenBackground={greenBackground}
      footerText={footerText}
    >
      {React.cloneElement(children, props)}
    </Layout>
  );
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
