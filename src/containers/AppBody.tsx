import React from "react";
import "./AppBody.scss";


const AppBody: React.FC<{ intro: string; description?: string }> = ({
  intro,
  description,
}) => (
    <section className="body-content">
      <h1>{intro}</h1> {
        description && <blockquote>{description}</blockquote>
      }
    </section>
);

export default AppBody;