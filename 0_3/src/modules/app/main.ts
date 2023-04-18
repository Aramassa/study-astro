import { useState, useEffect } from "react";

const useCntState = () => {
  const [count, setCount] = useState(0);

  // 1秒ずつカウントを増やす
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);

    // コンポーネントがアンマウントされる時にタイマー停止(クリーンアップ処理)
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return count;
}

export default class Main{

  private static instance?:Main;

  public static singleton(){
    if(!Main.instance) Main.instance = new Main();
    return Main.instance;
  }

  public test(){
    alert('test')
  }

  public get useCntState(){
    return useCntState;
  }
}