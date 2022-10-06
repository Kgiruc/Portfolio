

function Elements() {
    return (
        <>
            <ambientLight intensity={1}/>
            <pointLight color="blue" position={[2, 0, 5]} intesity={2}/>
            <mesh  position={[2, -2, -2]}>
                <boxGeometry args={[.5, .5, .5]}/>
                <meshPhongMaterial color="green"/>
            </mesh>
        </>
    );
}

export default Elements;