import Head from "next/head";
import createLayout from "./components/layouts/layout";
import React, { useState, useEffect } from "react";
import { Button, Divider } from "antd";
import "../styles/pages/home.less";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

const initialSentencesToType = ["I do React", "I code cool websites"];

const Home = () => {
  return (
    <div className="home">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div className="container intro-section">
        <div className="text-italic text-light">oh, hello</div>
        <Divider />

        <div>I am Anh, a software developer and creator</div>
        <AnimatedTyping />
        <Button type="primary" size="large">
          Get in touch
        </Button>
        <div>
          <BouncingChevron />
        </div>
      </div>
      <div className="brief-summary-section">
        <img src="/Slanted-Gradient.svg" />
        <div className="content primary-background">
          <div className="container">
            <div className="text-wrapper">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <Title level={2}>Based in Melbourne, Australia</Title>
              <Paragraph>
                I am a 20 year old technologist. By day I help build the future
                of legal service at Lawyers on Demand. By night I study my
                Bachelor at Melbourne University.
              </Paragraph>
              <Paragraph>
                I love to bring ideas to life with code. If you want to
                collaborate, hit me up and we can book something in.
              </Paragraph>
              <Paragraph>
                I love travelling and I am willing to relocate anywhere for
                work!
              </Paragraph>
              <Button type="primary" size="large">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
        <img src="/Slanted-Gradient.svg" className="inverted-image" />
      </div>
    </div>
  );
};

const BouncingChevron = () => {
  return <i className="fa fa-arrow-down" aria-hidden="true"></i>;
};

const AnimatedTyping = () => {
  const [doneTyping, setDoneTyping] = useState(false);
  const [sentencesToType, setSentencesToType] = useState(
    initialSentencesToType
  );

  const onTypingDone = () => {
    setSentencesToType(null);
    setTimeout(() => {
      setSentencesToType(initialSentencesToType);
    }, 200);
  };

  return (
    <div className="typist-wrapper">
      {sentencesToType && (
        <Typist onTypingDone={onTypingDone}>
          <Typist.Delay ms={1000} />
          {sentencesToType.map((i) => {
            return (
              <span key={i.toString()}>
                {i}
                {<Typist.Backspace count={20} delay={1000} />}
              </span>
            );
          })}
        </Typist>
      )}
    </div>
  );
};

export default createLayout(<Home />);
