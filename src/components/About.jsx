import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends React.Component {
  render() {
    return (
      <div class="p-3 mb-2 bg-gradient-primary text-white">
        <Grid>
          <Col xs={12} sm={4} smallOffset={2}>
            <Image />
            <h2>About-Us</h2>
            <p className="text-white bg-blue">
              Hongerow-fumigation a solution dedicated to providing your business
              or residence with the most effective and ongoing pest management
              solution available. Hongerow-fumigation unique and complete
              approach supports quality on-site supervision with an entire team
              of experts who develop and monitor your integrated pest management
              solution.
            </p>
          </Col>
          <Image src="assets/person-fumigate.jpg" className="profile-pics" />

          <Col xs={12} sm={8} smallOffset={2}>
            <Image />
            <p className="text-success">
              After many years of expertise in fumigation and eradication of
              unhealthy homes, offices, farms and many more places,
              Hongerow-Fumigation been nominated as the accurate and the most
              solution provider in cockroach killing and all kind of insects
              including Housefly, Cricket, cockroach and many more Bugs that
              lives in your home, office, farms and all over the place. With a
              great speciality in making our customers happy, making things
              easier to a best healthy home, we provide a fumigation service to
              Bugs killing and all varieties of insects running in your home
              office, farms... According to the recent news, Hongerow-Fumigation
              has been appointed as a pioneer Cockroach-Killer Specialist.
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}
