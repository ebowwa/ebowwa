import { KeyboardControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, useMemo, Suspense } from "react";
import { Physics } from "@react-three/rapier";
import { useStore } from "./store";

export const Controls = {
    left: "left",
    right: "right",
    jump: "jump",
    run: "run",
};

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const map = useMemo(
        () => [
            { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
            { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
            { name: Controls.jump, keys: ["Space"] },
            { name: Controls.run, keys: ["ShiftLeft", "ShiftRight"] },
        ],
        []
    );

    const { gravity } = useStore();

    return (
        <>
            <div className="canvas-container">
                <KeyboardControls map={map}>
                    <Canvas>
                        <Suspense fallback={null}>
                            <Physics gravity={[0, -gravity, 0]} timeStep={"vary"}>
                                {children}
                            </Physics>
                        </Suspense>
                    </Canvas>
                </KeyboardControls>
            </div>
        </>
    );
}