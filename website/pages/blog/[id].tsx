import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import React, { useEffect, useState } from "react";
import createLayout from "../../components/layouts/layout";
import "../../styles/pages/blog.less";
import marked from "marked";
import Seo from "../../components/Seo";

const BlogPost = (props) => {
  const post = props.post;
  return (
    <div className="blog-post container">
      <Seo
        title={post.name}
        description={props.post.content.substring(0, 150)}
      />
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
  const Component = createLayout(
    <BlogPost />,
    true,
    false,
    false,
    "Interested in my blog post?"
  ) as any;

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
