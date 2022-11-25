import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const FaqHelper = ({ id, Body, Head }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="question"  onClick={() => setIsOpen((prev) => !prev)}>
        <div className="text-[.7rem]" >{Head}</div>
        {isOpen ? <BiUpArrow /> : <BiDownArrow /> }
      </div>
      <div className="text-center text-[.8rem]">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-10%" }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.7,
              },
            }}
          >
            <div>{Body}</div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FaqHelper;
