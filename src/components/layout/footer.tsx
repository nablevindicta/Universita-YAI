import Link from "next/link";
import { University, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-12">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary">
              <University className="h-8 w-8" />
              <span>Universitas Y.A.I</span>
            </Link>
            <p className="text-sm">Membentuk masa depan melalui pendidikan unggul dan inovasi.</p>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="/academics" className="hover:text-primary transition-colors">Akademik</Link></li>
              <li><Link href="/admissions" className="hover:text-primary transition-colors">Penerimaan</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">Berita</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-headline text-lg font-bold">Kontak</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@Universitas Y.A.I.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+62 123 4567 890</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Universitas Y.A.I. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
