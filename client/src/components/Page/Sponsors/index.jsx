// Sponsors
import React from 'react'
import { Grid } from 'react-bootstrap'
import './style.css'
import iZelda from './zelda.sponsor.jpeg'
import Sponsor from './Sponsor'

const Sponsors = () => {
  const arrSponsors = [
      {
        id: 100,
        picture: iZelda,
        name: 'Zelda Kohn',
        tagLine: 'For all you realestate needs in the Tri-valley!',
      },
    ]
  const sponsors = arrSponsors.map((s) => (
    <Sponsor
      key={s.id}
      picture={s.picture}
      name={s.name}
      tagLine={s.tagLine}
    />
  ))
  return (
    <Grid id='sponsors' fluid className='bg-black'>
      <Grid>
        <h1 className='green-text'>Sponsors</h1>
        {sponsors}
      </Grid>
    </Grid>
  )
};

export default Sponsors;
