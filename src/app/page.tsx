import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export default function Home() {
  return (
    <main className="flex min-h-svh">
      <Empty>
        <EmptyHeader>
          <EmptyMedia>
            <Image
              src="/logo.svg"
              alt="Prompt to Game"
              width={48}
              height={48}
              priority
            />
          </EmptyMedia>
          <EmptyTitle className="text-2xl">
            What should we build today?
          </EmptyTitle>
          <EmptyDescription>
            Build your own racers, shooters, puzzles and whole worlds using your
            own words. If you can describe it, you can play it.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button>Sign in</Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button variant="outline">Sign up</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </EmptyContent>
      </Empty>
    </main>
  );
}
