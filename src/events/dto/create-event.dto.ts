export class CreateEventDto {
    id: number;
    type: number;
    title: string;
    start: Date;
    end: Date;
    created_at: Date;
}