'use client';

import { TextGenerateEffect } from './ui/text-generate-effect';

const words =
  "Rome wasn't built in a day and neither will this website. Relax. Take a deep breath. We'll get there. Slowly but surely. <3 Ozzy";

export const Hero = () => {
  return <TextGenerateEffect words={words} />;
};
