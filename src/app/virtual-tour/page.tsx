import { VirtualTourForm } from "@/components/virtual-tour-form";

export default function VirtualTourPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Generator Tur Virtual</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          Ciptakan pengalaman tur kampus yang imersif dan menarik dengan kekuatan AI. Cukup unggah gambar, berikan deskripsi singkat, dan biarkan kami yang menyusun narasinya.
        </p>
      </div>
      <VirtualTourForm />
    </div>
  );
}
