// Events
import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import * as actionCreators from '../../../store/actions';
import * as selectors from '../../../store/selectors';
import { Grid, Button } from 'react-bootstrap'
import './style.css'
import Event from './Event'
import iMeetup from './../../../images/meetup-swarm.svg'

let i = 1;

class Events extends Component {
  componentWillMount() {
    this.props.requestReadEvents();
  }
  render() {
    const { readEventsRequest } = this.props;
    switch (readEventsRequest.status) {
      case 'success':
        return (
          <Grid id='events' fluid className='bg-black'>
            <Grid>
              <h1 id='events-title' className='green-text'>Events</h1>
              <div>
                {
                  this.props.events.map((e) => (
                    <Event
                      key={e.time}
                      date={e.time}
                      name={e.name}
                      locationName={`${e.venue.name}`}
                      locationAddress={`${e.venue.address_1}`}
                      locationCity={`${e.venue.city}`}
                      url={e.event_url}
                      index={i++}
                    />
                  )
                  )
                }
              </div>
            </Grid>
          </Grid>
        )

      case 'failure':
        return (
          <Grid id='events' fluid className='bg-black'>
            <Grid>
              <h1 className='section-title'>Events</h1>
              <div className='events-failed-message lead'>
                <h2>We meet every Thursday!</h2>
                <ul className='ul-meeting-schedule'>
                  <li>9:00 AM - Social time, Specialty's Cafe & Bakery, 5331 Hopyard Rd, Pleasanton</li>
                  <li>9:45 AM - Move to Dublin Library, 200 Civic Plaza, Dublin</li>
                  <li>10 AM - 12 PM - Code, get help and/or presentation</li>
                </ul>
                <Button className='meeting-schedule' href='https://www.meetup.com/trivalleycoders/?scroll=true' bsStyle='success' bsSize='large'>
                  <img src={iMeetup} width={40} alt='meetup logo'/>
                  Tri-Valley Coders Meeting Schedule
                </Button>
              </div>
            </Grid>
          </Grid>
      );
      default:
        return (
          <Grid id='events' fluid className='bg-black'>
            <Grid>
              <p>loading ...</p>
            </Grid>
          </Grid>
        );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    readEventsRequest: selectors.getRequest(state, 'readEvents'),
    events: selectors.getEvents(state),
  }
};

export default connect(mapStateToProps, actionCreators)(Events);
