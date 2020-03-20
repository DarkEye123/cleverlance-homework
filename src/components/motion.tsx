import * as React from 'react';
import { motion } from 'framer-motion';

export const MotionDiv: React.FC = props => (
  <motion.div
    {...props}
    layoutTransition={{
      type: 'spring',
      damping: 20,
      stiffness: 300,
    }}
  >
    {props.children}
  </motion.div>
);
