import { Badge, BadgeModel } from "../models/badges.model";
import request, { Methods } from "../util/request";

class BadgesService 
{
    async getBadges()
    {
        return request<BadgeModel[]>({ method: Methods.GET, resource: "badges" });
    }

    async getBadge(badgeId: string)
    {
        return request <BadgeModel>({method: Methods.GET, resource: `badges/${badgeId}`});
    }

    async createBadge(data: Badge)
    {
        return request<BadgeModel[]>({method: Methods.POST, data: data, resource:"badges"});
    }

    async updateBadge(badgeId: string, data: Badge)
    {
        return request<BadgeModel[]>({method: Methods.PUT, data: data, resource:`badges/${badgeId}`});
    }

    async deleteBadge(badgeId: string)
    {
        return request<BadgeModel[]>({method: Methods.DELETE, resource:`badges/${badgeId}`});
    }
}

export const badgesService = new BadgesService();