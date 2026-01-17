import {useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Butters = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/butters.glb");



  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Butters;

useGLTF.preload("/butters.glb");