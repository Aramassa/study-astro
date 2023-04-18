export default class Main{

  private static instance?:Main;
  
  private num:number = 0;

  public static singleton(){
    if(!Main.instance) Main.instance = new Main();
    return Main.instance;
  }

  public test(){
    return this.num++;
  }
}