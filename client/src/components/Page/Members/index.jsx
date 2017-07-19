// Members
import React from 'react'
import { Grid, Row } from 'react-bootstrap'
import './style.css'
import Member from './Member'
import arrMembers from './members-data'

const Members = () => {
  const members = arrMembers.map((m) => (
    <Member
      key={m.id}
      _id={m.id}
      picture={m.picture}
      name={m.name}
      role={m.role}
      index={m.index}
    />
  ))

  return (
    <Grid id='members' fluid className='bg-green'>
      <Grid>
        <h1 className='section-title'>Members</h1>
        {members}
      </Grid>
    </Grid>
  )
}

export default Members;
