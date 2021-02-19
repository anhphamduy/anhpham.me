import Head from "next/head";
import createLayout from "./components/layouts/layout";
import React, { useState, useEffect } from "react";
import { Button, Divider } from "antd";
import "../styles/pages/home.less";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";

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
        <BouncingChevron />
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
