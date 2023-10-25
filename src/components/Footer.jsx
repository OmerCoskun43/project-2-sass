import React from "react";
import footer from "../scss/footer.module.scss";

const Footer = () => {
  return (
    <div className={footer.div}>
      <p className={footer.header}>
        Copyright by Omer COSKUN {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
