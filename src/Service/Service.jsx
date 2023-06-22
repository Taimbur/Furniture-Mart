import React from "react";
import serviData from "..//assets/data/ServiceData";
import "../Service/Service.css";
const Service = () => {
  return (
    <div className="container text-center">
      <div className="row ">
        {serviData.map((item, index) => (
          <div className="col" key={index}>
            <div
              className="card mb-3"
              style={{ width: "300px", background: `${item.bg}` }}
            >
              <div className="row g-0">
                <div className="col-md-2">
                  <li className={item.icon} id="icon"></li>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
