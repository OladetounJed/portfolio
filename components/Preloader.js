import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";

const transition = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const preloaderAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  50%, 100% {
    transform: translateY(-600%);
  }
`;

const PreloaderText = styled.p`
  font-weight: thin;
  font-size: 18px;
  line-height: 210%;
  letter-spacing: 0.19em;
  color: white;
  animation: ${preloaderAnimation} 12s linear;
  animation-delay: 3s;
`;


export default function preloader() {
  return (
    <motion.div
      data-scroll
      data-scroll-sticky
      data-scroll-target="#menu-target"
      animate={{ top: "-100vh", transition: { ...transition, delay: 9 } }}
      className="w-screen h-screen bg-blue fixed top-0 left-0 z-50 grid place-content-center"
    >
      <div className="flex items-center justify-center flex-col">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { ...transition } }}
          className="mb-4 text-center"
        >
          <p className="font-bold text-xl">I </p>
        </motion.div>
        <motion.div
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { ...transition } }}
          className="w-max text-center h-16 overflow-hidden relative"
        >
          <PreloaderText>am Oladetoun</PreloaderText>
          <PreloaderText>temi || tayo</PreloaderText>
          <PreloaderText>am a frontend Engineer</PreloaderText>
          <PreloaderText>am a dog lover🐶</PreloaderText>
          <PreloaderText>am God's fav💃</PreloaderText>
          <PreloaderText>❤️ JavaScript</PreloaderText>
          <PreloaderText>❤️ writing 0's and 1's</PreloaderText>
        </motion.div>
      </div>
    </motion.div>
  );
}
