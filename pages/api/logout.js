import { serialize } from 'cookie';

const handler = async (req, res) => {
  if (req.method === 'GET') {
    try {
     
      return  res.setHeader('Set-Cookie', serialize('admin_access_token', '', {path: '/',})).json({ success: true, msg: 'Logout Successful' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, msg: 'Internal Server Error' });
    }
  }
};

export default handler;