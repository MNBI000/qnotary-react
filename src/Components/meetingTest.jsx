import React, { useEffect, useState } from 'react';
import NavBar from '../Components/navBar';
import ZoomMtgEmbedded from '@zoom/meetingsdk/embedded';
import { createMeeting } from '../Services/createMeeting';
import { Container } from 'react-bootstrap';

const MeetingTest = () => {
  const [allMeetings, setAllMeetings] = useState([]);
   
  useEffect(() => {
    // Call the service function to get the access token
    const fetchAccessToken = async () => {
      try {
        const meetings = await createMeeting();
        setAllMeetings(meetings)
        console.log('all Meetings:', meetings);
        // Do whatever you need to do with the access token here
      } catch (error) {
        // Handle errors
      }
    };

    fetchAccessToken();
  }, []);
      return (
        <>
        <NavBar></NavBar>
        <Container>
          <div id='MyMeetingList'>
            <h4>{allMeetings.length} Meetings</h4>
            <ul>
              {allMeetings.map(meeting => (
                <li key={meeting.id}>
                  <div>Id: {meeting.id}</div>
                  <div>Topic: {meeting.topic}</div>
                  <div>start time: {meeting.start_time}</div>
                  <div>timezone: {meeting.timezone}</div>
                  <div><a href={meeting.join_url}>join url</a></div>
                  </li>
              ))}
            </ul>
          </div>
        </Container>
        </>
      );
}

export default MeetingTest;