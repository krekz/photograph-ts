import { Home, LineChart, Settings } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type TSidebarItems = {
  icon: any;
  label: string;
  href: string;
};

const SidebarItems: TSidebarItems[] = [
  {
    icon: Home,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: LineChart,
    label: "Analytics",
    href: "/analytics",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/analytics",
  },
];

const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-44 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 p-5 sm:py-5">
        {SidebarItems.map((item: TSidebarItems, index: number) => (
          // <TooltipProvider key={index}>
          //   <Tooltip>
          //     <TooltipTrigger className="flex gap-3 w-full">
          //       <item.icon />
          //       <p className="flex items-center gap-3 rounded-lg text-muted-foreground transition-all hover:text-primary">
          //         {item.label}
          //       </p>
          //       <span className="sr-only">{item.label}</span>
          //     </TooltipTrigger>
          //     <TooltipContent className="sm:hidden" side="right">
          //       <p>{item.label}</p>
          //     </TooltipContent>
          //   </Tooltip>
          // </TooltipProvider>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
