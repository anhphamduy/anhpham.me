import createLayout from "../../components/layouts/layout";
import React from "react";
import "../../styles/pages/about.less";
import Title from "antd/lib/typography/Title";
import Seo from "../../components/Seo";

const About = () => {
  return (
    <div className="about">
      <Seo
        title="About"
        description="About Anh Pham a creator, developer, desginer. About Anh Pham's experiences, achivements, educations."
      />
      <div className="py-5 headshot-section">
        <div className="container">
          <div className="d-flex flex-lg-row flex-column align-items-lg-center justify-content-center">
            <img
              width="240px"
              alt="Anh Pham's headshot"
              src="/headshot.jpg"
              className="headshot"
            />
            <div className="flex-grow-1 ps-0 ps-lg-3 mt-4 mt-lg-0">
              <div>
                <style jsx>{`
                  max-width: 80%;

                  @media (max-width: 600px) {
                    max-width: 100%;
                  }
                `}</style>
                <Title className="font-weight-extra-bold">
                  Oh hello! - I am Anh
                </Title>
                <Title level={4}>
                  An avid developer, creator who strives to push the limits to
                  pursuit perfection.
                </Title>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 cv-section bg-primary">
        <div className="container">
          <div className="row mb-lg-5">
            <div className="col-12 col-md-7 pe-lg-5 mb-4 mb-lg-0">
              <Title level={2}>Summary</Title>
              <Title level={5}>
                I'm a young technologist with experiences developing software,
                working with clients, understanding user behaviors, devising
                product strategies, creating prototypes and launching products
                people love.
              </Title>
              <Title level={5}>
                I'm currently a software developer at LOD - a world leading
                legal services firm. Aside from LOD, I'm in my final year of
                Bachelor of Science at The University of Melbourne.
              </Title>
              <Title level={5}>Willing to relocate AOE!</Title>
            </div>
            <div className="col-12 col-md-5 mb-4 mb-lg-0">
              <Title level={2}>Occupation</Title>
              <Title level={5}>
                Software Developer at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="https://lodlaw.com/"
                >
                  LOD
                </a>{" "}
                (2021 - Current)
              </Title>
              <Title level={5} className="text-light text-italic mt-0">
                Junior Software Developer at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="https://lodlaw.com/"
                >
                  LOD
                </a>{" "}
                (2019 - 2021)
              </Title>
              <Title level={5} className="text-light text-italic mt-0">
                Software Engineer Intern at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="https://lodlaw.com/"
                >
                  LOD
                </a>{" "}
                (2018 - 2019)
              </Title>
              <Title level={5} className="text-light text-italic mt-0">
                Data Science Assitant at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="https://anu.edu.au"
                >
                  ANU
                </a>{" "}
                (2018)
              </Title>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-7 pe-5 mb-4 mb-lg-0">
              <Title level={2}>Achievement</Title>
              <Title level={5} className="mt-0">
                <a
                  href="https://codebrew.com.au/"
                  target="_blank"
                  className="text-underline"
                >
                  Codebrew
                </a>{" "}
                Hackathon top 10 (2020)
              </Title>
              <Title level={5} className="mt-0">
                2018{" "}
                <a
                  target="_blank"
                  href="https://2018.pycon-au.org/"
                  className="text-underline"
                >
                  PyCon
                </a>{" "}
                Presenter
              </Title>
              <Title level={5} className="mt-0">
                2018{" "}
                <a
                  target="_blank"
                  className="text-underline"
                  href="https://www.webdirections.org/"
                >
                  Web Directions Summit
                </a>{" "}
                Presenter
              </Title>
            </div>
            <div className="col-12 col-md-5 mb-4 mb-lg-0">
              <Title level={2}>Education</Title>
              <Title level={5}>
                Bachelor of Science at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="https://unimelb.edu.au"
                >
                  The University of Melbourne
                </a>{" "}
                (2019 - 2022)
              </Title>
              <Title level={5} className="text-light text-italic mt-0">
                ACT Senior Secondary Certificate and Tertiary Entrance Statement
                at{" "}
                <a
                  className="text-underline"
                  target="_blank"
                  href="http://www.gungahlincollege.act.edu.au/"
                >
                  Gungahlin College
                </a>{" "}
                (2016 - 2018)
              </Title>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createLayout(<About />);
