import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {CardInfo} from "../entity/CardInfo";

export class CardInfoController {

    private cardInfoRepository = getRepository(CardInfo);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.findOneOrFail(request.params.cardNumber)
        .then((resolve) => {
            response.status(200).json(resolve);
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.cardInfoRepository.findOneOrFail(request.params.id)
        .then((resolve) => {
            this.cardInfoRepository.remove(resolve);
            response.status(204).json();
        })
        .catch((reject) => {
            response.status(404).json();
        });
    }

}