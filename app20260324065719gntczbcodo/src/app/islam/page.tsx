import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Building2, Crown, Star, ScrollText, MapPin, Calendar, BookOpen, Sword } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Era Islam - Sejarah Jawa',
  description:
    'Dokumentasi lengkap era Islam di Pulau Jawa: Kesultanan Demak, Pajang, Mataram Islam, Banten, Surabaya, dan Kesultanan Yogyakarta.',
};

const sultanates = [
  {
    id: 'demak',
    name: 'Kesultanan Demak',
    period: '1478 - 1518 M',
    location: 'Jawa Tengah (Demak)',
    founder: 'Raden Patah / Sunan Gunung Jati',
    description: 'Kesultanan Islam pertama di Jawa yang menggantikan pengaruh Majapahit. Berperan besar dalam penyebaran Islam di Jawa.',
    achievements: [
      'Mendirikan Masjid Agung Demak (Jawa\'s first Islamic mosque)',
      'Mengalahkan Tar-Tar dalam Pertempuran Bubat',
      'Menyebarkan Islam melalui perdagangan dan pernikahan',
      'Pengaruh hingga ke Kalimantan dan Sulawesi',
    ],
    importantFigures: [
      { name: 'Sunan Gunung Jati', role: 'Pendiri, spreader of Islam' },
      { name: 'Sunan Kalijaga', role: 'Dakwah dengan budaya (wayang, gamelan)' },
      { name: 'Sunan Giri', role: 'Pengislaman主动 wilayah Giri' },
    ],
  },
  {
    id: 'pajang',
    name: 'Kesultanan Pajang',
    period: '1568 - 1586 M',
    location: 'Jawa Tengah (Surakarta)',
    founder: 'Pangiri / Javanese noble',
    description: 'Kerajaan transisi setelah runtuhnya Demak, yang kemudian digantikan oleh Mataram Islam.',
    achievements: [
      'Memindahkan pusat kekuasaan ke Surakarta',
      'Melanjutkan tradisi governance Jawa',
      'Fondasi bagi Kemerdekaan Mataram Islam',
    ],
    importantFigures: [
      { name: 'Pangiri', role: 'Raja pertama Pajang' },
      { name: 'Arya Pengareng', role: 'Patih who later founded Mataram' },
    ],
  },
  {
    id: 'mataram-islam',
    name: 'Kesultanan Mataram Islam',
    period: '1586 - 1755 M',
    location: 'Jawa Tengah (Yogyakarta/Surakarta)',
    founder: 'Sutawijaya (Panembahan Senopati)',
    description: 'Kesultanan paling powerful di Jawa yang mencapai puncak kejayaan di bawah Sultan Agung Hanyokrokusumo. Dikenal dengan reforms agama, militer, dan kultur.',
    achievements: [
      'Giyanti: Perang Saudara Jawa (1746-1755) memecah Mataram menjadi Yogyakarta and Surakarta',
      'Sultan Agung: Calendar reform (Javanese Calendar)', 'Perang Dipa (1621-1622) against VOC',
      'Pencapaian puncak dalam arsitektur: Kraton Yogyakarta',
      'K不爽快的: Pembangunan Masjid Agung Yogyakarta',
    ],
    importantFigures: [
      { name: 'Panembahan Senopati', role: 'Pendiri, first king' },
      { name: 'Sultan Agung Hanyokrokusumo', role: 'Greatest king, military and religious reformer' },
      { name: 'Amangkurat I', role: 'Father of current dynasty' },
    ],
  },
  {
    id: 'banten',
    name: 'Kesultanan Banten',
    period: '1526 - 1813 M',
    location: 'Jawa Barat (Banten)',
    founder: 'Sunan Gunung Jati',
    description: 'Kesultanan maritime yang became pusat perdagangan internasional dan spreader of Islam ke Sumatera.',
    achievements: [
      'Pelabuhan Banten: Salah satu yang terbesar di Asia Tenggara',
      'Perdagangan rempah-rempah dengan VOC, Inggris, Portugis',
      'Masjid Agung Banten yang megah',
      'Menaklukkan Lampung (pepper production)',
    ],
    importantFigures: [
      { name: 'Sunan Gunung Jati', role: 'Pendiri' },
      { name: 'Sultan Ageng Tirtayasa', role: 'Peak of Banten prosperity' },
    ],
  },
  {
    id: 'mataram-yogyakarta',
    name: 'Kesultanan Yogyakarta',
    period: '1755 - Sekarang',
    location: 'Yogyakarta',
    founder: 'Hamengkubuwono I',
    description: 'Salah satu dari dua kesultanan yang masih exists today, dikenal dengan kultur, kunst, and pendidikan tinggi.',
    achievements: [
      'Kraton Yogyakarta - pusat kultur Jawa',
      'Universitas Gadjah Mada - institution pendidikan terkemuka',
      'Peacock-style governance combining Javanese and Islamic traditions',
      'Batik - UNESCO Intangible Cultural Heritage',
    ],
    importantFigures: [
      { name: 'Hamengkubuwono I', role: 'Pendiri' },
      { name: 'Hamengkubuwono IX', role: 'Modernisasi dan kemerdekaan Indonesia' },
      { name: 'Sri Sultan Hamengkubuwono X', role: 'Current sultan, preservation of Javanese culture' },
    ],
  },
  {
    id: 'mataram-surakarta',
    name: 'Kesultanan Surakarta',
    period: '1755 - Sekarang',
    location: 'Surakarta (Solo)',
    founder: 'Pakubuwono X',
    description: 'Bersama Yogyakarta, menjadi salah satu pusat last bastion of traditional Javanese court culture.',
    achievements: [
      'Kraton Surakarta (Susuhunanate) - pusat culture',
      'Wayang Kulit - UNESCO Intangible Cultural Heritage',
      'Gamelan - traditional music ensemble',
      'K不爽快的 tradition of Javanese arts',
    ],
    importantFigures: [
      { name: 'Pakubuwono X', role: 'Pendiri' },
      { name: 'Pakubuwono XIII', role: 'Current Susuhunan' },
    ],
  },
];

export default function IslamPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Era Islam di Pulau Jawa',
          description: 'Dokumentasi lengkap era Islam: Kesultanan Demak, Pajang, Mataram Islam, Banten, dan Kesultanan Yogyakarta.',
          author: { '@type': 'Organization', name: 'Sejarah Jawa Project' },
          publisher: { '@type': 'Organization', name: 'Sejarah Jawa' },
          datePublished: '2024-01-15',
          about: {
            '@type': 'Event',
            name: 'Era Islam',
            startDate: '1478',
            endDate: 'Present',
            location: { '@type': 'Place', name: 'Pulau Jawa' },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1554279238-0d2c1c6a2b6a?w=1600&q=80"
          alt="Masjid Agung Yogyakarta"
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
            <Badge className="bg-emerald-600 text-white font-ui mb-4">
              Era Islam
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Transformasi Islam dalam Budaya Jawa
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Dari Kesultanan Demak hingga Yogyakarta modern - jelajahi bagaimana Islam
              membentuk wajah baru masyarakat Jawa.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 font-ui text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Era Islam</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Era Baru dalam Sejarah Jawa
          </h2>
          <div className="prose prose-lg max-w-none font-body text-muted-foreground">
            <p className="leading-relaxed">
              Kedatangan Islam ke Pulau Jawa membawa perubahan fundamental dalam berbagai
              aspek kehidupan: governance, religion, kunst, dan social structure. Berbeda
              dengan penyebaran agama sebelumnya, Islam di Jawa tidak menggantikan budaya
              lokal namun justru berintegrasi dan membentuk cultural synthesis yang unique.
            </p>
            <p className="leading-relaxed mt-4">
              Banyak customs dan traditions Jawa yang bertahan hingga today - dari Batik
              dan Wayang Kulit (yang mendapat patronase dari kesultanan Islam) hingga
              sistem governance yang menggabungkan element Islam dengan adat Jawa.
            </p>
          </div>
        </div>
      </section>

      {/* Sultanates Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Kesultanan-Kesultanan Islam
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah kesultanan-kesultanan Islam yang berpengaruh dalam sejarah
              Jawa dari abad ke-15 hingga modern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sultanates.map((sultanate) => (
              <Card key={sultanate.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-emerald-500/10 p-6 border-b">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold">{sultanate.name}</h3>
                      <Badge variant="secondary" className="font-ui text-xs mt-1">
                        {sultanate.period}
                      </Badge>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                      <span className="font-ui text-xs text-muted-foreground">Lokasi</span>
                      <p className="font-body text-sm">{sultanate.location}</p>
                    </div>
                  </div>

                  <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                    {sultanate.description}
                  </p>

                  <h4 className="font-heading font-semibold mb-3 flex items-center gap-2 text-sm">
                    <Crown className="w-4 h-4 text-emerald-600" />
                    Pencapaian Utama
                  </h4>
                  <ul className="space-y-1 mb-4">
                    {sultanate.achievements.slice(0, 3).map((a, i) => (
                      <li key={i} className="flex items-start gap-2 font-body text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{a}</span>
                      </li>
                    ))}
                  </ul>

                  <Separator className="my-4" />

                  <h4 className="font-heading font-semibold mb-3 flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 text-gold" />
                    Tokoh Penting
                  </h4>
                  <div className="space-y-2">
                    {sultanate.importantFigures.map((figure, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-body text-sm">
                          <strong>{figure.name}</strong> - {figure.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Warisan Budaya Era Islam
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 mx-auto flex items-center justify-center mb-4">
                  <BookOpen className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="font-heading">Batik</CardTitle>
                <CardDescription>UNESCO Intangible Cultural Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-body text-sm text-muted-foreground">
                  Seni membatik yang berkembang di lingkungan kraton dan eventually menjadi
                  symbols of Javanese identity yang recognized secara internasional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 mx-auto flex items-center justify-center mb-4">
                  <ScrollText className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="font-heading">Wayang Kulit</CardTitle>
                <CardDescription>UNESCO Intangible Cultural Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-body text-sm text-muted-foreground">
                  Pertunjukan wayang yang mengintegrasikan values Islam dengan cerita
                  Mahabharata dan Ramayana, menjadi medium dakwah yang efektif.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 mx-auto flex items-center justify-center mb-4">
                  <Sword className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="font-heading">Keris</CardTitle>
                <CardDescription>UNESCO Intangible Cultural Heritage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-body text-sm text-muted-foreground">
                  Senjata tradisional yang memiliki nilai spiritual dan philosophical,
                  menjadi symbol of Javanese knighthood and identity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Star className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Jelajahi Koleksi Artefak
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Lihat koleksi artefak dari berbagai era, termasuk benda-benda bersejarah
            dari masa kesultanan Islam.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="font-ui"
          >
            <Link href="/artefak">
              Lihat Artefak
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
