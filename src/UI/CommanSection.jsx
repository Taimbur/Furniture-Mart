import React from "react";
import "../UI/CommanSection.css";

const CommanSection = ({ title }) => {
  return (
    <section className="section-c">
      <div className="container text-center">
        <h1 className=" fs-1 fst-bold fw-bold">{title}</h1>
      </div>
    </section>
  );
};

export default CommanSection;
