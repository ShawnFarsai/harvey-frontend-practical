import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-4 bg-neutral-100 w-fit px-4 py-3 space-y-4 rounded-lg">
      <p className="text-lg font-semibold">Counter</p>
      <div className="flex space-x-2">
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <div>count: {count}</div>
      </div>
    </div>
  );
}

export default App;
