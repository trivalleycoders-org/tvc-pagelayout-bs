// Member
import React from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import './style.css';
import Identicon from '../../../../elements/Identicon'
// import * as ku from '../../../../lib/ke-utils'

const Member = (props) => {

  const getPicture = () => {
    if (!props.picture) {
      return <Identicon
        style='member-img'
        hash={props._id}
             />
    } else {
      return <Image className='member-img' src={props.picture} responsive alt='member picture' />
    }
  }
  return (
    <Col xs={2}>
      <Row>
        {getPicture()}
      </Row>
      <Row className='member-name-row'>
        {props.name}
      </Row>
      <Row className='member-name-row'>
        {props.role}
      </Row>
    </Col>
  )
};

export default Member;
