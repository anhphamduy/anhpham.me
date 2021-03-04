import createLayout from "../../components/layouts/layout";
import React from "react";
import "../../styles/pages/project.less";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import SocialMedia from "../../components/SocialMedia";
import MobileFrame from "../../components/MobileFrame";

const Project = () => {
  return (
    <div className="project">
      <div className="">
        <div className="pt-5 project-section">
          <div className="container">
            <div>
              <MobileFrame />
            </div>
          </div>
          <div className="white-background-left mt-5">
            <div className="container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createLayout(<Project />, true, true, true);
