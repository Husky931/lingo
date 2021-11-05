import React from "react";
import modelSrc2 from "../assets/l2.glb";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Logo3D() {
  const gltf = useLoader(GLTFLoader, modelSrc2);
  gltf.scene.scale.x = 1 / 100;
  gltf.scene.scale.y = 1 / 100;
  gltf.scene.scale.z = 1 / 100;

  useFrame(() => {
    gltf.scene.rotation.y += 0.03;
  });

  return <primitive object={gltf.scene} />;
}
