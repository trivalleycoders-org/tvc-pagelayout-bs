// TechLogos
import React from 'react';
import { Grid } from 'react-bootstrap'
import './style.css';
import TechLogo from './TechLogo';
import { basicsLogos, mernLogos } from './tech-logo-data'

const TechLogos = () => {

  const basics = basicsLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      url={t.image}
      style={t.style}
    />
  ))


  const mern = mernLogos.map((t) => (
    <TechLogo
      key={t.name}
      name={t.name}
      style={t.style}
      url={t.image}
    />
  ))
  return (
    <Grid id='tech-logos' fluid className='bg-green'>
      <Grid>
        <h1 className='section-title'>Learn With Us</h1>
        <p>Our core compentency is the MERN stack, Mongo, Express, React and Node. When you join the group we guide you from beginner learning HTML, CSS & JavaScript to a software developer building apps with the MERN (<b>M</b>ongoDB, <b>E</b>xpress, <b>R</b>eact & <b>N</b>ode.js) stack.</p>
        <p>As a beginner you will get help learning the basics. When you are ready you will work on real projects for real clients gaining knowledge and valuable experience along the way.</p>
        <h3 className='logo-title'>The Basics</h3>
        {basics}
        <h3 className='logo-title'>MERN Stack</h3>
        {mern}
      </Grid>
    </Grid>
  )
}

export default TechLogos;
