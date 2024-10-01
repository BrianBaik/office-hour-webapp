import React from "react";

function App() {
  
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-white flex flex-col justify-center items-center">
      <p className="text-center">
        Welcome to the website
      </p>
        <div className="App">
        <h1>My Button Example</h1>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
    
  )
}

export default App;
