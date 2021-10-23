import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import Client from "parts/HomePage/Client";
import JustArrived from "parts/HomePage/JustArrived";
import React from "react";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import useModalDOM from "helpers/hooks/useModalDOM";


export default function HomePage(props) {
  useScrollAnchor();
  useModalDOM();
  return (
    <>
      <Header position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Client />
      <Footer />
    </>
  );
}
