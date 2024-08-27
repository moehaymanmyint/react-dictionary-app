import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className='logo m-3'>
        <img src="logo.png" alt="Logo" />
        <h4>Dictionary</h4>
      </div>
      
      <div className='container d-flex'>
        {/* Header */}
        <div className="header">
          <h1>What do you want to look up?</h1>
        </div>

        {/* Content */}
        <div className="content" >
          <p>Dictionary App designed by Moe. Connect with them on Dribbble; the global community for designers and creative professionals</p>
        </div>

      </div>
    </div>
  );
}

export default App;
