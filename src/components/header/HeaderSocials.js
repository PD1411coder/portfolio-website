import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { GrFacebookOption } from "react-icons/gr";
export const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/prathamesh-desai-46b9abb3/"
        target="_blank"
      >
        <GrLinkedinOption />
      </a>
      <a href="https://github.com/PD1411coder" target="_blank">
        <GrGithub />
      </a>
      <a href="https://www.facebook.com/prathamesh.desai.752" target="_blank">
        <GrFacebookOption />
      </a>
    </div>
  );
};
