"use client";

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { CoinsIcon, MessageSquareIcon, SquarePenIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        {state === "collapsed" ? (
          <SidebarTrigger />
        ) : (
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                size="default"
                asChild
                className="flex items-center"
              >
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5"
                  />
                  <span className="font-logo text-base">Sandbox</span>
                </Link>
              </SidebarMenuButton>
              <SidebarMenuAction asChild>
                <SidebarTrigger className="size-5" />
              </SidebarMenuAction>
            </SidebarMenuItem>
          </SidebarMenu>
        )}
      </SidebarHeader>

      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === "/"}
                  tooltip="New game"
                >
                  <Link href="/">
                    <SquarePenIcon />
                    <span>New game</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Recents</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip="Your games will live here.">
                  <MessageSquareIcon />
                  <span>Your games will live here.</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <CoinsIcon />
              <span>Credits</span>
            </SidebarMenuButton>
            <SidebarMenuBadge className="mt-0.5">$1.00</SidebarMenuBadge>
          </SidebarMenuItem>
          {state === "collapsed" ? (
            <SidebarMenuItem>
              <UserButton />
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem className="flex items-center justify-between px-2">
              <OrganizationSwitcher
                appearance={{
                  elements: {
                    rootBox: "w-full! max-w-full",
                    organizationSwitcherTrigger:
                      "w-full! max-w-full justify-between!",
                    organizationPreview: "min-w-0",
                    organizationPreviewTextContainer: "min-w-0",
                    organizationPreviewMainIdentifier: "truncate",
                  },
                }}
              />
              <UserButton />
            </SidebarMenuItem>
          )}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
