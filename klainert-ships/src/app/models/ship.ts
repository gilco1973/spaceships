export interface Ship {
    img: string;
    id: number;
    shotId: string;
    X: number;
    Y: number;
    owner: string;
    lifeUnits: number[];
    shooting: boolean;
}
