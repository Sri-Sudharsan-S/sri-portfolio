import React from "react";
import { twMerge } from "tailwind-merge";

// Marquee component
function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  return (
    <div
      {...props}
      className={twMerge(
        `group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] ${
          vertical ? "flex-col" : "flex-row"
        }`,
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={twMerge(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

const educationData = [
  { title: "DAV School, Kanchipuram", date: "2019", score: "SSC: 86.4%" },
  { title: "DAV School, Chennai", date: "2021", score: "HSC: 94.8%" },
  {
    title: "Velammal Engineering College",
    date: "B.E CSE 2025",
    score: "CGPA: 8.5",
  },
];

const EducationCard = ({ title, date, score }) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-0 bg-black border border-transparent hover:border-transparent">
      {/* Animated gradient border with before pseudo-element */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-border bg-[length:200%_200%] opacity-75 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      <div className="relative rounded-xl bg-gradient-to-r from-indigo-600 to-storm-400 hover:from-royal-600 hover:to-royal-400 p-4 h-full z-10">
        <h3 className="text-white font-bold text-lg">{title}</h3>
        <p className="text-white/80 mt-1">{date}</p>
        <p className="text-white/60 mt-1">{score}</p>
      </div>
    </figure>
  );
};

export default function Education() {
  return (
    <>
      {/* Inline styles for animations */}
      <style>{`
        @keyframes gradient-border {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }

        @keyframes marquee-vertical {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-100%); }
        }

        .animate-gradient-border {
          animation: gradient-border 5s ease infinite;
          background-size: 200% 200%;
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee-vertical {
          animation: marquee-vertical 40s linear infinite;
        }
      `}</style>

      <div className="items-start mt-25 md:mt-35 c-space">
        <h2 className="text-heading mb-8">My Education</h2>
        <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
          <Marquee pauseOnHover repeat={3} className="[--duration:20s] w-full">
            {educationData.map((edu, idx) => (
              <EducationCard key={idx} {...edu} />
            ))}
          </Marquee>
          <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
        </div>
      </div>
    </>
  );
}
