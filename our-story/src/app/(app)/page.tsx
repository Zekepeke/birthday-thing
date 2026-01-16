import Image from "next/image";
import LandingPage from "../../../components/LandingPage";
import { AnimatePresence } from "motion/react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        <LandingPage />
      </AnimatePresence>
    </div>
  );
}
