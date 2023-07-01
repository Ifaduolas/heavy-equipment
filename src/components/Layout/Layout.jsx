import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Links from "../../routers/Links";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Links />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
