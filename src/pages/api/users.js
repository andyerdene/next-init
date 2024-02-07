// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { randomUsers } from "../../utils/dummyUsers";

const handler = (req, res) => {
  res.status(200).json(randomUsers);
};

export default handler;
