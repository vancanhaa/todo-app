import './App.css';
import Body from './layout/body/Body';
import "./layout/header/Header"
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <div className="layout">
      <Header/>
      <Sidebar/>
      <Body />
      <Footer />
      
    </div>
  );
}

export default App;
