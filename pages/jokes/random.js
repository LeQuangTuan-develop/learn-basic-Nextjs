import React from "react";
import { getRandomJoke } from "../../lib/joke";
import Layout from "../../components/Layout";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card>
        <Card.Body>
          <Card.Title>Here a random joke story</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/" passHref>
            <Button variant="primary">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

// Du lieu phu thuoc vao moi request nhung van tao ra HTML tinh cho frontend => tot cho SEO
export const getServerSideProps = async () => {
  let joke = await getRandomJoke();
  // joke = false;

  if (!joke)
    return {
      notFound: true,
    };

  // if (!joke) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      joke,
    },
  };
};

export default Random;
