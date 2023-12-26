//components
import Header from "./components/headers/Header";
import Home from "./components/home/Home";
import 'react-multi-carousel/lib/styles.css';
import DataProvider from "./context/DataProvider.jsx";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Cart from "./components/cart/cart.jsx";


//material ui
import {Box} from "@mui/material"
import DetailView from "./components/details/DetailView";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop:60}}>
          <Routes>
            <Route path="/" element= {<Home/>}/>
            <Route path="/product/:id" element={<DetailView/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  )
  
}

export default App;
