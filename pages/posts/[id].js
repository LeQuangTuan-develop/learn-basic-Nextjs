import Link from "next/link";
import React from "react";
import { Button, Card, Spinner } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getPostById, getPostIds } from "../../lib/posts";
import { useRouter } from "next/router";
import styles from "../../styles/spinner.module.css";

const Post = ({ post }) => {
  const router = useRouter();

  // Neu trang chưa tạo ra, isFallback của router === true
  // và trang tạm thời sau đây sẽ được render

  if (router.isFallback) {
    return (
      <Spinner
        animation="border"
        role="status"
        variant="dark"
        className={styles.spinnerLg}
      >
        <span className="sr-only">LOADING ...</span>
      </Spinner>
    );
  }

  // Khi getStaticProps chay xong lan dau tien
  // Cac lan sau thi trang 6 (vd) se được đưa vào danh sách pre-render
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
  const paths = await getPostIds(5);
  console.log(paths);

  return {
    paths,
    // fallback: false,  // bat ky path nào không returned bởi getStaticPaths se dẫn đến trang 404
    fallback: true, // path nào không được returned thì sẽ ngay lập tức show trang tạm thời => đợi getStaticProps chay
    // =>  getStaticProps chay xong => return trang hoàn chỉnh
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);

  return {
    props: {
      post,
    },
    revalidate: 1, // Gui request len check db bài viết đó có thay dổi không
    // nếu thay đổi thì build lại trang html tĩnh
  };
};

export default Post;
