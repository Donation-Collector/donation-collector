import React from 'react';
import TopBar from "./TopBar";
import MainEntry from "./Main-Entry";
import AboutUsMain from "./About-us-main";

function App() {
  return (
      <div className="app-background">
        <TopBar/>
        <MainEntry/>
        <AboutUsMain/>
      </div>
  );
}

export default App;
