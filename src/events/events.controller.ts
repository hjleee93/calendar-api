import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { EventsService } from './events.service';
import { Event } from 'src/interfaces/event.interface';

import { Request } from 'express';
@Controller('events')
export class EventsController {
    constructor(private readonly eventsService: EventsService) { }

    @Post()
    async onCreate(@Body() createEventDto: CreateEventDto) {
        return this.eventsService.onCreateEvent(createEventDto);
    }

    @Get()
    getAll(@Req() request: Request) {
        return this.eventsService.getAll()
        return 'This action returns all events';
    }
}
