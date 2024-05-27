import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { identifier, password } = req.body;
    try {
      const response = await axios.post(`${process.env.STRAPI_URL}/auth/local`, {
        identifier,
        password
      });
      res.status(200).json(response.data);
    } catch (error) {
      res.status(error.response?.status || 500).json(error.response?.data || { message: 'Something went wrong' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
