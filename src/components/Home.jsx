import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to Fumigation App</h2>
          <p>
            They say everything looks better with odd numbers of things. But
            sometimes I put even numbers—just to upset the critics. We'll put
            some happy little leaves here and there. Absolutely no pressure. You
            are just a whisper floating across a mountain. You have to make
            those little noises or it won't work.
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
            <Image src="assets/favico.jpg" circle className="profile-pic" />
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
              The least little bit can do so much. Follow the lay of the land.
              It's most important. Be so very light. Be a gentle whisper. That
              easy. All you have to learn here is how to have fun. Let your
              imagination be your guide.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
