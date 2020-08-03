import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class TasksService {
  async find(query={}) {
    let tasks = await dbContext.Task.find(query);
    return tasks;
  }
  async findById(id) {
    let task = await dbContext.Task.findById(id);
    if (!task) {
      throw new BadRequest("Invalid Id");
    }
    return task;
  }
  async create(body){
    let task = await dbContext.Task.create(body)
  }
}

export const tasksService = new TasksService();