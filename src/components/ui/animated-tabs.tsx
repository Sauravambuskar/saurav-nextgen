"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  LayoutPanelTop,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: LucideIcon;
}

export interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const defaultTabs: Tab[] = [
  {
    id: "overview",
    label: "Overview",
    icon: LayoutPanelTop,
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-background/70 p-6">
          <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <LayoutPanelTop className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-foreground">Tab 1</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-background/70 p-6">
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Highlights
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>Smooth animated switching between tabs</li>
            <li>Responsive layout for desktop and mobile</li>
            <li>Built with real Lucide icons and Framer Motion</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "devices",
    label: "Devices",
    icon: MonitorSmartphone,
    content: (
      <div className="rounded-2xl border border-border bg-background/70 p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <MonitorSmartphone className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Tab 2</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    ),
  },
  {
    id: "launch",
    label: "Launch",
    icon: Sparkles,
    content: (
      <div className="rounded-2xl border border-border bg-background/70 p-6">
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Sparkles className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">Tab 3</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    ),
  },
];

const AnimatedTabs = ({
  tabs = defaultTabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const instanceId = React.useId();
  const initialTabId = React.useMemo(() => {
    if (!tabs.length) return undefined;
    return tabs.some((tab) => tab.id === defaultTab) ? defaultTab : tabs[0].id;
  }, [defaultTab, tabs]);

  const [activeTab, setActiveTab] = React.useState(initialTabId);

  React.useEffect(() => {
    setActiveTab(initialTabId);
  }, [initialTabId]);

  const currentTab = tabs.find((tab) => tab.id === activeTab) ?? tabs[0];

  if (!currentTab) return null;

  return (
    <div className={cn("w-full", className)}>
      <div className="overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div
          role="tablist"
          aria-label="Animated tabs"
          className="flex min-w-max gap-2 rounded-2xl border border-border bg-card/80 p-2 shadow-sm backdrop-blur-sm sm:min-w-0 sm:flex-wrap"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = currentTab.id === tab.id;

            return (
              <button
                key={tab.id}
                id={`${instanceId}-${tab.id}-tab`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`${instanceId}-${tab.id}-panel`}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative isolate inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId={`active-pill-${instanceId}`}
                    className="absolute inset-0 -z-10 rounded-xl bg-primary shadow-lg shadow-primary/20"
                    transition={{ type: "spring", stiffness: 320, damping: 28 }}
                  />
                )}
                {Icon ? <Icon className="h-4 w-4" /> : null}
                <span className="whitespace-nowrap">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab.id}
            id={`${instanceId}-${currentTab.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${instanceId}-${currentTab.id}-tab`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="rounded-[1.5rem] border border-border bg-card/80 p-4 shadow-xl shadow-background/10 backdrop-blur-sm sm:p-6 lg:p-8"
          >
            {currentTab.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export { AnimatedTabs };
