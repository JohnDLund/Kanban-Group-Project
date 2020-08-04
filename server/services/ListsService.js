import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class ListsService {
  async create(body) {
    return await dbContext.List.create(body)
  }
  async editList(id, body) {
    return await dbContext.List.findByIdAndUpdate(id, body, { new: true })
  }
  async deleteList(id) {
    return await dbContext.List.findByIdAndDelete(id)
  }
  async find(query = {}) {
    let lists = await dbContext.List.find(query);
    return lists;
  }
  async findById(id) {
    let value = await dbContext.List.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }
}

export const listsService = new ListsService();