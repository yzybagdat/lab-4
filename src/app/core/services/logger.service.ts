import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  private logs: string[] = [];

  constructor() { }

  public log(message: string) {
    this.logs.push(message);
    console.log(message);
  }
}
