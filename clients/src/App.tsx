import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import HomeScreen from './customer-portal/screens/home-screen/home-screen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<div>customer portal, checking a change deploy</div>} />
        <Route path='admin'>
          <Route path='' element={<div>admin portal checking a change deploy</div>} />
          <Route path='home' element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
