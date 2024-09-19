import { useState,useEffect,useContext } from 'react'
import Routing from './Router'
import './App.css'
// import Header from './Components/Header/Header'
// import CarouselEffect from './Components/Carousel/CarouselEffect'
// import Category from './Components/Category/Category'
// import Product from './Components/Product/Product'
import { auth } from "./Utility/firebase.js";
import { DataContext } from "./Components/DataProvider/DataProvider.jsx";
import { Type } from "./Utility/action.type.js";





function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);

  return (
    <>
      
      <Routing/>
    </>
  )
}

export default App
