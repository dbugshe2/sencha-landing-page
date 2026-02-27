import { Link } from "wouter";
const links = [
  //   { title: "Services", href: "#" },ff
  //   { title: "Case Studies", href: "#" },
  //   { title: "Documentation", href: "#" },
  { title: "Privacy Policy", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Security", href: "#" },
];

export function Footer() {
  return (
    <footer className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto border-t py-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Logo and Tagline */}
          <div className="flex items-center gap-1">
            <Link href="/" className="flex items-center">
              <img
                src={"/svgs/sencha-logo-black.svg"}
                className={"shrink-0 transition-all duration-300 w-24 h-10"}
                alt="Sencha"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* Company Info */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <p className="text-sm text-muted-foreground">
              Crafted with ❤️ by Sencha Team
            </p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
