// About
import React from 'react'
import { Grid, Button } from 'react-bootstrap'
import './style.css'
import iMeetup from './meetup-swarm.svg'

const About = () => (
  <Grid id='about' fluid className='bg-black'>
    <Grid>
      <p className='green-text'>A place to learn, collaborate and become a software developer</p>
      <p>Tri-Valley Coders is a comfortable non-competitive place to learn about making software, both in person and online. We cater to beginners and vetrans alike. Our members span the gammute in terms of age and experience, but they all have one thing in common, they are learning something new, taking their software development skills to the next level and getting ready for the next step in their career.</p>
      <p>Tri-Valley Coders meets every Thursday from 9:00am to 12:00pm with emphasis on Web development and the MERN Stack. We also have periodic meetings focused on Python and Data Science. Check our schedule below for dates and times.</p>
      <Button bsStyle='success'>
        <img src={iMeetup} width={45} alt='meetup logo'/>
        <span>Join Us via Meetup!</span>
      </Button>
    </Grid>
  </Grid>
);

export default About;
