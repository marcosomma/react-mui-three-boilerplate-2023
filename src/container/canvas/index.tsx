import { Suspense, ReactElement, useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, MapControls } from "@react-three/drei";
import { /*Debug,*/ Physics } from "@react-three/cannon";
import { Color, Vector3 } from "three";
import Loader from "../../components/loader";
import Box from "../../components/box";
import Plane from "../../components/plane";
import CompoundBody from "../../components/compoundBody";
import House from "../../components/houseObject/indexGLTF";
import Dome from "../../components/skyDome";
import Lights from "../../components/lights";
import { StateContext } from "../../context/providers/State";

function CanvasContainer(): ReactElement {
  const { state } = useContext(StateContext);
  const totalPhysicBoxes: number[] = Array.from(
    { length: state.test },
    (e, i): number => i
  );
  console.log('state', state)
  return (
    <Canvas shadows camera={{ position: [50, 20, 50] }}>
      <MapControls maxPolarAngle={Math.PI / 2 - 0.1} maxDistance={50} />
      <Suspense fallback={<Loader />}>
        <Preload all />
        <Lights />
        <Dome />
        <group position={[0, 5, -15]}>
          <Box
            color={new Color(0xff0000)}
            animated
            position={new Vector3(0, 0, 0)}
          />
          <Box
            color={new Color(0x0000ff)}
            reverseRotation
            animated
            wireframe
            position={new Vector3(0, 0, 0)}
          />
        </group>
        <group position={[0, 11.8, -15]}>
          <Box
            color={new Color(0xff0000)}
            animated
            wireframe
            position={new Vector3(0, 0, 0)}
          />
          <Box
            color={new Color(0x0000ff)}
            reverseRotation
            animated
            position={new Vector3(0, 0, 0)}
          />
        </group>
        <Physics>
          {/* <Debug scale={1} color="black"> */}
          {totalPhysicBoxes.map((index) => (
            <CompoundBody
              key={index}
              index={index}
              color={state.test_color}
              show={state.show}
              transmission={0}
              position={[
                Math.random() < 0.5 ? -Math.random() * 5 : Math.random() * 5,
                40,
                Math.random() < 0.5 ? -Math.random() * 5 : Math.random() * 5,
              ]}
              rotation={[
                Math.random() * 360,
                Math.random() * 360,
                Math.random() * 360,
              ]}
            />
          ))}
          <House />
          <Plane />
          {/* </Debug> */}
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default CanvasContainer;
