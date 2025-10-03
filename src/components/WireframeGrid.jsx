const WireframeGrid = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // 1. Scene Setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0); 
        mountRef.current.appendChild(renderer.domElement);

        // 2. Grid Creation (replicates the ground plane)
        const size = 50;
        const divisions = 50;
        const colorCenterLine = 0xff4500; // Orange-Red
        const colorGrid = 0x1a401a; // Dark Green
        const gridHelper = new THREE.GridHelper(size, divisions, colorCenterLine, colorGrid);
        gridHelper.position.y = -2;
        gridHelper.material.opacity = 0.5;
        gridHelper.material.transparent = true;

        scene.add(gridHelper);

        // 3. Camera Position
        camera.position.set(0, 0.5, 5);

        // 4. Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);
            gridHelper.position.z -= 0.1; 
            if (gridHelper.position.z < -5) {
                gridHelper.position.z = 0; 
            }
            renderer.render(scene, camera);
        };
        animate();

        // 5. Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // 6. Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            gridHelper.geometry.dispose();
            gridHelper.material.dispose();
        };
    }, []);

    return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none" />;
};