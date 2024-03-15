import { Exercice } from "./exercice";

export interface WorkoutPlan {
    id: string,
    name: string,
    date: string,
    exercice: Exercice[],
    status: boolean
}