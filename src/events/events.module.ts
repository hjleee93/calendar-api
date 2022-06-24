import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Event } from './entities/events.entity';
import { EventsRepository } from './events.repository';


@Module({
  imports: [TypeOrmModule.forFeature([Event, EventsRepository])],
  controllers: [EventsController],
  providers: [EventsService],
  // exports: [EventsService],
})
export class EventsModule { }
