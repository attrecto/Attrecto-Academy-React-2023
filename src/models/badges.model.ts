export interface BadgeModel
{
    id:number;
    name: string;
    description: string;
    image: string;
    createdAt: Date;
}
export interface Badge extends Omit<BadgeModel, "id" | "createdAt">{}