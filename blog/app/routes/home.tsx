import { useState } from "react";
import { Button } from "~/components/ui/button";


export default function Home() {
  const [count, setCount] = useState(0);
  const handleClick = async () => {
    console.log("Button clicked!");
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="outline" onClick={() => handleClick()}>
        Click me
      </Button>
      <p>Count: {count}</p>
    </div>
  );
}
