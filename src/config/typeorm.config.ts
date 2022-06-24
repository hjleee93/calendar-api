import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { Event } from './events/entities/events.entity';
export const typeORMConfig: TypeOrmModuleOptions = {
    type: 'mysql', //Database 설정
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Hjleee93@',
    database: 'calendar',
    entities: ['dist/**/*.entity.{ts,js}'], // Entity 연결
    synchronize: true,// false가 안전함
};