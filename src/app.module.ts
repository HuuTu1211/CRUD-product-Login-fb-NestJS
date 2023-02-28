import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module'; 
import { FacebookStrategy } from "./facebook.strategy";





@Module({
  imports: [ MongooseModule.forRoot('mongodb://127.0.0.1:27017/store' ),
  ProductModule,],
  controllers: [AppController],
  providers: [AppService ,FacebookStrategy],
})
export class AppModule {}
