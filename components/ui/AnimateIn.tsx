"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export default function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.55,
  direction = "up",
  once = true,
}: AnimateInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const offset = 22;
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  };
  const animate = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
