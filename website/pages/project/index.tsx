import createLayout from "../../components/layouts/layout";
import React, { useEffect, useState } from "react";
import "../../styles/pages/project.less";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import SocialMedia from "../../components/SocialMedia";
import MobileFrame from "../../components/MobileFrame";

const Project = () => {
  const [margin, setMargin] = useState(null);
  const [marginRight, setMarginRight] = useState(null);

  const setTransformHeight = () => {
    const projectSection = document.querySelector(
      ".project-section .marvel-device"
    );
    const transformString = window.getComputedStyle(projectSection).transform;
    const scaleFactor = Number(transformString.match(/[\d\.]+/));
    if (scaleFactor && scaleFactor < 1) {
      const scalePixels = (1 - scaleFactor) * projectSection.clientHeight;
      setMargin(`-${scalePixels}px`);
      const scaleHorizontalPixels =
        (1 - scaleFactor) * projectSection.clientWidth;
      setMargin(`-${scalePixels}px`);
      setMarginRight(`-${scaleHorizontalPixels}px`);
    } else {
      setMargin(null);
      setMarginRight(null);
    }
  };

  useEffect(() => {
    setTransformHeight();
    window.addEventListener("resize", setTransformHeight);

    return () => {
      window.removeEventListener("resize", setTransformHeight);
    };
  }, []);

  return (
    <div className="project">
      <ProjectSection margin={margin} marginHorizontal={marginRight} />
      <ProjectSection
        margin={margin}
        marginHorizontal={marginRight}
        rightAlign={true}
      />
      <ProjectSection margin={margin} marginHorizontal={marginRight} />
    </div>
  );
};

const ProjectSection = ({ margin, marginHorizontal, rightAlign = false }) => {
  return (
    <div className={`pt-5 project-section ${rightAlign ? "right-align" : ""}`}>
      <div
        className={`container d-flex ${
          rightAlign ? "flex-row-reverse" : "flex-row"
        } align-items-center`}
      >
        <div
          style={{
            marginBottom: margin ? margin : "auto",
            marginRight:
              marginHorizontal && !rightAlign ? marginHorizontal : "auto",
            marginLeft:
              marginHorizontal && rightAlign ? marginHorizontal : "auto",
          }}
        >
          <MobileFrame />
        </div>
        <div
          className={`flex-grow-1 d-flex ${
            rightAlign ? "" : "align-items-center justify-content-center"
          }`}
        >
          <div className="w-75">
            <Title level={2} className="font-weight-extra-bold">
              Jojoe.co
            </Title>
            <Title level={4}>
              Jojoe is a marketplace that connects people with beauty and
              wellness professionals & businesses.
            </Title>
            <Title level={4}>
              Jojoe is a product that I had worked on over a year, with a tech
              stack includes: NodeJS, GraphQL and ReactJS. Despite its
              unsucessful launch, I had gained valuable experiences building a
              complicated system with a JS stack.
            </Title>
            <Title level={4}>
              The source code of the project is publicly available and is hosted{" "}
              <a
                href="https://dev.azure.com/jojeco/Jojoe/_build"
                className="font-weight-extra-bold text-underline"
              >
                here
              </a>{" "}
              through Azure Devops.
            </Title>
          </div>
        </div>
      </div>
      <div className="white-background-left mt-5">
        <div className="container"></div>
      </div>
    </div>
  );
};

export default createLayout(<Project />, true, true, true);
