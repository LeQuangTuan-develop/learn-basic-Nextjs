import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/posts";

const Post = ({ post }) => {
  return (
    <Layout>
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts" passHref>
            <Button variant="primary">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// lay du lieu kieu tinh, va du lieu tinh nay phu thuoc vao params
export const getStaticPaths = async () => {
  const paths = await getPostIds();
  console.log(paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default Post;
