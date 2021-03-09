import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import React, { useEffect, useState } from "react";
import createLayout from "../../components/layouts/layout";
import "../../styles/pages/blog.less";
import marked from "marked";

const BlogPost = ({ post }) => {
  return (
    <div className="blog-post container">
      <div className="py-5">
        <style jsx>{`
          border-bottom: 0.5px solid #ececec;
        `}</style>
        <Title level={4} className="font-weight-extra-bold">
          {post.name}
        </Title>
        <Title level={4} className="mb-0 mt-1">
          {moment(post.createdAt).format("MMM DD, yyyy")}
        </Title>
      </div>
      <div
        className="py-5 text-justify blog-post-content"
        dangerouslySetInnerHTML={{ __html: marked(post.content) }}
      ></div>
      <div>
        <style jsx>{`
          border-bottom: 0.5px solid #ececec;
        `}</style>
      </div>
    </div>
  );
};

const BlogPostWithLayout = (props) => {
  const Component = createLayout(<BlogPost />, true, false, false) as any;

  return <Component {...props} />;
};

BlogPostWithLayout.getInitialProps = async (ctx) => {
  const slug = ctx.query.id;
  const res = await fetch(
    `https://anhphamcms.azurewebsites.net/blog-post?slug=${slug}`
  );
  const json = await res.json();
  return { post: json[0] };
};

export default BlogPostWithLayout;
