import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPosts } from "../../lib/posts";
import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <Layout>
      <h1>My Posts</h1>
      <Container>
        <Row>
          {posts.map((post) => (
            <Card
              key={post.id}
              border="success"
              style={{ width: "100%", margin: "4px 0" }}
              className="my-3 shadow"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.body}</Card.Text>
                <Link href={`/posts/${post.id}`} passHref>
                  <Card.Link>
                    <Button variant="info">See more</Button>
                  </Card.Link>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

// get static data from backend / db / API

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
