import React from 'react';
import AppHeader, { AppHeaderProps } from "../../containers/AppHeader";
import "./Profile.scss";
import {About} from "../../components/About";
import {Experience} from "../../components/Experience";

const headerProps: AppHeaderProps = {
  logo: "ALVZ",
  links: [
    {
      label: "About",
      route: "#about",
      key: 'about'
    },
    {
      label: "Experience",
      route: "#experience",
      key: 'experience'
    }
  ]
};

const Profile: React.FC = () => (
  <section className="main-pages">
    <AppHeader
      logo={headerProps.logo}
      links={headerProps.links}
    />

    <About/>

    <Experience/>
  </section>
);


export default Profile;
