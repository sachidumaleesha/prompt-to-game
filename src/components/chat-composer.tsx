"use client";

import {
  ArrowUpIcon,
  CarFrontIcon,
  ChevronDownIcon,
  CrosshairIcon,
  Gamepad2Icon,
  GripIcon,
  PickaxeIcon,
  PlaneIcon,
  SwordsIcon,
  ZapIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group";

const suggestions = [
  { icon: PickaxeIcon, label: "Voxel survival" },
  { icon: SwordsIcon, label: "Ink samurai duel" },
  { icon: ZapIcon, label: "Comic-book firefight" },
  { icon: PlaneIcon, label: "Realistic battlefield" },
  { icon: CrosshairIcon, label: "Fight-first shooter" },
  { icon: CarFrontIcon, label: "Jungle expedition drive" },
  { icon: Gamepad2Icon, label: "Sunny kingdom platformer" },
];

export function ChatComposer() {
  return (
    <div className="w-full space-y-4">
      <InputGroup className="bg-popover">
        <InputGroupTextarea
          rows={1}
          aria-label="Game description"
          className="scrollbar-hidden field-sizing-content min-h-9 max-h-16 px-5 py-3 text-lg"
          placeholder="Describe the game you want to build..."
        />
        <InputGroupAddon align="block-end" className="justify-between">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton size="sm">
                <GripIcon />
                Kimi K3
                <ChevronDownIcon />
              </InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem>Kimi K3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button type="button" size="icon-lg" aria-label="Build game">
            <ArrowUpIcon />
          </Button>
        </InputGroupAddon>
      </InputGroup>

      <div className="flex flex-wrap justify-center gap-2">
        {suggestions.map(({ icon: Icon, label }) => (
          <Button
            key={label}
            type="button"
            variant="outline"
            size="sm"
            className="rounded-full font-normal text-muted-foreground"
          >
            <Icon />
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
