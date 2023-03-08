/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, {
  type FC, useRef,
} from 'react';

import { Tween } from 'react-gsap';

export interface IFeaturesPageProps {
  Icon: FC<any>
  className: string
  header: string
  title: string
  description: string
  overlock: any
  wrapper: string
}

const FeaturesPage: FC<IFeaturesPageProps> = ({
  Icon,
  className,
  header,
  title,
  description,
  overlock,
  wrapper,
}) => {
  const ref = useRef(null);
  return (
    <Tween
      from={{
        skewY: -2.5,
      }}
      to={{
        skewY: 2.5,
        willChange: 'transform',
        scrollTrigger: {
          trigger: wrapper,
          scrub: 0.5,
          markers: true,
        },
      }}
    >
      <div ref={ref} className={`${className} mx-auto w-fit`}>
        <span
          className={`text-bold text-[8px] absolute top-3 right-4 ${overlock.className}`}
        >
          {header}
        </span>
        <div className="items-start flex flex-col gap-4">
          <div className="bg-secondary flex items-center justify-center p-3 rounded-full w-fit h-fit">
            <Icon className="w-5 h-5 skew-x-5" />
          </div>
          <h2 className="text-xl font-bold text-secondary">{title}</h2>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </Tween>
  );
};
export default FeaturesPage;
