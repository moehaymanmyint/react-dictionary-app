import './App.css';

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className='logo'>
      <img src={"./logo.svg"} > </img>
        <h4>Dictionary</h4>
      </div>
      {/* Header */}
      <div className='header w-25'>
        <h1>What do you want to look up?</h1>
        <form>
          
        </form>
      </div>

      {/* Content */}
      <div className='content w-75' >
        <p>  </p>
      </div>
    </div>
  );
}

export default App;
