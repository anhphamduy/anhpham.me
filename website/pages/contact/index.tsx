import createLayout from "../../components/layouts/layout";
import React from "react";
import "../../styles/pages/contact.less";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import SocialMedia from "../../components/SocialMedia";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contact-header py-5 pe-5">
          <style jsx>{`
            border-bottom: 0.5px solid #ececec;
          `}</style>
          <Title className="font-weight-extra-bold">Contact</Title>
          <Title level={4}>
            Shoot me a message! Looking forward to meeting you!
          </Title>
        </div>
        <div className="contact-form py-5">
          <div>
            {" "}
            <style jsx>{`
              max-width: 100%;

              @media (min-width: 900px) {
                max-width: 80%;
              }

              @media (min-width: 1100px) {
                max-width: 70%;
              }

              @media (min-width: 1300px) {
                max-width: 55%;
              }

              @media (min-width: 1500px) {
                max-width: 45%;
              }
            `}</style>
            <Form>
              <Form.Item>
                <Input size="large" placeholder="Your name" />
              </Form.Item>
              <Form.Item>
                <Input size="large" placeholder="Your email" />
              </Form.Item>
              <Form.Item>
                <TextArea rows={10} size="large" placeholder="Your message" />
              </Form.Item>
              <Form.Item>
                <Button size="large" type="primary">
                  Send a message
                </Button>
              </Form.Item>
            </Form>
          </div>
          <div className="py-3">
            <Title className="me-4" level={4}>
              Or I can be reached through
            </Title>
            <div>
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createLayout(<Contact />, false, false);
