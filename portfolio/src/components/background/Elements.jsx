

function Elements() {
    return (
        <>
            <ambientLight intensity={1}/>
            <pointLight color="blue" position={[2, 0, 5]} intesity={2}/>
            <mesh  position={[2.9, -2, -2]}>
                <boxGeometry args={[0.5, 0.5, 0.5]}/>
                <meshBasicMaterial
                    color="gray"
                    attach="material"
                    roughness={10}
                    metalness={0}
                />
            </mesh>
        </>
    );
}

export default Elements;