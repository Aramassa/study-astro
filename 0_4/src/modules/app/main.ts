import { Subject } from "rxjs";

export default class Main{

  private subjects:any = {};
  private cnt:number = 0;

  private static instance?:Main;

  public static singleton(){
    if(!Main.instance) Main.instance = new Main();
    return Main.instance;
  }

  private getSubject(name:string): Subject<any>{
    if(!this.subjects[name]){
      this.subjects[name] = new Subject();
    }
    return this.subjects[name];
  }

  public test(){
    this.getSubject("onUpdate").next(this.cnt++);
  }

  public subscribeUpdate(observer:any):void{
    this.getSubject("onUpdate").subscribe(observer);
  }
}