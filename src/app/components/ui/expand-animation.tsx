import { AnimatePresence, motion } from "motion/react";

export default function ExpandAnimation({ children, openSection }: { children: React.ReactNode, openSection: boolean }) {
  return (
     <AnimatePresence>
          {openSection && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
      {children}
                </motion.div>
          )}
        </AnimatePresence>
  )
}