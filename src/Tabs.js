import React, { useState } from 'react';
import './Tabs.css';
import "./App.css";
import "./Ejemplo.js";
import Ejemplo from './Ejemplo.js';
import PruebaP5 from "./PruebaP5.js";
import Puzzle from "./Puzzle.js";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div className="tabs">
        <button
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Pestaña 1
          
        </button>
        
        <button
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Pestaña 2
        </button>
        <button
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Pestaña 3
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <h2>Contenido de la Pestaña 1</h2>
            <p>Aquí puedes agregar tu contenido específico para la Pestaña 1.</p>
            <p>Puedes añadir más elementos y clases aquí según tus necesidades.</p>
            <Ejemplo></Ejemplo>
          </div>
        )}
        {activeTab === 2 &&
         <div>
            <h2>Contenido de la Pestaña 2 </h2>
            <p>Aquí puedes agregar tu contenido específico para la Pestaña 1.</p>
            <p>Puedes añadir más elementos y clases aquí según tus necesidades.</p>
            <PruebaP5></PruebaP5>
                
                </div>}
        {activeTab === 3 && 
        <div>
            <h2>Contenido de la Pestaña 3</h2>
            <p>Aquí puedes agregar tu contenido específico para la Pestaña 1.</p>
            <p>Puedes añadir más elementos y clases aquí según tus necesidades.</p>
            <Puzzle></Puzzle>
                </div>}
        
      </div>
    </div>
  );
};

export default Tabs;
