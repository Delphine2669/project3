import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear);
  }, []);

  const location = useLocation();

  const excludedPaths = [
    "/login",
    "/SignUp",
    "/adminpage",
    "/addvideos",
    "/editvideos",
    "/deletevideos",
    "/editviewers",
  ];

  const hideFooter = excludedPaths.includes(location.pathname);

  if (hideFooter) {
    return null;
  }

  return (
    <footer className="foot">
      <div className="logo-link">
        <a
          href="https://www.origins-digital.com/"
          target="blank"
          className="logo-link-origins-digital"
        >
          <img
            src="https://assets.website-files.com/605c6a95b5fd727aeb0983c5/609504d9f9c39fe32fc1850e_OriginsLogo_Final-RGB-10.png"
            alt="logo of Origins digital"
            className="image-1"
          />
        </a>
        <a
          href="https://www.euromediagroup.com/home"
          target="blank"
          className="logo-link-euro-media-group"
        >
          <img
            src="https://assets.website-files.com/605c6a95b5fd727aeb0983c5/605deb704b73251b7edd6cc9_Logo%20-%20EMG.png"
            alt="logo of euro media group"
            className="image-2"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/origins-digital-emg/"
          target="blank"
          className="logo-link-linkedin"
        >
          <img
            src="https://assets.website-files.com/605c6a95b5fd727aeb0983c5/605ded6c22941fe410b20205_linkedin-189-721962%20(1).png"
            alt="linked in logo"
            className="social-icon"
          />
        </a>
      </div>
      <div className="link">
        <a
          href="https://www.euromediagroup.com/terms"
          target="blank"
          className="terms-menu-link"
        >
          Terms &amp; conditions
        </a>
        <a
          href="https://www.euromediagroup.com/privacy"
          target="blank"
          className="privacy-menu-link"
        >
          privacy policy
        </a>
        <div className="all-right">
          © 2013 - <span>{year}</span> Origins. All rights reserved
        </div>
      </div>
    </footer>
  );
}
