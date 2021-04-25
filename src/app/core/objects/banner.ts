import {Movie} from './movie';

export class Banner {
  constructor(
    public id: number,
    public movieIds: number[],
    public colors: string[],
    public line: string[]
  ) {
  }
}
