import nextConnect from 'next-connect';
import {addPack, getPacks} from '../../../controllers/packController';
import connectDb from '../../../utils/mongodb';

const handler = nextConnect();

connectDb();

handler.get(getPacks)
handler.post(addPack)

export default handler;