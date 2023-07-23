import { useState,useEffect,createContext,useContext } from "react";

export const CountryContext = createContext();

export const CountryProvider = ({children}) => {

    const baseUrl = 'https://restcountries.com/v3.1/all';
    const [countries, SetCountries] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
        .then(res => res.json())
        .then(result => {
          SetCountries(result)
        })
      },[])

      const contextValues = {
        countries
      }

      return(
        <CountryContext.Provider value={contextValues}>
            {children}
        </CountryContext.Provider>
      );
};

export const useCountryContext = () => {
	const context = useContext(CountryContext);
	return context;
};