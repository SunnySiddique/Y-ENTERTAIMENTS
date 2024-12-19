export const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragmentShader = `
  uniform vec3 colorA;
  uniform vec3 colorB;
  uniform float time;
  varying vec2 vUv;

  void main() {
    vec3 color = mix(colorA, colorB, vUv.y + sin(vUv.x * 10.0 + time) * 0.1);
    gl_FragColor = vec4(color, 1.0);
  }
`;
