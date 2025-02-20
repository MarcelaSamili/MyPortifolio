import React from 'react';
import { Vortex } from '../ui/vortex';

export function VortexDemo() {
  return (
    <div className="w-full h-full absolute rounded-lg  top-0 left-0 overflow-hidden ">
      <Vortex
        backgroundColor="black"
        className="items-center flex-col justify-center"
      ></Vortex>
    </div>
  );
}
