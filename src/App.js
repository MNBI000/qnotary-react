import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MeetingTest from './Components/meetingTest'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/meeting',
      element: <MeetingTest/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
