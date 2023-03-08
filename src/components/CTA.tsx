import React, { type FC } from 'react';

import Image from 'next/image';

export interface ICTAProps {
}

const CTA: FC<ICTAProps> = () => {
  return (
    <section className="bg-[#010030] text-white py-6">
      <div className="px-12">
        <h2 className="text-center text-3xl font-bold">
          These companies Already Trust Us
        </h2>
        <div className="flex gap-8 my-6">
          {Array(5)
            .fill(null)
            .map(() => (
              <div className="flex flex-col gap-4 relative w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0px_2px_25px_rgba(230,217,182,0.75)] mx-auto">
                <h3 className="text-sm font-bold text-black">Logo</h3>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between py-4 px-12 items-center lg:flex-row flex-col-reverse">
        <div className="lg:basis-2/5 w-full flex flex-col gap-6">
          <h1 className="lg:text-5xl text-4xl font-bold">Want To Know More ?</h1>
          <button
            type="button"
            className="border-2 w-fit border-white px-4 py-3 rounded-full hover:text-[#0051a1] hover:bg-white transition-colors ease-in duration-300 cursor-pointer"
          >
            Contact us
          </button>
        </div>
        <Image alt="Contact Us" src="/automate.jpg" width={1024} height={1024} className="h-auto lg:w-2/5 lg:block hidden  basis-2/5 rounded-lg" />
      </div>
    </section>
  );
};
export default CTA;
