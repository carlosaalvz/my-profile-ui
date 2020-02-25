import React from 'react';
import AppHeader, { AppHeaderProps } from "../../containers/AppHeader";
import AppBody from "../../containers/AppBody";

const headerProps: AppHeaderProps = {
  logo: "ALVZ",
  links: [
    {
      label: "Twitter",
      route: "/logs/list"
    },
    {
      label: "Github",
      route: "/logs/create"
    }
  ]
};

const Profile: React.FC = () => (
  <main className="App">
    <AppHeader
      logo={headerProps.logo}
      links={headerProps.links}
    />
    <AppBody 
      intro="Hey, I'm Carlos Alvarez" 
      description={"I'm a software engineer based out of Dallas - Fort Worth, TX"}
    />
  </main>
);


export default Profile;
