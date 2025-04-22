"use client";

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
} from "@/components/ui/navigation-menu";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Github, ShieldAlert, Sun, Moon, Menu, LogIn, UserPlus} from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Evita el error de hidratación asegurando que el componente se monte en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  const routes = [
    { path: "/courses", label: "Courses" },
    { path: "/enterprise", label: "Enterprise" },
    { path: "/docs", label: "Docs" },
    { path: "/blog", label: "Blog" },
    { path: "/pricing", label: "Princing" },
    { path: "/showcase", label: "Showcase" },
    { path: "/cybersecurity-worldmap", label: "WorldMap" },
    { path: "/cybersecurity-draw", label: "Cybersecurity Draw" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center">
        <Link href="/" className="font-bold text-lg">
          🛡️ Cybersecurity Kudo
        </Link>
      </div>

      <div className="hidden md:flex flex-1 justify-center">
        <NavigationMenu
          value={pathname}
          onValueChange={(value) => router.push(value)}
        >
          <NavigationMenuList>
            {routes.map((route) => (
              <NavigationMenuItem key={route.path}>
                <NavigationMenuLink
                  active={pathname === route.path}
                  className={`cursor-pointer ${pathname === route.path ? "font-bold" : ""}`}
                  onClick={() => router.push(route.path)}
                >
                  {route.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
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
            <ShieldAlert size={18} />
            Under Attack
          </a>
        </Button>
        <Button variant="outline" asChild>
          <a href="/login">
            <LogIn size={18} className="mr-2" />
            Log in
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
