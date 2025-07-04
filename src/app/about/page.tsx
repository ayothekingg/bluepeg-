"use client";

import MissionVisionValues from "@/components/MissionVisionValuesSection";
import OurStory from "@/components/OurStorySection";
import MeetTheTeam from "@/components/TeamSection";
import WhoWeAre from "@/components/WhoWeAreSection";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-[#007BFF] flex flex-col items-stretch">
      <WhoWeAre />
      <MissionVisionValues />
      <OurStory />
      <MeetTheTeam />
    </main>
  );
}

/* Add to globals.css:
@keyframes logo-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.animate-logo-scroll {
  animation: logo-scroll 40s linear infinite;
  animation-play-state: var(--logo-scroll-play, running);
}
.fade-in-logo {
  opacity: 0;
  animation: fadeInLogo 1s ease forwards;
}
@keyframes fadeInLogo {
  to { opacity: 1; }
}
*/
