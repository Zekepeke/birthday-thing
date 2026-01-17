import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const HeartCake = (props: any) => {
  const heartCakeRef = useRef<any>(null);

  // use URL path for public assets
  const { scene } = useGLTF("/heartcake.glb");

  return (
    <group {...props} ref={heartCakeRef}>
      <primitive object={scene} />
    </group>
  );
};

export default HeartCake;

// optional: prefetch
useGLTF.preload("/heartcake.glb");