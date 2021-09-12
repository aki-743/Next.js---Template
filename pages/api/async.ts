import { NextApiRequest, NextApiResponse } from 'next';
import { AsyncMiddleware } from '../../api/middleware/async';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const postData = req.query;
    const key = postData.key as string;
    delete postData.key;
    const instance = new AsyncMiddleware(postData, key, req, res);
    const result = await instance.AsnynFunc();
    if (result) {
      res.status(200).json({ ...result.data });
    }
  } catch (error) {
    console.log('error type:', error.type);
    console.log('error message:', error.message);
    res.status(200).json(error);
  }
}
