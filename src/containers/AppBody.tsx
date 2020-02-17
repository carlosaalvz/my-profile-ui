import React from "react";
import "./AppBody.scss";


const AppBody: React.FC<{ header: string; quote?: string }> = ({
  header,
  quote,
}) => (
    <section className="body-content">
      <h1 className="typewriter">{header}</h1>
      {
        quote && <blockquote>{quote}</blockquote>
      }
    </section>
);

export default AppBody;