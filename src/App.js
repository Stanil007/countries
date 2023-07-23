import { Route, Routes } from "react-router-dom";
import CountryList from "./components/CountryList";
import { CountryProvider } from "./CountryContext";
import { CountryDetails } from "./components/CountryDetails";
import Header from "./components/Header";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";


function App() {
  return (
    <CountryProvider>
      <Header />
      <Routes>
        <Route path="/" element={<CountryList />} />
        <Route path="/name/:name" element={<CountryDetails />} />
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </CountryProvider>
  );
}

export default App;
