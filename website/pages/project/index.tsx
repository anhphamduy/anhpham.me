import createLayout from "../../components/layouts/layout";
import React from "react";
import "../../styles/pages/project.less";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import SocialMedia from "../../components/SocialMedia";

const Project = () => {
  return (
    <div className="project">
      <div className="container">
        {/* <Title
          level={1}
          className="mb-0 font-weight-extra-bold d-flex flex-row align-items-end"
        >
          <style jsx>{`
            font-size: 80px;
            color: #014841;
          `}</style>
          <div>Pro</div>
          <div className="pb-3">j</div>
          <div>ects</div>
        </Title> */}
      </div>
      <div className="py-5">
        <style jsx>{`
          background-color: #014841;
          margin-top: -20px;
        `}</style>
        <div className="white-background-left">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default createLayout(<Project />, true, true, true);
