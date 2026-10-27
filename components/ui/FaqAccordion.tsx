"use client";

import Link from "next/link";
import { Plus, ArrowUpRight } from "lucide-react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export interface AccordionItemData {
  question: string;
  answer: string;
  linkText?: string;
  linkHref?: string;
}

interface FaqAccordionProps {
  items: AccordionItemData[];
  defaultValue?: string;
  className?: string;
}

export function FaqAccordion({
  items,
  defaultValue = "item-0",
  className = "",
}: FaqAccordionProps) {
  return (
    <AccordionPrimitive.Root
      type="single"
      collapsible
      defaultValue={defaultValue}
      className={`space-y-3 ${className}`}
    >
      {items.map((item, idx) => (
        <AccordionPrimitive.Item
          key={item.question}
          value={`item-${idx}`}
          className="group overflow-hidden rounded-xl bg-white transition-all duration-200 data-[state=open]:shadow-xs"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors md:px-6 md:py-4.5 cursor-pointer">
              <span className="text-sm font-semibold text-[#1E1A17] sm:text-base group-hover:text-[#B85D19] transition-colors">
                {item.question}
              </span>

              <Plus
                size={18}
                className="shrink-0 text-black/60 transition-transform duration-250 ease-out group-data-[state=open]:rotate-45 group-data-[state=open]:text-[#B85D19]"
              />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>

          <AccordionPrimitive.Content className="accordion-content overflow-hidden text-xs text-[#555] sm:text-sm">
            <div className="border-t border-black/5 px-5 pb-5 pt-3 md:px-6 md:pb-6">
              <p className="leading-relaxed text-[#555]">
                {item.answer}
              </p>

              {item.linkHref && item.linkText && (
                <div className="mt-3.5 pt-2.5 border-t border-dashed border-[#B85D19]/25">
                  <Link
                    href={item.linkHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#B85D19] transition-colors hover:text-[#964810] hover:underline"
                  >
                    <span>{item.linkText}</span>
                    <ArrowUpRight size={16} className="shrink-0 text-[#B85D19]" />
                  </Link>
                </div>
              )}
            </div>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
