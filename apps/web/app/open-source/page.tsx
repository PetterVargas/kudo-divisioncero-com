"use client";

import type React from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "../../lib/cn";
import { LucideExternalLink, LucideHome, LucideInfo, LucideSettings, LucideCode, LucideUsers } from "lucide-react";

export default function OpenSource() {
  return (
    <main className="flex justify-center items-center">
      <div className="container max-w-screen-lg flex flex-col items-center text-center py-8">
        <h1 className="mb-4 text-4xl font-semibold md:text-5xl">Open Source</h1>
        <p className="text-muted-foreground">You can start with DivisionCero by learning and then contributing.</p>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <a href="/courses" rel="noreferrer noopener" className={cn(buttonVariants({ size: "lg" }))}>
            Courses
          </a>
          <Link href="https://github.com" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            GitHub
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <NavCard
            title="Cyber WorldMap"
            description="Access your main control panel and overview."
            icon={<LucideHome className="h-5 w-5" />}
            href="/"
            isInternal={true}
          />
          <NavCard
            title="Cyber Draw"
            description="Learn how to use the platform with detailed guides."
            icon={<LucideInfo className="h-5 w-5" />}
            href="/docs"
            isInternal={true}
          />
          <NavCard
            title="Cyber Periodic Table"
            description="Configure your preferences and account details."
            icon={<LucideSettings className="h-5 w-5" />}
            href="/settings"
            isInternal={true}
          />
          <NavCard
            title="GitHub Repo DivisionCero.com"
            description="Explore the complete API documentation and examples."
            icon={<LucideCode className="h-5 w-5" />}
            href="https://api.example.com"
            isInternal={false}
          />
          <NavCard
            title="GitHub Repo PeterVargas.com"
            description="Join our community forum and connect with other users."
            icon={<LucideUsers className="h-5 w-5" />}
            href="https://community.example.com"
            isInternal={false}
          />
        </div>
      </div>
    </main>
  );
}

interface NavCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  isInternal: boolean;
}

function NavCard({ title, description, icon, href, isInternal }: NavCardProps) {
  const content = (
    <div className="rounded-xl border border-border bg-card hover:bg-accent transition-all duration-300 p-6 shadow-sm">
      <div className="flex items-start">
        <div className="p-2 bg-muted rounded-md mr-4">{icon}</div>
        <div>
          <h2 className="text-lg font-medium mb-1 flex items-center text-foreground">
            {title}
            {!isInternal && <LucideExternalLink className="ml-2 h-3.5 w-3.5 text-muted-foreground" />}
          </h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );

  if (isInternal) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}
