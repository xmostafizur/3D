// Scene, Camera, Renderer তৈরি করা
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ভূমি তৈরি করা
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = Math.PI / 2; // ভূমি সমান্তরাল করা
scene.add(plane);

// ঘনবসতি তৈরি করা
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

// ক্যামেরা অবস্থান
camera.position.z = 5;

// অ্যানিমেশন ফাংশন
function animate() {
    requestAnimationFrame(animate);
    
    // ঘনবসতি ঘোরানো
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// উইন্ডো রিসাইজ হ্যান্ডলার
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// অ্যানিমেশন শুরু করা
animate();
