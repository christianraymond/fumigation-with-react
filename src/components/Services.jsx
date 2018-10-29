import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Services.css";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/bed-bug.jpg" className="profile-pic" />
            <hr />
            <h6>Bed-bug Management</h6>
            <p>
              Bed bugs are totally blood sucking insects. They live on blood
              only. They are not carriers of any disease as such but their bites
              can cause many problems. Not only do they contaminate blood and
              utensils but readily spread disease causing organisms leading to
              dysentery, diarrhea, food poisoning and asthma. They also leave
              dark stains and foul odors leading to very unpleasant and
              unhygienic conditions.
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/small-Cockroach.jpg" className="profile-pic" />
            <hr />
            <h6>Cockroach Management Services</h6>
            <p>
              The services provides protection against crawling insects such as
              cockroaches, Black ants, Red ants, spiders, Psocids and silver
              fish. Crawling pests can be found anywhere, be it Homes, Offices,
              Hotels, Restaurants, Hospitals, Factories, Etc. For every
              cockroach you see, there are a hundred hidden. For Cockroach
              Management Services, We use our most automatic no resistance
              product which leads to few seconds results.
            </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/spider-picture0.jpg" className="profile-pic" />
            <hr />
            <h6>Spider Management Services</h6>
            <p>
              A lot of homeowners get really stressed out by even the thought of
              spiders in their house. If it’s an overreaction, it’s an
              understandable one. Still, a lot of spider fear comes from a
              common misconception that they’re aggressive or dangerous. That’s
              why Hongerow-Fumigation is going to answer all the panicked
              questions that probably pop into your mind.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
