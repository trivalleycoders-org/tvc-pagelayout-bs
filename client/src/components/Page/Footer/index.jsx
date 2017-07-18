// Footer
import React from 'react'
import { Grid } from 'react-bootstrap'
import './style.css'

const Footer = () => (
  <Grid id='footer' fluid className='bg-black-gradient'>
    <Grid>
      <div className="fa-btns">
        <a href="https://github.com/trivalleycoders-org">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.meetup.com/trivalleycoders//">
          <i className="fa fa-meetup fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/groups/free.code.camp.sanramon/">
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <p>&copy; 2017 Tri-Valley Coders. All rights reserved.</p>
    </Grid>
  </Grid>
);

export default Footer;
