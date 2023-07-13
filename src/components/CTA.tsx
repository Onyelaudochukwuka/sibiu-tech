/* eslint-disable no-console */
import React, { useState, type FC, type FormEvent } from 'react';

import { z } from 'zod';

export interface ICTAProps {
}

const CTA: FC<ICTAProps> = () => {
  const [email, setEmail] = useState('');
  const emailSchema = z.object({
    email: z.string().email(),
  });
  const [error, setError] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    try {
      const API_URL = '/api/send';
      const data = {
        email,
      };
      emailSchema.parse(data);
      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
    } catch (err) {
      setError(true);
    }
  };
  return (
    <section className="bg-primary text-white min-h-screen grid place-content-center">
      <div className="px-12">
        <h2 className="text-center lg:text-3xl text-2xl font-bold">
          These companies Already Trust Us
        </h2>
        <div className="flex gap-8 my-6 flex-wrap">
          {Array(5)
            .fill(null)
            .map(() => (
              <div className="flex flex-col gap-4 relative w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0px_2px_25px_rgba(230,217,182,0.75)] mx-auto">
                <h3 className="text-sm font-bold text-black">Logo</h3>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between py-4 px-12 items-center flex-col mx-auto">
        <div className="lg:basis-2/5 w-full flex flex-col gap-6 my-4">
          <h1 className="lg:text-5xl text-2xl font-bold">
            Want To Know More ?
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full"
        >
          <div className="w-full space-y-2 flex flex-col">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); }}
              className="border-2  w-full border-white px-4 py-3 rounded-full hover:text-[#0051a1] hover:bg-white transition-colors ease-in duration-300 cursor-text"
            />
            {
              error && (
                <p className="text-red-500 text-sm">
                  Please Enter A Valid Email
                </p>
              )
            }
          </div>
          <button
            type="submit"
            className="border-2 border-white px-4 py-3 rounded-full hover:text-[#0051a1] hover:bg-white transition-colors ease-in duration-300 cursor-pointer"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </section>
  );
};
export default CTA;
