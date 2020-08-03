import express from "express";
import BaseController from "../utils/BaseController";
import { tasksService } from "../services/TasksService";
import auth0provider from "@bcwdev/auth0provider";

export class TasksController extends BaseController {
  constructor() {
    super("api/tasks");
    this.router
    .use(auth0provider.isAuthorized)
      .get("", this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .post("", this.create)
      // .post("/:id/comments", this.addComments)
      //.put("/:id", this.editTask)
      //.put("/:id/comments/:commentId", this.editComment)
      //.delete("/:id", deleteTask)
      // .delete("/:id/comments/:commentId", deleteComment)
  }
  
  async getAll(req, res, next) {
    try {
let task = await tasksService.find()
res.send({data: task, message:"got tasks"})
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.user.sub;
      let task = await tasksService.create(req.body)
      res.send(task);
    } catch (error) {
      next(error);
    }
  }
}
