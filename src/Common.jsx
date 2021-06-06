import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center container-md">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 justify-content-center my-2">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Udupa Technical</strong>
                  </h1>
                  <h4 className="my-3 mt-4 note">
                    We are the team of talented developers making websites
                  </h4>
                  <div className="mt-3">
                    <NavLink className="btn-default" to={props.visit}>
                      {props.btnname}
                    </NavLink>
                  </div>

                  <div className="col-lg-8 order-1 order-lg-2 header-img">
                    <img
                      src={props.imgsrc}
                      alt="Unable to load image"
                      className="img-fluid animated img-rounded my-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
