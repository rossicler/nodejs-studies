import { Request, Response } from "express";
import {
  ListUserReceiveComplimentsService,
  ListUserSendComplimentsService,
} from "../services/ListComplimentsByUserService";

export class ListUserReceiveComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserReceiveComplimentsService =
      new ListUserReceiveComplimentsService();

    const compliments = await listUserReceiveComplimentsService.execute(
      user_id
    );

    return response.json(compliments);
  }
}

export class ListUserSendComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listUserSendComplimentsService = new ListUserSendComplimentsService();

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}
