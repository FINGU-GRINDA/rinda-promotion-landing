"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

export default function FAQSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-n-black py-24">
      <div className="container-default">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-[1.85rem] font-extrabold text-white leading-tight">
            자주 묻는 <span className="text-primary">질문</span>
          </h2>
        </div>

        {/* FAQ Accordion - 카드형 UI */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="bg-dark-light/30 rounded-xl border border-white/10 overflow-hidden data-[state=open]:border-primary/40 data-[state=open]:bg-dark-light/50 transition-all"
            >
              <AccordionTrigger className="text-left px-5 py-4 hover:bg-dark-light/30 text-white [&[data-state=open]>span>span:first-child]:bg-primary/30">
                <span className="flex items-center gap-3 text-base">
                  <span className="bg-primary/15 text-primary font-bold w-8 h-8 rounded-lg text-sm shrink-0 flex items-center justify-center transition-colors">Q</span>
                  <span className="font-bold leading-relaxed">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0 text-n-300 text-base leading-[1.8] pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact */}
        <div className="mt-12 text-center bg-dark-light/30 rounded-2xl py-8 px-8 border border-white/5">
          <p className="text-n-400 text-lg mb-3">
            더 궁금한 점이 있으신가요?
          </p>
          <a href="mailto:help@rinda.ai" className="text-primary font-bold text-xl hover:underline">
            help@rinda.ai
          </a>
        </div>

      </div>
    </section>
  );
}
