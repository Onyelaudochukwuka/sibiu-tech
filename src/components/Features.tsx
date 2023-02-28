import React, { type FC } from 'react';

import { Overlock, Overlock_SC } from '@next/font/google';
import {
  Cloud, Cube, Dev, ProgrammersOffice, Radar, Training,
} from '@src/assets';
import Settings from '@src/assets/Settings.icon';

export interface IFeaturesProps {
}
const overlockSc = Overlock_SC({
  weight: ['400'],
  subsets: ['latin'],
});
const overlock = Overlock({
  weight: ['900'],
  subsets: ['latin'],
});
const Features: FC<IFeaturesProps> = () => {
  return (
    <section
      className={`flex flex-col pt-16 bg-primary text-white ${overlockSc.className}`}
    >
      <div className="px-12 flex flex-col ">
        <div className="flex gap-12 justify-between">
          <p className="basis-2/5">
            It’s Important to get the entire team on board while exploring the
            infinite potentials available by the cloud
          </p>
          <h3 className="text-2xl font-bold basis-2/5">
            Sibiu Tech was founded to share our experience from exploring the
            cloud with our customers
          </h3>
        </div>
        <div className="flex flex-col gap-8 my-12">
          <div className="flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-[0.75] relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              01
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-secondary flex items-center justify-center p-3 rounded-full w-fit h-fit">
                <Settings className="w-5 h-5 skew-x-5" />
              </div>
              <h2 className="text-xl font-bold text-secondary">Automation</h2>
              <p className="text-sm">
                End-to-End automation of our infrastructure and application
                which enables reproducible and version controlled envirnoments.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-1 relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              02
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-[#A4EAFF] flex items-center justify-center p-3 rounded-full w-fit h-fit">
                <Cloud className="w-5 h-5 skew-x-5" />
              </div>
              <h2 className="text-xl font-bold text-[#A4EAFF]">Cloud</h2>
              <p className="text-sm">
                End-to-End automation of our infrastructure and application
                which enables reproducible and version controlled envirnoments.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-[0.75] relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              03
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-[#FF975C] flex items-center justify-center p-3 rounded-full w-fit h-fit">
                <Cube className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-[#FF975C]">Cloud</h2>
              <p className="text-sm">
                Leverage the cloud architecture best practice in combination
                with automation to deliver maximum performance while reducing
                your cloud monthly costs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <ProgrammersOffice />
        <div className="bg-[#010030] py-12 text-primary flex flex-col gap-8">
          <div className="flex lg:flex-row flex-col justify-between flex-row-reverse w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-[0.75] relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              04
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-secondary flex items-center justify-center p-1 rounded-full w-fit h-fit">
                <Dev className="w-8 h-8 skew-x-5" />
              </div>
              <h2 className="text-xl font-bold text-primary">
                DevOps Services
              </h2>
              <p className="text-sm">
                Infrastructure as code to building ci/cd pipelines we enable
                your company with the latest devops tools and the best
                practices.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-1 relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              05
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-[#A4EAFF] flex items-center justify-center p-3 rounded-full w-fit h-fit">
                <Radar className="w-5 h-5 skew-x-5" />
              </div>
              <h2 className="text-xl font-bold text-primary">
                Monitoring & Security
              </h2>
              <p className="text-sm">
                One Of Our Passions is monitoring. we have developed custom
                monitoring tools to keep you informed about your business
                decisions and infrastructure.
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between flex-row-reverse w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-[0.75] relative">
            <span
              className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
            >
              06
            </span>
            <div className="h-auto bg-gray-400 basis-2/5" />
            <div className="items-start flex flex-col basis-2/5 gap-4">
              <div className="bg-[#FF975C] flex items-center justify-center p-3 rounded-full w-fit h-fit">
                <Training className="w-5 h-5 skew-x-5" />
              </div>
              <h2 className="text-xl font-bold text-primary">Training</h2>
              <p className="text-sm">
                Sibiu technologies training programme provides hands-on training
                using real-world examples and use cases. our training programme
                covers cloud, containers, and devops
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
