import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
const Infomation = () => {
  return (
    <section className="section-information">
      <div className="container">
        <div className="row text-center overflow-hidden">
            <div className="col-lg-6">
            <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_s9rvx4lt.json"
            style={{ height: "400px", width: "400px" }}
          >
          </Player>
            </div>
            <div className="col-lg-6 align-self-center informations">
            <h1 className="informations--head">Contact Me </h1>
            <div className="d-grid gap-2 col-6 mx-auto">
            <a href="https://bit.ly/3dq6Ye5" target="_blank" rel='noreferrer' className="btn btn-primary socail mt-3 font"><i className="fab fa-facebook-f facebook"></i> Facebook</a>
            <a href="https://bit.ly/3vYVCEB" target="_blank" rel='noreferrer' className="btn btn-primary socail mt-2 font"><i className="fab fa-github"></i> Github</a>
            </div>
            </div>
  
          
        </div>
      </div>
    </section>
  );
};

export default Infomation;
