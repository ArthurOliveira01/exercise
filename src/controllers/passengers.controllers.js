
import { infoServices } from "../services/info.services.js";

export async function getInfo(req, res){
    const { page } = req.params;
    if(page <= 0){
        return res.status(400).send('Invalid page value')
    }
    try {
        const final = await infoServices();
        return res.status(200).send(final);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}