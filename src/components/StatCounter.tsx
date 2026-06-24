import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

interface StatCounterProps {
  end: number;
  suffix?: string;
}

export function StatCounter({ end, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const step = Math.max(1, Math.floor(end / 60));
      const timer = setInterval(() => {
        current += step;
        if (current >= end) {
          current = end;
          clearInterval(timer);
        }
        setCount(current);
      }, 25);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="font-serif text-[32px] md:text-[42px] font-bold text-kr-gold leading-none">
      {count}{suffix}
    </div>
  );
}
