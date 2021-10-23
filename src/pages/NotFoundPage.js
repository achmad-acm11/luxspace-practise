import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import NotFound from "parts/NotFound/NotFound";
import React from "react";

export default function NotFoundPage() {
  
  return (
    <Document>
      <Header />
      <NotFound />
      <Footer />
    </Document>
  );
}
