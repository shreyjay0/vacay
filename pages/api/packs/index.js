import nextConnect from 'next-connect';
import {packs} from '../../../controllers/packController';
import connectDb from '../../../utils/mongodb';

const handler = nextConnect();

connectDb();

handler.get(packs)

export default handler;