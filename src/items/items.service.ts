import { Injectable, BadRequestException } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
@Injectable()
export class ItemsService {
  // a list where algo applies.
  //Dummy list
  private readonly items: Item[] = [
    {
      id: '333333',
      name: 'item one',
      qty: 200,
    },
    {
      id: 'ggg',
      name: 'item three',
      qty: 400,
    },
    {
      id: '67hgh',
      name: 'item five',
      qty: 900,
    },
    {
      id: '788h',
      name: 'item 9',
      qty: 600,
    },
  ];
  constructor() {}

  findAll(): Item[] {
    return this.items;
  }

  // This service iterate through list and returns last element and its index if list has data
  findLastItem(): any {
    if (this.items[this.items.length - 1]) {
      const item = this.items[this.items.length - 1];
      return {
        itemIndex: `${this.items.length - 1}`,
        searchedItem: item,
      };
    }

    if (!this.items[this.items.length - 1]) {
      return new BadRequestException('item does not exits,list is empty');
    }
  }
  // This service iterate through list and returns first element and its index if list has data
  findFirstItem(): any {
    if (this.items[0]) {
      const item = this.items[0];
      return {
        itemIndex: 0,
        searchedItem: item,
      };
    }
    if (!this.items[0]) {
      return new BadRequestException('item does not exits,list is empty');
    }
  }

  create(item: Item): Item[] {
    return [...this.items, item];
  }
}
