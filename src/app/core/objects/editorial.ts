export class Editorial {
  constructor(
    public id: number,
    public userId: number,
    public photoUrl: string,
    public title: string,
    public movieIds: number[],
    public subscriber: number[],
    public text: string,
    public texts: string[],
    public price: number
  ) {}
}
