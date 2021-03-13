import { useState, createContext } from 'react';

export const CountryContext = createContext([null, () => {}]);

export const CountryProvider = ({ children }) => {
  const [country, setCountry] = useState(null);

  return (
    <CountryContext.Provider value={[country, setCountry]}>
      {children}
    </CountryContext.Provider>
  );
};
