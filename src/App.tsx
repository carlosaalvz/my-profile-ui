import React from 'react';
import AppHeader, { AppHeaderProps } from "./containers/AppHeader";
import AppBody from "./containers/AppBody";

const headerProps: AppHeaderProps = {
  logo: "ALVZ",
  links: [
    {
      label: "Twitter ",
      route: "/logs/list"
    },
    {
      label: "Github",
      route: "/logs/create"
    }
  ]
};

const bodyQuote = `Welcome to my Carlos' profile`;
const App: React.FC = () => (
  <main className="App">
    <AppHeader
      logo={headerProps.logo}
      links={headerProps.links}
    />
    <AppBody header="Howdy!" quote={bodyQuote}>
    </AppBody>
  </main>
);


export default App;
