import { Request, Response } from "express";
import analytics from "../models/analytics.model";
import shortUrl, { ShortURL } from "../models/shortUrl.modal";

export async function createShortUrl(req: Request, res:Response){

    // get the destination from req body

    const { destination } = req.body

    // Create a shortUrl
    const newUrl = await shortUrl.create({ destination })

    // return shortUrl
    res.send(newUrl)
}

export async function handleRedirect(req: Request, res:Response){

    // get the destination from req body

    const {shortId} = req.params;

    const short = await shortUrl.findOne({shortId}).lean();

    if(!short){
        return res.sendStatus(404);
    }

    analytics.create({shortUrl: short._id})

    return res.redirect(short.destination)
}

export async function getAnalytics(req: Request, res: Response) {
    const data = await analytics.find({}).lean();

    return res.send(data);
}