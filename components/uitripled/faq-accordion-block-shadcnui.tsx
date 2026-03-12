"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "როგორ დაიხარჯება ჩემი თანხა?",
    answer:
      "The free plan includes access to basic components, up to 5 projects, community support, and regular updates. It's perfect for individuals and small projects to get started.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the billing accordingly. No hassle, no hidden fees.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise accounts. All payments are processed securely through Stripe.",
  },
  {
    question: "Is there a setup fee or contract required?",
    answer:
      "No setup fees and no long-term contracts required. You can cancel anytime. For enterprise plans, we offer flexible terms based on your needs.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our service within the first 30 days, we'll provide a full refund, no questions asked.",
  },
  {
    question: "How does customer support work?",
    answer:
      "Free plans get community support through our forum. Pro plans include email support with 24-hour response time. Enterprise plans get priority support with dedicated account managers and SLA guarantees.",
  },
];

export function FAQAccordionBlock() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full  px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            ხშირად დასმული შეკითხვები
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="overflow-hidden border-border/50 bg-transparents transition-all hover:border-primary/50 hover:shadow-md">
                  <motion.button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-4 text-left md:p-6"
                    whileHover={{
                      backgroundColor: "rgba(var(--primary), 0.03)",
                    }}
                  >
                    <span className="pr-4 text-base font-semibold md:text-lg">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="h-5 w-5 text-default-blue" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border/50 p-4 md:p-6">
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            className="text-sm text-default-blue md:text-base"
                          >
                            {faq.answer}
                          </motion.p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center md:mt-16"
        >
          <Card className="border-border/50 p-6 md:p-8">
            <MessageCircle className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="mb-2 text-xl font-bold md:text-2xl">
              კიდევ გაქვთ კითხვები?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground md:text-base">
              დაგვიკავშირდით!
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <button
                className="px-7 py-5 rounded-full font-bold text-3xl transition-all duration-300 cursor-pointer whitespace-nowrap w-fit"
                style={{
                  background: "transparent",
                  color: "var(--color-default-blue)",
                  border: "2px solid var(--color-default-blue)",
                }}
              >
                დაკავშირება
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
