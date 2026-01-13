"use client";

import { curriculumData } from "@/data/curriculum";
import { FAQSection as FAQList } from "@/components/sections/FAQSection"; // Note: This was likely a mistake in previous structure, but following existing patterns
import { faqData } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="bg-n-black py-24 px-5">
      <div className="container-default">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-bold text-sm mb-4 uppercase tracking-widest">FAQ</p>
          <h2 className="text-[2rem] font-extrabold text-white">자주 묻는 질문</h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqData.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-dark-light/50 border border-white/5 rounded-2xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-white font-bold text-left hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-n-300 text-base leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-12 text-center bg-dark-light/30 rounded-2xl py-8 px-8 border border-white/5">
          <p className="text-n-400 text-lg mb-3">
            더 궁금한 점이 있으신가요?
          </p>
          <a href="https://rinda.ai/contact" className="text-primary font-bold text-xl hover:underline" style={{ marginTop: '4px', marginBottom: '4px', display: 'inline-block' }}>
            문의하기
          </a>
        </div>

      </div>
    </section>
  );
}
