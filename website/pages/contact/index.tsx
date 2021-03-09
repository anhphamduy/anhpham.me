import createLayout from "../../components/layouts/layout";
import React, { useState } from "react";
import Title from "antd/lib/typography/Title";
import { Button, Form, Input, message } from "antd";
import TextArea from "antd/lib/input/TextArea";
import SocialMedia from "../../components/SocialMedia";
import Seo from "../../components/Seo";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <div className="contact">
      <Seo
        title="Contact"
        description="Reach out to Anh Pham through a contact form to have a conversation with me. I will be in touch soon in less than 24 hours."
      />
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
            <Form
              onFinish={async (values) => {
                setIsSubmitting(true);

                try {
                  await fetch("https://anhphamcms.azurewebsites.net/contacts", {
                    method: "POST",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  });
                  message.success(
                    "Submitted successfully! I will be in touch soon.",
                    10
                  );
                } catch (err) {
                  message.error("An error has occured!");
                }
                setIsSubmitting(false);
              }}
            >
              <Form.Item
                rules={[{ required: true, message: "Please input your name!" }]}
                name="name"
              >
                <Input size="large" placeholder="Your name" />
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "This is not a valid email!" },
                ]}
                name="email"
              >
                <Input size="large" placeholder="Your email" />
              </Form.Item>
              <Form.Item name="message">
                <TextArea rows={10} size="large" placeholder="Your message" />
              </Form.Item>
              <Form.Item>
                <Button
                  loading={isSubmitting}
                  size="large"
                  type="primary"
                  htmlType="submit"
                >
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
