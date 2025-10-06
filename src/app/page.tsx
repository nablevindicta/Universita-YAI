import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, BookOpen, Newspaper, Users } from "lucide-react";

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Akademik Unggulan",
    description: "Jelajahi beragam program studi dan fakultas kami yang dirancang untuk keunggulan.",
    link: "/academics",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Penerimaan Online",
    description: "Mulai perjalanan akademis Anda bersama kami melalui proses pendaftaran yang mudah.",
    link: "/admissions",
  },
  {
    icon: <Newspaper className="h-10 w-10 text-primary" />,
    title: "Berita & Acara",
    description: "Tetap terinformasi dengan berita terbaru, pengumuman, dan acara di kampus.",
    link: "/news",
  },
];


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">Selamat Datang di CampusConnect</h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl">Gerbang Anda Menuju Pendidikan Kelas Dunia dan Inovasi Tanpa Batas.</p>
          <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/admissions">Daftar Sekarang <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Jelajahi Kampus Kami</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Temukan apa yang membuat CampusConnect menjadi tempat yang luar biasa untuk belajar, tumbuh, dan berprestasi.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="p-4 bg-secondary rounded-full">
                  {feature.icon}
                </div>
                <CardHeader className="p-0 pt-4">
                  <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 pt-2 flex-grow">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
                <Button asChild variant="link" className="mt-4 text-primary">
                  <Link href={feature.link}>
                    Pelajari Lebih Lanjut <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 md:p-12">
                <h2 className="font-headline text-3xl md:text-4xl font-bold">Ikuti Tur Virtual Kampus</h2>
                <p className="mt-4 text-primary-foreground/80">Tidak bisa mengunjungi kami secara langsung? Jelajahi fasilitas canggih kami dari kenyamanan rumah Anda dengan tur virtual bertenaga AI.</p>
                <Button asChild size="lg" variant="secondary" className="mt-8">
                  <Link href="/virtual-tour">Mulai Tur <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-full">
                <Image
                  src={PlaceHolderImages.find(p => p.id === 'virtual_tour_library')?.imageUrl || ''}
                  alt="Virtual tour preview"
                  fill
                  className="object-cover"
                  data-ai-hint="university library"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

    </div>
  );
}
