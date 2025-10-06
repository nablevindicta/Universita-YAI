import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const faculties = [
  {
    name: "Fakultas Teknik",
    description: "Menghasilkan insinyur inovatif yang siap menghadapi tantangan teknologi masa depan.",
    programs: ["Teknik Informatika", "Teknik Elektro", "Teknik Mesin", "Teknik Sipil"],
    image: PlaceHolderImages.find(p => p.id === 'faculty_engineering'),
  },
  {
    name: "Fakultas Seni & Desain",
    description: "Membina kreativitas dan ekspresi untuk para seniman dan desainer generasi berikutnya.",
    programs: ["Desain Komunikasi Visual", "Seni Rupa Murni", "Desain Interior", "Musik"],
    image: PlaceHolderImages.find(p => p.id === 'faculty_arts'),
  },
  {
    name: "Fakultas Ekonomi & Bisnis",
    description: "Mempersiapkan pemimpin bisnis yang etis dan kompeten di panggung global.",
    programs: ["Manajemen", "Akuntansi", "Ekonomi Pembangunan", "Bisnis Digital"],
    image: PlaceHolderImages.find(p => p.id === 'faculty_business'),
  },
];

export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Program Akademik</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Temukan program studi yang sesuai dengan minat dan cita-cita Anda di berbagai fakultas unggulan kami.</p>
      </div>
      <div className="space-y-12">
        {faculties.map((faculty) => (
          <Card key={faculty.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 relative h-64 md:h-full">
                {faculty.image && (
                  <Image
                    src={faculty.image.imageUrl}
                    alt={faculty.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={faculty.image.imageHint}
                  />
                )}
              </div>
              <div className="md:col-span-3">
                <CardHeader>
                  <CardTitle className="font-headline text-3xl">{faculty.name}</CardTitle>
                  <CardDescription className="pt-2">{faculty.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold text-foreground mb-2">Program Studi:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-muted-foreground">
                    {faculty.programs.map((program) => (
                      <li key={program} className="flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
