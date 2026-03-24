import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Landmark, Crown, ScrollText, Building, MapPin, Calendar, Swords, Gem } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Era Hindu-Buddha - Sejarah Jawa',
  description:
    'Dokumentasi lengkap era Hindu-Buddha di Pulau Jawa: Tarumanagara, Kalingga, Mataram Kuno, Kediri, Singhasari, Majapahit, dan Candi-candi megah.',
};

const kingdoms = [
  {
    id: 'tarumanagara',
    name: 'Tarumanagara',
    period: '358 - 732 M',
    location: 'Jawa Barat (sekitar Sungai Ciaruteun)',
    founder: 'Rajadiragrajanya (Purnawarman)',
    description: 'Kerajaan Hindu tertua di Jawa yang disebutkan dalam prasasti. Raja Purnawarman terkenal dengan proyek pengairan dan diplomacy.',
    achievements: [
      'Prasasti Tugu (450 M) - salah satu prasasti tertua di Jawa',
      'Sistem irigasi yang maju',
      'Hubungan diplomatik dengan Dinasti Gupta, India',
    ],
    artifacts: [
      { name: 'Prasasti Tugu', description: 'Prasasti tertua yang menyebutkan Raja Purnawarman' },
      { name: 'Prasasti Ciaruteun', description: 'Menyebutkan jejak kaki Raja Purnawarman' },
    ],
  },
  {
    id: 'kalingga',
    name: 'Kalingga',
    period: '500 - 670 M',
    location: 'Jawa Tengah (sekitar Semarang)',
    founder: 'Sanjaya',
    description: 'Kerajaan bercorak Hindu yang diasumsikan sebagai cikal bakal Mataram Kuno. Berdiri di север jawa.',
    achievements: [
      'Prasasti Sojomerto (600 M)',
      'Membentuk fondasi budaya Jawa-Hindu',
      'Hubungan dagang dengan China',
    ],
    artifacts: [
      { name: 'Prasasti Sojomerto', description: 'Prasasti tertua yang ditulis dalam huruf Pallawa' },
    ],
  },
  {
    id: 'mataram-kuno',
    name: 'Mataram Kuno',
    period: '752 - 1045 M',
    location: 'Jawa Tengah',
    founder: 'Sanjaya (Dinasti Sanjaya) / Syailendra (Dinasti Syailendra)',
    description: 'Kerajaan paling berpengaruh di Jawa Tengah dengan dua dinasti: Sanjaya (Hindu) dan Syailendra (Buddha). Mencapai puncak dengan pembangunan Candi Borobudur dan Prambanan.',
    achievements: [
      'Candi Borobudur - monumen Buddha terbesar di dunia',
      'Candi Prambanan - kompleks candi Hindu terbesar di Jawa',
      'Prasasti Kelurak (782 M)',
      'Prasasti Ratu Boko',
    ],
    artifacts: [
      { name: 'Borobudur', description: 'UNESCO World Heritage Site, dibangun abad ke-8' },
      { name: 'Prambanan', description: 'Kompleks candi Hindu dengan arsitektur megah' },
    ],
  },
  {
    id: 'kediri',
    name: 'Kediri / Kadiri',
    period: '1042 - 1222 M',
    location: 'Jawa Timur',
    founder: 'Mpu Sindok (setelah memindahkan pusat dari Mataram Kuno)',
    description: 'Kerajaan yang fokus pada sastra dan budaya. Dikenal dengan karya sastra Kakawin dan perdagangan internasional.',
    achievements: [
      'Kakawin Bhomarekdhwaja',
      'Kakawin Sutasoma (Mpu Tantular)',
      'Hubungan dagang dengan India, China, Arab',
    ],
    artifacts: [
      { name: 'Kakawin Sutasoma', description: 'Karya sastra yang mencerminkan toleransi Hindu-Buddha' },
    ],
  },
  {
    id: 'singhasari',
    name: 'Singhasari',
    period: '1222 - 1292 M',
    location: 'Jawa Timur (Trowulan)',
    founder: 'Ken Arok',
    description: 'Kerajaan yang menggantikan Kediri dan meletakkan dasar kejayaan Majapahit. Ken Arok terkenal dengan founding myth-nya.',
    achievements: [
      'Ken Arok membunuh Tunggul Ametung untuk merebut kekuasaan',
      'Mahapatih Gajah Mada masuk dalam pemerintahan',
      'Menaklukkan Melayu (Sumatera)',
    ],
    artifacts: [
      { name: 'Candi Kidal', description: 'Makam Raja Anusapati' },
      { name: 'Candi Jawi', description: 'Makam Raja Wisnuwardhana' },
    ],
  },
  {
    id: 'majapahit',
    name: 'Majapahit',
    period: '1293 - 1500 M',
    location: 'Jawa Timur (Trowulan)',
    founder: 'Raden Wijaya (Kertanegara)',
    description: 'Kerajaan terbesar dalam sejarah Jawa dan salah satu kerajaan terbesar di Asia Tenggara. Mencapai puncak kejayaan di bawah Hayam Wuruk dan Mahapatih Gajah Mada.',
    achievements: [
      'Sumpah Palapa - Gajah Mada bersumpah tak akan mencicipi palapa until seluruh Nusantara takluk',
      'Nagarakretagama (Mpu Prapanca) - deskripsi rinci tentang Majapahit',
      'Sutasoma (Mpu Tantular) - konsep toleransi religious',
      'Wilayah kekuasaan meliputi seluruh Jawa, Sumatera, Kalimantan, Sulawesi, Papua',
    ],
    artifacts: [
      { name: 'Candi Tikus', description: 'Kompleks pemandian kerajaan' },
      { name: 'Trowulan', description: 'Situs kota kuno Majapahit' },
      { name: 'Benteng differentiation', description: 'Temuan arkeologis yang menunjukkan perencanaan kota' },
    ],
  },
];

export default function HinduBuddhaPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Era Hindu-Buddha di Pulau Jawa',
          description:
            'Dokumentasi lengkap era Hindu-Buddha: Tarumanagara, Kalingga, Mataram Kuno, Kediri, Singhasari, dan Majapahit.',
          author: { '@type': 'Organization', name: 'Sejarah Jawa Project' },
          publisher: { '@type': 'Organization', name: 'Sejarah Jawa' },
          datePublished: '2024-01-15',
          about: {
            '@type': 'Event',
            name: 'Era Hindu-Buddha',
            startDate: '358',
            endDate: '1500',
            location: { '@type': 'Place', name: 'Pulau Jawa' },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&q=80"
          alt="Candi Borobudur di sunrise"
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
            <Badge className="bg-orange-600 text-white font-ui mb-4">
              Era Hindu-Buddha
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Keagungan Peradaban Hindu-Buddha
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Dari Tarumanagara hingga Majapahit - jelajahi kejayaan kerajaan-kerajaan
              yang membentuk identitas budaya Jawa.
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
            <span className="text-foreground">Era Hindu-Buddha</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Era Keemasan Peradaban Jawa
          </h2>
          <div className="prose prose-lg max-w-none font-body text-muted-foreground">
            <p className="leading-relaxed">
              Era Hindu-Buddha di Pulau Jawa berlangsung selama lebih dari 1.100 tahun,
              dimulai dari masuknya pengaruh budaya India pada abad ke-4 Masehi hingga
              runtuhnya Kerajaan Majapahit pada abad ke-15.
            </p>
            <p className="leading-relaxed mt-4">
              Periode ini menyaksikan pembangunan candi-candi megah seperti Borobudur dan
              Prambanan, perkembangan sastra klasik dalam bentuk Kakawin, serta terbentuknya
              sistem pemerintahan dan budaya yang menjadi fondasi civilization Jawa untuk
              centuries ahead.
            </p>
          </div>
        </div>
      </section>

      {/* Kingdoms Grid */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Kerajaan-Kerajaan Hindu-Buddha
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah kerajaan-kerajaan utama yang berkuasa di Pulau Jawa selama
              era Hindu-Buddha.
            </p>
          </div>

          <Tabs defaultValue="majapahit" className="w-full">
            <TabsList className="w-full flex flex-wrap h-auto justify-center gap-2 mb-8">
              {kingdoms.map((k) => (
                <TabsTrigger key={k.id} value={k.id} className="font-ui">
                  {k.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {kingdoms.map((kingdom) => (
              <TabsContent key={kingdom.id} value={kingdom.id}>
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    {/* Info Section */}
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                          <Landmark className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="font-heading text-2xl font-bold">{kingdom.name}</h3>
                          <Badge variant="secondary" className="font-ui text-xs mt-1">
                            {kingdom.period}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-ui text-sm text-muted-foreground">Lokasi</span>
                            <p className="font-body">{kingdom.location}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Crown className="w-5 h-5 text-muted-foreground mt-0.5" />
                          <div>
                            <span className="font-ui text-sm text-muted-foreground">Pendiri</span>
                            <p className="font-body">{kingdom.founder}</p>
                          </div>
                        </div>
                      </div>

                      <p className="font-body text-muted-foreground leading-relaxed">
                        {kingdom.description}
                      </p>

                      <Separator className="my-6" />

                      <h4 className="font-heading font-semibold mb-3 flex items-center gap-2">
                        <Gem className="w-5 h-5 text-primary" />
                        Pencapaian Utama
                      </h4>
                      <ul className="space-y-2">
                        {kingdom.achievements.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 font-body text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2" />
                            <span className="text-muted-foreground">{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Artifacts Section */}
                    <div className="bg-orange-500/5 p-8 border-t lg:border-t-0 lg:border-l">
                      <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                        <ScrollText className="w-5 h-5 text-primary" />
                        Artefak & Prasasti
                      </h4>
                      <div className="space-y-4">
                        {kingdom.artifacts.map((artifact, i) => (
                          <Card key={i} className="bg-card">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{artifact.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="font-body text-sm text-muted-foreground">
                                {artifact.description}
                              </p>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Garis Waktu Kerajaan
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-600 via-orange-600 to-orange-800" />

            <div className="space-y-8">
              {kingdoms.map((kingdom, index) => (
                <div
                  key={kingdom.id}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                    <Card className="inline-block hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 justify-start md:justify-end">
                          <Badge variant="outline" className="font-ui text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {kingdom.period}
                          </Badge>
                        </div>
                        <CardTitle className="font-heading text-xl mt-2">
                          {kingdom.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="font-body text-sm text-muted-foreground">
                          {kingdom.description.slice(0, 120)}...
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-orange-500 border-4 border-background z-10" />

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Gem className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Lanjut ke Era Islam
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Era Islam membawa transformasi besar dalam budaya, pemerintahan,
            dan spirituality masyarakat Jawa.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="font-ui"
          >
            <Link href="/islam">
              Jelajahi Era Islam
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
