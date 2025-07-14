"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
};

export default function FadeInWhenVisible({
    children,
    delay = 0,
    duration = 0.6,
    yOffset = 30,
}: Props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay, duration }}
        >
            {children}
        </motion.div>
    );
}
