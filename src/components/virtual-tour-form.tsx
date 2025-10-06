"use client";

import React, { useState } from "react";
import Image from "next/image";
import { generateTourAction } from "@/app/virtual-tour/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ImagePlus, Loader2, Wand2, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

interface UploadedFile {
  file: File;
  preview: string;
}

export function VirtualTourForm() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [descriptions, setDescriptions] = useState<Record<string, string>>({});
  const [tourScript, setTourScript] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files).map(file => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setFiles(prev => [...prev, ...newFiles]);
    }
  };
  
  const removeFile = (fileName: string) => {
    setFiles(files.filter(f => f.file.name !== fileName));
    const newDescriptions = { ...descriptions };
    delete newDescriptions[fileName];
    setDescriptions(newDescriptions);
  };

  const handleDescriptionChange = (fileName: string, value: string) => {
    setDescriptions(prev => ({ ...prev, [fileName]: value }));
  };

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const handleSubmit = async () => {
    if (files.length === 0) {
      toast({
        title: "Tidak ada gambar",
        description: "Harap unggah setidaknya satu gambar untuk membuat tur.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setTourScript("");

    try {
      const imageDataUris = await Promise.all(files.map(f => toBase64(f.file)));
      const imageDescriptions = files.map(f => descriptions[f.file.name] || "");
      
      const result = await generateTourAction({ imageDataUris, imageDescriptions });

      if (result.error) {
        throw new Error(result.error);
      }

      if (result.tourScript) {
        setTourScript(result.tourScript);
        toast({
          title: "Tur Berhasil Dibuat!",
          description: "Naskah tur virtual Anda telah dibuat di bawah.",
        });
      } else {
        throw new Error("Gagal membuat naskah tur.");
      }

    } catch (error: any) {
      toast({
        title: "Terjadi Kesalahan",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">1. Unggah Gambar Kampus</CardTitle>
          <CardDescription>Pilih gambar-gambar landmark atau fasilitas utama di kampus Anda.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {files.map(uploadedFile => (
              <div key={uploadedFile.file.name} className="relative group aspect-square">
                <Image src={uploadedFile.preview} alt={uploadedFile.file.name} fill className="object-cover rounded-md" />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button variant="destructive" size="icon" onClick={() => removeFile(uploadedFile.file.name)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full aspect-square border-2 border-dashed border-muted-foreground/50 rounded-md cursor-pointer hover:bg-accent/50 transition-colors">
              <ImagePlus className="h-8 w-8 text-muted-foreground" />
              <span className="mt-2 text-sm text-muted-foreground text-center">Tambah Gambar</span>
              <Input id="file-upload" type="file" multiple accept="image/*" className="sr-only" onChange={handleFileChange} />
            </label>
          </div>

          {files.length > 0 && (
            <div className="space-y-4 pt-4">
              <h3 className="font-headline text-xl">2. Beri Deskripsi</h3>
              {files.map(uploadedFile => (
                <div key={uploadedFile.file.name} className="space-y-2">
                  <Label htmlFor={`desc-${uploadedFile.file.name}`} className="font-semibold text-sm">{uploadedFile.file.name}</Label>
                  <Textarea
                    id={`desc-${uploadedFile.file.name}`}
                    placeholder={`Deskripsikan lokasi atau apa yang penting tentang ${uploadedFile.file.name}...`}
                    value={descriptions[uploadedFile.file.name] || ""}
                    onChange={e => handleDescriptionChange(uploadedFile.file.name, e.target.value)}
                  />
                </div>
              ))}
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleSubmit} disabled={isLoading || files.length === 0} className="w-full" size="lg">
            {isLoading ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Wand2 className="mr-2 h-5 w-5" />}
            3. Buat Tur Virtual
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Naskah Tur Virtual Anda</CardTitle>
          <CardDescription>AI akan membuat narasi yang menarik berdasarkan gambar dan deskripsi Anda.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-full mt-4" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          ) : tourScript ? (
            <div className="text-foreground whitespace-pre-wrap text-sm">{tourScript}</div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground p-8">
              <Wand2 className="h-12 w-12 mb-4" />
              <p>Naskah tur Anda akan muncul di sini setelah dibuat.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
