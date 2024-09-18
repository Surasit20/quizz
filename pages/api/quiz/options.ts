import { QuizOptions } from '@/types';
import type { NextApiRequest, NextApiResponse } from 'next';

const quizOptions: QuizOptions = {
  categories: [
    'วิทยาศาสตร์และเทคโนโลยี',
    'ภาพยนตร์และซีรีส์',
    'กีฬา',
    'ประวัติศาสตร์',
    'เรขาคณิต',
    'คณิตศาสตร์',
    'ความรู้ทั่วไป',
    'อาหาร',
    'สัตว์เเละพืช',
  ],
  difficulties: ['ง่าย', 'ปานกลาง', 'ยาก'],
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      res.status(200).json({ quizOptions });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
