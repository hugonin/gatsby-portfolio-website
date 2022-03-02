import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import GrowthTips from "../components/GrowthTips";
import Testimonials from "../components/Testimonials";
import Work from "../components/Work";
import CtaSection from "../components/CtaSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Services />
      <GrowthTips />
      <Testimonials />
      <Work />
      <CtaSection />
    </Layout>
  );
}
