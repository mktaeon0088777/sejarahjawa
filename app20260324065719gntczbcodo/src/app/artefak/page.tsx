'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Search, Filter, Grid, List, MapPin, Calendar, Building, SlidersHorizontal, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import SchemaMarkup from '@/components/SchemaMarkup';

const artifacts = [
  {
    id: 'arca-buddha-borobudur',
    name: 'Arca Buddha Avalokitesvara',
    era: 'hindu-buddha',
    category: 'arca',
    period: 'Abad ke-8',
    location: 'Candi Borobudur, Magelang',
    museum: 'Museum Borobudur',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=800&q=80',
    description: 'Arca Dhyani Buddha terbesar di dunia dengan tinggi 3 meter. Arca ini merupakan bagian dari kompleks Borobudur yang dibangun pada masa Dinasti Syailendra.',
  },
  {
    id: 'prasasti-tugu',
    name: 'Prasasti Tugu',
    era: 'hindu-buddha',
    category: 'prasasti',
    period: '450 M',
    location: 'Tugu, Jakarta',
    museum: 'Museum Nasional Indonesia',
    image: 'https://images.unsplash.com/photo-1558431382-f12e866a069d?w=800&q=80',
    description: 'Prasasti tertua yang menyebutkan Raja Purnawarman dari Kerajaan Tarumanagara. Ditulis dalam aksara Pallawa dan bahasa Sanskerta.',
  },
  {
    id: 'keris-pajang',
    name: 'Keris Pajang',
    era: 'islam',
    category: 'senjata',
    period: 'Abad ke-16',
    location: 'Keraton Yogyakarta',
    museum: 'Museum Keraton Yogyakarta',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    description: 'Senjata tradisional Jawa dengan nilai spiritual tinggi. Keris diyakini memiliki kekuatan gaib dan merupakan simbol identitas Jawa.',
  },
  {
    id: 'fossil-homo-erectus',
    name: 'Fosil Homo Erectus Sangiran',
    era: 'pra-masehi',
    category: 'fosil',
    period: '1.5 juta - 250.000 tahun lalu',
    location: 'Sangiran, Sragen, Jawa Tengah',
    museum: 'Museum Fossils Hominid Sangiran',
    image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80',
    description: 'Fosil tengkorak Homo erectus yang menjadi salah satu penemuan paling penting dalam sejarah paleoanthropologi.',
  },
  {
    id: 'arca-shiva',
    name: 'Arca Shiva Mahadeva',
    era: 'hindu-buddha',
    category: 'arca',
    period: 'Abad ke-8',
    location: 'Candi Prambanan, Yogyakarta',
    museum: 'Museum Prambanan',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80',
    description: 'Arca dewa Hindu dengan empat tangan yang menunjukkan aktivitas berbeda. Bagian dariTrinity (Shiva, Vishnu, Brahma) di Candi Prambanan.',
  },
  {
    id: 'gerabah-neolitik',
    name: 'Gerabah Budaya Pacitan',
    era: 'pra-masehi',
    category: 'gerabah',
    period: '3.000 - 1.500 SM',
    location: 'Pacitan, Jawa Timur',
    museum: 'Museum Nasional Indonesia',
    image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800&q=80',
    description: 'Contoh gerabah neolitik dari Kebudayaan Pacitan yang menunjukkan kemampuan pottery manusia purba di Jawa.',
  },
  {
    id: 'dolan-batik',
    name: 'Dolanan Batik Keraton',
    era: 'islam',
    category: 'tekstil',
    period: 'Abad ke-19',
    location: 'Keraton Yogyakarta',
    museum: 'Museum Batik Yogyakarta',
    image: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&q=80',
    description: 'Batik dari lingkungan kraton dengan motif yang memiliki makna filosofis dan simbolis dalam budaya Jawa.',
  },
  {
    id: 'cincin-emas-majapahit',
    name: 'Cincin Emas Majapahit',
    era: 'hindu-buddha',
    category: 'perhiasan',
    period: 'Abad ke-14',
    location: 'Trowulan, Mojokerto',
    museum: 'Museum Trowulan',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    description: 'Perhiasan emas dari masa Kerajaan Majapahit yang menunjukkan keahlian pengrajin emas pada masa itu.',
  },
  {
    id: 'piring-belu',
    name: 'Piring Belu Gajah Mada',
    era: 'hindu-buddha',
    category: 'gerabah',
    period: 'Abad ke-13',
    location: 'Trowulan, Mojokerto',
    museum: 'Museum Trowulan',
    image: 'https://images.unsplash.com/photo-1493480596433-4be0f74df8a0?w=800&q=80',
    description: 'Gerabah berkualitas tinggi yang ditemukan di situs Trowulan, bukti perdagangan maritim Majapahit.',
  },
  {
    id: 'patung-ganesa',
    name: 'Arca Ganesa',
    era: 'hindu-buddha',
    category: 'arca',
    period: 'Abad ke-9',
    location: 'Candi Prambanan, Yogyakarta',
    museum: 'Museum Prambanan',
    image: 'https://images.unsplash.com/photo-1609948728121-4be3e0c01e09?w=800&q=80',
    description: 'Arca dewa Ganesa dengan belalai khas yang ditemukan di kompleks Candi Prambanan.',
  },
  {
    id: 'manik-manik-sultanan',
    name: 'Manik-manik Emas Kesultanan',
    era: 'islam',
    category: 'perhiasan',
    period: 'Abad ke-18',
    location: 'Keraton Surakarta',
    museum: 'Museum Radya Pustaka',
    image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=800&q=80',
    description: 'Hiasan manik-manik emas yang digunakan dalam tradisi kraton Jawa.',
  },
  {
    id: 'pisaun-dewa',
    name: 'Pisau Belati Perunggu',
    era: 'pra-masehi',
    category: 'senjata',
    period: '500 - 200 SM',
    location: 'Ngandong, Blitar',
    museum: 'Museum Nasional Indonesia',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    description: 'Senjata perunggu dari masa Megalitikum yang menunjukkan transisi teknologi logam di Jawa.',
  },
];

const eras = [
  { value: 'all', label: 'Semua Era' },
  { value: 'pra-masehi', label: 'Pra-Masehi' },
  { value: 'hindu-buddha', label: 'Hindu-Buddha' },
  { value: 'islam', label: 'Islam' },
];

const categories = [
  { value: 'all', label: 'Semua Kategori' },
  { value: 'arca', label: 'Arca' },
  { value: 'prasasti', label: 'Prasasti' },
  { value: 'fosil', label: 'Fosil' },
  { value: 'senjata', label: 'Senjata' },
  { value: 'gerabah', label: 'Gerabah' },
  { value: 'tekstil', label: 'Tekstil' },
  { value: 'perhiasan', label: 'Perhiasan' },
];

const eraColors: Record<string, string> = {
  'pra-masehi': 'bg-amber-500',
  'hindu-buddha': 'bg-orange-500',
  'islam': 'bg-emerald-500',
};

export default function ArtefakPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredArtifacts = artifacts.filter((artifact) => {
    const matchesSearch =
      artifact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artifact.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEra = selectedEra === 'all' || artifact.era === selectedEra;
    const matchesCategory = selectedCategory === 'all' || artifact.category === selectedCategory;
    return matchesSearch && matchesEra && matchesCategory;
  });

  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Koleksi Artefak Sejarah Jawa',
          description: 'Jelajahi koleksi artefak bersejarah dari berbagai era di Pulau Jawa.',
          author: { '@type': 'Organization', name: 'Sejarah Jawa Project' },
          publisher: { '@type': 'Organization', name: 'Sejarah Jawa' },
          datePublished: '2024-01-15',
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=1600&q=80"
          alt="Koleksi Artefak Sejarah Jawa"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-4 font-ui">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Link>
            </Button>
            <Badge className="bg-primary text-primary-foreground font-ui mb-4">
              Koleksi Artefak
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Galeri Artefak Bersejarah
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Jelajahi koleksi artefak dari berbagai era sejarah Pulau Jawa,
              dari fosil manusia purba hingga peninggalan kesultanan.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-card border-b">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 font-ui text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Artefak</span>
          </nav>
        </div>
      </div>

      {/* Filters & Search */}
      <section className="py-8 bg-background border-b sticky top-16 md:top-20 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Cari artefak..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 font-ui"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            {/* Filter Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Select value={selectedEra} onValueChange={setSelectedEra}>
                <SelectTrigger className="w-[180px] font-ui">
                  <SelectValue placeholder="Pilih Era" />
                </SelectTrigger>
                <SelectContent>
                  {eras.map((era) => (
                    <SelectItem key={era.value} value={era.value} className="font-ui">
                      {era.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px] font-ui">
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value} className="font-ui">
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-secondary'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Filter Button - Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden font-ui">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="font-heading">Filter Artefak</SheetTitle>
                </SheetHeader>
                <div className="space-y-6 mt-6">
                  <div>
                    <label className="font-ui text-sm font-medium mb-2 block">Era</label>
                    <Select value={selectedEra} onValueChange={setSelectedEra}>
                      <SelectTrigger className="font-ui">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {eras.map((era) => (
                          <SelectItem key={era.value} value={era.value} className="font-ui">
                            {era.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="font-ui text-sm font-medium mb-2 block">Kategori</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger className="font-ui">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value} className="font-ui">
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Active Filters */}
          {(selectedEra !== 'all' || selectedCategory !== 'all' || searchQuery) && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <span className="font-ui text-sm text-muted-foreground">Filter aktif:</span>
              {selectedEra !== 'all' && (
                <Badge variant="secondary" className="font-ui">
                  {eras.find((e) => e.value === selectedEra)?.label}
                  <button onClick={() => setSelectedEra('all')} className="ml-1 hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="font-ui">
                  {categories.find((c) => c.value === selectedCategory)?.label}
                  <button onClick={() => setSelectedCategory('all')} className="ml-1 hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="font-ui">
                  &quot;{searchQuery}&quot;
                  <button onClick={() => setSearchQuery('')} className="ml-1 hover:text-destructive">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="font-ui text-muted-foreground">
              Menampilkan <strong>{filteredArtifacts.length}</strong> artefak
            </p>
          </div>

          {filteredArtifacts.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <Filter className="w-12 h-12 mx-auto mb-4 text-muted-foreground opacity-50" />
                <h3 className="font-heading text-xl font-semibold mb-2">Tidak ada artefak ditemukan</h3>
                <p className="font-body text-muted-foreground mb-4">
                  Coba ubah filter atau kata kunci pencarian Anda.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedEra('all');
                    setSelectedCategory('all');
                  }}
                  className="font-ui"
                >
                  Reset Filter
                </Button>
              </CardContent>
            </Card>
          ) : viewMode === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArtifacts.map((artifact) => (
                <Card
                  key={artifact.id}
                  className="group overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={artifact.image}
                      alt={artifact.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className={`${eraColors[artifact.era]} text-white font-ui text-xs`}>
                        {eras.find((e) => e.value === artifact.era)?.label}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="font-heading text-lg line-clamp-1">
                      {artifact.name}
                    </CardTitle>
                    <CardDescription className="font-ui flex items-center gap-1 text-xs">
                      <Badge variant="outline" className="font-ui text-xs">
                        {artifact.category}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-body text-sm text-muted-foreground line-clamp-2 mb-3">
                      {artifact.description}
                    </p>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span className="font-ui">{artifact.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span className="font-ui">{artifact.period}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredArtifacts.map((artifact) => (
                <Card key={artifact.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-4">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={artifact.image}
                        alt={artifact.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Badge className={`${eraColors[artifact.era]} text-white font-ui text-xs mb-2`}>
                            {eras.find((e) => e.value === artifact.era)?.label}
                          </Badge>
                          <CardTitle className="font-heading text-2xl mb-1">
                            {artifact.name}
                          </CardTitle>
                          <Badge variant="outline" className="font-ui text-xs">
                            {artifact.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="font-body text-muted-foreground mt-4 leading-relaxed">
                        {artifact.description}
                      </p>
                      <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="font-ui">{artifact.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span className="font-ui">{artifact.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-ui">{artifact.museum}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Filter className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Ingin Menjelajahi Lebih Lanjut?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Kunjungi museum fisik untuk melihat artefak asli dan mendapatkan pengalaman
            edukatif yang lebih mendalam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="font-ui"
            >
              <Link href="/faq">
                Baca FAQ
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-ui"
              asChild
            >
              <Link href="/pra-masehi">
                Mulai dari Era Pra-Masehi
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
