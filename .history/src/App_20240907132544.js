import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Search from "./Search"
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      {/* Logo */}
      <div className='logo my-4 mx-5 d-flex align-items-center'>
        <img src="https://th.bing.com/th/id/R.1ebe3e38406a8906121c9769e62adc3e?rik=d1hISy0qiMJ7Hg&pid=ImgRaw&r=0" alt="Logo" className='mx-3'/>
        <h2 className='fs-1'>Lafz Dictionary</h2>
      </div>
      
      <div className='container'>
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
