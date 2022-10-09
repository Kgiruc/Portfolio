import Person from "../../assets/Me.jpeg";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Edges} from "@react-three/drei";

function Square() {
    const [colorMap, normalMap, specularMap] = useLoader(TextureLoader, [Person, Person, Person,]);

    const geometryRef = useRef();

    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        geometryRef.current.rotation.y = elapsedTime / 8;
        geometryRef.current.rotation.z = elapsedTime / 8;
        geometryRef.current.rotation.x = elapsedTime / 20;
    })

    return (
        <>
            <ambientLight intensity={1}/>
            <pointLight color="blue" position={[2, 0, 5]} intesity={2}/>
            <mesh ref={geometryRef} position={[0, 0, 0]}>
                <boxGeometry args={[2.9, 2.9, 2.9]}/>
                <meshPhongMaterial specular={specularMap}/>
                <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.4} roughness={0.7}/>
            </mesh>
        </>
    );
}

export default Square;