import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Image src="assets/person-fumigate1.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={4} smallOffset={2}>
            <Image
              src="assets/cockroach-on-lead.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>John Ngenge</h3>
            <p>
              Use what happens naturally, don't fight it. The only thing worse
              than yellow snow is green snow. It is a lot of fun. Get away from
              those little Christmas tree things we used to make in school.
              Working it up and down, back and forth. I can't think of anything
              more rewarding than being able to express yourself to others
              through painting.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
