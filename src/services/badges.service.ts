import request, { Methods } from "../util/request";
import { BadgeFormValues, BadgeModel } from "../models/badges.model";

class BadgesService {
  async getBadges() {
    return request<BadgeModel[]>({ method: Methods.GET, resource: "badges" });
  }



  async getBadge(id: string) {
  return request<BadgeModel>({ method: Methods.GET, resource: `badges/${id}` });
  }

  async createBadge(data: BadgeFormValues) {
    return request<BadgeModel>({
      method: Methods.POST,
      data,
      resource: "badges",
    });
  }

  async updateBadge(id: string, data: BadgeFormValues) {
    return request<BadgeModel>({
      method: Methods.PATCH,
      data,
      resource: `badges/${id}`,
    });
  }

  async deleteBadge(id: string) {
    return request<BadgeModel>({
      method: Methods.DELETE,
      resource: `badges/${id}`,
    });
  }
}

export const badgeService = new BadgesService();