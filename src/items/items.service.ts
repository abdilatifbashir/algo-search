import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  // a list where algo applies.
  //Finding last element in the list if element exist,
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

  findLastItem():any{
   if(this.items[this.items.length-1]){
     const item = this.items[this.items.length - 1];
      return {
        itemIndex: `${this.items.length - 1}`,
        searchedItem: item,
      };
   }
   
  }



  create(item: Item): Item[] {
    return [...this.items, item];
  }
}
