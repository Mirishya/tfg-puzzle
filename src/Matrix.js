import React, { useEffect } from 'react';
import p5 from 'p5';

const MatrixRain = () => {
    let col = [];
    let scale = 30;

    useEffect(() => {
        const sketch = (p) => {

            class Char {
                constructor() {
                    this.changeChar();
                    this.speed = p.floor(p.random([0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 20]));
                    this.value = String.fromCharCode(p.int(p.random(0x30A0, 0x30ff)));
                }
                changeChar() {
                    if (p.frameCount % this.speed === 0) {
                        /*const charOptions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
                          this.value = charOptions[p.floor(p.random(charOptions.length))];*/
                        this.value = String.fromCharCode(p.int(p.random(0x30A0, 0x30ff)));
                    }
                }
            }

            class Column {
                constructor(x) {
                    this.x = x;
                    this.string = [];
                    this.string[0] = new Char();
                    this.speed = p.int(p.random(4, 6));
                    this.size = p.int(p.random(10, 30));
                }

                jump() {
                    if (p.frameCount % this.speed === 0) {
                        this.string.push(new Char());
                    }
                }

                show() {
                    for (let y = 0; y < this.string.length - 1; y++) {
                        p.fill(0, 200, 70, p.map(y, this.string.length - this.size, this.string.length, 0, 400));
                        p.text(this.string[y].value, this.x * scale + (p.width % scale) / 2, (y + 1) * scale);
                        this.string[y].changeChar();
                    }

                    p.fill(200, 255, 200, 255);
                    p.text(this.string[this.string.length - 1].value, this.x * scale + (p.width % scale) / 2, (this.string.length) * scale);
                    if (this.string.length - this.size > p.height / scale) {
                        this.string = [];
                        this.string[0] = new Char();
                        this.speed = p.int(p.random(4, 6));
                        this.size = p.int(p.random(10, 20));
                    }
                }
            }

            p.setup = () => {
                p.createCanvas(p.windowWidth, p.windowHeight);
                p.pixelDensity(0.4);
                for (let x = 0; x < p.floor(p.width / scale); x++) {
                    col[x] = new Column(x);
                }
            };

            p.draw = () => {
                p.background(0);
                p.fill(255);
                p.textSize(scale);
                for (let x = 0; x < col.length; x++) {
                    col[x].jump();
                    col[x].show();
                }
            };
        };
    
  
    const p5Canvas = new p5(sketch);
    return () => {
        p5Canvas.remove(); // Elimina el sketch de p5.js al desmontar el componente

    };

}, []);

  return <div></div>;
};

export default MatrixRain;