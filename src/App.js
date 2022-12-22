import './App.css';
import Body from './layout/body/Body';
import "./layout/header/Header"
import Header from './layout/header/Header';
import Sidebar from './layout/sidebar/Sidebar';
import Footer from './layout/footer/Footer';
import { useState } from 'react';
import { MODE } from './constants';

function App() {
  const [renderMode, setRenderMode] = useState(MODE.SHOW_LIST);
  const handleChangeRenderMode = (mode = MODE.ADD_NEW) => {
      setRenderMode(mode)
  }

  return (
    <div className="layout">
      <Header
        handleCreateNewTask = {() => handleChangeRenderMode(MODE.ADD_NEW)}
      />
      <Sidebar/>
      <Body 
        mode={renderMode}
        handleChangeRenderMode={handleChangeRenderMode}
      />
      {renderMode === MODE.SHOW_LIST && <Footer />}
      
    </div>
  );
}

export default App;
