// TechLogos
import React from 'react';
import { Grid } from 'react-bootstrap'
import './style.css';
import TechLogo from './TechLogo';
// Basics
import iHTML from './tech-logos/html-5.01.svg'
import iCSS from './tech-logos/css-3.01.svg'
import iJS from './tech-logos/javascript.svg'
// MERN
// import iMongo from './tech-logos/mongodb.on-black.01.svg'
import iMongo from './tech-logos/mongodb.svg'
// import iExpress from './tech-logos/express.on-black.01.svg'
import iExpress from './tech-logos/express.svg'
import iReact from './tech-logos/react.svg'
// import iNode from './tech-logos/nodejs.on-black.01.svg'
// import iNode from './tech-logos/nodejs.svg'
import iNode from './tech-logos/nodejs.on-green.svg'

const TechLogos = () => {
  const arrBasics = [
      {
        name: 'HTML 5',
        image: iHTML,
        style: "small-image",
      },
      {
        name: 'CSS 3',
        image: iCSS,
        style: "small-image",
      },
      {
        name: 'JavaScript',
        image: iJS,
        style: "small-image",
      },
    ]
    const basics = arrBasics.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        url={t.image}
        style={t.style}
      />
    ))
    console.log('basics', basics)
    const arrMERN = [
      {
        name: 'MongoDB',
        image: iMongo,
        style: 'wide-image',
      },
      {
        name: 'Express',
        image: iExpress,
        style: 'express-image',
      },
      {
        name: 'React',
        image: iReact,
        style: "small-image",
      },
      {
        name: 'Node',
        image: iNode,
        style: "small-image",
      },
    ]

    const mern = arrMERN.map((t) => (
      <TechLogo
        key={t.name}
        name={t.name}
        style={t.style}
        url={t.image}
      />
    ))
    console.log('mern', mern)
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
