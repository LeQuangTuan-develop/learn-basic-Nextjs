import Layout from "../../components/Layout";
import { Button, Card } from "react-bootstrap";
import Link from "next/link";
import { getBooks } from "../../lib/book";

const Books = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <Card key={book.bookFileName} className="my-3 shadow">
          <Card.Body>
            <Card.Title>{book.bookFileName}</Card.Title>
            <Card.Text>{book.bookContent}</Card.Text>
            <Link href="/" passHref>
              <Button variant="primary">Back</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Layout>
  );
};

// Du lieu phu thuoc vao moi request nhung van tao ra HTML tinh cho frontend => tot cho SEO
export const getStaticProps = async () => {
  const books = await getBooks();

  console.log(books);

  return {
    props: {
      books,
    },
  };
};

export default Books;
