"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "../context/auth-provider";
import { HeroText } from "./hero-text";

export default function HeroSection() {
  const user = useUser();

  return (
    <section className="w-full relative min-h-[80dvh] bg-grid-black/[0.075] dark:bg-grid-white/[0.075] flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-4">
            <HeroText />
            <p className="mx-auto max-w-[700px] md:text-xl text-muted-foreground">
              Schedule, manage, and chat with your calendar. Boost your
              productivity with AI-powered task management.
            </p>
          </div>
          <div className="space-x-4">
            {user.current ? (
              <Link href="/dashboard">
                <Button>Go to Dashboard</Button>
              </Link>
            ) : (
              <Link href="/sign-up">
                <Button>Get Started</Button>
              </Link>
            )}
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
