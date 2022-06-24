import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEventDto } from './dto/create-event.dto';
import { Event } from './entities/events.entity';
import { EventsRepository } from './events.repository';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly event: Repository<Event>
    // , eventsRepository: EventsRepository,
  ) { }


  async onCreateEvent(createEventDto: CreateEventDto) {
    try {
      const { id, type, title, start, end } = createEventDto;
      const date = new Date();

      const event = this.event.create({
        // id: null,
        type,
        title,
        start,
        end,
        created_at: date.toISOString(),
      });

      await this.event.save(event);
      return {
        ok: true,
        data: 'success'
      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }

  async getAll() {
    try {
      return {
        ok: true,
        data: {
          list: await this.event.find(),
        }

      };
    } catch (e) {
      return {
        ok: false,
        error: e,
      };
    }
  }
}
