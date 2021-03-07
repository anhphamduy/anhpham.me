import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import createLayout from "../../components/layouts/layout";
import "../../styles/pages/blog.less";
const temp = [1, 2, 3, 4, 5, 6, 7, 7, 5, 5, 65, 6, 56, 56];
const Blog = () => {
  return (
    <div className="blog container">
      <div className="py-5 pe-5">
        <style jsx>{`
          border-bottom: 0.5px solid #ececec;
        `}</style>
        <Title className="font-weight-extra-bold mb-0">All Posts</Title>
      </div>
      <div className="py-5">
        <style jsx>{`
          display: grid;
          grid-gap: 56px 56px;
          grid-template-columns: auto auto;

          @media screen and (max-width: 500px) {
            grid-template-columns: auto;
          }

          @media screen and (min-width: 501px) and (max-width: 1000px) {
            grid-template-columns: auto auto;
          }

          @media screen and (min-width: 1001px) and (max-width: 1400px) {
            grid-gap: 64px 82px;
            grid-template-columns: auto auto auto;
          }

          @media screen and (min-width: 1401px) {
            grid-gap: 64px 82px;
            grid-template-columns: auto auto auto;
          }
        `}</style>
        {temp.map(() => {
          return <BlogSnippet />;
        })}
      </div>
    </div>
  );
};

const BlogSnippet = () => {
  return (
    <div>
      <style jsx>{`
        border-bottom: 0.5px solid #ececec;
      `}</style>
      <Title level={4} className="font-weight-extra-bold text-underline mb-0">
        <a href="/">This is something this is another thing xxd</a>
      </Title>
      <Title className="mt-3" level={5}>
        December 21, 2020
      </Title>
      <Typography.Paragraph>
        Blog post 1 content xxddddxdxd, xdxd xdxd xdxd xd xd xd xd ....
      </Typography.Paragraph>
    </div>
  );
};

export default createLayout(<Blog />, true, false, false);
