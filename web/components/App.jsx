import "../scss/App.scss";
import { ChakraProvider } from '@chakra-ui/react';
import Footer from "./Footer";
import Landing from "../pages/Landing";
import Home from "../pages/Home";
import { Route, Routes } from 'react-router-dom';

// console.log('Entorno:', process.env.NODE_ENV)

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/create" element={<Home/>} />
        <Route path="/" element={<Landing />} />
      </Routes>
      <Footer/>
    </ChakraProvider>
  );
};

export default App;
