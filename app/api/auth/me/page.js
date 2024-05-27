
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const response = await axios.get(`${process.env.STRAPI_URL}/users/me`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
