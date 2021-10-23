import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import Client from "parts/HomePage/Client";
import JustArrived from "parts/HomePage/JustArrived";
import React from "react";
import Document from "parts/Document";

export default function HomePage(props) {
  return (
    <Document>
      <Header position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Client />
      <Footer />
    </Document>
  );
}
