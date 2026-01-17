import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Chair = (props: any) => {
  const ref = useRef<any>(null);
  const { scene } = useGLTF("/antique_chair.glb");



  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  );
};

export default Chair;

useGLTF.preload("/antique_chair.glb");