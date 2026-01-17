import {useRef } from "react";
import { useGLTF } from "@react-three/drei";

const DogBed = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/dog_bed.glb");



  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default DogBed;

useGLTF.preload("/dog_bed.glb");