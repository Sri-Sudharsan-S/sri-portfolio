import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Resume = () => {
  const [redirecting, setRedirecting] = useState(false);
  const resumeLink =
    "https://drive.google.com/drive/folders/1X7TWv97Jg0Dut0gB4B1PCrfqSd__M5CO?usp=sharing";

  const handleClick = () => {
    setRedirecting(true);

    setTimeout(() => {
      setRedirecting(false);
      window.open(resumeLink, "_blank");
    }, 1000); // 1 second delay before redirect
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {redirecting ? (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="redirecting"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src="assets/redirect.svg"
              className="w-5"
              alt="redirect icon"
            />
            Redirecting
          </motion.p>
        ) : (
          <motion.p
            className="flex items-center justify-center gap-2"
            key="resume"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/resume.svg" className="w-5" alt="resume icon" />
            Resume
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default Resume;
