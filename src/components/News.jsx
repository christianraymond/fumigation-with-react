import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./News.css";

export default class News extends React.Component {
  render() {
    return (
      <div>
        <Image src="assets/news-image.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xm={12} sm={8} className="main-section">
              <p>
                You can spend all day playing with mountains. Let all these
                little things happen. Don't fight them. Learn to use them. At
                home you have unlimited time. You can create beautiful things -
                but you have to see them in your mind first. If you hypnotize
                it, it will go away. Don't fight it, use what happens. It takes
                dark in order to show light. I was blessed with a very steady
                hand; and it comes in very handy when you're doing these little
                delicate things. Take your time. Speed will come later. There is
                no right or wrong - as long as it makes you happy and doesn't
                hurt anyone. There we go. This is where you take out all your
                hostilities and frustrations.
              </p>
            </Col>
            <Col xm={12} sm={4} className="sidebar-section" />
            <Image src="assets/one-news-image.jpg" />
          </Row>
        </Grid>
      </div>
    );
  }
}
