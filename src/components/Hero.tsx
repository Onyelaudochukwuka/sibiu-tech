import React, { type FC, useRef, useState } from 'react';

import { DownArrow, Logo } from '@src/assets';
import { motion } from 'framer-motion';

export interface IHeroProps {
}
const Hero: FC<IHeroProps> = () => {
  const ref = useRef(null);
  const links = ['About', 'Blog', 'Services', 'Pricing'];
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <section
      ref={ref}
      className="relative h-screen w-full text-white overflow-hidden hero"
    >
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5 }}
        className={`${!drop ? 'absolute' : 'sticky lg:absolute top-0'} inset-x-0 w-full flex justify-between items-center z-20 px-10 py-8 font-bold`}
      >
        <Logo className="w-16 h-16 z-20" />
        <div
          className={`${
            !drop
              ? 'inset-0 top-0 flex -translate-x-full h-screen w-screen px-12 pt-32 opacity-100 bg-primary z-10'
              : 'inset-0 top-0 flex translate-x-0 h-screen w-screen px-12 pt-32 opacity-100 bg-primary z-10'
          } fixed z-10 flex-col transition-transform duration-300 ease-in  overflow-y-hidden lg:bg-transparent lg:space-y-0 lg:justify-between  lg:items-center space-y-12 lg:relative lg:top-0 lg:my-auto lg:ml-auto lg:flex gap-6 lg:h-fit lg:flex-row lg:overflow-y-visible lg:p-0 lg:align-middle lg:opacity-100
        `}
        >
          {links.map((val) => (
            <span key={val}>{val}</span>
          ))}
          <span className="border-2 border-white w-fit px-4 py-3 rounded-full hover:text-[#0051a1] hover:bg-white transition-colors ease-in duration-300 cursor-pointer">
            Join Waitlist
          </span>
        </div>
        <div className="float-right flex items-center my-auto h-fit ml-auto cursor-pointer lg:hidden z-20">
          <button
            type="button"
            className={`h-1 w-8 cursor-pointer rounded-full relative
    transition-all duration-500 ease-in before:absolute before:top-3 before:h-1 before:w-8 before:cursor-pointer
    before:rounded-full before:bg-white before:transition-all before:duration-500 before:ease-in before:content-[''] after:absolute after:-top-3
    after:h-1 after:w-8 after:cursor-pointer after:left-0
    before:left-0
    after:rounded-full after:bg-white  after:transition-all
    after:duration-500 after:ease-in  after:content-['']
    
    ${
      drop
        ? 'bg-transparent before:mt-0  before:rotate-[135deg] after:mt-0 after:rotate-45 after:top-0 before:top-0'
        : 'bg-white'
    }
    `}
            onClick={() => {
              setDrop((prev) => !prev);
            }}
            aria-label="Menu"
          />
        </div>
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
