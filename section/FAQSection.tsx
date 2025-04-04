"use client";
import Button from "@/component/Button";
import FAQItem from "@/component/FAQItem";
import { CursorLeft } from "@/constant/image";
import { useAnimation, useInView, motion } from "motion/react";
import React, { useEffect, useRef } from "react";
const FAQdata = [
  {
    question: "Do you offer digital marketing services?",
    answer:
      "My specialization is strategic web and e-commerce design. However, my extensive background in digital marketing, encompassing SEO, PPC, social media marketing, CRO, and UX, significantly informs my design process. This ensures your website is not only visually appealing but also strategically designed to achieve your specific business objectives. My 13+ years of experience, including managing multi-million dollar campaigns for leading brands, provides a unique design advantage that prioritizes performance and ROI.",
  },
  {
    question: "What is your design style?",
    answer:
      "While I favor clean, modern, and user-centric design principles, I adapt my approach to each client's unique brand identity and target audience. My primary focus is on creating a design that effectively communicates your value proposition and drives conversions.",
  },
  {
    question: "What platforms do you build on?",
    answer:
      "I primarily utilize WordPress for standard websites and Shopify for e-commerce platforms. These industry-leading platforms offer the flexibility, scalability, and robust features that established businesses require. However, I'm always open to discussing alternative platforms based on your specific needs and preferences.",
  },
  {
    question: "How does the monthly subscription work?",
    answer:
      "The monthly subscription is designed to provide ongoing strategic design support and optimization. You'll have an unlimited amount of design requests each month, allowing me to continuously refine your website, develop new landing pages, and implement design enhancements based on performance data. We'll maintain an ongoing dialogue to prioritize tasks and ensure alignment with your evolving business goals. Billing is automatic each month, and you have the flexibility to pause or cancel the subscription at any time as needed.",
  },
  {
    question: "What if I need ongoing design updates after a one-time project?",
    answer:
      "Many clients who initially engage in a one-time project find that transitioning to my monthly subscription provides the ideal framework for ongoing website optimization and strategic design support. It's a cost-effective way to maintain a high-performing online presence.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The standar website package typically takes 1-4 weeks from project initiation to completion. The e-commerce package generally requires 2-6 weeks. The monthly subscription is an ongoing engagement. These timelines can vary depending on the project's scope and the responsiveness of client feedback. I'll provide a more precise timeline following our initial consultation.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Your satisfaction and the success of your website are my utmost priorities. For the monthly subscription, I offer a 75% refund within the first week if you're not completely satisfied.<br/><br/> For one-time projects, I'm dedicated to collaborating with you until the final design meets your expectations. The process includes multiple rounds of revisions to ensure alignment with your vision. There is no refund for the one-time projects. ",
  },
  {
    question: "Why do you focus on working with established businesses?",
    answer:
      "My expertise lies in helping established businesses scale their online presence through strategic web design. I've found that businesses that have moved beyond the startup phase are typically best positioned to leverage my strategic approach and achieve significant ROI from a website redesign or ongoing design partnership. They often have the resources, infrastructure, and long-term vision to fully benefit from my services. However, I'm always open to discussing projects with businesses that are on a strong growth trajectory and have ambitious online goals.",
  },
];
const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) { 
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="bg-[#f9f9f9] flex items-center justify-center px-[10%] pt-[30px] pb-[100px]">
      <div
        className="flex flex-col lg:flex-row lg:items-stretch w-full h-full gap-[30px] lg:mb-[30px]"
      >
        <div className="lg:max-w-[65%]">
          <h1 className="text-[34px]/10 md:text-[45.6px]/14 text-black font-dm-serif-display font-bold mb-[30px]">
            Frequently asked questions
          </h1>
          <div ref={ref} className="flex flex-col gap-[10px]">
            {FAQdata.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: (index + 1) * 0.2 }}
              >
                <FAQItem question={item.question} answer={item.answer} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-[#003566] w-full flex-1 rounded-4xl mb-[30px] lg:mb-0">
          <div className="relative flex flex-col items-center lg:justify-center p-[30px] h-full">
            <h1 className="text-[27px]/9 md:text-4xl text-white text-center font-dm-serif-display font-bold mb-[30px]">
              Increase your revenue with conversion-focused web design.
            </h1>
            <p className="text-white text-center font-dm-sans font-medium text-base/5 mb-[25px]">
              Let&apos;s discuss your goals and how my design expertise backed
              by 13+ years in digital marketing, can help drive real results for
              your business
            </p>

            <Button title="Book a call" className="hover:bg-[#ffc300]">
              <CursorLeft className="size-5 text-dark-blue" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
