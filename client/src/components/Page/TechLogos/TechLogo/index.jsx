// TechLogo

import React from 'react';
import { Grid } from 'react-bootstrap';
import './style.css';
import classNames from 'classnames'

const TechLogo = (props) => {
  const imageStyle = classNames(
    {
      // 'tech-logo-image': true,
      [props.style]: props.style ? true : false,
    }
  )

  return (
    <Grid id='techlogo' fluid>
      <Grid>
        <img className={imageStyle} src={props.url} alt="logo" />
        <span className='logo-text'>{props.name}</span>
      </Grid>
    </Grid>
  )
}

export default TechLogo;
