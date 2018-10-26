import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Services.css";

export default class News extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <h4>Cockroach Management Services</h4>
            <Col xm={12} sm={8} className="main-section">
              <p>
                Cockroach Management Services provides protection against
                crawling insects such as cockroaches, Black ants, Red ants,
                spiders, Psocids and silver fish. Crawling pests can be found
                anywhere, be it Homes, Offices, Hotels, Restaurants, Hospitals,
                Factories, Etc. For every cockroach you see, there are a hundred
                hidden. Not only do they contaminate food and utensils but
                readily spread disease causing organisms leading to dysentery,
                diarrhea, food poisoning and asthma. They also leave dark stains
                and foul odors leading to very unpleasant and unhygienic
                conditions. For Cockroach Management Services, We use our most
                automatic no resistance product which leads to few seconds
                results.
              </p>
            </Col>
            <Col xm={12} sm={4} className="sidebar-section" />
            <Image src="assets/on-news-image.jpg" />
          </Row>
          <Image src="assets/small-Cockroach.jpg" className="header-image" />
        </Grid>
      </div>
    );
  }
}
