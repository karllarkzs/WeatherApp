import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingScreen from './pages/landingScreen';
import HomeScreen from './pages/homeScreen';
import WeatherScreen from './pages/weatherScreen';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/weather" element={<WeatherScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
