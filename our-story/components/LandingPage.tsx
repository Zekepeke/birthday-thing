import { motion } from 'motion/react';

export default function FinalPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center bg-[#faf9f6] px-6"
    >
      <div className="max-w-2xl text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1
            className="mb-8"
            style={{ fontFamily: 'Lora, serif', fontSize: '3.5rem', fontWeight: 600, lineHeight: 1.2 }}
          >
            Happy Birthday ❤️
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-6"
        >
          <p
            className="text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', lineHeight: 1.8 }}
          >
            This past year with you has been the most beautiful chapter of my life. 
            Every moment we've shared, from quiet mornings to spontaneous adventures, 
            has been a gift I treasure deeply.
          </p>

          <p
            className="text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', lineHeight: 1.8 }}
          >
            You've shown me what it means to be truly seen, truly heard, and truly loved. 
            Your kindness, your laughter, your way of finding magic in the ordinary—these 
            are the things that make my heart full.
          </p>

          <p
            className="text-gray-700 leading-relaxed"
            style={{ fontFamily: 'Lora, serif', fontSize: '1.2rem', lineHeight: 1.8 }}
          >
            I can't wait to fill another scrapbook with new memories, new adventures, 
            and all the beautiful moments that await us. Here's to you, to us, and to 
            all the love stories we'll continue to write together.
          </p>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="pt-8"
          >
            <p
              className="text-gray-800"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem' }}
            >
              Forever yours,
            </p>
            <p
              className="text-gray-800 mt-2"
              style={{ fontFamily: 'Kalam, cursive', fontSize: '1.8rem' }}
            >
              [Your Name]
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-16"
        >
          <div className="inline-flex items-center gap-2 text-gray-400">
            <div className="w-12 h-px bg-[#d4c9df]" />
            <span style={{ fontFamily: 'Lora, serif', fontSize: '0.9rem' }}>
              December 2025 → December 2026
            </span>
            <div className="w-12 h-px bg-[#d4c9df]" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
