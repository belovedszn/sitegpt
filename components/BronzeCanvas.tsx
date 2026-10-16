"use client";
import dynamic from "next/dynamic";
import { Suspense, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
// const items=[["ife-bronze-head-3d.glb",1.9],["benin-bronze-2-3d.glb",1.45],["benin-bronze-3-3d.glb",1.5],["benin-bronze-4-3d.glb",1.35],["benin-leopard-3d.glb",1.3],["igbo-ukwu-castings-3d.glb",1.35],["nok-terracottas-3d.glb",1.45],["nok-terracottas-1-3d.glb",1.3]];
const items: Array<[string, number]> = [
  ["ife-bronze-head-3d.glb", 1.9],
  ["benin-bronze-2-3d.glb", 1.45],
  ["benin-bronze-3-3d.glb", 1.5],
  ["benin-bronze-4-3d.glb", 1.35],
  ["benin-leopard-3d.glb", 1.3],
  ["igbo-ukwu-castings-3d.glb", 1.35],
  ["nok-terracottas-3d.glb", 1.45],
  ["nok-terracottas-1-3d.glb", 1.3],
];
function Model({src,scale,index}:{src:string;scale:number;index:number}){const {scene}=useGLTF(`/models/${src}`);const clone=useMemo(()=>scene.clone(),[scene]);const angle=(index/8)*Math.PI*2;return <primitive object={clone} scale={scale} position={[Math.cos(angle)*3.1,Math.sin(index*1.8)*.7,Math.sin(angle)*1.8]} rotation={[0,-angle+Math.PI/2,index%2*.12]}/>;}
export function BronzeCanvas(){const [drag,setDrag]=useState(false);return <div className="h-[70vh] w-full max-w-5xl"><Canvas camera={{position:[0,0,9],fov:32}} dpr={[1,1.5]}><ambientLight intensity={1.4}/><directionalLight position={[4,6,4]} intensity={4}/><directionalLight position={[-5,2,-4]} intensity={2}/><Environment preset="sunset"/><Suspense fallback={null}>{items.map(([src,s],i)=><Model key={src} src={src} scale={s as number} index={i}/>)}</Suspense><OrbitControls enabled={drag} enableZoom={false} onStart={()=>setDrag(true)} onEnd={()=>setDrag(false)} autoRotate={!drag} autoRotateSpeed={.4}/></Canvas><p className="mono mt-[-3rem] text-center text-[10px] uppercase tracking-[.2em] text-black/40">Drag the artifacts to inspect the engine underneath</p></div>}
