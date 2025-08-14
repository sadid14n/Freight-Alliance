import React from "react";
import Layout from "../components/Layout";

const Color = () => {
  return (
    <Layout>
      <div className="h-screen w-full flex justify-center items-center">
        <h1 className="text-8xl font-bold text-[#FF5533]">
          Freight <span className="text-[#035CA0]">Alliance</span>
        </h1>
      </div>
      <div className="h-52 w-full bg-primary">Primary</div>
      <div className="h-52 w-full bg-secondary">Secondary</div>
      <div className="h-52 w-full bg-accent">Accent</div>
      <div className="h-52 w-full bg-hover">Hover</div>
      <div className="h-52 w-full bg-text">Text</div>
      <div className="h-52 w-full bg-subtext">Sub text</div>
      <div className="h-52 w-full bg-light">light</div>
      <div className="h-52 w-full bg-dark">dark</div>
      <div className="h-52 w-full bg-success">success</div>
      <div className="h-52 w-full bg-border">border</div>
    </Layout>
  );
};

export default Color;
