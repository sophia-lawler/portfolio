import { useTexture } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useMemo } from "react";
import { Mesh } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

function Model() {
  const obj = useLoader(OBJLoader, "/model.obj");
  const texture = useTexture("/texture.png");
  const geometry = useMemo(() => {
    let g;
    obj.traverse((c) => {
      if (c.type === "Mesh") {
        const _c = c as Mesh;
        g = _c.geometry;
      }
    });
    return g;
  }, [obj]);

  return (
    <mesh rotation={[0, 3.1, 0]} geometry={geometry} scale={5}>
      <meshPhysicalMaterial map={texture} />
    </mesh>
  );
};

export default Model;
