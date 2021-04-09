export class Post{
  public id : number;
  public title: string;
  public text: string;
  public urlImage: string;
  public date: Date;

  constructor(id:number,title:string,text:string,urlImage:string,date:Date) {
  this.id=id;
  this.title=title;
  this.text=text;
  this.urlImage=urlImage;
  this.date=date;
  }
}
