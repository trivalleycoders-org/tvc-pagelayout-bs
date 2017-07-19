// Sponsor
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import './style.css';

const Sponsor = (props) => (
  <div className='sponsor-item'>
    <Row>
      <Image className='sponsor-img' src={props.picture} responsive alt='sponsor picture' />
    </Row>
    <Row>
      <h4 id='sponsor-name' className='sponsor-name'>{props.name}</h4>
    </Row>
    <Row>
      <h5 id='sponsor-tagline' className='sponsor-tagline'>{props.tagLine}</h5>
    </Row>
  </div>
);

export default Sponsor;
