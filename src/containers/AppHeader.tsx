import React from "react";

import "./AppHeader.scss";
import AppHeaderNavLink, { NavLink } from "../components/AppHeaderNavLink";

// define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
  logo: any;
  links: NavLink[];
};

const resumePdfUrl = 'https://profilebucket205124-prod.s3.us-east-2.amazonaws.com/public/Carlos+Alvarez+-+SWE.pdf';

const AppHeader: React.FC<AppHeaderProps> = React.memo(
  ({ logo, links }) => {
    return (
      <header className="app-header">
        <section className="app-title">
          <h1>{logo}</h1>
        </section>

        <section className="navigation">
          {links &&
            links.map((link: NavLink) => (
              <AppHeaderNavLink
                label={link.label}
                route={link.route}
                key={link.label}
              />
            ))}

            <button> 
              <a href={resumePdfUrl} target="_blank" rel="nofollow noopener noreferrer">
                Resume
              </a>
            </button>
        </section>
      </header>
    );
  }
);

export default AppHeader;