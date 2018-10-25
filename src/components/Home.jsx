import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <h2>Fumigation solution</h2>
        <Jumbotron>
          <h3>Aggressive Cockroach-killer dedicated to producing results</h3>
          <p>
            We are the most solution provider, cockroach killer and all kind of
            insects including Housefly, Cricket, cockroach and many more Bugs
            that lives in your home, office, farms and all over the place. With
            a great Speciality in making our customers happy, making things
            easier for them, we provide a fumigation service to Bugs killing and
            all varieties of insects running in your home office, farms, ects
          </p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/person-fumigate.jpg"
              circle
              className="profile-pic"
            />
            <h3>Our Vision</h3>
            <p>
              This is the time to get out all your frustrations, much better
              than kicking the dog around the house or taking it out on your
              spouse. Maybe we got a few little happy bushes here, just covered
              with snow. Let's put some happy little clouds in our world. It
              looks so good, I might as well not stop.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/fumigating.jpg" className="profile-pic" />
            <h3>Our Mission</h3>
            <p>
              As trees get older they lose their chlorophyll. Just let go - and
              fall like a little waterfall. You need to have a very firm paint
              to do this. This is an example of what you can do with just a few
              things, a little imagination and a happy dream in your heart. When
              you do it your way you can go anywhere you choose.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image
              src="assets/fumigation-img.jpg"
              circle
              className="profile-pic"
            />
            <h3>Our Speciality</h3>
            <p>
              After many years of expertise in fumigation and eradication of
              unhealthy homes, offices, farms and many more places,
              Hongerow-Fumigation been nominated as the accurate and the most
              solution provider in cockroach killing and all kind of insects
              including Housefly, Cricket, cockroach and many more Bugs that
              lives in your home, office, farms and all over the place.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
