import React from 'react';
import Header from './components/layout/header1';
import Mainscreen from './components/sections/mainscreen1';
import './styles/global.css';
import Description from './components/sections/description';
import Prompts from './components/sections/prompts';
import Comments from './components/sections/comments';
import Chatsection from './components/sections/chatsection';
import Promo from './components/sections/promo';
import Footer from './components/layout/footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Mainscreen />
      <Description/>
      <Prompts/>
      <Comments/>
      <Chatsection/>
      <Promo/>
      <Footer/>
    </div>
  );
}

export default App;