import nc from 'next-connect'
import {packs} from '../../../controllers/packController'

const handler = nc();

handler.get(packs)

export default handler;