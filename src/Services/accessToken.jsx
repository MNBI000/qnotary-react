import axios from 'axios';

const ZOOM_API_BASE_URL = '/oauth/token';
const USERNAME = 'iuFjezQ7S4mZb_D64NqO6A';
const PASSWORD = 'f0FosLhww9Ig6UcEJqp1zXU3fSoNE7c9';

const getAccessToken = async (accountId) => {
  try {
    const authHeader = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;

    const response = await axios.post(`${ZOOM_API_BASE_URL}?grant_type=account_credentials&account_id=${accountId}`, {
      // Optionally, you can add any additional parameters required by the Zoom API in the request body.
      // For example:
      // additionalParam: value
    }, {
      // You might need to include headers or any other configurations required by the Zoom API.
      headers: {
        'Content-Type': 'application/json',
        Authorization: authHeader,
        // Add any other headers required by the Zoom API, such as authorization headers if needed.
      }
    });

    // Assuming the response contains the access token.
    return response.data.access_token;
  } catch (error) {
    // Handle errors, e.g., network errors, API errors, etc.
    console.error('Error fetching access token:', error);
    throw error; // You can choose to handle errors according to your application's needs.
  }
};

export { getAccessToken };