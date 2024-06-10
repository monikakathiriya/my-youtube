
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Body from './Component/Body';

import Feed from './Component/Feed';
import VideoWatch from './Component/VideoWatch';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {
        path: "/VideoWatch",
        element: <VideoWatch  />
      }
    ]
  }
],)

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />

    </div>
  );
}

export default App;
