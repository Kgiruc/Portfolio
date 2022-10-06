import {Canvas} from "@react-three/fiber";
import {Suspense} from "react";
import Elements from "./Elements.jsx";

function Background() {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Elements />
            </Suspense>
        </Canvas>
    );
}

export default Background;