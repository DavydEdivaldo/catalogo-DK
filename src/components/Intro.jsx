import { motion } from "framer-motion";

const strokeColor = "#FFFFFF";
const fillColor = "#FFFFFF";

export default function Intro() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#cfc1b6]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.svg
        viewBox="0 0 777 540"
        className="w-48 md:w-64"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* LOGO DK (principal) */}
        <motion.path
          d="M263.078 338.629L230.699 308.949L164.592 376.405C164.592 376.405 198.32 376.405 230.699 376.405C249.671 376.405 264.958 369.928 280.323 355.875M311.646 317.043C299.381 334.928 291.181 345.944 280.323 355.875M296.806 245.54L269.824 272.523L373.706 376.405H300.853L280.323 355.875M315.694 226.652L373.706 164.593H300.853L164.592 300.854V164.593C164.592 164.593 218.459 164.419 230.699 164.593C242.939 164.768 259.167 164.838 265.776 171.339M281.966 187.528C297.002 199.183 327.827 238.529 321.09 288.712"
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="13"
          strokeLinecap="square"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />

        {/* LETRA D */}
        <motion.path
          d="M393 285.002C393 285.002 417.5 285.002 443.5 285.002M393 285.002V193.002C393 193.002 429.5 193.004 443.5 193.002C457.5 193 484.5 210.5 484.5 234.002C484.5 257.504 469.5 285.002 443.5 285.002M393 285.002H443.5M443 211.5C452.5 211.5 463.5 226 463.5 238C463.5 250 453 266.5 443 267C433 267.5 415 267 415 267V211.5M443 211.5C433.5 211.5 415 211.5 415 211.5M443 211.5H415"
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
        />

        {/* LETRA K */}
        <motion.path
          d="M502 193V285.5H523.5V260.5L536.5 247.5L565.5 285.5H590.5L550.5 232.5L590 193H566L523.5 235.5V193H502Z"
          fill="transparent"
          stroke={strokeColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
        />

        {/* TEXTO CONFECÇÕES (fill aparece depois) */}
        <motion.text
          x="389"
          y="344"
          fontSize="48"
          fontFamily="Inter"
          fill={fillColor}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          CONFECÇÕES
        </motion.text>
      </motion.svg>
    </motion.div>
  );
}
