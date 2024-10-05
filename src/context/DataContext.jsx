import { createContext } from 'react';
import dataCard from '../data/dataCard.jsx';

// Create context
export const DataContext = createContext();

// Proviver data
export function DataProvider({ children }) {
  return (
    <DataContext.Provider value={dataCard}>
      {children}
    </DataContext.Provider>
  );
}
