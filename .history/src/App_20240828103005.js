import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Search from "./Search"
import Result from "./Result"

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className='logo m-3 mx-5 d-flex align-items-center'>
        <img src="https://th.bing.com/th/id/R.1ebe3e38406a8906121c9769e62adc3e?rik=d1hISy0qiMJ7Hg&pid=ImgRaw&r=0" alt="Logo" className='mx-3'/>
        <h4>Dictionary</h4>
      </div>
      
      <div className='container d-flex m-3 mx-5'>
        {/* Header */}
        <div className="header">
          <h3>What do you want to look up?</h3>
          <Search />
        </div>

        {/* Content */}
        <div className="content m-3" >
          <Result />
        </div>

      </div>
    </div>
  );
}

export default App;
