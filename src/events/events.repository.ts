import { NotFoundException } from '@nestjs/common';
import { CreateEventDto } from 'src/events/dto/create-event.dto';
import { EntityRepository, Repository } from 'typeorm';
import { Event } from './entities/events.entity';



@EntityRepository(Event)
export class EventsRepository extends Repository<Event> {
    async test() {
        console.log('test');
        return 'repository'
    }

    async onCreate(createEventDto: CreateEventDto): Promise<boolean> {
        const { id, title, start, end } = createEventDto;
        const date = new Date();

        const event = await this.create({
            id: null,
            title,
            start,
            end,
            created_at: date.toISOString(),
        });

        console.log('event', event)
        await this.save(event);

        return event ? true : false;
    }
}
