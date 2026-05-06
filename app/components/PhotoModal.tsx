"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: string[] | null;
  onClose: () => void;
  title?: string | null;
};

export default function PhotoModal({ images, onClose, title }: Props) {
  return (
    <AnimatePresence>
      {images && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="max-w-5xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* TITLE */}
            <h3 className="text-white text-center mb-4 text-lg font-semibold">
              {title}
            </h3>

            {/* IMAGES */}
            <div className="grid md:grid-cols-2 gap-4">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="rounded-xl border border-white/20 object-cover w-full h-64 md:h-80"
                />
              ))}
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}