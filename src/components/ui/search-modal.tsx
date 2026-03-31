import React from "react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem as ShadcnCommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { LucideIcon, SearchIcon } from "lucide-react";

export type CommandItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon?: LucideIcon;
  shortcut?: string;
};

type SearchModalProps = {
  children: React.ReactNode;
  data: CommandItem[];
  onSelect?: (item: CommandItem) => void;
};

export function SearchModal({ children, data, onSelect }: SearchModalProps) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = (item: CommandItem) => {
    setOpen(false);
    setQuery("");
    if (onSelect) {
      onSelect(item);
    } else {
      // Default: scroll to section
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div onClick={() => setOpen(true)}>{children}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="p-0 gap-0 max-w-lg overflow-hidden [&>button]:hidden">
          <Command className="rounded-lg border-none bg-background">
            <CommandInput
              placeholder="Search sections, projects..."
              value={query}
              onValueChange={setQuery}
            />
            <CommandList className="max-h-[300px]">
              <CommandEmpty className="py-6 text-center">
                <div className="flex flex-col items-center gap-2">
                  <SearchIcon className="h-8 w-8 text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    No results for &quot;{query}&quot;
                  </p>
                </div>
                <Button
                  onClick={() => setQuery("")}
                  variant="ghost"
                  className="mt-2"
                >
                  Clear search
                </Button>
              </CommandEmpty>
              <CommandGroup heading="Navigate">
                {data.map((item) => (
                  <ShadcnCommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => handleSelect(item)}
                    className="flex items-center justify-between gap-2 px-3 py-2.5 cursor-pointer"
                  >
                    {item.icon && (
                      <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    )}
                    <div className="flex flex-1 flex-col">
                      <span className="text-sm font-medium">
                        {item.title}
                      </span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {item.description}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </ShadcnCommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
