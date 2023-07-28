import React, { useState, useEffect } from 'react';
import './Tabs.css';
import "./App.css";

import Laberinto from './Laberinto.js';
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
          <b>Inicio</b>
          
        </button>
        
        <button id="tab-hexagon"
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}
        >
         <b>Planetario</b> 
        </button>
        <button id="tab-hexagon"
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}
        >
          <b>Puzzle</b>
        </button>



        </div>

      <div className="tabs">

        <button id="tab-hexagon"
          className={activeTab === 4 ? 'active' : ''}
          onClick={() => handleTabClick(4)}
        >
          <b>Laberinto</b>
        </button>
        <button id="tab-hexagon"
          className={activeTab === 5 ? 'active' : ''}
          onClick={() => handleTabClick(5)}
        >
          <b>Proyecto 4</b>
        </button>
        <button id="tab-hexagon"
          className={activeTab === 6 ? 'active' : ''}
          onClick={() => handleTabClick(6)}
        >
          <b>Proyecto 5 </b>
        </button>



    </div >

    <div className="tabs">
        
        <button id="tab-hexagon"
          className={activeTab === 7 ? 'active' : ''}
          onClick={() => handleTabClick(7)}
        >
          <b>Proyecto 6 </b>
        </button>
        <button id="tab-hexagon"
          className={activeTab === 8 ? 'active' : ''}
          onClick={() => handleTabClick(8)}
        >
         <b>Proyecto 7</b> 
        </button>
        <button id="tab-hexagon"
          className={activeTab === 9 ? 'active' : ''}
          onClick={() => handleTabClick(8)}
        >
          <b>Proyecto 8</b>
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
            <h3>Haz click en el Sol o en aquellos planetas que desees conocer sus características </h3>
           
            <PlanetarioP5></PlanetarioP5> 
                
              </div>
}
        {activeTab === 3 && 
        <div>
          
            <Puzzle></Puzzle>
                </div>}
                {activeTab === 4 && (
          <div>
            <h2>Laberinto</h2>
          <h3>Desplázate con los cursores del teclado y haz uso del ratón.</h3>
            <Laberinto></Laberinto>
            
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
        {activeTab === 9 && (
          <div>
          
          </div>
        )}
        
      </div>
    </div>
    
  );
};

export default Tabs;
