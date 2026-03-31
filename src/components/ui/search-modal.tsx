import React from "react";
import {
  Modal,
  ModalContent,
  ModalTitle,
  ModalTrigger,
} from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem as ShadcnCommandItem,
  CommandList,
} from "@/components/ui/command";

import { LucideIcon, SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
};

export function SearchModal({ children, data }: SearchModalProps) {
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

  return (
    <Modal open={open} onOpenChange={setOpen}>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent className="p-0 overflow-hidden">
        <ModalTitle className="sr-only">Search</ModalTitle>
        <Command className="rounded-lg border-none">
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
                  No results for "{query}"
                </p>
              </div>
              <Button onClick={() => setQuery("")} variant="ghost" className="mt-2">
                Clear search
              </Button>
            </CommandEmpty>
            <CommandGroup heading="Navigate">
              {data.map((item) => {
                return (
                  <ShadcnCommandItem
                    key={item.id}
                    value={item.title}
                    onSelect={() => setOpen(false)}
                    className="flex items-center justify-between gap-2 px-3 py-2.5"
                  >
                    {item.icon && <item.icon className="h-4 w-4 shrink-0 text-muted-foreground" />}
                    <div className="flex flex-1 flex-col">
                      <span className="text-sm font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground line-clamp-1">
                        {item.description}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </ShadcnCommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </ModalContent>
    </Modal>
  );
}
