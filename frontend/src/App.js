import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { HomePage } from "./screens/HomePage";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="py-3">
        </Container>
        <HomePage/>
      </main>
      <Footer/>
    </>
  );
};

export default App;
