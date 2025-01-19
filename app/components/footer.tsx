import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-5">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">SkillForge</h3>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Empowering your learning journey with personalized AI-driven paths. Discover your potential with SkillForge.
            </p>
            <p className="text-sm text-foreground/80 mt-4">
              Our mission is to make learning accessible, efficient, and tailored to each individual's goals.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Stay Updated</h3>
            <p className="text-sm text-foreground/80 mb-4">
              Subscribe to our newsletter to receive updates, tips, and exclusive content straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row items-stretch space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 rounded-full px-4 py-2 shadow-md focus:ring focus:ring-primary/40"
              />
              <Button type="reset" className="rounded-full px-8 py-2 shadow-md">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} SkillForge. All rights reserved.
            </p>
            <ul className="flex space-x-6 mt-4 md:mt-0">
              <li>
                <Link href="/privacy" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/80 hover:text-blue-700 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}