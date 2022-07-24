import React, { useState } from "react";
import { FaCocktail, FaShuttleVan, FaBeer, FaTag } from "react-icons/fa";

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: <FaShuttleVan />,
      title: "free delivery",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: <FaTag />,
      title: "offers weekly",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
    {
      icon: <FaBeer />,
      title: "free beer occasionally",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!",
    },
  ]);
  return (
    <section className="services">
      {services.map((item, index) => {
        return (
          <article key={index} className="service">
            <span>{item.icon}</span>
            <h4>{item.title}</h4>
            <p>{item.info}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Services;
