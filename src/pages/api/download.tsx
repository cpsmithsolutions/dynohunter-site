// pages/api/download.ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { imageUrl } = req.body;

  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const fileBuffer = Buffer.from(response.data, 'binary');
    console.log({fileBuffer})
    const fileBlob = new Blob([fileBuffer], { type: response.headers['content-type'] });

    // Set the appropriate headers to specify the file as an attachment.
    res.setHeader('Content-Disposition', 'attachment; filename="image.jpg"');
    res.setHeader('Content-Type', fileBlob.type);
    res.setHeader('Content-Length', fileBlob.size.toString());

    // Send the file blob as the response.
    res.send(fileBlob);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}
