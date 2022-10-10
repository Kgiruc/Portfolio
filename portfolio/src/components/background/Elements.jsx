import * as THREE from "three";
import {useRef, useMemo} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {Edges} from "@react-three/drei";

function Elements() {
    const { viewport} = useThree();
    const group = useRef();
    let theta = 0;
    useFrame(({mouse, clock}) => {
        const elapsedTime = clock.getElapsedTime();
        const x = (mouse.x * viewport.width) / elapsedTime * 20;
        const y = (mouse.y * viewport.height) / elapsedTime * 20;
        group.current.position.x = x;
        group.current.rotation.y = y;
        group.current.rotation.z = elapsedTime / 4;
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
                    <mesh key={i} geometry={geo} material={mat} position={[p1, p2, p3]}>
                        <Edges scale={1}
                           color="white"
                    />
                    </mesh>
                ))}

            </group>

        </>
    );
}

export default Elements;