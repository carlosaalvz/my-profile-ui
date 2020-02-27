import React from "react";

import "./AppHeaderNavLink.scss";

// define a Navigation Link type for our links
export type NavLink = {
  label: string;
  route: string;
  key: string;
};

const AppHeaderNavLink: React.FC<NavLink> = React.memo(({ label, route, key}) => (
  <a href={route} className="nav-link">{label}</a>
));

export default AppHeaderNavLink;