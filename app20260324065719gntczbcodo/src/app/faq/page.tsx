import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowLeft, HelpCircle, BookOpen, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'FAQ - Sejarah Jawa',
  description:
    'Pertanyaan yang sering ditanyakan tentang sejarah dan peradaban Pulau Jawa, dari Homo Erectus hingga kesultanan Islam.',
};

const faqData = [
  {
    category: 'Umum',
    questions: [
      {
        q: 'Kapan Pulau Jawa terbentuk?',
        a: 'Pulau Jawa mulai terbentuk sekitar 1.5 juta tahun lalu melalui aktivitas vulkanik dan tektonik. Pembentukan Pulau Jawa tidak terjadi secara instan, melainkan melalui proses geologis yang panjang selama jutaan tahun. Gunung-gunung berapi seperti Gunung Lawu, Merapi, Merbabu, dan others terbentuk melalui aktivitas tektonik lempeng Indo-Australia yang menunjam di bawah lempeng Eurasia. Proses vulkanisme ini juga menghasilkan tanah yang subur yang mendukung kehidupan manusia purba.',
      },
      {
        q: 'Apa kerajaan tertua di Jawa?',
        a: 'Tarumanagara (abad ke-5) dianggap sebagai salah satu kerajaan tertua di Jawa yang tercatat dalam prasasti. Prasasti Tugu (450 M) adalah salah satu prasasti tertua yang menyebutkan Raja Purnawarman. Namun, beberapa historians berpendapat bahwa Kalingga (abad ke-5 hingga ke-7) mungkin lebih tua dari Tarumanagara berdasarkan Prasasti Sojomerto.',
      },
      {
        q: 'Berapa lama sejarah Jawa tercatat?',
        a: 'Sejarah tercatat di Jawa dimulai sekitar abad ke-5 Masehi dengan penemuan prasasti-prasasti tertua. Namun, sejarah prasejarah Pulau Jawa mencakup rentang waktu yang sangat panjang, dimulai dari sekitar 1.5 juta tahun lalu ketika Homo Erectus pertama kali mendiami wilayah ini. Jadi total sejarah Jawa yang terdokumentasi mencakup sekitar 1.5 juta tahun.',
      },
    ],
  },
  {
    category: 'Era Pra-Masehi',
    questions: [
      {
        q: 'Siapa manusia pertama di Jawa?',
        a: 'Homo erectus (Pithecanthropus erectus) adalah manusia pertama yang ditemukan di Jawa. Penemuan fosil oleh Eugene Dubois pada 1891 di Trinil, Ngawi, menjadi salah satu penemuan paleoanthropologi paling penting. Fosil Pithecanthropus Erectus (Pi-I) menjadi missing link yang dicari para ilmuwan. Penemuan di Sangiran oleh Gustav Heinrich Ralph von Koenigswald pada 1930-an menambah koleksi fosil Homo erectus yang sangat berharga.',
      },
      {
        q: 'Apa itu Manusia Wajak?',
        a: 'Manusia Wajak (Homo sapiens wajakensis) adalah fosil Homo sapiens tertua yang ditemukan di Jawa, diperkirakan berusia sekitar 10.000 - 6.000 tahun SM. Ditemukan di Wajak, Tulungagung, Jawa Timur oleh Van Stein Callenfels pada 1889. Manusia Wajak menunjukkan características yang berbeda dari Homo erectus, dengan tulang-tulang yang lebih ramping dan kapasitas tengkorak yang lebih besar.',
      },
      {
        q: 'Apa itu Kebudayaan Pacitan?',
        a: 'Kebudayaan Pacitan adalah salah satu kebudayaan prasejarah tertua di Jawa yang berkembang sekitar 10.000 - 6.000 tahun SM. Kebudayaan ini dikenal dengan alat batu flakes (pahat satu sisi) yang digunakan untuk berbagai keperluan. artifacts Pacitan banyak ditemukan di gua-gua dan situs terbuka di Jawa Timur. Kebiasaan hidup masyarakat Pacitan adalah hunter-gatherers yang kemudian bertransisi ke bercocok tanam.',
      },
    ],
  },
  {
    category: 'Era Hindu-Buddha',
    questions: [
      {
        q: 'Apa kerajaan terbesar di Jawa?',
        a: 'Kerajaan Majapahit (1293-1500 M) adalah kerajaan terbesar dalam sejarah Jawa dan salah satu kerajaan terbesar di Asia Tenggara. Pencapaian Majapahit termasuk: wilayah kekuasaan yang mencakup hampir seluruh Nusantara (Jawa, Sumatera, Kalimantan, Sulawesi, Papua), prestasi budaya yang tinggi (sastra, arsitektur, seni), dan sistem pemerintahan yang centralized. Majapahit mencapai puncak kejayaan di bawah pemerintahan Hayam Wuruk (1350-1389) dengan Mahapatih Gajah Mada.',
      },
      {
        q: 'Kapan Candi Borobudur dibangun?',
        a: 'Candi Borobudur dibangun pada abad ke-8 Masehi, sekitar 750-842 M, pada masa pemerintahan Raja Samaratungga dari Dinasti Syailendra. Pembangunan melibatkan ribuan pekerja dan membutuhkan waktu puluhan tahun. Borobudur adalah candi Buddha terbesar di dunia dengan luas sekitar 2.500 meter persegi dan terdiri dari 2 juta balok batu andesit. Candi ini baru ditemukan kembali pada tahun 1814 oleh Sir Thomas Stamford Raffles.',
      },
      {
        q: 'Apa itu Sumpah Palapa?',
        a: 'Sumpah Palapa adalah janji yang diucapkan oleh Mahapatih Gajah Mada pada tahun 1334. Dalam sumpahnya, Gajah Mada bersumpah tidak akan mencicipi palapa (rempah-rempah) until seluruh Nusantara berada di bawah kekuasaan Majapahit. Palapa di sini bermakna makanan atau kesenangan pada umumnya. Sumpah ini menjadi simbol persatuan Nusantara dan motivasi bagi perluasan wilayah Majapahit.',
      },
      {
        q: 'Apa perbedaan Tarumanagara dan Majapahit?',
        a: 'Tarumanagara (358-732 M) adalah kerajaan Hindu tertua di Jawa Barat dengan pengaruh lokal. Majapahit (1293-1500 M) adalah kerajaan Hindu-Buddha terbesar di Jawa Timur dengan pengaruh regional hingga ke seluruh Nusantara. Perbedaan utama: lokasi (Jawa Barat vs Jawa Timur), skala (lokal vs regional/Nusantara), durasi (sekitar 370 tahun vs sekitar 200 tahun), dan pengaruh (iritasi lokal vs dominasi maritim).',
      },
    ],
  },
  {
    category: 'Era Islam',
    questions: [
      {
        q: 'Kapan Islam masuk ke Jawa?',
        a: 'Islam mulai masuk ke Jawa sekitar abad ke-13 melalui jalur perdagangan. Pedagang Muslim dari Gujarat, Persia, dan Arab tiba di pesisir utara Jawa dan mendirikan permukiman. Kesultanan Demak (1478-1518) dianggap sebagai kerajaan Islam pertama di Jawa, menggantikan pengaruh Majapahit. Para Wali Songo (Sembilan Wali) memainkan peran penting dalam penyebaran Islam di Jawa melalui dakwah dan adaptasi budaya.',
      },
      {
        q: 'Siapa itu Wali Songo?',
        a: 'Wali Songo (Sembilan Wali) adalah sembilan ulama yang berperan dalam penyebaran Islam di Pulau Jawa. Mereka adalah: Sunan Giri (Raden Paku), Sunan Ampel (Raden Rahmat), Sunan Bonang (Raden Makdum Ibrahim), Sunan Drajat (Raden Qasim), Sunan Kudus (Jafar Shadiq), Sunan Kalijaga (Raden Said), Sunan Muria (Raden Umar Said), Sunan Gunung Jati (Syarif Hidayatullah), dan Sunan Gedeh (Syarif Abdul Malik). Mereka menggunakan pendekatan yang berbeda, ada yang通過 budaya (wayang, gamelan) dan ada yang通過 kekuasaan politik.',
      },
      {
        q: 'Apa itu Kesultanan Mataram Islam?',
        a: 'Kesultanan Mataram Islam (1586-1755) adalah kesultanan yang paling berpengaruh di Jawa pada masanya. Didirikan oleh Sutawijaya (Panembahan Senopati) setelah menggulingkan Kesultanan Pajang. Mataram mencapai puncak kejayaan di bawah Sultan Agung Hanyokrokusumo (1613-1645) yang terkenal dengan reformasi kalender, militer, dan agama. Namun, perang saudara (Perang Giyanti) pada 1746-1755 memecah Mataram menjadi dua: Kesultanan Yogyakarta dan Kesultanan Surakarta.',
      },
    ],
  },
  {
    category: 'Artefak & Situs',
    questions: [
      {
        q: 'Di mana fosil Homo Erectus ditemukan?',
        a: 'Fosil Homo Erectus di Jawa ditemukan di beberapa situs utama: Sangiran (Sragen, Jawa Tengah) - situs paling penting dengan koleksi fosil Homo erectus terluas, Trinil (Ngawi, Jawa Timur) - tempat penemuan pertama oleh Eugene Dubois pada 1891, Ngandong (Blitar, Jawa Timur) - fosil Homo erectus paling lengkap, dan Perning (Mojokerto, Jawa Timur) - tempat penemuan anak Homo erectus. Situs-situs ini sekarang menjadi bagian dari kawasan geopark nasional.',
      },
      {
        q: 'Apa saja UNESCO World Heritage Sites di Jawa?',
        a: 'UNESCO telah menetapkan beberapa situs di Jawa sebagai World Heritage: Borobudur Temple Compounds (1991) - candi Buddha terbesar di dunia, Prambanan Temple Compounds (1991) - kompleks candi Hindu terbesar di Jawa, Sangiran (2015) - situs paleoanthropologi Homo erectus, dan Jakarta Old Town (2023) - penunjukan tentative list. Situs-situs ini mewakili warisan budaya dan alam yang memiliki significance universal.',
      },
      {
        q: 'Mengapa Candi Borobudur penting?',
        a: 'Candi Borobudur penting karena beberapa alasan: Arsitektur - representasi terbaik arsitektur Buddha di Asia Tenggara dengan 2.672 panel relief dan 504 arca Buddha. Religious - digunakan sebagai tempat ziarah Buddha hingga abandono pada abad ke-14. Sejarah - bukti peak of Buddhist civilization di Jawa. Pendidikan - relief di dindingnya mengajarkan tentang kehidupan Buddha dan nilai-nilai moral. Global - satu dari Seven Wonders of the World dan UNESCO World Heritage Site.',
      },
    ],
  },
];

const referenceLinks = [
  { name: 'Pusat Bahasa - KBBI', url: 'https://kbbi.kemdikbud.go.id' },
  { name: 'Museum Nasional Indonesia', url: 'https://museumnasional.co.id' },
  { name: 'Balai Konservasi Borobudur', url: 'https://bbc.kemdikbud.go.id' },
  { name: 'ARKA - Arkeologi Nasional', url: 'https://arkeologi.kemdikbud.go.id' },
];

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup type="faq" />

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1600&q=80"
          alt="Buku dan Artefak Sejarah"
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
              FAQ
            </Badge>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Temukan jawaban untuk pertanyaan umum tentang sejarah dan peradaban
              Pulau Jawa.
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
            <span className="text-foreground">FAQ</span>
          </nav>
        </div>
      </div>

      {/* FAQ Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          {faqData.map((category) => (
            <div key={category.category} className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.questions.map((item, index) => (
                  <AccordionItem key={index} value={`${category.category}-${index}`}>
                    <AccordionTrigger className="text-left font-heading text-lg hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                      <div className="pt-2 pb-4">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-heading text-2xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-primary" />
            Sumber Referensi
          </h2>
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-lg">Link Referensi Akademik</CardTitle>
              <CardDescription className="font-ui">
                Kunjungi sumber-sumber berikut untuk informasi lebih lanjut
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                {referenceLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-secondary/50 transition-colors group"
                  >
                    <span className="font-ui text-sm group-hover:text-primary">
                      {link.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <HelpCircle className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Masih Ada Pertanyaan?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Jika Anda tidak menemukan jawaban yang Anda cari, jelajahi halaman-halaman
            era sejarah kami untuk informasi lebih detail.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="font-ui"
            >
              <Link href="/pra-masehi">
                Era Pra-Masehi
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-ui"
              asChild
            >
              <Link href="/hindu-buddha">
                Era Hindu-Buddha
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-ui"
              asChild
            >
              <Link href="/islam">
                Era Islam
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
