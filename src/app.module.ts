import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { TasksModule } from './tasks/tasks.module';
// import { AppController } from './app/app.controller';
// import { AppService } from './app/app.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://varo:varoGR28@cluster0.blltv.mongodb.net/library?retryWrites=true&w=majority',
    ),
    ProductsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
