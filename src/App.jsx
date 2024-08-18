// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '../src/assets/css/pages.css'
import { RouterProvider } from 'react-router-dom';
import routerPaths from './routers';

function App() {
  return <RouterProvider router={routerPaths} />
}

export default App;
