import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
    //Inject item service to item controller
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  //return last item and it's index
  @Get('last-item')
  findLastItem(): string {
    return this.itemsService.findLastItem();
  }
  //return first item and it's index
  @Get('first-item')
  findFirstItem(): string {
    return this.itemsService.findFirstItem();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Item[] {
    return this.itemsService.create(createItemDto);
  }
}
