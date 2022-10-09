import * as THREE from "three";
import {useRef, useMemo} from "react";
import {useFrame} from "@react-three/fiber";
import {Edges} from "@react-three/drei";

function Elements() {
    const group = useRef();
    useFrame(({clock}) => {
        const elapsedTime = clock.getElapsedTime();
        group.current.rotation.y = elapsedTime / 70;
        group.current.rotation.z = elapsedTime / 70;
        group.current.rotation.x = elapsedTime / 100;
    });

    const [geo, mat, coords] = useMemo(() => {
        const geo = new THREE.BoxGeometry(5, 5, 5);
        const mat = new THREE.MeshBasicMaterial({
            color: new THREE.Color("rgba(1, 26, 131, 0.33)")
        });
        const coords = new Array(1000)
            .fill()
            .map(i => [
                Math.random() * 800 - 400,
                Math.random() * 800 - 400,
                Math.random() * 800 - 400
            ]);
        return [geo, mat, coords];
    }, []);

    return (
        <>
            <group ref={group}>
                {coords.map(([p1, p2, p3], i) => (
                    <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]}/>
                ))}
            </group>
        </>
    );
}

export default Elements;