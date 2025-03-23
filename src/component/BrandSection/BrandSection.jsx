import React from "react";

export const BrandSection = () => {
  const brands = [
    "Fox",
    "Lonely Planet",
    "Intuit",
    "Carvana",
    "Kiva",
    "Devacurl",
  ];
  return (
    <section className="brands_section">
      {brands.map((brand, index) => (
        <span key={index} className="brand_logo">
          {brand}
        </span>
      ))}
    </section>
  );
};
