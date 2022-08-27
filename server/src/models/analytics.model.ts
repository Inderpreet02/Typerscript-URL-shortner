import mongoose, {Document} from 'mongoose'
const generateUniqueId = require('generate-unique-id');
import { ShortURL } from './shortUrl.modal';

interface Analytics extends Document {
    shortUrl: ShortURL
}

const schema = new mongoose.Schema(
    {
        shortUrl: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "shortUrl",
            required: true,
        }
    },
    {timestamps: true}
)

const analytics = mongoose.model<Analytics>("analytics", schema)

export default analytics;