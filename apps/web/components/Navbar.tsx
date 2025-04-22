"use client";

import * as React from "react"
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Github, ShieldAlert, Sun, Moon, Menu, LogIn, UserPlus, ChevronDown} from "lucide-react";

import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();


  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);


  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);


  const handleMouseEnter = (dropdown: string) => setActiveDropdown(dropdown);
  const handleMouseLeave = () => setActiveDropdown(null);

  // Evita el error de hidratación asegurando que el componente se monte en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  const routes = [
    { path: "/courses", label: "Courses" },
    { path: "/open-source", label: "Open Source" },
    { path: "/docs", label: "Docs" },
    { path: "/blog", label: "Blog" },
    { path: "/pricing", label: "Princing" },
    { path: "/releases", label: "Releases" },
  ];

  const opensource: { title: string; href: string; description: string }[] = [
    {
      title: "Cyber WorldMap",
      href: "/cybersecurity-worldmap",
      description: "Visually or semantically separates content.",
    },
    {
      title: "DivisiónCero",
      href: "https://github.com/tu-repositorio",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Cyber Draw",
      href: "/cybersecurity-draw",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Peter Vargas",
      href: "https://petervargas.com",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Periodic Table",
      href: "/periodic-table",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-lg">
          🛡️ Cybersecurity Kudo
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/courses" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Courses
              </NavigationMenuLink>
            </Link>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Training
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Basic">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Medium">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Advance">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Open Source</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {opensource.map((opensource) => (
                  <ListItem
                    key={opensource.title}
                    title={opensource.title}
                    href={opensource.href}
                  >
                    {opensource.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Docs
              </NavigationMenuLink>
            </Link>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
            <Link href="/pricing" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Pricing
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>

      <div className="md:hidden flex-1 flex justify-end mr-2">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            {/* 🔥 Agregar un título accesible */}
            <SheetTitle></SheetTitle>
            <div className="flex flex-col gap-4 pt-8">
              {routes.map((route) => (
                <Button
                  key={route.path}
                  variant={pathname === route.path ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => router.push(route.path)}
                >
                  {route.label}
                </Button>
              ))}
              <div className="mt-4 space-y-2">
                {mounted && (
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <Sun size={18} className="mr-2" />
                    ) : (
                      <Moon size={18} className="mr-2" />
                    )}
                    {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/tu-repositorio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} className="mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  variant="destructive"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="https://github.com/tu-repositorio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShieldAlert size={18} className="mr-2" />
                    Under Attacks
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="/login"
                  >
                    <LogIn size={18} className="mr-2" />
                    Log in
                  </a>
                </Button>
                <Button
                  variant="default"
                  className="w-full justify-start"
                  asChild
                >
                  <a
                    href="/register"
                  >
                    <UserPlus size={18} className="mr-2" />
                    Sign Up
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:flex items-center gap-2">
        {mounted && (
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        )}
        <Button variant="outline" size="icon" asChild>
          <a
            href="https://github.com/tu-repositorio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={18} />
          </a>
        </Button>
        <Button variant="destructive" asChild>
          <a
            href="https://github.com/tu-repositorio"
            target="_blank"
            rel="noopener noreferrer"
          >
          <ShieldAlert size={18} className="mr-2" />
            Under Attack
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/login">
          <LogIn size={18} className="mr-2" />
            Log In
          </a>
        </Button>
        <Button variant="default" asChild>
          <a href="/register">
          <UserPlus size={18} className="mr-2" />
            Sign Up
          </a>
        </Button>
      </div>
    </nav>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"