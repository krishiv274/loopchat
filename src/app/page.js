"use client";
import { motion } from "framer-motion";
import { use } from "react";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center bg-[color:var(--color-background)]">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="p-6 bg-[color:var(--color-primary)] text-white rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl font-bold">Welcome to LoopChat 🚀</h1>
        <p className="text-sm mt-2 text-[color:var(--color-muted)]">
          Your modern chat experience starts here.
        </p>
      </motion.div>
    </div>
  );
}
