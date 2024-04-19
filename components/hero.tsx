'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

const words =
  'Just a sec—me and my AI are giving this place a digital makeover. Details soon! <3 Ozzy & ChatGPT';

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TextGenerateEffect words={words} />
    </div>
  );
};
