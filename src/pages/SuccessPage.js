import Breadcrumbs from "components/Breadcrumbs";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Success from "parts/SuccessPage/Success";
import React from "react";

export default function SuccessPage() {
  return (
    <Document>
      <Header />
      <Breadcrumbs
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <Success />
      <Footer />
    </Document>
  );
}
