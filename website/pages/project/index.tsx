import createLayout from "../../components/layouts/layout";
import React, { useEffect, useState } from "react";
import "../../styles/pages/project.less";
import Title from "antd/lib/typography/Title";
import "../../styles/devices.less";

const Project = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSuperSmall, setIsSuperSmall] = useState(false);

  const setTransformHeight = () => {
    setIsMobile(window.innerWidth < 1000);
    setIsSuperSmall(window.innerWidth < 500);
  };

  useEffect(() => {
    setTransformHeight();
    window.addEventListener("resize", setTransformHeight);

    return () => {
      window.removeEventListener("resize", setTransformHeight);
    };
  }, []);

  return (
    <div className="project py-5">
      <ProjectSection
        title="Lawyers on Demand App"
        isMobile={isMobile}
        isSuperSmall={isSuperSmall}
        content={<img src="/lodapp.png" width="100%" />}
        description={
          <React.Fragment>
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
          </React.Fragment>
        }
      />
      <ProjectSection
        title="Jojoe.co"
        rightAlign={true}
        isMobile={isMobile}
        isSuperSmall={isSuperSmall}
        content={<img src="/jojoe-full.png" width="100%" />}
        description={
          <React.Fragment>
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
          </React.Fragment>
        }
      />
      <div className="emojifier-project-section">
        <ProjectSection
          title="Emojifier"
          isMobile={isMobile}
          isSuperSmall={isSuperSmall}
          content={
            <div className="emoji-project-container">
              <div className="emoji-project">
                <div className="emoji-cont">
                  <div className="emoji" />
                </div>
                <div className="shadow" />
              </div>
            </div>
          }
          description={
            <React.Fragment>
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
                The source code of the project is publicly available and is
                hosted{" "}
                <a
                  href="https://dev.azure.com/jojeco/Jojoe/_build"
                  className="font-weight-extra-bold text-underline"
                >
                  here
                </a>{" "}
                through Azure Devops.
              </Title>
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

const ProjectSection = ({
  rightAlign = false,
  isMobile,
  isSuperSmall,
  title,
  description,
  content,
}) => {
  return (
    <div
      className={`pt-5 project-section ${isMobile && "mobile mb-5"} ${
        rightAlign ? "right-align" : ""
      }`}
    >
      <div
        className={`container d-flex ${
          isMobile
            ? "flex-column"
            : rightAlign
            ? "flex-row-reverse"
            : "flex-row"
        } align-items-center`}
      >
        <div
          style={{
            width: isSuperSmall ? "80%" : isMobile ? "50%" : "100%",
          }}
          className={isMobile ? "mb-2" : ""}
        >
          <div className="deviceContainer pt-4">
            <div className="iphone black portrait">
              <div className="caseBorder"></div>
              <div className="case"></div>
              <div className="screen"></div>
              <div className="camera"></div>
              <div className="speaker"></div>
              <div className="homeButtonBorder"></div>
              <div className="homeButton"></div>
              <div className="content">{content}</div>
            </div>
          </div>
        </div>
        <div
          className={`flex-grow-1 d-flex ${
            rightAlign ? "" : "align-items-center justify-content-center"
          }`}
        >
          <div className={isMobile ? "" : "w-75"}>
            <Title level={2} className="font-weight-extra-bold">
              {title}
            </Title>
            {description}
          </div>
        </div>
      </div>
      <div className={`white-background-left mt-5 ${isMobile ? "mobile" : ""}`}>
        {isMobile && (
          <div className="container">
            <div />
          </div>
        )}
      </div>
    </div>
  );
};

export default createLayout(<Project />, true, true, true);
