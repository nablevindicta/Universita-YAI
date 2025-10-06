import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

const newsItems = [
  {
    title: "CampusConnect Raih Peringkat Top 10 Universitas Riset Nasional",
    category: "Prestasi",
    date: "15 Juli 2024",
    excerpt: "Sebuah pencapaian luar biasa bagi komunitas kami, menegaskan komitmen kami pada keunggulan penelitian dan inovasi.",
    image: PlaceHolderImages.find(p => p.id === 'news_graduation'),
    link: "#",
  },
  {
    title: "Festival Seni Tahunan Kembali Digelar dengan Meriah",
    category: "Acara",
    date: "12 Juli 2024",
    excerpt: "Ratusan mahasiswa memamerkan karya kreatif mereka dalam acara tahunan yang paling ditunggu, menarik ribuan pengunjung.",
    image: PlaceHolderImages.find(p => p.id === 'news_event'),
    link: "#",
  },
  {
    title: "Tim Robotika Juarai Kompetisi Internasional di Jepang",
    category: "Mahasiswa",
    date: "10 Juli 2024",
    excerpt: "Tim 'RoboConnect' dari Fakultas Teknik berhasil mengalahkan puluhan tim dari seluruh dunia dengan inovasi robot cerdas mereka.",
    image: PlaceHolderImages.find(p => p.id === 'news_research'),
    link: "#",
  },
];

export default function NewsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Berita & Pengumuman</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Ikuti terus perkembangan terbaru dari komunitas CampusConnect.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <Card key={item.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-56 w-full">
              {item.image && (
                <Image
                  src={item.image.imageUrl}
                  alt={item.image.description}
                  fill
                  className="object-cover"
                  data-ai-hint={item.image.imageHint}
                />
              )}
            </div>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2 bg-accent/20 text-accent-foreground">{item.category}</Badge>
              <CardTitle className="font-headline text-xl leading-tight">{item.title}</CardTitle>
              <CardDescription>{item.date}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{item.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={item.link} className="flex items-center text-sm font-semibold text-primary hover:underline">
                Baca Selengkapnya <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
