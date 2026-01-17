import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';

import heartCakeScene from '../../public/heartcake.glb';

const HeartCake = ({...props}) => {
    const heartCakeRef = useRef(null);
   const { scene  } = useGLTF(heartCakeScene);

  
  return (
    <mesh 
    {...props}
    ref ={heartCakeRef}
    >
        <primitive object = {scene} />
    </mesh>
  )
}


export default HeartCake