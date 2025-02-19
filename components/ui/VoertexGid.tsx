import React from 'react';
import { Vortex } from '../ui/vortex';

export function VortexDemo() {
  return (
    <div
      className="relative flex flex-col 
    justify-center items-center rounded-md overflow-hidden "
    >
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Nextjs Intusiastic
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          An Brazilian Full-Stark Developer
        </p>
      </Vortex>
    </div>
  );
}
/*w-[calc(100%-4rem)] mx-auto rounded-md h-screen overflow-hidden  */
