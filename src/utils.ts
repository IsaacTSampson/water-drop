import Coordinates from "./types/Coordinates.ts";
import Velocity from "./types/Velocity.ts";

export interface CalculateMouseVelocityResult {
  lastTime: number;
  lastMousePosition: Coordinates;
  velocity: Velocity;
}

export interface CalculateMouseVelocityParams
  extends CalculateMouseVelocityResult {
  event: MouseEvent;
}

export const calculateMouseVelocity = (
  params: CalculateMouseVelocityParams,
): CalculateMouseVelocityResult => {
  const { lastTime, event, lastMousePosition, velocity } = params;
  const currentTime = Date.now();
  const timeDelta = currentTime - lastTime;

  if (timeDelta > 0) {
    const currentMousePosition = { x: event.clientX, y: event.clientY };
    const distanceX = Math.abs(currentMousePosition.x - lastMousePosition.x);
    const distanceY = Math.abs(currentMousePosition.y - lastMousePosition.y);

    return {
      lastTime: currentTime,
      lastMousePosition: currentMousePosition,
      velocity: {
        x: Math.max(distanceX / timeDelta, 0),
        y: Math.max(distanceY / timeDelta, 0),
      },
    };
  }

  return {
    lastTime,
    lastMousePosition,
    velocity,
  };
};
