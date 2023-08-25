/*import React, { useState, useEffect } from 'react';
import './Tabs.css';
import './App.css';

import Laberinto from './LaberintoP5.js';
import Planetario from './PlanetarioP5.js';
import Puzzle from './Puzzle.js';
import Draw from './DrawP5.js';
import Particulas from './ParticulasP5.js';
import FlowField from './FlowFieldP5.js';
import PerlinNoise from './PerlinNoiseP5.js';
import Visualizer from './VisualizerP5.js';

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
          onClick={() => handleTabClick(1)}>
          <b>Inicio</b>
          
        </button>
        
        <button id="tab-hexagon"
          className={activeTab === 2 ? 'active' : ''}
          onClick={() => handleTabClick(2)}>
         <b>Planetario</b> 

        </button>

        <button id="tab-hexagon"
          className={activeTab === 3 ? 'active' : ''}
          onClick={() => handleTabClick(3)}>
          <b>Puzzle</b>
          

        </button>

      </div>

      <div className="tabs">

        <button id="tab-hexagon"
          className={activeTab === 4 ? 'active' : ''}
          onClick={() => handleTabClick(4)}>
          <b>Laberinto</b>

        </button>

        <button id="tab-hexagon"
          className={activeTab === 5 ? 'active' : ''}
          onClick={() => handleTabClick(5)}>
          <b>Dibuja</b>

        </button>

        <button id="tab-hexagon"
          className={activeTab === 6 ? 'active' : ''}
          onClick={() => handleTabClick(6)}>
          <b>Partículas 3D </b>

        </button>

      </div >

      <div className="tabs">
        
        <button id="tab-hexagon"
          className={activeTab === 7 ? 'active' : ''}
          onClick={() => handleTabClick(7)}>
          <b>Campo de flujo</b>

        </button>

        <button id="tab-hexagon"
          className={activeTab === 8 ? 'active' : ''}
          onClick={() => handleTabClick(8)}>
         <b>Perlin Noise</b> 

        </button>

        <button id="tab-hexagon"
          className={activeTab === 9 ? 'active' : ''}
          onClick={() => handleTabClick(9)}>
          <b>Visualizador</b>

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
           
             <Planetario></Planetario> 
                
          </div>
        }

        {activeTab === 3 && 
          <div>
          
            <Puzzle></Puzzle>

          </div>
        }

        {activeTab === 4 && (
          <div>
            <h2>Laberinto</h2>
            <h3>Desplázate desde la casilla azul con los cursores del teclado para llegar a la meta.</h3>
              
              <Laberinto></Laberinto>
            
          </div>
        )}

        {activeTab === 5 && (
          <div>
            <h2>Dibujar</h2>
            <h3>Dibuja lo que quieras con cada una de las herramientas, puedes seleccionar distintos tipos de brocha también puedes usar el borrador. Ajusta el grosor de tu trazo/borrador desde el slider o desde el teclado '+' o '-' .No olvides guardar tu dibujo.</h3>
             
              <Draw></Draw>

          </div>
        )}

        {activeTab === 6 && (
          <div>
            <h2>Partículas 3D</h2>
            <h3>Elige tu forma de partículas deseada</h3>

              <Particulas></Particulas>

          </div>
        )}

        {activeTab === 7 && (
          <div>
            <h2>Campos de flujo</h2>
            
              <FlowField></FlowField>

          </div>
        )}

        {activeTab === 8 && (
          <div>
            <h2>Perlin Noise</h2>
            
              <PerlinNoise></PerlinNoise>
          
          </div>
        )}

        {activeTab === 9 && (
          <div>
            <h2>Visualizador</h2>
            <h3>En el botón de Browse, elige la canción desde tu ordenador. Luego dale a Start para comenzar y si lo deseas lo puedes parar.</h3>
          
              <Visualizer></Visualizer>

          </div>
        )}
        
      </div>
    </div>
    
  );
};

export default Tabs;
*/

/*
import React, { useState, useEffect } from 'react';
import './Tabs.css';
import './App.css';

import Laberinto from './LaberintoP5.js';
import Planetario from './PlanetarioP5.js';
import Puzzle from './Puzzle.js';
import Draw from './DrawP5.js';
import Particulas from './ParticulasP5.js';
import FlowField from './FlowFieldP5.js';
import PerlinNoise from './PerlinNoiseP5.js';
import Visualizer from './VisualizerP5.js';

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
      
    

      <div className="tabs">
        

    <a  href="#inicio"
          className={`tabsbutton ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <b>Inicio</b>
        </a>
         
          
      
        
<a href="#planetario"
          className={`tabsbutton ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <b>Planetario</b>
        </a>

        <a
          href="#puzzle"
          className={`tabsbutton ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          <b>Puzzle</b>
        </a>
      

      </div>

      <div className="tabs">

      <a 
          href="#laberinto"
          className={`tabsbutton ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <b>Laberinto</b>
        </a>

        <a
          href="#draw"
          className={`tabsbutton ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          <b>Dibuja</b>
        </a>

        

        <a
          href="#particulas"
          className={`tabsbutton ${activeTab === 6 ? 'active' : ''}`}
          onClick={() => handleTabClick(6)}
        >
          <b>Partículas 3D</b>
        </a>

      </div >

      <div className="tabs">
        
      <a
          href="#flowfield"
          className={`tabsbutton ${activeTab === 7 ? 'active' : ''}`}
          onClick={() => handleTabClick(7)}
        >
          <b>Campo de flujo</b>
        </a>

        <a
          href="#perlinnoise"
          className={`tabsbutton ${activeTab === 8 ? 'active' : ''}`}
          onClick={() => handleTabClick(8)}
        >
          <b>Perlin Noise</b>
        </a>

        <a
          href="#visualizer"
          className={`tabsbutton ${activeTab === 9 ? 'active' : ''}`}
          onClick={() => handleTabClick(9)}
        >
          <b>Visualizador</b>
        </a>
        
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
           
             <Planetario></Planetario> 
                
          </div>
        }

        {activeTab === 3 && 
          <div>
          
            <Puzzle></Puzzle>

          </div>
        }

        {activeTab === 4 && (
          <div>
            <h2>Laberinto</h2>
            <h3>Desplázate desde la casilla azul con los cursores del teclado para llegar a la meta.</h3>
              
              <Laberinto></Laberinto>
            
          </div>
        )}

        {activeTab === 5 && (
          <div>
            <h2>Dibujar</h2>
            <h3>Dibuja lo que quieras con cada una de las herramientas, puedes seleccionar distintos tipos de brocha también puedes usar el borrador. Ajusta el grosor de tu trazo/borrador desde el slider o desde el teclado '+' o '-' .No olvides guardar tu dibujo.</h3>
             
              <Draw></Draw>

          </div>
        )}

        {activeTab === 6 && (
          <div>
            <h2>Partículas 3D</h2>
            <h3>Elige tu forma de partículas deseada</h3>

              <Particulas></Particulas>

          </div>
        )}

        {activeTab === 7 && (
          <div>
            <h2>Campos de flujo</h2>
            
              <FlowField></FlowField>

          </div>
        )}

        {activeTab === 8 && (
          <div>
            <h2>Perlin Noise</h2>
            
              <PerlinNoise></PerlinNoise>
          
          </div>
        )}

        {activeTab === 9 && (
          <div>
            <h2>Visualizador</h2>
            <h3>En el botón de Browse, elige la canción desde tu ordenador. Luego dale a Start para comenzar y si lo deseas lo puedes parar.</h3>
          
              <Visualizer></Visualizer>

          </div>
        )}
        </div>
      </div>
    </div>
    
  );
};

export default Tabs;
*/
//////////////////////////
import React, { useState, useEffect } from 'react';
import './Tabs.css';
import './App.css';

import Laberinto from './LaberintoP5.js';
import Planetario from './PlanetarioP5.js';
import Puzzle from './Puzzle.js';
import Draw from './DrawP5.js';
import Particulas from './ParticulasP5.js';
import FlowField from './FlowFieldP5.js';
import PerlinNoise from './PerlinNoiseP5.js';
import Visualizer from './VisualizerP5.js';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [p5ContainerMounted, setP5ContainerMounted] = useState(false);
  //const [isHomePage, setIsHomePage] = useState(true);
  const [showTabs, setShowTabs] = useState(true);

  useEffect(() => {
    if (window.location.hash !== '') {
      setShowTabs(false);
    }

    if (activeTab === 2 && !p5ContainerMounted) {
      setP5ContainerMounted(true);
    }
  }, [activeTab, p5ContainerMounted]);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
    setShowTabs(true); 
  };
  const handleGoBack = () => {
    window.location.href = '/'; 
  };

  return (
    <div className="tabmain">
      {showTabs }
  
      <div className="tabs-background">
        {window.location.pathname !== '/' && (
          <a href="/" className="back-button">
            Volver a la página principal
          </a>
        )}
    
      <div className={`tabs ${showTabs ? '' : 'hide-tabs'}`}>
        <a href="#inicio"
          className={`tabsbutton ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          <b>Inicio</b>
        </a>
         
        <a href="#planetario"
          className={`tabsbutton ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          <b>Planetario</b>
        </a>

        <a href="#puzzle"
          className={`tabsbutton ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => {handleTabClick(3);
          setShowTabs(false); 
        }}
        >
          <b>Puzzle</b>
        </a>

      </div>

      <div className={`tabs ${showTabs ? '' : 'hide-tabs'}`}>
        <a href="#laberinto"
          className={`tabsbutton ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}
        >
          <b>Laberinto</b>
        </a>

        <a href="#draw"
          className={`tabsbutton ${activeTab === 5 ? 'active' : ''}`}
          onClick={() => handleTabClick(5)}
        >
          <b>Dibuja</b>
        </a>

        <a href="#particulas"
          className={`tabsbutton ${activeTab === 6 ? 'active' : ''}`}
          onClick={() => handleTabClick(6)}
        >
          <b>Partículas 3D</b>
        </a>

      </div >

      <div className={`tabs ${showTabs ? '' : 'hide-tabs'}`}>
        
        <a href="#flowfield"
          className={`tabsbutton ${activeTab === 7 ? 'active' : ''}`}
          onClick={() => handleTabClick(7)}
        >
          <b>Campo de flujo</b>
        </a>

        <a href="#perlinnoise"
          className={`tabsbutton ${activeTab === 8 ? 'active' : ''}`}
          onClick={() => handleTabClick(8)}
        >
          <b>Perlin Noise</b>
        </a>

        <a href="#visualizer"
          className={`tabsbutton ${activeTab === 9 ? 'active' : ''}`}
          onClick={() => handleTabClick(9)}
        >
          <b>Visualizador</b>
        </a>
      
      </div>
      
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
          </div>
        )}

        {activeTab === 2 && p5ContainerMounted &&
         <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
              <br></br>
              <h2>Planetario interactivo</h2>
              <h3>Haz click en el Sol o en aquellos planetas que desees conocer sus características </h3>
           
             <Planetario></Planetario> 
                
          </div>
        }

        {activeTab === 3 && 
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
               <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
              </svg>
                <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <br></br>
          
            <Puzzle></Puzzle>

          </div>
        }

        {activeTab === 4 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Laberinto</h2>
            <h3>Desplázate desde la casilla azul con los cursores del teclado para llegar a la meta.</h3>
              
              <Laberinto></Laberinto>
            
          </div>
        )}

        {activeTab === 5 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Dibujar</h2>
            <h3>Dibuja lo que quieras con cada una de las herramientas, puedes seleccionar distintos tipos de brocha también puedes usar el borrador. Ajusta el grosor de tu trazo/borrador desde el slider o desde el teclado '+' o '-' .No olvides guardar tu dibujo.</h3>
             
              <Draw></Draw>

          </div>
        )}

        {activeTab === 6 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Partículas 3D</h2>
            <h3>Elige tu forma de partículas deseada</h3>

              <Particulas></Particulas>

          </div>
        )}

        {activeTab === 7 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Campos de flujo</h2>
            
              <FlowField></FlowField>

          </div>
        )}

        {activeTab === 8 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Perlin Noise</h2>
            
              <PerlinNoise></PerlinNoise>
          
          </div>
        )}

        {activeTab === 9 && (
          <div>
            <button className="back-button" onClick={handleGoBack}>
              <div className="button-content">
                <svg fill="#000000" width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></path>
                </svg>
                  <span>  Volver a la página principal</span>
              </div>
            </button>
            <br></br>
            <h2>Visualizador</h2>
            <h3>Selecciona la canción que prefieras, luego dale a Start para comenzar y si lo deseas lo puedes parar. Desplázate por cada una de las formas.</h3>
          
              <Visualizer></Visualizer>

          </div>
        )}
      </div>
    </div>
   </div>
  );
};

export default Tabs;