import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Routing from './Router/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Header />
      <Routing />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
