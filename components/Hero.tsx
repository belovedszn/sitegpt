"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Container, PrimaryButton, SecondaryButton } from "./ui";
const BridgeScene = dynamic(()=>import("./BridgeScene"),{ssr:false,loading:()=> <div className="absolute inset-0 bg-[url('/lagos-bridge.png')] bg-cover bg-center opacity-75"/>});
export function Hero(){
 const [menu,setMenu]=useState(false);
 useEffect(()=>{const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;if(reduce)return;document.querySelectorAll(".intro").forEach((el,i)=>{el.animate([{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"translateY(0)"}],{duration:900,delay:150+i*80,easing:"cubic-bezier(.22,.72,.2,1)",fill:"forwards"})})},[]);
 return <section className="relative min-h-[100svh] overflow-hidden bg-[#151614] text-white">
  <BridgeScene/>
  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"/>
  <nav className="relative z-20"><Container><div className="flex h-24 items-center justify-between">
   <a href="#" className="focus-ring flex items-center gap-2 font-black tracking-tight"><img src="/plinth-logo.png" alt="" className="h-7 w-7 object-contain"/><span>plinth</span></a>
   <div className="hidden items-center gap-8 text-sm md:flex"><a className="focus-ring" href="#subscriptions">Subscriptions</a><a className="focus-ring" href="#accounts">Accounts</a><a className="focus-ring" href="#developers">Docs</a><a className="focus-ring" href="#pricing">Pricing</a></div>
   <div className="hidden md:block"><PrimaryButton href="#final-cta">Start building</PrimaryButton></div>
   <button aria-label="Toggle menu" aria-expanded={menu} onClick={()=>setMenu(!menu)} className="focus-ring md:hidden">Menu</button>
  </div>{menu&&<div className="border-t border-white/10 py-5 md:hidden"><div className="grid gap-4 text-lg"><a href="#subscriptions">Subscriptions</a><a href="#accounts">Accounts</a><a href="#developers">Docs</a><a href="#pricing">Pricing</a></div></div>}</Container></nav>
  <Container><div className="relative z-10 flex min-h-[calc(100svh-6rem)] items-center pb-16 pt-8 md:pb-20"><div className="w-full max-w-6xl">
   <div className="intro opacity-0"><div className="display text-[clamp(4rem,11vw,9rem)] leading-[.78]">THE BASE</div></div>
   <h1 className="display mt-8 max-w-6xl text-[clamp(4rem,11vw,9rem)] leading-[.75] tracking-[-.07em]">
    <span className="intro block opacity-0">YOUR <span className="md:ml-[12vw]">BILLING</span></span>
    <span className="intro mt-2 block text-right opacity-0">STANDS ON.</span>
   </h1>
   <div className="intro mt-10 max-w-xl opacity-0"><p className="text-lg leading-7 text-white/75 md:text-xl">Recurring billing &amp; reconciliation, built for how Nigeria <em className="not-italic text-white">actually</em> pays.</p><div className="mt-7 flex flex-wrap gap-3"><PrimaryButton href="#final-cta">Schedule a demo</PrimaryButton><SecondaryButton href="#developers">Watch a video</SecondaryButton></div></div>
  </div></div></Container>
 </section>
}
