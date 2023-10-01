import { BadgeModel } from "../model/badge.model";
import request, { Methods } from "../util/request";

class BadgeService 
{
    async getBadges()
    {
        return request<BadgeModel[]>({ method: Methods.GET, resource: "badges" });
    }
}

export const badgesService = new BadgeService();