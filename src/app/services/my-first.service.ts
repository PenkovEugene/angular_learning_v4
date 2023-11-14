import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstService {

  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'John',
      email: 'john@gmail.com',
      message: 'Hello, World - John'
    });
    this.insert({
      name: 'Katerina',
      email: 'katerina@gmail.com',
      message: 'Hello, World - Katerina'
    });
    this.insert({
      name: 'Emma',
      email: 'emma@gmail.com',
      message: 'Hello, World - Ema'
    });
  }

  insert(message: {name: string, email: string, message: string}): void {
    this.messages.push(message)
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1)
  }

  getAllMessages() {
    return this.messages;
  }
}
  