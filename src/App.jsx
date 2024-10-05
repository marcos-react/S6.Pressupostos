import { DataProvider } from './context/DataContext.jsx';
import CheckboxCard from './components/CheckboxCard/CheckboxCard.jsx';
import NavbarCard from './components/NavbarCard/NavbarCard.jsx';
import './App.css';

function App() {
  return (
    <DataProvider> 
      <NavbarCard />
      <CheckboxCard />
    </DataProvider>
  );
}

export default App;


