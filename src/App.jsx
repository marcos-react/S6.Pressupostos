import { DataProvider } from './context/DataContext.jsx';
import CheckboxCard from './components/CheckboxCard/CheckboxCard.jsx';
import NavbarCard from './components/NavbarCard/NavbarCard.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import WelcomePage from './pages/WelcomePage.jsx';
import CalculatorPage from './pages/CalculatorPage.jsx';

function App() {
  return (
    <DataProvider>
      <>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </>
    </DataProvider>
  );
}

export default App;

