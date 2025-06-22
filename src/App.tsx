import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [yValue, setYValue] = useState(0);
  const incremente = () => {
    setCount(count + 1);
    setYValue(yValue === 900 ? 0 : yValue + 100);
  };
  const decremente = () => {
    setCount(count - 1);
    setYValue(yValue === 0 ? 900 : yValue - 100);
  };

  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
      <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-full overflow-hidden">
        <button
          onClick={decremente}
          className="w-10 h-10 rounded-full text-2xl text-white font-bold bg-amber-950 cursor-pointer active:scale-90 transition-all will-change-transform"
        >
          -
        </button>
        {Array.from({ length: count.toString().length }).map((_, i) => (
          <Number key={i} y={yValue} />
        ))}
        <button
          onClick={incremente}
          className="w-10 h-10 rounded-full text-2xl text-white font-bold bg-amber-950 cursor-pointer active:scale-90 transition-all will-change-transform"
        >
          +
        </button>
      </div>
    </div>
  );
}

function Number({ y }: { y: number }) {
  return (
    <div className="flex flex-col h-8 overflow-hidden">
      {Array.from({ length: 10 }).map((_, n) => (
        <motion.p
          animate={{ y: `-${y}%` }}
          className={clsx("text-white text-2xl font-bold")}
        >
          {n}
        </motion.p>
      ))}
    </div>
  );
}
