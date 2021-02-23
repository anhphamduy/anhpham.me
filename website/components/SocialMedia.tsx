import { Button } from "antd";
import React from "react";

const SocialMedia = () => {
  return (
    <React.Fragment>
      <Button
        type="primary"
        shape="circle"
        icon={<i className="fa fa-stack-overflow" aria-hidden="true" />}
        onClick={() => {}}
        size="large"
      ></Button>
      <Button
        className="mx-4"
        type="primary"
        shape="circle"
        icon={<i className="fa fa-github" aria-hidden="true" />}
        onClick={() => {}}
        size="large"
      ></Button>
      <Button
        type="primary"
        shape="circle"
        icon={<i className="fa fa-linkedin" aria-hidden="true" />}
        onClick={() => {}}
        size="large"
      ></Button>
    </React.Fragment>
  );
};

export default SocialMedia;
