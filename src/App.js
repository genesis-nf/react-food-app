//import logo from './logo.svg';
//import './App.css';
import './css/main.css';
import './css/Elementorest.css';
import './css/Header.css';
import React from 'react';
import restaurants from './data.js';
import Header from './body/Header';
import Main from './body/Main';

function App() {
  return (
  <React.Fragment>
      <Header/>
      <Main/>
  </React.Fragment>
  );
}
export default App;



  //renderizar listas - map
//addItems();
//function addItems() {
  //for (let i = 1; i < restaurants.length; i++) {
  // const listItem = document.createElement("article");
  // listItem.classList.add("list-restaurant-item");
   //document.querySelector(".list-restaurant").appendChild(listItem);
  // listItem.innerHTML = `<div className="list-restaurant-item-content"/>
  // <img src=${restaurants[i].img}/>
  // <p${restaurants[i].name}/>
   //<p${restaurants[i].score}/>
   //<p${restaurants[i].location}/>
   //<p${restaurants[i].type}/>
   //`;
 //}
//}