import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://varo:varoGR28@cluster0.blltv.mongodb.net/library?retryWrites=true&w=majority',
    ),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class MainModule {}
