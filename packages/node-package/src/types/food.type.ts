import { UserEntity } from "@/entities";

export type FoodType = {
  date: Date;
  food: string;
  calrory: number;
  user: UserEntity;
};

export type GetFoodType = {
  from: Date;
  to: Date;
  user: UserEntity;
};


export type GetFood14Type = {
  from: Date;
  to: Date;              // End date for the 14-day period
};