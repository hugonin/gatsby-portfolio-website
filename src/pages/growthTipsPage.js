import React from "react";
import Layout from "../components/Layout";
import PrimaryCard from "../components/PrimaryCard";
import SecondaryCard from "../components/SecondaryCard";

export default function GrowthTipsPage() {
  return (
    <Layout>
      <section className="pt-24 pb-40 lg:pt-40 lg:pb-60 flex justify-center">
        <ul className="mx-8 w-full md:mx-auto md:w-11/12 lg:mx-auto lg:w-2/3 xl:w-1/2">
          <PrimaryCard />
          <SecondaryCard />
        </ul>
      </section>
    </Layout>
  );
}
