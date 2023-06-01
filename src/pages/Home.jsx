import Header from "../components/Header";
import Iklan from "../components/Iklan";
import Intro from "../components/Intro";
import Testimoni from "../components/Testimoni";
import Langganan from "../components/Langganan";
import Footer from "../components/Footer";
import Snk from "../components/Snk";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-G83CGRLQP3";
    script.async = true;
    document.body.appendChild(script);

    // Deklarasi variabel dataLayer
    const dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "G-G83CGRLQP3");
  }, []);

  return (
    <>
      <Header />
      <Iklan />
      <Intro />
      <Snk />
      <Testimoni />
      <Langganan />
      <Footer />
    </>
  );
};

export default Home;
