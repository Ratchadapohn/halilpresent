"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/halil1.png",
  "/halil2.png",
  "/halil3.png",
  "/halil4.png",
  "/halil5.png",
  "/halil6.png",
  "/halil7.png",
  "/halil8.png",
  "/halil9.png",
  "/us.png",
];

const messages = [
  "Get well soon, my love 💖",
  "I'm always here for you 🤍",
  "You are my sunshine 🌞",
  "Sending all my strength to you 🫶",
  "Love you more each day 💌",
  "No matter what happens, Halil, I'll always be by your side 🫶",
  "You are stronger than you think, Halil 🌟",
  "Please take your time to heal, I'll be here waiting patiently 💖",
  "You mean the world to me, Halil 🗺️",
  "Seeing you smile is my greatest happiness 🌸",
  "Halil, you are never alone, you have my heart with you always ❤️",
  "I wish I could take away all your pain, Halil 🤍",
  "You are loved more than words can say 💬💖",
  "Take it slow, my dear Halil. I'm here for every step 🐾",
  "I believe in your strength, Halil. You are amazing 🌟",
  "Rest well, heal well, and know that my arms are open for you anytime 🤗",
  "Sending warm hugs and gentle kisses to you, Halil 💋💌",
  "I will hold your hand through every dark moment 🌙🤝",
  "Halil, even in your toughest days, you shine so beautifully ✨",
  "Your heart is so precious, Halil, let me help protect it ❤️‍🩹",
  "I love you more than yesterday and less than tomorrow, Halil 💖",
  "You are my safe place, and I hope I can be yours too, Halil 🏡",
  "I miss you every second and think about you even when I breathe 🌬️💗",
  "Halil, don't worry about anything. Lean on me as much as you need 🫶",
  "You don't have to be strong all the time. It's okay to rest, my Halil 🌷",
  "No matter the distance, my heart is always close to you 💞",
  "Even when you're silent, I can feel you, Halil 🥺❤️",
  "You are my home, my comfort, and my everything 🏡✨",
  "Halil, you inspire me to love deeper and live kinder every day 🫶",
];

export default function Home() {
  const [showEffects, setShowEffects] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [randomMsg, setRandomMsg] = useState("");

  const handleClick = () => {
    setShowEffects(true);
    setCurrentImage((prev) => (prev + 1) % images.length);
    setRandomMsg(messages[Math.floor(Math.random() * messages.length)]);

    setTimeout(() => {
      setShowEffects(false);
    }, 9000);
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden animate-background p-4">
      <motion.div
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-purple-500/20 to-indigo-500/20"
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.15 }}
          whileTap={{ rotate: 12, scale: 0.95 }}
          className="cursor-pointer rounded-full border-4 border-pink-400 shadow-2xl overflow-hidden"
          onClick={handleClick}
        >
          <Image
            src={images[currentImage]}
            alt="My Love"
            width={300}
            height={300}
            className="object-cover rounded-full md:w-[350px] md:h-[350px] w-[250px] h-[250px]"
          />
        </motion.div>

        <AnimatePresence>
          {showEffects && (
            <>
              {[...Array(25)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 0,
                    x: 0,
                    rotate: Math.random() * 360,
                  }}
                  animate={{
                    opacity: 1,
                    y: -(Math.random() * 400 + 100),
                    x: (Math.random() - 0.5) * 400,
                    rotate: Math.random() * 720,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 4,
                    delay: i * 0.1,
                  }}
                  className="absolute text-pink-400 text-4xl pointer-events-none"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 80}%`,
                  }}
                >
                  💖
                </motion.div>
              ))}

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className="mt-60 text-center text-3xl font-fancy font-bold text-pink-400 drop-shadow-lg"
              >
                <p className="text-7xl mt-30 md:text-9xl">{randomMsg}</p>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
