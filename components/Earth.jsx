import { useEffect, useRef } from "react";
import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    SphereGeometry,
    MeshPhysicalMaterial,
    Mesh,
    DirectionalLight,
    PointLight,
    TextureLoader,
} from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { target } from "./Earth.module.css";

export default function Earth() {
    const targetRef = useRef();

    useEffect(() => {
        // Sceneを作成
        const scene = new Scene();

        // Cameraを作成
        const width = window.innerWidth;
        const height = window.innerHeight / 2;

        const camera = new PerspectiveCamera(50, width / height, 0.1, 10000);

        camera.position.set(0, 0, 350);

        const renderer = new WebGLRenderer({ alpha: true });

        renderer.setSize(width, height);
        renderer.setPixelRatio(window.devicePixelRatio);

        targetRef.current.appendChild(renderer.domElement);

        const BallGeometry = new SphereGeometry(100, 64, 32);

        const texture = new TextureLoader().load("/earth.jpeg");

        const BallMaterial = new MeshPhysicalMaterial({ map: texture });

        const BallMesh = new Mesh(BallGeometry, BallMaterial);

        BallMesh.position.set(0, 0, 0);

        scene.add(BallMesh);

        const directionalLightFront = new DirectionalLight(0xffffff, 5);

        directionalLightFront.position.set(0, 0, 1);

        scene.add(directionalLightFront);

        // ポイント光源(Point Light)
        const pointLight = new PointLight(0xffffff, 8);
        scene.add(pointLight);

        const controls = new OrbitControls(camera, renderer.domElement);

        function animate() {
            pointLight.position.set(
                200 * Math.sin(Date.now() / 500),
                200 * Math.sin(Date.now() / 1000),
                200 * Math.cos(Date.now() / 500)
            );
            requestAnimationFrame(animate);

            // Renderingする
            renderer.render(scene, camera);
            controls.update();
        }

        animate();

        controls.zoomSpeed = 0.5;
        controls.rotateSpeed = 0.1;
        controls.autoRotate = true;

        controls.maxZoom = 50;
        controls.minZoom = 1000;

        controls.minPolarAngle = Math.PI / 3.5;
        controls.maxPolarAngle = Math.PI - Math.PI / 3;

        return () => {
            targetRef.current.removeChild(renderer.domElement);
        };
    }, []);
    return <dev ref={targetRef} className={target} />;
}
