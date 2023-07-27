import React, { useState, useEffect } from 'react';
import './Tabs.css';
import "./App.css";
import "./Ejemplo.js";
import Ejemplo from './Ejemplo.js';
import PlanetarioP5 from "./PlanetarioP5.js";
import Puzzle from "./Puzzle.js";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [p5ContainerMounted, setP5ContainerMounted] = useState(false);

  useEffect(() => {
    if (activeTab === 2 && !p5ContainerMounted) {
      setP5ContainerMounted(true);
    }
  }, [activeTab, p5ContainerMounted]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="tabmain">
<div className="tabs-background">
      
      </div>
      <div className="tabs">
        <button id="tab-hexagon"
          className={activeTab === 1 ? 'active' : ''}
          onClick={() => handleTabClick(1)}
        >
          Inicio
          
        </button>
        
        <button id="tab-hexagon"
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
          Planetario
        </button>
        <button id="tab-hexagon"
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          Puzzle
        </button>
        <button id="tab-hexagon"
          className={activeTab === 4 ? 'active' : ''}
          onClick={() => handleTabClick(4)}
        >
          Proyecto 4
        </button>
        <button id="tab-hexagon"
          className={activeTab === 5 ? 'active' : ''}
          onClick={() => handleTabClick(5)}
        >
          Proyecto 5
        </button>
        <button id="tab-hexagon"
          className={activeTab === 6 ? 'active' : ''}
          onClick={() => handleTabClick(6)}
        >
          Proyecto 6
        </button>
        <button id="tab-hexagon"
          className={activeTab === 7 ? 'active' : ''}
          onClick={() => handleTabClick(7)}
        >
          Proyecto 7
        </button>
        <button id="tab-hexagon"
          className={activeTab === 8 ? 'active' : ''}
          onClick={() => handleTabClick(8)}
        >
          Proyecto 8
        </button>
        
      </div>

      <div className="tab-content">
        {activeTab === 1 && (
          <div>
          
          </div>
        )}
        {activeTab === 2 && p5ContainerMounted &&
         <div>
            <h2>Planetario interactivo</h2>
            <h3>Haz click en el planeta que desees conocer sus características </h3>
            <p>Puedes añadir más elementos y clases aquí según tus necesidades.</p>
           
            <PlanetarioP5></PlanetarioP5> 
                
              </div>
}
        {activeTab === 3 && 
        <div>
            <Puzzle></Puzzle>
                </div>}
                {activeTab === 4 && (
          <div>
          
          </div>
        )}

{activeTab === 5 && (
          <div>
          
          </div>
        )}
           {activeTab === 6 && (
          <div>
          
          </div>
        )}

{activeTab === 7 && (
          <div>
          
          </div>
        )}
           {activeTab === 8 && (
          <div>
          
          </div>
        )}
        
      </div>
    </div>
    
  );
};

export default Tabs;
