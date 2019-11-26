import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {CardInfo} from "../entity/CardInfo";

export class CardInfoController {

    private cardInfoRepository = getRepository(CardInfo);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let cardInfoToRemove = await this.cardInfoRepository.findOne(request.params.id);
        await this.cardInfoRepository.remove(cardInfoToRemove);
    }

}