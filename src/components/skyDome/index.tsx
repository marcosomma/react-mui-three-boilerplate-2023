import { ReactElement } from "react";
import { TextureLoader, BackSide } from "three";
import { useLoader } from "@react-three/fiber";

function Dome(): ReactElement {
  const maps = useLoader(TextureLoader, ['assets/img/domeSky.jpeg']) // prettier-ignore

  return (
    <group position={[0,20,0]}>
      <mesh>
        <sphereBufferGeometry args={[80, 60, 40]} />
        <meshBasicMaterial map={maps[0]} side={BackSide} />
      </mesh>
    </group>
  );
}

export default Dome;
