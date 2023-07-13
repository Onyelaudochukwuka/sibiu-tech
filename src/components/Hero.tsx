import React, { type FC, useRef } from 'react';

import { DownArrow, Logo } from '@src/assets';
import { motion } from 'framer-motion';
import Link from 'next/link';

export interface IHeroProps {
}
const Hero: FC<IHeroProps> = () => {
  const ref = useRef(null);
  // const links = ['About', 'Blog', 'Services', 'Pricing'];
  return (
    <section
      ref={ref}
      className="relative h-screen w-full text-white overflow-hidden hero"
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className="sticky lg:absolute top-0 inset-x-0 w-full flex justify-between items-center z-20 px-10 py-8 font-bold"
      >
        <Logo className="w-16 h-16 z-20" />
        <Link href="#waitlist" className="border-2 border-white w-fit px-4 py-3 rounded-full hover:text-[#0051a1] hover:bg-white transition-colors ease-in duration-300 cursor-pointer">
          Join Waitlist
        </Link>
      </motion.nav>
      {/* <Image
        src={image}
        className="absolute inset-0 block select-none -z-10"
        alt="image"
        onContextMenu={() => false}
      /> */}
      <div className="absolute top-2/4 inset-x-0 lg:w-fit w-10/12 mx-auto flex flex-col z-0 gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-fit mx-auto text-5xl font-black"
        >
          Explore The Clouds
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="w-fit text-lg font-bold"
        >
          Get your project up to the cloud for all to see Get your project up to
          the cloud for all to seeGet your project up to the cloud for all to
          see.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.65 }}
        className="absolute bottom-0 inset-x-0 w-fit mx-auto flex flex-col gap-2 items-center"
      >
        <DownArrow />
        <span>Scroll Down</span>
      </motion.div>
    </section>
  );
};
export default Hero;
