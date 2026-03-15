import React from "react";
import logo from "../../assets/logo.png";

const FooterLeft = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-semibold">English Janala</h2>
        <img src={logo} alt="Logo" />
        <h2 className="text-xl font-semibold bangla-font">জানালা</h2>
      </div>
      <h3 className="text-2xl font-medium">ইংরেজি শিখুন সহজে</h3>
      <p>Providing ED-Tech Applications since 2025</p>
    </div>
  );
};

export default FooterLeft;
