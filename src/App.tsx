import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [digits, setDigits] = useState<number[]>([0]);
  const [isNegative, setIsNegative] = useState(false);

  const updateDigit = (newCompte: number) => {
    const newDigit = Math.abs(newCompte)
      .toString()
      .split("")
      .reverse()
      .map(Number);
    setDigits(newDigit);
    setIsNegative(newCompte < 0);
  };

  const incremente = () => {
    const newCompte = count + 1;
    setCount(count + 1);
    updateDigit(newCompte);
  };
  const decremente = () => {
    const newCompte = count - 1;
    setCount(count - 1);
    updateDigit(newCompte);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex gap-4 items-center justify-center">
        <Button onClick={decremente} label="Decremente" />
        <AnimatePresence>
          {isNegative && (
            <p className="text-6xl h-14 text-pink-500 font-extrabold">-</p>
          )}
        </AnimatePresence>
        <div className="flex flex-row-reverse">
          {digits.map((value, i) => (
            <TabDigit key={i} digit={value} />
          ))}
        </div>
        <Button onClick={incremente} label="Incremente" />
      </div>
    </div>
  );
}

function Button({
  label,
  onClick,
}: {
  label: "Incremente" | "Decremente";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="bg-black flex-none h-fit rounded-md text-pink-500  text-xs p-2 font-bold cursor-pointer active:scale-95 transition-all will-change-transform"
    >
      {label}
    </button>
  );
}

function TabDigit({ digit }: { digit: number }) {
  return (
    <motion.div
      initial={{ x: 10, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="h-14 w-12 border-2 relative"
    >
      <motion.div
        animate={{ y: `-${digit * 3.5}rem` }}
        className="flex left-1/2 -translate-x-[50%] justify-center flex-col absolute"
      >
        {Array.from({ length: 10 }).map((_, n) => (
          <p key={n} className="text-6xl h-14 text-pink-500 font-extrabold">
            {n}
          </p>
        ))}
      </motion.div>
    </motion.div>
  );
}
