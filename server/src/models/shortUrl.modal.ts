import mongoose, {Document} from "mongoose";
import { customAlphabet } from "nanoid";
const generateUniqueId = require('generate-unique-id');

export interface ShortURL extends Document{
    shortId: string;
    destination: string;
}

const schema = new mongoose.Schema({
    shortId: {
        type: String,
        unique: true,
        required: true,
        default: () => generateUniqueId({length: 6,useLetters: true})
    },
    destination: {type: String, required: true},
});

const shortUrl = mongoose.model<ShortURL>("shortUrl", schema);

export default shortUrl;