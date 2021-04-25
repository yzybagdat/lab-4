export class Movie {
  constructor(
    public id: number,
    public totalTime: number,
    public timeHour: string,
    public imgSrc: string,
    public imgBigSrc: string,
    public imgNameSrc: string,
    public img3: string,
    public name: string,
    public rating: number,
    public date: number,
    public price: number,
    public discount: number,
    public genres: string[],
    public text: string,
    public text2: string
  ) {
  }
}
