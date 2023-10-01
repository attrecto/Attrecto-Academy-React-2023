import { UserModel } from "../model/user.model";
import request, { Methods } from "../util/request";

class UsersService {
    async getUsers() {
        return request<UserModel[]>({ method: Methods.GET, resource: "users" });
    }
}

export const usersService = new UsersService();