import Head from "next/head";
import { Container } from "react-bootstrap";
import NavbarMenu from "./NavbarMenu";

const Layout = ({ children }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
    </Head>

    <header>
      <NavbarMenu />
    </header>

    <main>
      <Container>{children}</Container>
    </main>
  </>
);

export default Layout;
