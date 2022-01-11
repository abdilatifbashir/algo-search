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
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get("last-item")
  findItem(): string {
    return this.itemsService.findLastItem();
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Item[] {
    return this.itemsService.create(createItemDto);
  }
}
