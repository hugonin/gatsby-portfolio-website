import React from "react";

import EntryService from "./EntryService";

import serviceData from "../data/service-data";

export default function Services() {
  return (
    <section className="py-16 lg:py-24 shadow-inner  bg-slate-400">
      <div className="lg:flex justify-center gap-x-20">
        {serviceData.map((serviceItem) => (
          <EntryService
            key={serviceItem.id}
            icon={serviceItem.icon}
            title={serviceItem.title}
            content={serviceItem.content}
          />
        ))}
      </div>
    </section>
  );
}
