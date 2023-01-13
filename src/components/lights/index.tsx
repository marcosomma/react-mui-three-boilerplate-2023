import { ReactElement } from "react";
import { Vector3 } from "three";

function Lights(): ReactElement {
  return (
    <>
      <spotLight
        castShadow
        position={[-100, 10, 45]}
        rotation={[0, 0.1, 0]}
        angle={12}
        penumbra={1}
        intensity={0.25}
        color={"#ffffff"}
      />
      <spotLight
        castShadow
        position={[-45, 10, 100]}
        rotation={[0, 0.1, 0]}
        angle={12}
        penumbra={1}
        intensity={0.25}
        color={"#ffffff"}
      />
      <spotLight
        castShadow
        position={[100, 10, -15]}
        rotation={[0, 0.1, 0]}
        angle={12}
        penumbra={1}
        intensity={0.25}
        color={"#ffffff"}
      />
      <spotLight
        castShadow
        position={[85, 10, 70]}
        rotation={[0, 0.1, 0]}
        angle={12}
        penumbra={1}
        intensity={0.25}
        color={"#ffffff"}
      />
      <spotLight
        castShadow
        position={[40, 40, 30]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color={"#ff0000"}
        lookAt={(): Vector3 => new Vector3(-50, 50, 50)}
      />
      <spotLight
        castShadow
        position={[0, 40, 45]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color={"#00ff00"}
      />
      <spotLight
        castShadow
        position={[-40, 40, 30]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        color={"#0000ff"}
      />
    </>
  );
}

export default Lights;
