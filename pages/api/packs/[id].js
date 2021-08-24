import nextConnect from 'next-connect';
import {getPackById, updatePack} from '../../../controllers/packController';
import connectDb from '../../../utils/mongodb';

const handler = nextConnect();

connectDb();

handler.get(getPackById)
handler.get(updatePack)

export default handler;