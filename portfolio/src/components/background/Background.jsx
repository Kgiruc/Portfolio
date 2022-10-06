import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Square from "./Square.jsx";
import Elements from "./Elements.jsx";

function Background() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Square />
                <Elements/>
            </Suspense>
        </Canvas>
    );
}

export default Background;