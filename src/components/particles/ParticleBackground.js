import React from "react";
import {Particles} from "react-particles-js"
import ParticleConfig from "./particlesConfig";
import SlideTest from '../carouselTranding/SlideTest'
import './partciles.css';

 
export default function ParticleBackground() {
    return (
        <div className='particle__background'>
         <Particles params={ParticleConfig}  className='particle__background__anmite'></Particles>
         <div className='particle__background__title'>
             <h1>Crypto Hunter</h1>
             <p>Get All The Info Regarding Your Favorite Crypto Currency</p>
         </div>
          <SlideTest/>
  
        </div>
    );
}