import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Eye, Flag } from "lucide-react";

const aboutImage = PlaceHolderImages.find(p => p.id === 'about_history');

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Tentang CampusConnect</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Mengenal lebih dekat sejarah, nilai-nilai, dan komitmen kami terhadap keunggulan dalam pendidikan.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
          {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              fill
              className="object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
        <div className="space-y-6">
          <h2 className="font-headline text-3xl font-bold">Sejarah Kami</h2>
          <p className="text-muted-foreground">Didirikan pada tahun 1985, CampusConnect telah tumbuh dari sebuah perguruan tinggi kecil menjadi universitas riset terkemuka yang diakui secara global. Perjalanan kami ditandai oleh komitmen yang tak tergoyahkan untuk keunggulan akademik, inovasi, dan pelayanan masyarakat.</p>
          <p className="text-muted-foreground">Selama lebih dari tiga dekade, kami telah mendedikasikan diri untuk membina para pemimpin, pemikir, dan inovator masa depan.</p>
        </div>
      </div>
      
      <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-8">
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Eye className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-2xl">Visi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Menjadi universitas riset kelas dunia yang inovatif, mandiri, dan bermartabat, serta menjadi pusat keunggulan yang mampu memberikan kontribusi signifikan bagi perkembangan ilmu pengetahuan dan kesejahteraan masyarakat global.</p>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardHeader className="flex flex-row items-center gap-4">
            <Flag className="w-10 h-10 text-primary" />
            <CardTitle className="font-headline text-2xl">Misi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Menyelenggarakan pendidikan tinggi yang berkualitas dan relevan dengan tantangan global.</li>
              <li>Melaksanakan penelitian inovatif yang mendorong batas-batas pengetahuan.</li>
              <li>Mengabdikan keahlian kami untuk kemajuan dan kesejahteraan masyarakat.</li>
              <li>Membangun lingkungan akademik yang inklusif, kreatif, dan kolaboratif.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
