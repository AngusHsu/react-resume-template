import React from "react";

const Footer = ({ data }) => {
  const { social } = data;
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {social.map(({ name, url, className }) => (
              <li key={name}>
                <a href={url}>
                  <i className={className} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
