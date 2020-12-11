import React from "react";

import "./AppHeader.scss";
import AppHeaderNavLink, { NavLink } from "../components/AppHeaderNavLink";

// define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
  logo: any;
  links: NavLink[];
};

const resumePdfUrl = 'http://profilebucket205124-prod.s3.amazonaws.com/public/Carlos+Alvarez+-+SWE.pdf';

const AppHeader: React.FC<AppHeaderProps> = React.memo(
  ({ logo, links }) => {
    return (
      <div className="app-header">
          {links &&
            links.map((link: NavLink) => (
              <AppHeaderNavLink
                label={link.label}
                route={link.route}
                key={link.label}
              />
            ))}

            <button className="resume-button"> 
              <a href={resumePdfUrl} target="_blank" rel="nofollow noopener noreferrer">
                Resume
              </a>
            </button>
      </div>
    );
  }
);

export default AppHeader;