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
      <div className="header text-center">
        <h1>What do you want to look up?</h1>
        <form>
          
        </form>
      </div>

      {/* Content */}
      <div className="content w-75" >
        <p>Dictionary App designed by Oksana Zavodna. Connect with them on Dribbble; the global community for designers and creative professionals</p>
      </div>
    </div>
  );
}

export default App;
