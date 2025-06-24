import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [digit, setDigit] = useState([0]);
  const [isNegative, setIsNegative] = useState(false);
  const updateDigit = (newCount: number) => {
    const newValue = Math.abs(newCount)
      .toString()
      .split("")
      .map(Number)
      .reverse();
    setDigit(newValue);
    setIsNegative(newCount < 0);
  };
  const incremente = () => {
    const newCount = count + 1;
    setCount(count + 1);
    updateDigit(newCount);
  };
  const decremente = () => {
    const newCount = count - 1;
    setCount(count - 1);
    updateDigit(newCount);
  };
  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center overflow-hidden">
      <motion.div className="flex gap-4">
        <Button label="Decremente" onClick={decremente} />
        <AnimatePresence>
          {isNegative && (
            <motion.p
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              className="text-5xl h-14 font-extrabold text-pink-500"
            >
              -
            </motion.p>
          )}
        </AnimatePresence>
        <section className="flex flex-row-reverse">
          {digit.map((item, i) => (
            <Counter digit={item} key={i} />
          ))}
        </section>
        <Button label="Incremente" onClick={incremente} />
      </motion.div>
    </div>
  );
}

function Button({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className="p-2 bg-black text-xs font-bold text-pink-500 rounded-md cursor-pointer active:scale-95 transition-all will-change-transform"
    >
      {label}
    </button>
  );
}

function Counter({ digit }: { digit: number }) {
  return (
    <div className="flex flex-col items-center h-14 w-8 relative overflow-hidden">
      <div className="absolute left-1/2 -translate-x-[50%]">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.p
            key={i}
            animate={{ y: `-${digit * 3.5}rem` }}
            className="text-5xl h-14 font-extrabold text-pink-500"
          >
            {i}
          </motion.p>
        ))}
      </div>
    </div>
  );
}
