import { Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does the certification process take?",
    answer:
      "Most patients receive their medical marijuana recommendation within 15-30 minutes after their consultation. Once approved by our licensed physician, your certification is available immediately for download. In most states, you can start purchasing medical marijuana the same day.",
  },
  {
    question: "What medical conditions qualify for medical marijuana?",
    answer:
      "Qualifying conditions vary by state but commonly include chronic pain, anxiety, PTSD, epilepsy, cancer, glaucoma, arthritis, migraines, insomnia, and many others. Our physicians will evaluate your specific condition during the consultation and determine if medical marijuana is appropriate for your treatment.",
  },
  {
    question: "Is my information secure and private?",
    answer:
      "Absolutely. We are fully HIPAA compliant and use bank-level encryption to protect your personal and medical information. Your data is never shared with third parties, and all consultations are completely confidential between you and your physician.",
  },
  {
    question: "What if I don't qualify for a recommendation?",
    answer:
      "We offer a 100% money-back guarantee. If our physician determines that you don't qualify for a medical marijuana recommendation, you'll receive a full refund, no questions asked. We maintain a 98% approval rate, so most patients do qualify.",
  },
  {
    question: "Do I need medical records to get certified?",
    answer:
      "Medical records are helpful but not always required. Our licensed physicians can often make a recommendation based on your current symptoms and medical history discussed during the consultation. If you have relevant medical records, bringing them can help speed up the process.",
  },
  {
    question: "Can I use my certification in other states?",
    answer:
      "Reciprocity varies by state. Some states accept out-of-state medical marijuana cards, while others require you to register in their state system. Check our State Programs page for specific information about the states you plan to visit or move to.",
  },
];

export function Faq() {
  return (
    <section id="faqs" className="mx-auto max-w-4xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-heading text-3xl font-medium tracking-normal text-[#0a2733] sm:text-4xl">
          Frequently Asked <span className="text-[#0d6e74]">Questions</span>
        </h2>
        <p className="mt-4 text-neutral-600">
          Get answers to the most common questions about our medical
          marijuana certification process.
        </p>
      </div>

      <Accordion className="mt-10 gap-3 rounded-none border-none">
        {faqs.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="rounded-xl border bg-[#f7f9f9] px-2 not-last:mb-3 not-last:border-b-0 data-open:bg-[#eef6f6]"
          >
            <AccordionTrigger className="py-4 text-sm font-medium text-[#0a2733] hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-neutral-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 flex flex-col items-center gap-3">
        <Button className="rounded-full bg-[#0d6e74] px-6 py-5 text-white hover:bg-[#0d6e74]/90">
          Still Got Questions
        </Button>
        <p className="flex items-center gap-1.5 text-xs text-neutral-500">
          <Headset className="size-3.5 text-[#0d6e74]" />
          Our support team is here to help you
        </p>
      </div>
    </section>
  );
}
