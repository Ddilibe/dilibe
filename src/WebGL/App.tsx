import { Canvas, useFrame } from '@react-three/fiber';
import { Clear, AddBorder } from './commands';
import { useRef, useEffect, useState, type RefObject } from 'react';
import { type ThreeEvent } from '@react-three/fiber';
import { Edges, FirstPersonControls, OrbitControls } from '@react-three/drei';
import type { CubieData } from './types';
import type { Mesh } from 'three';

const getNeighbours = (targetMash: Mesh, otherMash: Record<string, Mesh>): string[] => {
    const neighbors: string[] = [];

    Object.keys(otherMash).forEach(keys => {
        if (keys === targetMash.name) return;
        // const singleMash = otherMash[keys] as Mesh;
        // targetMash.getWorldPosition(targetMash.position);
        // singleMash.getWorldPosition(singleMash.position);
        // const distance = targetMash.position.distanceTo(singleMash.position);
        // if (distance > 0.1 && distance < 1.1) {
        //     neighbors.push(keys);
        // }
    })
    return neighbors;
}

function AnimatedBox() {

    // References for the front
    const frontTopRight = useRef(null);
    const frontTopMiddle = useRef(null);
    const frontTopLeft = useRef(null);
    const frontBottomRight = useRef(null);
    const frontBottomMiddle = useRef(null);
    const frontBottomLeft = useRef(null);
    const frontMiddleRight = useRef(null);
    const frontMiddleMiddle = useRef(null);
    const frontMiddleLeft = useRef(null);

    // References for the center
    const centerTopRight = useRef(null);
    const centerTopMiddle = useRef(null);
    const centerTopLeft = useRef(null);
    const centerBottomRight = useRef(null);
    const centerBottomMiddle = useRef(null);
    const centerBottomLeft = useRef(null);
    const centerMiddleRight = useRef(null);
    const centerMiddleMiddle = useRef(null);
    const centerMiddleLeft = useRef(null);

    // References for the back
    const backTopRight = useRef(null);
    const backTopMiddle = useRef(null);
    const backTopLeft = useRef(null);
    const backBottomRight = useRef(null);
    const backBottomMiddle = useRef(null);
    const backBottomLeft = useRef(null);
    const backMiddleRight = useRef(null);
    const backMiddleMiddle = useRef(null);
    const backMiddleLeft = useRef(null);

    const cubeToRef: Record<string, RefObject<Mesh | null>> = {
        "front-top-right": frontTopRight,
        "front-top-middle": frontTopMiddle,
        "front-top-left": frontTopLeft,
        "front-middle-right": frontMiddleRight,
        "front-middle-middle": frontMiddleMiddle,
        "front-middle-left": frontMiddleLeft,
        "front-bottom-right": frontBottomRight,
        "front-bottom-middle": frontBottomMiddle,
        "front-bottom-left": frontBottomLeft,
        "center-top-right": centerTopRight,
        "center-top-middle": centerTopMiddle,
        "center-top-left": centerTopLeft,
        "center-middle-right": centerMiddleRight,
        "center-middle-middle": centerMiddleMiddle,
        "center-middle-left": centerMiddleLeft,
        "center-bottom-right": centerBottomRight,
        "center-bottom-middle": centerBottomMiddle,
        "center-bottom-left": centerBottomLeft,
        "back-top-right": backTopRight,
        "back-top-middle": backTopMiddle,
        "back-top-left": backTopLeft,
        "back-middle-right": backMiddleRight,
        "back-middle-middle": backMiddleMiddle,
        "back-middle-left": backMiddleLeft,
        "back-bottom-right": backBottomRight,
        "back-bottom-middle": backBottomMiddle,
        "back-bottom-left": backBottomLeft,
    }

    const [cubieDict, setCubieDict] = useState<Record<string, CubieData>>({});



    const rootElement = [
        'back-middle-middle',
        'center-middle-right',
        'center-bottom-middle',
        'center-top-middle',
        'center-middle-left',
        'front-middle-middle',
        'center-middle-middle',
    ];

    const handleclick = (e: ThreeEvent<MouseEvent>) => {
        // console.log(e.object.name);

        if (rootElement.find(element => element === e.object.name))
            console.log(e.object.name, "is a root element");
        else
            console.log(e.object.name, "is not a root element");

        // e.preventDefault();
        e.stopPropagation();
        start();

    }

    const start = () => {
        rootElement.forEach(val => {
            console.log(val);
            const element: RefObject<Mesh | null> = cubeToRef[val] as RefObject<Mesh | null>;
            if (element.current) {
                const neighbors: string[] = getNeighbours(element.current, cubeToRef);
                setCubieDict({
                    ...cubieDict,
                    [val]: {
                        neighbors,
                        ref: element.current,
                        color: element.current.material.color.getHex()
                    }

                })
            }
        })

        console.log(cubieDict);
    }

    useFrame(() => {
        rootElement.forEach(val => {
            const current = cubeToRef[val];
            if (current) {
                const singleblock = current.current;
                if (singleblock) {
                    singleblock.rotation.x += 0.01;
                    singleblock.rotation.y += 0.01;
                    singleblock.rotation.z += 0.01;
                }
            }
        })
    })
    return (
        <>
            <>
                <mesh ref={centerMiddleRight} position={[-1, 0, 0]} name="center-middle-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh>
                <mesh ref={centerMiddleMiddle} position={[0, 0, 0]} name="center-middle-middle" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />                </mesh>
                <mesh ref={centerMiddleLeft} position={[1, 0, 0]} name="center-middle-left" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh>
                {/* <mesh ref={centerTopRight} position={[-1, 1, 0]} name="center-top-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                <mesh ref={centerTopMiddle} position={[0, 1, 0]} name="center-top-middle" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh>
                {/* <mesh ref={centerTopLeft} position={[1, 1, 0]} name="center-top-left" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={centerBottomRight} position={[-1, -1, 0]} name='center-bottom-right' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                <mesh ref={centerBottomMiddle} position={[0, -1, 0]} name='center-bottom-middle' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh>
                {/* <mesh ref={centerBottomLeft} position={[1, -1, 0]} name="center-bottom-left" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* 
                 */}

            </>
            <>
                {/* <mesh ref={backMiddleRight} position={[-1, 0, 1]} name="back-middle-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                <mesh ref={backMiddleMiddle} position={[0, 0, 1]} name="back-middle-middle" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh>
                {/* <mesh ref={backMiddleLeft} position={[1, 0, 1]} name='back-middle-left'>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backTopRight} position={[-1, 1, 1]} name="back-top-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backTopMiddle} position={[0, 1, 1]} name='back-top-middle'>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backTopLeft} position={[1, 1, 1]} name="back-top-left" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backBottomRight} position={[-1, -1, 1]} name="back-bottom-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backBottomMiddle} position={[0, -1, 1]} name="back-bottom-middle" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={backBottomLeft} position={[1, -1, 1]} name="back-bottom-left" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* 
                 */}
            </>
            <>
                {/* <mesh ref={frontMiddleRight} position={[-1, 0, -1]} name="front-middle-right" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                <mesh ref={frontMiddleMiddle} position={[0, 0, -1]} name="front-middle-middle" onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh>
                {/* <mesh ref={frontMiddleLeft} position={[1, 0, -1]} name='front-middle-left' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontTopRight} position={[-1, 1, -1]} name='front-top-right' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontTopMiddle} position={[0, 1, -1]} name='front-top-middle' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontTopLeft} position={[1, 1, -1]} name='front-top-left' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontBottomRight} position={[-1, -1, -1]} name='front-bottom-right' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="0x000234" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontBottomMiddle} position={[0, -1, -1]} name='front-bottom-middle' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="blue" />
                    <AddBorder />
                </mesh> */}
                {/* <mesh ref={frontBottomLeft} position={[1, -1, -1]} name='front-bottom-left' onClick={handleclick}>
                    <boxGeometry args={[1, 1, 1, 9]} />
                    <meshStandardMaterial color="green" />
                    <AddBorder />
                </mesh> */}
                {/* 
                */}

            </>
        </>
    )
}


export default function WebGL() {
    return (
        <div className='group relative p-6 bg-gray-100 border'>
            <Canvas className='w-screen h-screen/3' style={{ height: "30vh", width: "100vw" }}>
                <directionalLight color="red" intensity={0.4} position={[0, 1, 1]} />
                <ambientLight intensity={0.2} />
                {/* <FirstPersonControls /> */}
                <OrbitControls />
                <AnimatedBox />
            </Canvas>
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/60 text-white 
              opacity-0 translate-y-4 pointer-events-none
              group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
              transition-all duration-300 ease-out p-4 text-center">

                <h3 className="text-lg font-bold">Info</h3>
                <p className="text-sm text-slate-200">I am yet to complete this feature. </p>
                {/* <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-xs">Action</button> */}
            </div>
        </div>
    );
}