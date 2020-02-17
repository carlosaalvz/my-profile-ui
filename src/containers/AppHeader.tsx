import React from "react";

import "./AppHeader.scss";
import AppHeaderNavLink, { NavLink } from "../components/AppHeaderNavLink";

// define our AppHeader properties that will be passed into the component
export type AppHeaderProps = {
  logo: any;
  links: NavLink[];
};

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
        </section>
      </header>
    );
  }
);

export default AppHeader;