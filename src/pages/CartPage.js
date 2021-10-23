import Breadcrumbs from "components/Breadcrumbs";
import Cart from "parts/CartPage/Cart";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React from "react";

export default function CartPage() {
  return (
    <Document>
      <Header />
      <Breadcrumbs
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <Cart />
      <Footer />
    </Document>
  );
}
