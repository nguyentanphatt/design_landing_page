"use client";
import ProcessCard from "@/component/ProcessCard";
import Lenis from "@studio-freight/lenis";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const data = [
  {
    id: 1,
    title: "Discovery call",
    description:
      "Our first step is a discovery call to understand your business goals, target audience, and KPIs. We’ll also discuss your vision and explore how your website can support your long-term growth strategy.",
    color: "bg-[#001d3d]",
  },
  {
    id: 2,
    title: "Design audit",
    description:
      "If you have an existing website, I’ll assess the design, UX, and performance to identify areas for improvement. If you’re starting from scratch, we’ll develop a strategy to ensure your new site is built for success.",
    color: "bg-[#003566]",
  },
  {
    id: 3,
    title: "Design & development",
    description:
      "I’ll design and develop a modern, user-friendly website that aligns with your business goals. Whether it’s a redesign or a new build, the focus is on performance, ease of use, and conversions. Once the foundation is set, we’ll move on to refining and launching.",
    color: "bg-[#023e8a]",
  },
  {
    id: 4,
    title: "Refine & launch",
    description:
      "I’ll refine the design until you’re fully satisfied. Once everything is polished, we’ll launch your website for optimal performance and conversions. After launch, you can manage your website or continue improving it through my ongoing design partnership.",
    color: "bg-[#0077b6]",
  },
  {
    id: 5,
    title: "Ongoing design partnership",
    description:
      "Exclusively for monthly subscribers, this service keeps your website optimized and competitive. I’ll provide continuous updates, new landing pages, and data-driven improvements to drive sustained growth and higher conversions.",
    color: "bg-[#0096c7]",
  },
];

export default function ProcessSection() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const a = scrollYProgress
  return (
    <div
      className="relative h-auto bg-white flex items-center justify-center px-[10%] py-[100px]"
    >
      <div className="flex flex-col w-full h-full">
        <h1 className="text-[34px]/10 md:text-[45.6px]/14 text-black font-dm-serif-display font-bold mb-[30px]">
          A simple, step-by-step process
        </h1>
        <p className="text-base/5.5 text-black text-start font-dm-sans mb-[30px] w-[90%] lg:w-[65%]">
          My streamlined process ensures a collaborative and efficient
          experience, delivering a website that aligns with your strategic
          goals.
        </p>
        <div ref={container}>
        {data.map((item, index) => {
          const ref = useRef(null);
            const { scrollYProgress } = useScroll({
              target: ref,
              offset: ['start 50vh', 'end start'],
            });
          
            const scale = useTransform(scrollYProgress, [0, 0.3, 1], [1, 1, 0.8]);
            const targetScale = 1 - (data.length - index) * 0.02;
          return (
            <motion.div
              ref={ref}
              key={index}
              style={{ scale }}
              className="sticky top-[200px]"
            >
              <ProcessCard
                id={item.id}
                title={item.title}
                description={item.description}
                color={item.color}
                progress={a}
                range={[index * 0.2, 1]}
                targetScale={targetScale}
              />
            </motion.div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
