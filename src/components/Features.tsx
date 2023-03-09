import React, { type FC, useRef } from 'react';

import { Overlock, Overlock_SC } from '@next/font/google';
import {
  Cloud, Dev, ProgrammersOffice, Radar, Training,
} from '@src/assets';
import Settings from '@src/assets/Settings.icon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Tween } from 'react-gsap';

import FeaturesPage from './FeaturesPage';

gsap.registerPlugin(ScrollTrigger);

export interface IFeaturesProps {}
const overlockSc = Overlock_SC({
  weight: ['400'],
  subsets: ['latin'],
});
const overlock = Overlock({
  weight: ['900'],
  subsets: ['latin'],
});
const Features: FC<IFeaturesProps> = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const features = [
    {
      header: '01',
      title: 'Automation',
      description: `End-to-End automation of our infrastructure and application
                which enables reproducible and version controlled envirnoments.`,
      Icon: Settings,
      className:
        'flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-[0.75] relative',
    },
    {
      header: '02',
      title: 'Cloud',
      description: `
      End-to-End automation of our infrastructure and application
                which enables reproducible and version controlled envirnoments.
      `,
      Icon: Cloud,
      className:
        'flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-1 relative',
    },
    {
      header: '03',
      title: 'Cloud',
      description: `Leverage the cloud architecture best practice in combination
                with automation to deliver maximum performance while reducing
                your cloud monthly costs.
      `,
      Icon: Cloud,
      className:
        'flex lg:flex-row flex-col justify-between w-10/12 bg-primary-dark mx-auto px-12 py-8 rounded-md shadow-[0px_2px_50px_rgba(0,15,99,1)] rotate-[0.75] relative',
    },
  ];
  const features2 = [
    {
      header: '04',
      title: 'DevOps Services',
      Icon: Dev,
      className:
        'flex lg:flex-row flex-col justify-between flex-row-reverse w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-[0.75] relative',
      description: `
      Infrastructure as code to building ci/cd pipelines we enable
                your company with the latest devops tools and the best
                practices.`,
    },
    {
      header: '05',
      title: 'Monitoring & Security',
      Icon: Radar,
      className:
        'flex lg:flex-row flex-col justify-between w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-1 relative',
      description: `
      One Of Our Passions is monitoring. we have developed custom
                monitoring tools to keep you informed about your business
                decisions and infrastructure.
      `,
    },
    {
      header: '06',
      title: 'Training',
      Icon: Training,
      className:
        'flex lg:flex-row flex-col justify-between flex-row-reverse w-10/12 bg-[#E6D9B6] mx-auto px-12 py-8 rounded-md shadow-[0px_2px_25px_rgba(230,217,182,0.75)] rotate-[0.75] relative',
      description: `
      Sibiu technologies training programme provides hands-on training
                using real-world examples and use cases. our training programme
                covers cloud, containers, and devops`,
    },
  ];
  return (
    <section
      className={`flex flex-col pt-16 bg-primary text-white ${overlockSc.className}`}
    >
      <div className="flex flex-col container">
        <div className="flex px-12 lg:flex-row flex-col-reverse gap-12 justify-between">
          <p className="basis-2/5">
            It’s Important to get the entire team on board while exploring the
            infinite potentials available by the cloud
          </p>
          <h3 className="text-2xl font-bold basis-2/5">
            Sibiu Tech was founded to share our experience from exploring the
            cloud with our customers
          </h3>
        </div>
        <Tween
          from={{
            y: 0,
          }}
          to={{
            y: 20,
            willChange: 'transform',
            scrollTrigger: {
              trigger: '.container',
              scrub: 0.5,
              markers: false,
            },
          }}
        >
          <div
            className="flex flex-col gap-8 w-10/12 mx-auto py-12 wrapper h-full"
            ref={ref1}
          >
            {features.map((val) => (
              <FeaturesPage
                overlock={overlock}
                wrapper=".wrapper"
                key={val.header}
                {...val}
              />
            ))}
          </div>
        </Tween>
      </div>
      <div className="flex flex-col">
        <ProgrammersOffice />
        <div className="bg-[#010030] py-12">
          <Tween
            from={{
              y: 0,
            }}
            to={{
              y: 20,
              willChange: 'transform',
              scrollTrigger: {
                trigger: '.container',
                scrub: 0.5,
                markers: false,
              },
            }}
          >
            <div
              className="text-primary flex flex-col gap-8 w-10/12 mx-auto wrapper2"
              ref={ref2}
            >
              {features2.map((val) => (
                <FeaturesPage
                  overlock={overlock}
                  wrapper=".wrapper2"
                  key={val.header}
                  {...val}
                />
              ))}
            </div>
          </Tween>
        </div>
      </div>
    </section>
  );
};
export default Features;
