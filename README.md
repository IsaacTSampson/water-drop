# water-drop

## Pages
https://isaactsampson.github.io/water-drop/

## Notes
The original implementation of this component can be found on the first page of my portfolio website (the big floating logo https://isaac-portfolio.dev/). The original differs from this example in 2 ways: 

1. The texture is created from a video asset rather than a canvas element.
2. A fixed pixel height has been applied to the (in this case) video element eliminating the need for image scaling making the code slightly easier to read. 

## Learning sources
https://codepen.io/shshaw/pen/qqPwXM - This is where I took inspiration from. I used this code as a base and built on top of it.

https://pixijs.com/8.x/examples

## How it works
This code creates a ripple effect from an .mp4 asset using pixi.js (a 2D WebGL renderer library) by manipulating the mesh geometry of the .mp4 asset texture. When the user interacts with the video via mouse clicks or movements, the code calculates the ripple's origin point based on the mouse coordinates, scaled to the video's dimensions. It then updates the mesh geometry’s vertices to simulate ripples originating from the point of interaction.

The ripple effect works by adjusting the positions of the vertices in the MeshPlane, which represents the video. The ripple originates from the interaction point and spreads outwards, with its intensity governed by a waveStrength variable that gradually decays over time. The code uses the Math function 'sin' to create the ripple motion, with the displacement of each vertex determined by its distance from the origin and the current wave phase (count). Mouse velocity also influences the ripple strength when the mouse enters the video area.