import { Typography } from "antd";
import Title from "antd/lib/typography/Title";
import moment from "moment";
import React, { useEffect, useState } from "react";
import createLayout from "../../components/layouts/layout";
import "../../styles/pages/blog.less";
import Link from "next/link";
import Seo from "../../components/Seo";

const Blog = (props) => {
  return (
    <div className="blog container">
      <Seo
        title="Blog"
        description="A collection of Anh Pham's writting. The blog includes all topics that Anh Pham interested in: tech, humanities or just random ideas of Anh Pham"
      />
      <div className="py-5">
        <style jsx>{`
          border-bottom: 0.5px solid #ececec;
        `}</style>
        <Title className="font-weight-extra-bold mb-0">All Posts</Title>
      </div>
      <div>
        <style jsx>{`
          display: grid;
          grid-gap: 0px 56px;
          grid-template-columns: auto auto;

          @media screen and (max-width: 500px) {
            grid-template-columns: auto;
          }

          @media screen and (min-width: 501px) and (max-width: 1000px) {
            grid-template-columns: auto auto;
          }

          @media screen and (min-width: 1001px) and (max-width: 1400px) {
            grid-gap: 0px 82px;
            grid-template-columns: auto auto auto;
          }

          @media screen and (min-width: 1401px) {
            grid-gap: 0px 82px;
            grid-template-columns: auto auto auto;
          }
        `}</style>
        {props.posts.map((post) => {
          return <BlogSnippet post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

const BlogSnippet = ({ post }) => {
  return (
    <div className="py-4">
      <style jsx>{`
        border-bottom: 0.5px solid #ececec;
      `}</style>
      <Title level={4} className="font-weight-extra-bold text-underline mb-0">
        <Link href={`/blog/${post.slug}`}>
          <a>{post.name}</a>
        </Link>
      </Title>
      <Title className="mt-1 mb-3" level={5}>
        {moment(post.createdAt).format("MMM DD, yyyy")}
      </Title>
      <Typography.Paragraph className="mb-0">
        {post.snippet + "..."}
      </Typography.Paragraph>
    </div>
  );
};

const BlogWithLayout = (props) => {
  const Component = createLayout(
    <Blog />,
    true,
    false,
    false,
    "Interested in my blog posts?"
  ) as any;

  return <Component {...props} />;
};

BlogWithLayout.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://anhphamcms.azurewebsites.net/blog-post-summary"
  );
  const json = await res.json();
  return { posts: json };
};

export default BlogWithLayout;
