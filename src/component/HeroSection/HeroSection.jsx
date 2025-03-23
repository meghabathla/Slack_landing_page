import React from "react";
import "./HeroSection.css";
import { Button } from "../Button/Button";

export const HeroSection = () => {
  return (
    <section className="hero_section">
      {/* <div className="hero_section_container"> */}
      <div className="hero_first_section">
        <h1 className="hero_title">Slack is where the future works</h1>
        <p className="hero_description">
          Transform the way you work with one place for everyone and everything
          you need to get stuff done.
        </p>
        <div className="hero_buttons">
          <Button label="TRY FOR FREE" />
          <Button label="SIGN UP WITH GOOGLE" type="outlined" />
        </div>
      </div>
      <div className="hero_second_section">
        <img
          src="https://a.slack-edge.com/b211f31/marketing/img/what-is-slack/hero/img-ia4-hero-desktop.IN.jpg"
          srcSet="https://a.slack-edge.com/ec3a92a/marketing/img/what-is-slack/hero/img-ia4-hero-desktop.IN.jpg 1x, https://a.slack-edge.com/ec3a92a/marketing/img/what-is-slack/hero/img-ia4-hero-desktop.IN@2x.jpg 2x"
          alt="Team discussing work in the Slack app"
        />
      </div>
      {/* </div> */}
    </section>
  );
};
