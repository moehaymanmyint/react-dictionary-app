import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className='logo'>
      <img src="logo.png" alt="Logo" />
        <h4>Dictionary</h4>
      </div>
      {/* Header */}
      <div className='container d-flex'>
        <div className="header">
          <h1>What do you want to look up?</h1>
        </div>

        {/* Content */}
        <div className="content" >
          <p>Dictionary App designed by Oksana Zavodna. Connect with them on Dribbble; the global community for designers and creative professionals</p>
        </div>

      </div>
    </div>
  );
}

export default App;
