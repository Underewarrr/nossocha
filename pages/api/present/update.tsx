import { NextApiRequest, NextApiResponse } from 'next';
import presentService from '../../../services/present';

export default async function updatePresentStatusHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(400).json({ message: 'Invalid request method' });
  }

  const { id } = req.query;
  const parsedId = Array.isArray(id) ? parseInt(id[0], 10) : parseInt(id, 10);
  const { acepted } = req.body;

  try {
    const { code, type, message } = await presentService.updatePresentStatus(
      parsedId,
      acepted
    );

    return res.status(code).json({ type, message });
  } catch (error) {
    console.error('Error updating present status:', error);
    return res.status(500).json({ message: 'Error updating present status' });
  }
}
