import Breadcrumbs from "components/Breadcrumbs";
import CompleteRoom from "parts/DetailPage/CompleteRoom";
import Detail from "parts/DetailPage/Detail";
import Footer from "parts/Footer";
import Header from "parts/Header";
import React from "react";

export default function DetailPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumbs
        list={[
          { url: "/", name: "Home" },
          { url: "/", name: "Office Room" },
          { url: "/", name: "Details" },
        ]}
      />
      <Detail />
      <CompleteRoom />
      <Footer />
    </>
  );
}
