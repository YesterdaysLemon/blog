import React, { useState } from "react";
import { Button } from "~/components/ui/button";




export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Hello World</h1>
      <Button variant="outline" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
      <p>Count: {count}</p>
    </div>
  );
}
