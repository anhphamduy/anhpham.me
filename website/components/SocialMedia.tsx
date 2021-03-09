import { Button } from "antd";
import React from "react";

const SocialMedia = () => {
  return (
    <React.Fragment>
      <style jsx>{`
        a {
          border-bottom: none !important;
          opacity: 1;
        }
      `}</style>
      <a
        href="https://stackoverflow.com/users/8005315/anh-pham"
        target="_blank"
      >
        <Button
          type="primary"
          shape="circle"
          icon={<i className="fa fa-stack-overflow" aria-hidden="true" />}
          onClick={() => {}}
          size="large"
        ></Button>
      </a>
      <a href="https://github.com/anhphamduy" target="_blank">
        <Button
          className="mx-4"
          type="primary"
          shape="circle"
          icon={<i className="fa fa-github" aria-hidden="true" />}
          onClick={() => {}}
          size="large"
        ></Button>
      </a>
      <a href="https://www.linkedin.com/in/anhphamduy/" target="_blank">
        <Button
          type="primary"
          shape="circle"
          icon={<i className="fa fa-linkedin" aria-hidden="true" />}
          onClick={() => {}}
          size="large"
        ></Button>{" "}
      </a>
    </React.Fragment>
  );
};

export default SocialMedia;
