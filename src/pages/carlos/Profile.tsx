import React from 'react';
import AppHeader from "../../containers/AppHeader";
import "./Profile.scss";
import About from "../../components/About";
import {Experience} from "../../components/Experience";
import {headerProps} from "../../config/navigationLinks"

const Profile: React.FC = () => (
  <section className="main-pages">
    <AppHeader
      logo={headerProps.logo}
      links={headerProps.links}
    />

    <About/>

  </section>
);


export default Profile;
