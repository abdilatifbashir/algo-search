import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class AppModule {}
