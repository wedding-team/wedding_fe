import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";
import { useState } from "react";
import {FaRegBell} from "react-icons/fa";

function Notification() {
    const [hasNotification, setHasNotification] = useState(true);

    return (
        <div className="relative text-gray-600">
            {hasNotification && (
                <GoDotFill className="absolute bottom-1/3 right-0 text-red-500 -translate-x-1/4 -translate-y-1/4 text-lg" />
            )}
            <motion.button
                className="p-2 rounded-full bg-white"
                animate={hasNotification ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
                <FaRegBell size={20} />
            </motion.button>
        </div>
    );
}

export default Notification;
