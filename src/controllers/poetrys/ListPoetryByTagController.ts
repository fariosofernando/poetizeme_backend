import { Response, Request } from "express";
import { PoetryListByTagService } from "../../services/poetrys/PoetryListByTagService";

class ListPoetryByTagController {

    async handle(req: Request, res: Response) {

        const { tag } = req.query;

        const service = new PoetryListByTagService();

        const poetrys = await service.execute({ tag: tag as string });
        return res.json(poetrys);
    }
}

export { ListPoetryByTagController };
