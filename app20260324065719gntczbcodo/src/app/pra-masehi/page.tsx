import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, Users, Mountain, Bone, FlaskConical, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Era Pra-Masehi - Sejarah Jawa',
  description:
    'Dokumentasi lengkap era Pra-Masehi di Pulau Jawa: Homo Erectus Sangiran, Manusia Wajak, Kebudayaan Pacitan, Ngandong, dan migrasi Austronesia.',
};

const prehistoricContent = {
  introduction: {
    title: 'Era Pra-Masehi di Pulau Jawa',
    content: `Zaman Pra-Masehi di Pulau Jawa mencakup rentang waktu yang sangat panjang, dimulai dari sekitar 1.5 juta tahun lalu hingga abad ke-5 Masehi. Periode ini见证了 manusia purba mendiami wilayah yang sekarang dikenal sebagai Jawa, meninggalkan warisan fosil dan artefak yang berharga.

Berbagai penemuan arkeologis di situs-situs seperti Sangiran, Wajak, Pacitan, dan Ngandong telah memberikan pemahaman yang lebih baik tentang evolusi manusia dan kehidupan prasejarah di kepulauan Nusantara.`,
  },
  periods: [
    {
      id: 'paleolitikum',
      name: 'Paleolitikum',
      year: '1.5 juta - 100.000 tahun SM',
      icon: Mountain,
      color: 'amber',
      description:
        'Zaman Batu Tua yang ditandai dengan penemuan Homo Erectus (Pithecanthropus) di Sangiran.',
      details: [
        'Fosil Pithecanthropus Erectus ditemukan oleh Eugene Dubois pada 1891',
        'Alat batu khas: kapak tangan (handaxe) dan flake tools',
        'Hidrpony agriculture belum dikenal, manusia hidup dari berburu dan meramu',
        'Tinggal di gua-gua dan open air sites di sepanjang aliran sungai',
      ],
      artifacts: [
        {
          name: 'Fosil Pithecanthropus Erectus (Pi-I)',
          location: 'Sangiran, Sragen, Jawa Tengah',
          period: '1 - 0.5 juta tahun lalu',
          image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80',
          description: 'Fosil tengkorak Homo erectus yang menjadi salah satu penemuan paling penting dalam sejarah paleoanthropologi.',
        },
      ],
    },
    {
      id: 'mesolitikum',
      name: 'Mesolitikum',
      year: '100.000 - 10.000 tahun SM',
      icon: Bone,
      color: 'orange',
      description:
        'Zaman Batu Tengah yang menyaksikan transisi dari gaya hidup pemburu-meramu.',
      details: [
        'Munculnya Homo sapiens (Manusia Modern) di Jawa',
        'Perkembangan teknologi alat batu yang lebih halus',
        'Kapasitas otak meningkat signifikan',
        'Kemunculan praktik bercocok tanam sederhana',
      ],
      artifacts: [
        {
          name: 'Fosil Manusia Wajak',
          location: 'Wajak, Tulungagung, Jawa Timur',
          period: '10.000 - 6.000 tahun SM',
          image: 'https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=800&q=80',
          description: 'Fosil Homo sapiens paling awal di Jawa yang menunjukkan características mongoloid.',
        },
      ],
    },
    {
      id: 'neolitikum',
      name: 'Neolitikum',
      year: '10.000 - 1.500 SM',
      icon: FlaskConical,
      color: 'emerald',
      description:
        'Zaman Batu Baru yang ditandai dengan revolusi agriculture dan perubahan sosial.',
      details: [
        'Perkembangan agriculture dan domestikasi tanaman',
        'Kemunculan tembikar dan gerabah',
        'Pemukiman tetap (settlements) mulai terbentuk',
        'Perdagangan antar wilayah meningkat',
      ],
      artifacts: [
        {
          name: 'Alat Batu Tribal Polished',
          location: 'Pacitan, Jawa Timur',
          period: '3.000 - 1.500 SM',
          image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800&q=80',
          description: 'Contoh artifacts batu yang diasah dan dipoles dengan teknik neolitik.',
        },
      ],
    },
    {
      id: 'megalitikum',
      name: 'Meg Litikum',
      year: '1.500 SM - 100 M',
      icon: Mountain,
      color: 'purple',
      description:
        'Zaman Batu Besar yang ditandai dengan pembangunan monumen batu megalitik.',
      details: [
        'Pembangunan dolmen, menhir, dan stone circles',
        'Kultus ancestor (pemujaan leluhur) berkembang',
        'Perdagangan maritim dengan Asia Tenggara',
        'Munculnya hierarki sosial yang kompleks',
      ],
      artifacts: [
        {
          name: 'Dolmen Pacitan',
          location: 'Pacitan, Jawa Timur',
          period: '1.000 - 500 SM',
          image: 'https://images.unsplash.com/photo-1569437061241-a848be43cc82?w=800&q=80',
          description: 'Struktur megalitik yang digunakan sebagai tempat pemujaan dan makam.',
        },
      ],
    },
  ],
  importantSites: [
    {
      name: 'Sangiran',
      location: 'Sragen, Jawa Tengah',
      significance: 'Situs paleoanthropologi paling penting di Asia Tenggara',
      discoveries: ['Homo erectus', 'Alat batu paleolitik', 'Fosil fauna'],
    },
    {
      name: 'Wajak',
      location: 'Tulungagung, Jawa Timur',
      significance: 'Tempat penemuan fosil Homo sapiens tertua di Jawa',
      discoveries: ['Homo sapiens wajakensis', 'Alat batu mesolitik'],
    },
    {
      name: 'Pacitan',
      location: 'Jawa Timur',
      significance: 'Komers Budaya Pacitan, salah satu yang tertua di Jawa',
      discoveries: ['Alat batu flakes', 'Dolmen megalitik', 'Gerabah neolitik'],
    },
    {
      name: 'Ngandong',
      location: 'Blitar, Jawa Timur',
      significance: 'Situs Homo erectus dengan fosil paling lengkap',
      discoveries: ['Homo erectus ngandongensis', 'Berbagai artefak paleolitik'],
    },
  ],
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/30' },
  orange: { bg: 'bg-orange-500/10', text: 'text-orange-600', border: 'border-orange-500/30' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', border: 'border-emerald-500/30' },
  purple: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/30' },
};

export default function PraMasehiPage() {
  return (
    <>
      <SchemaMarkup
        type="article"
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'Era Pra-Masehi di Pulau Jawa',
          description:
            'Dokumentasi lengkap era Pra-Masehi di Pulau Jawa: Homo Erectus Sangiran, Manusia Wajak, Kebudayaan Pacitan, Ngandong, dan migrasi Austronesia.',
          author: {
            '@type': 'Organization',
            name: 'Sejarah Jawa Project',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Sejarah Jawa',
          },
          datePublished: '2024-01-15',
          dateModified: new Date().toISOString().split('T')[0],
          about: {
            '@type': 'Event',
            name: 'Era Pra-Masehi',
            startDate: '-1500000',
            endDate: '500',
            location: {
              '@type': 'Place',
              name: 'Pulau Jawa',
            },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580130732478-4e339fb33746?w=1600&q=80"
          alt="Landscape Pegunungan Karst Jawa - Habitat Manusia Purba"
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
            <Badge className="bg-amber-600 text-white font-ui mb-4">
              Era Pra-Masehi
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              1.5 Juta Tahun Peradaban Purba
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Jelajahi jejak manusia purba di Pulau Jawa, dari Homo Erectus Sangiran
              hingga manusia modern pertama.
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
            <span className="text-foreground">Era Pra-Masehi</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold mb-6">
            {prehistoricContent.introduction.title}
          </h2>
          <div className="prose prose-lg max-w-none font-body text-muted-foreground">
            <p className="whitespace-pre-line leading-relaxed">
              {prehistoricContent.introduction.content}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Periods */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Periode Zaman Pra-Masehi
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah periode-periode penting dalam era Pra-Masehi di Pulau Jawa.
            </p>
          </div>

          <div className="space-y-8">
            {prehistoricContent.periods.map((period, index) => {
              const colors = colorMap[period.color];
              return (
                <Card key={period.id} className="overflow-hidden">
                  <div className="grid md:grid-cols-3">
                    {/* Period Header */}
                    <div className={`${colors.bg} p-8 border-r`}>
                      <div className="sticky top-24">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colors.bg} border-2 ${colors.border} mb-4`}>
                          <period.icon className={`w-8 h-8 ${colors.text}`} />
                        </div>
                        <Badge variant="outline" className={`${colors.border} ${colors.text} font-ui`}>
                          {period.year}
                        </Badge>
                        <h3 className="font-heading text-2xl font-bold mt-4">
                          {period.name}
                        </h3>
                        <p className="font-body text-muted-foreground mt-2 text-sm">
                          {period.description}
                        </p>
                      </div>
                    </div>

                    {/* Period Content */}
                    <div className="md:col-span-2 p-8">
                      <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                          {index + 1}
                        </span>
                        Karakteristik Utama
                      </h4>
                      <ul className="space-y-3">
                        {period.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-3 font-body">
                            <span className={`w-2 h-2 rounded-full ${colors.text} mt-2 flex-shrink-0`} />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <Separator className="my-8" />

                      {/* Artifacts */}
                      <h4 className="font-heading font-semibold mb-4">Artefak Penting</h4>
                      <div className="space-y-4">
                        {period.artifacts.map((artifact, i) => (
                          <Card key={i} className="overflow-hidden">
                            <div className="grid md:grid-cols-3">
                              <div className="relative h-48 md:h-full">
                                <Image
                                  src={artifact.image}
                                  alt={artifact.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div className="md:col-span-2 p-4">
                                <h5 className="font-heading font-semibold">{artifact.name}</h5>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  <Badge variant="secondary" className="font-ui text-xs">
                                    <MapPin className="w-3 h-3 mr-1" />
                                    {artifact.location}
                                  </Badge>
                                  <Badge variant="secondary" className="font-ui text-xs">
                                    <Calendar className="w-3 h-3 mr-1" />
                                    {artifact.period}
                                  </Badge>
                                </div>
                                <p className="font-body text-sm text-muted-foreground mt-2">
                                  {artifact.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Sites */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center">
            Situs Arkeologi Penting
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {prehistoricContent.importantSites.map((site) => (
              <Card key={site.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center">
                      <Mountain className="w-5 h-5 text-amber-600" />
                    </div>
                    {site.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 font-ui">
                    <MapPin className="w-4 h-4" />
                    {site.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-sm mb-4">
                    {site.significance}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {site.discoveries.map((d) => (
                      <Badge key={d} variant="outline" className="font-ui text-xs">
                        {d}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Users className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Lanjut ke Era Hindu-Buddha
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Setelah era Pra-Masehi, Pulau Jawa memasuki era baru dengan datangnya pengaruh
            Hindu-Buddha dari India.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="font-ui"
          >
            <Link href="/hindu-buddha">
              Jelajahi Era Hindu-Buddha
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
