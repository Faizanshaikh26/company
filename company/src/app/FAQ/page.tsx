import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="bg-white py-12">
      {/* Heading Section */}
      <div className="text-center">
        <p className="text-base font-semibold text-[#294dff]">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="text-4xl font-bold text-[#253053] mt-2">Your questions, answered</h2>
      </div>

      {/* Accordion Section */}
      <div className="max-w-6xl mx-auto mt-12">
  <Accordion type="single" collapsible>
    {/* Accordion Item 1 */}
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-[#253053] text-2xl font-semibold border-b py-6">
        How do you record employee payroll?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 text-lg py-4">
        To record employee payroll, you need to document salaries, wages, bonuses, and deductions accurately in payroll software or spreadsheets. Always ensure compliance with tax regulations.
      </AccordionContent>
    </AccordionItem>

    {/* Accordion Item 2 */}
    <AccordionItem value="item-2">
      <AccordionTrigger className="text-[#253053] text-2xl font-semibold border-b py-6">
        What is a payroll tracker?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 text-lg py-4">
        A payroll tracker is a tool that helps employers track employee hours, calculate wages, and ensure timely payroll processing. It often integrates with timekeeping and accounting systems.
      </AccordionContent>
    </AccordionItem>

    {/* Accordion Item 3 */}
    <AccordionItem value="item-3">
      <AccordionTrigger className="text-[#253053] text-2xl font-semibold border-b py-6">
        How do you calculate payroll?
      </AccordionTrigger>
      <AccordionContent className="text-gray-600 text-lg py-4">
        Payroll calculation involves determining gross pay, subtracting deductions such as taxes and benefits, and issuing the remaining amount as net pay. Software can simplify this process significantly.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>

    </div>
  );
}
