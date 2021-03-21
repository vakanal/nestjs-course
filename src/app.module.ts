import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [MongooseModule.forRoot(''), ProductsModule, TasksModule],
})
export class AppModule {}
