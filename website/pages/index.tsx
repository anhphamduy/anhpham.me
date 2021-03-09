import { Button, Card, Divider } from "antd";
import Meta from "antd/lib/card/Meta";
import Title from "antd/lib/typography/Title";
import Link from "next/link";
import React, { useState } from "react";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import createLayout from "../components/layouts/layout";
import Seo from "../components/Seo";
import "../styles/pages/home.less";

const initialSentencesToType = ["I do React", "I code cool websites"];

const Home = () => {
  return (
    <div className="home">
      <Seo
        title="Home"
        description="Welcome to Anh Pham page. Summary of Anh Pham - a creator/developer/designer includes his talks his technologies and his philosophy."
      />
      <div className="container intro-section py-5 my-5">
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
        <div className="content">
          <div className="container">
            <div className="left-align-text-section py-5">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <Title className="font-weight-extra-bold" level={2}>
                Based in Melbourne, Australia
              </Title>
              <Title level={5}>
                I am a 20 year old technologist. By day I help build the future
                of legal service at Lawyers on Demand. By night I study my
                Bachelor at Melbourne University.
              </Title>
              <Title level={5}>
                I love to bring ideas to life with code. If you want to
                collaborate, hit me up and we can book something in.{" "}
              </Title>
              <Title level={5}>
                I love travelling and I am willing to relocate anywhere for
                work! Learn More About Me
              </Title>
              <Link href="/about">
                <a>
                  <Button className="mt-5" type="primary" size="large">
                    Learn More About Me
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 container publication-section">
        <Title className="mb-4" level={2}>
          Publications
        </Title>

        <div className="row">
          <div className="col-12 col-lg-4  pe-lg-2 mb-3 mb-lg-0">
            <PublicationCard
              place="Web Directions Summit"
              title="The truth behind Virtual DOM"
              blurb="https://www.webdirections.org/wds18/speakers/anh-pham.php"
              talk="https://conffab.com/video/the-truth-behind-virtual-dom/"
              description="The talk was about the performance of Virtual DOM, and why it is actually not as fast as most engineers think."
            />
          </div>
          <div className="col-12 col-lg-4 px-lg-1 mb-3 mb-lg-0">
            <PublicationCard
              place="PyCon AU"
              title="Emojifer in @ school"
              blurb="https://2018.pycon-au.org/education-showcase"
              talk="https://youtu.be/QNAgPjbn0Ws?t=4599"
              description="I talked about how I use Machine Learning with SPAs as well as Mobile Application using Python and React Native."
            />
          </div>
          <div className="col-12 col-lg-4 ps-lg-2 ">
            <PublicationCard
              place="CanberraJS"
              title="Building a better developer experience for React and React Native"
              blurb="https://www.meetup.com/CanberraJS/events/252103208/"
              talk="https://youtu.be/QNAgPjbn0Ws?t=4599"
              description="My talk was about Navigation APIs in React Native: iOs Navgation & React Navigation"
            />
          </div>
        </div>
      </div>
      <div className="technology-section bg-primary">
        <div className="py-5 container ">
          <div className="left-align-text-section mb-5">
            <Title className="font-weight-extra-bold" level={2}>
              Working with various techonologies
            </Title>
            <Title level={5} className="">
              Some technologies are better suited to some problems than others.
              Knowing different technologies helps me know the problems well and
              how to solve the problems efficiently.
            </Title>
          </div>
          <div>
            <style jsx>{`
              i {
                font-size: 60px;
                margin-right: 30px;
              }

              @media (max-width: 600px) {
                i {
                  font-size: 48px;
                  margin-right: 12px;
                }
              }

              @media (max-width: 350px) {
                i {
                  font-size: 35px;
                  margin-right: 8px;
                }
              }
            `}</style>
            <i className="devicon-flutter-plain"></i>
            <i className="devicon-react-original"></i>
            <i className="devicon-python-plain"></i>
            <i className="devicon-postgresql-plain"></i>
            <i className="devicon-kubernetes-plain"></i>
            <i className="devicon-xd-plain"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const PublicationCard = ({ blurb, talk, place, title, description }) => {
  const actions = [];
  if (blurb) {
    actions.push(
      <a href={blurb}>
        <strong>View Blurb</strong>
      </a>
    );
  }
  if (talk) {
    actions.push(
      <a href={talk}>
        <strong>View Talk</strong>
      </a>
    );
  }
  return (
    <Card className="d-flex flex-column" title={place} actions={actions}>
      <Meta className="flex-grow-1" title={title} description={description} />
    </Card>
  );
};

const BouncingChevron = () => {
  return <i className="fa fa-arrow-down" aria-hidden="true"></i>;
};

const AnimatedTyping = () => {
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
