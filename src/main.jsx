import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import {DataProvider} from './Components/DataProvider/DataProvider'
import { initialState, reducer } from "./Utility/reducer";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      
        <App />
      
    </DataProvider>
  </StrictMode>
);
