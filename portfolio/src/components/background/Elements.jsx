import Person from "../../assets/Me.jpeg";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {OrbitControls, Stars} from "@react-three/drei";
import {useRef} from "react";
import { useFrame} from "@react-three/fiber";

function Elements() {
    const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [Person, Person, Person,]);

    const geometryRef = useRef();

      useFrame(({ clock }) =>{
          const elapsedTime = clock.getElapsedTime();
        geometryRef.current.rotation.y = elapsedTime / 2;
        geometryRef.current.rotation.z = elapsedTime;
        geometryRef.current.rotation.x = elapsedTime;
    })

    return (
        <>
            <ambientLight intensity={1}/>
            <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade={true}/>
            <pointLight color="white" position={[2, 0, 2]} intesity={1.2} />
            <mesh ref={geometryRef}>
                <sphereGeometry args={[1, 32, 32]}/>
                <meshPhongMaterial specular={specularMap}/>
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
                <OrbitControls
                    enableZoom={false}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.4}
                />
            </mesh>
        </>
    );
}

export default Elements;