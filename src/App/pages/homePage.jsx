import React from "react";
import "./homePage.css";

import Table from "../home/components/history/table/index";
import Contain from "../home/components/contain";
import Flip from "../home/components/flip/index";
import Columns from "../home/components/columns/index";
import Footer from "../home/components/footer/index";
import Contact from "../home/components/header/contact/contact";
import { Header } from "../home/components/header/header";
import Slide from "../home/components/slideShow/index";

export default (props) => {
  return (
    <>
      <header>
        <Contact />
        <Header />
        <Slide />
      </header>
      <main>
        <Table />
        <Contain />
        <Flip />
        <Columns />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
