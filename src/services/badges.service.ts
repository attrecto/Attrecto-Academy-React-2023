import { BadgesModel } from "../models/badges.model";
import request, { Methods } from "../util/request";

class BadgesService {
  async getBadges() {
    return request<BadgesModel[]>({ method: Methods.GET, resource: "badges" });
  }
}

export const badgesService = new BadgesService();