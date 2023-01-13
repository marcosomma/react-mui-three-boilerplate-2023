import { ReactElement} from 'react'
import { Mesh, Euler, Vector3, Color } from "three";
import { usePlane } from '@react-three/cannon'

interface planeProps {
    rotation?: Euler;
    position?: Vector3;
    color?: Color;
  }
function Plane(props: planeProps): ReactElement {
  const [ref] = usePlane<Mesh>((():any => ({ rotation: [-Math.PI / 2, 0, 0], ...props })))
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#9a9a85" />
    </mesh>
  )
}

export default Plane;