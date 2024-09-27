import "./style.css";

import { Application, Assets, MeshPlane, Renderer, Texture } from "pixi.js";
import { calculateMouseVelocity } from "./utils.ts";

export const elementNotFoundError = (elementId: string) =>
  new Error(`element with id '${elementId}' not found`);

const decrementRate = 0.01;
const threshold = 0.5;
const velocityConstant = 3;
const maxRippleStrength = 5;
const rippleSize = 12;

const wrapperId = "wrapper";
const videoId = "video";

const assetUri = import.meta.env.DEV
  ? "media/weird.mp4"
  : `${import.meta.env.BASE_URL}media/weird.mp4`;

(async () => {
  const wrapper = document.getElementById(wrapperId) as HTMLDivElement | null;
  if (!wrapper) throw elementNotFoundError(wrapperId);

  const video = document.getElementById(videoId) as HTMLVideoElement | null;
  if (!video) throw elementNotFoundError(videoId);

  const getScaledMouseCoordinates = (event: MouseEvent) => {
    const rect = app.canvas.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const xScale = mouseX / rect.width;
    const yScale = mouseY / rect.height;

    return {
      x: video.videoWidth * xScale,
      y: video.videoHeight * yScale,
    };
  };

  const createApp = async () => {
    app = new Application<Renderer>();
    await app.init({ resizeTo: video, backgroundAlpha: 0 });

    app.canvas.addEventListener("click", (event) => {
      waveStrength = maxRippleStrength;
      const { x, y } = getScaledMouseCoordinates(event);
      rippleOrigin.x = x;
      rippleOrigin.y = y;
    });

    wrapper.appendChild(app.canvas);
  };

  const createMesh = () => {
    mesh = new MeshPlane({ texture, verticesX: 200, verticesY: 200 });
    mesh.width = video.clientWidth;
    mesh.height = video.clientHeight;

    app.stage.addChild(mesh);
    return mesh;
  };

  const updateTexture = () => texture.update();

  let app: Application<Renderer> = new Application<Renderer>();
  let texture: Texture = await Assets.load(assetUri);

  const videoElement = texture.source.resource as HTMLVideoElement;
  videoElement.loop = true;

  let mesh: MeshPlane = new MeshPlane({
    texture,
    verticesX: 200,
    verticesY: 200,
  });

  await createApp();
  createMesh();

  let originalVertices =
    mesh.geometry.attributes.aPosition.buffer.data.slice(0);
  let count = 0;
  let waveStrength = 0;
  let rippleOrigin = { x: 0, y: 0 };

  function animate() {
    count += 0.15;

    updateTexture();
    if (waveStrength === 0) return;

    const vertices = mesh.geometry.attributes.aPosition.buffer.data;

    for (let i = 0; i < vertices.length; i += 2) {
      let x = originalVertices[i] - rippleOrigin.x;
      let y = originalVertices[i + 1] - rippleOrigin.y;

      let distance = Math.sqrt(x * x + y * y);
      let offset = waveStrength * Math.sin(distance / rippleSize - count);

      vertices[i] = originalVertices[i] + (x / distance) * offset;
      vertices[i + 1] = originalVertices[i + 1] + (y / distance) * offset;
    }
    mesh.geometry.attributes.aPosition.buffer.update();

    if (waveStrength > threshold) {
      waveStrength -= waveStrength * decrementRate;
      return;
    }
    waveStrength = 0;
  }

  app.ticker.add(animate);

  app.canvas.addEventListener("mouseenter", (event) => {
    const maxVelocity =
      Math.max(velocityArgs.velocity.x, velocityArgs.velocity.y) *
      velocityConstant;

    const newWaveStrength = waveStrength + maxVelocity;

    waveStrength = Math.min(newWaveStrength, maxRippleStrength);

    const { x, y } = getScaledMouseCoordinates(event);
    rippleOrigin.x = x;
    rippleOrigin.y = y;
  });

  let velocityArgs = {
    lastMousePosition: { x: 0, y: 0 },
    lastTime: Date.now(),
    velocity: { x: 0, y: 0 },
  };

  document.addEventListener("mousemove", (event) => {
    velocityArgs = calculateMouseVelocity({ ...velocityArgs, event });
  });
})();
