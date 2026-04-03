"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  repeat?: number;
  gap?: string;
  duration?: string;
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      className,
      children,
      pauseOnHover = false,
      reverse = false,
      vertical = false,
      repeat = 4,
      gap = "1rem",
      duration = "40s",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group flex overflow-hidden [--gap:1rem]",
          vertical ? "flex-col" : "flex-row",
          className
        )}
        style={
          {
            "--gap": gap,
            "--duration": duration,
          } as React.CSSProperties
        }
        {...props}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around [gap:var(--gap)]",
              vertical
                ? "animate-marquee-vertical flex-col"
                : "animate-marquee flex-row",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]"
            )}
          >
            {children}
          </div>
        ))}
      </div>
    );
  }
);
Marquee.displayName = "Marquee";

export { Marquee };
