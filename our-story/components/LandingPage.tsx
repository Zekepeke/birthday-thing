import { motion } from 'motion/react';

interface LandingPageProps {
  onOpenScrapbook: () => void;
  coverImage: string;
}

export default function LandingPage({ onOpenScrapbook, coverImage }: LandingPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-4"
    >
      <div className="text-center max-w-md">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-2"
          style={{ fontFamily: 'Lora, serif', fontSize: '3rem', fontWeight: 600, lineHeight: 1.2 }}
        >
          For You
        </motion.h1>
        
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-gray-600"
          style={{ fontFamily: 'Lora, serif', fontSize: '1.125rem' }}
        >
          A scrapbook of us — Dec 2025 → Dec 2026
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-12 inline-block"
        >
          <div
            className="bg-white p-4 shadow-lg"
            style={{
              transform: 'rotate(-2deg)',
              maxWidth: '280px',
            }}
          >
            <p
              className="text-center text-gray-700"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '0.9rem' }}
            >
              Our first year together
            </p>
          </div>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          onClick={onOpenScrapbook}
          className="px-8 py-3 bg-[#2a2a2a] text-white rounded-full transition-all hover:bg-[#1a1a1a] hover:shadow-lg"
          style={{ fontFamily: 'Lora, serif', fontSize: '1rem' }}
        >
          Open the scrapbook
        </motion.button>
      </div>
    </motion.div>
  );
}
