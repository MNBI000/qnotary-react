import axios from 'axios';
import { getAccessToken } from './accessToken';

const ZOOM_API_BASE_URL = '/v2/users/uslegalization@gmail.com/meetings';
const ACCESS_TOKEN = await getAccessToken('H_K7__U3SyOZJ68iR_HQ3Q');

const createMeeting = async () => {
  try {
    const authHeader = `Bearer ${ACCESS_TOKEN}`;

    const response = await axios.get(`${ZOOM_API_BASE_URL}`, {
      // You might need to include headers or any other configurations required by the Zoom API.
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
        // Add any other headers required by the Zoom API, such as authorization headers if needed.
      }
    });

    // Assuming the response contains the access token.
    return response.data.meetings;
  } catch (error) {
    // Handle errors, e.g., network errors, API errors, etc.
    console.error('Error fetching user Meetings:', error);
    throw error; // You can choose to handle errors according to your application's needs.
  }
};

export { createMeeting };