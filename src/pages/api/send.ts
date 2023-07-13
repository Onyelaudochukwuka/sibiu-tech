/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

import EmailTemplate from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  try {
    if (method !== 'POST') {
      res.status(405).json({ message: `Method ${method ?? ''} Not Allowed` });
    } else {
      const { email } = req.body;
      const data = await resend.emails.send({
        from: 'udoxhukwukaonyela@gmail.com',
        to: [email],
        subject: 'Hello world',
        react: EmailTemplate({ firstName: 'John' }),
      });

      res.status(200).json(data);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};
