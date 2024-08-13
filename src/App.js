import React, { useState } from 'react';
// import ThreeCompanent from './ThreeCompanent'
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <ThreeCompanent/>
//     </div>
//   );
// }
import * as THREE from 'three';


function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
  
  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  const geometry = new THREE.BoxGeometry( 2, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
  camera.position.z = 5;
  
  function animate() {
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    renderer.render( scene, camera );
  }
  renderer.setAnimationLoop( animate );
  return (
    <div>
    </div>
  );
}
export default App;
