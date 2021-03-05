import Head from "next/head";
import React from "react";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => {
  document.querySelector("body").classList.remove("fixedScroll");
  NProgress.done();
});
Router.events.on("routeChangeError", () => NProgress.done());

const npProgressColor = "#014841";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <style global jsx>{`
        #nprogress {
          pointer-events: none;
        }

        #nprogress .bar {
          background: ${npProgressColor};

          position: fixed;
          z-index: 1031;
          top: 0;
          left: 0;

          width: 100%;
          height: 2px;
        }

        /* Fancy blur effect */
        #nprogress .peg {
          display: block;
          position: absolute;
          right: 0px;
          width: 100px;
          height: 100%;
          box-shadow: 0 0 10px #29d, 0 0 5px #29d;
          opacity: 1;

          -webkit-transform: rotate(3deg) translate(0px, -4px);
          -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
        }

        /* Remove these to get rid of the spinner */
        #nprogress .spinner {
          display: block;
          position: fixed;
          z-index: 1031;
          top: 15px;
          right: 15px;
        }

        #nprogress .spinner-icon {
          width: 18px;
          height: 18px;
          box-sizing: border-box;

          border: solid 2px transparent;
          border-top-color: ${npProgressColor};
          border-left-color: ${npProgressColor};
          border-radius: 50%;

          -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
        }

        .nprogress-custom-parent {
          overflow: hidden;
          position: relative;
        }

        .nprogress-custom-parent #nprogress .spinner,
        .nprogress-custom-parent #nprogress .bar {
          position: absolute;
        }

        @-webkit-keyframes nprogress-spinner {
          0% {
            -webkit-transform: rotate(0deg);
          }
          100% {
            -webkit-transform: rotate(360deg);
          }
        }
        @keyframes nprogress-spinner {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.9.0/devicon.min.css"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Regular.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Medium.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-MediumItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-SemiBold.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-SemiBoldItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Light.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-LightItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Italic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-ExtraBold.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-ExtraBoldItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Bold.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-BoldItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-Black.ttf"
          as="font"
          crossOrigin="anomynous"
        />
        <link
          rel="preload"
          href="/font/TTF/OpenSauceSans-BlackItalic.ttf"
          as="font"
          crossOrigin="anomynous"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
