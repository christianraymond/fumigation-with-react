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
            <Image src="assets/person-fumigate.jpg" className="profile-pic" />
            <h3>Our Vision</h3>
            <p>
              Dedicated to provide your business, residence with the most
              effective and ongoing Insects management solution available.
              supports quality service to eradicate unhealthy environment
              including (Cockroach Treatment,Red Ants Control, Black Ants
              Control, Anti-Rat Treatment, and Bed Bugs Treatment to keep your
              property free from pests throughout a long time period.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/fumigating.jpg" className="profile-pic" />
            <h3>Our Mission</h3>
            <p>
              We have a mission to be the world’s most respected service brand.
              To do this, we have established a culture that supports our team,
              so they can provide exceptional service to our customers.
              <Link to="about" className="text-success"> Hongerow-Fumigation</Link> is an exceptional
              products and fumigation provider supporting our communities to a
              healthy living and creating meaningful relationships with those
              around us.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/fumigation-img.jpg" className="profile-pic" />
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
