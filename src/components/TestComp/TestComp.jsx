import React, { useEffect, useState } from "react";

function TestComp() {
  const [count, setCount] = useState(0);

  // This function runs every time the component re-renders
  function updateDocumentTitle() {
    document.title = `You clicked ${count} times`;
  }

  useEffect(() => {
    console.log(count);
    return () => {
      console.log("count second");
    };
  }, [count]);

  // Call the function to update the document title
  updateDocumentTitle();

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default TestComp;
