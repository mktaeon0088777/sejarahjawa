'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ArrowDown,
  Landmark,
  Sparkles,
  BookOpen,
  Globe,
  MapPin,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SchemaMarkup from '@/components/SchemaMarkup';

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1600&q=80',
    alt: 'Candi Borobudur di sunrise',
    credit: 'Borobudur Temple at Sunrise',
  },
  {
    src: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=1600&q=80',
    alt: 'Arca Buddha kuno',
    credit: 'Ancient Buddhist Statue',
  },
  {
    src: 'https://images.unsplash.com/photo-1558431382-f12e866a069d?w=1600&q=80',
    alt: 'Prasasti kuno',
    credit: 'Ancient Inscriptions',
  },
];

const timelineData = [
  {
    id: 'pra-sejarah',
    era: 'Pra-Sejarah',
    year: '1.5 juta - 100 SM',
    title: 'Zaman Paleolitikum hingga Néolithikum',
    description:
      'Homo Erectus Sangiran, Manusia Wajak, Kebudayaan Pacitan, dan Ngandong mendiami Pulau Jawa.',
    color: 'bg-amber-600',
    icon: Users,
  },
  {
    id: 'hindu-buddha',
    era: 'Era Hindu-Buddha',
    year: '100 SM - 1500 M',
    title: 'Kerajaan Kuno hingga Majapahit',
    description:
      'Tarumanagara, Kalingga, Mataram Kuno, Kediri, Singhasari, dan Majapahit meletakkan fondasi peradaban Jawa.',
    color: 'bg-orange-600',
    icon: Landmark,
  },
  {
    id: 'islam',
    era: 'Era Islam',
    year: '1500 M - Sekarang',
    title: 'Demak hingga Kesultanan Yogyakarta',
    description:
      'Penyebaran Islam membawa transformasi besar dalam budaya, pemerintahan, dan seni Jawa.',
    color: 'bg-emerald-600',
    icon: Sparkles,
  },
];

const featuredArtifacts = [
  {
    id: 'arca-buddha-borobudur',
    name: 'Arca Buddha Avalokitesvara',
    period: 'Abad ke-8',
    location: 'Candi Borobudur, Magelang',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=800&q=80',
    description: 'Arca Dhyani Buddha terbesar di dunia dengan tinggi 3 meter.',
  },
  {
    id: 'prasasti-sukuh',
    name: 'Prasasti Sukuh',
    period: 'Abad ke-15',
    location: 'Candi Sukuh, Tengger',
    image: 'https://images.unsplash.com/photo-1558431382-f12e866a069d?w=800&q=80',
    description: 'Prasasti yang menceritakan penurunan kekuasaan Majapahit.',
  },
  {
    id: 'keris-pajang',
    name: 'Keris Pajang',
    period: 'Abad ke-16',
    location: 'Keraton Yogyakarta',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80',
    description: 'Senjata tradisional Jawa dengan nilai spiritual tinggi.',
  },
];

const statistics = [
  { label: 'Tahun Sejarah', value: '1.5 Juta+', icon: Calendar },
  { label: 'Artefak Terdokumentasi', value: '500+', icon: BookOpen },
  { label: 'Situs Arkeologi', value: '200+', icon: MapPin },
  { label: 'PENGUNJUNG per Tahun', value: '1 Juta+', icon: Globe },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <>
      <SchemaMarkup type="website" />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {/* Background Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 text-center space-y-8">
            <Badge variant="secondary" className="font-ui text-sm px-4 py-1.5">
              Dokumentasi Warisan Budaya Jawa
            </Badge>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Jelajahi{' '}
              <span className="text-gold">Sejarah</span>
              <br />
              Pulau Jawa
            </h1>

            <p className="font-body text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Dari fosil Homo Erectus Sangiran hingga kejayaan Kerajaan Majapahit.
              Temukan dokumentasi lengkap peradaban yang membentuk Nusantara.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button asChild size="lg" className="font-ui">
                <Link href="/pra-masehi">
                  Mulai Eksplorasi
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-ui">
                <Link href="/artefak">
                  Lihat Artefak
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-foreground" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-gold w-8'
                  : 'bg-foreground/40 hover:bg-foreground/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 animate-bounce">
          <span className="font-ui text-xs text-foreground/60">Scroll</span>
          <ArrowDown className="w-5 h-5 text-foreground/60" />
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-card border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-500 ${
                  isVisible['stats'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="font-ui text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        ref={(el) => { sectionRefs.current['timeline'] = el; }}
        className="py-24 bg-gradient-to-b from-background to-secondary/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="font-ui mb-4">
              Garis Waktu Sejarah
            </Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Perjalanan Waktu di Pulau Jawa
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Jelajahi rentang waktu 1.5 juta tahun peradaban manusia di Pulau Jawa,
              dari masa praaksara hingga era modern.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-600 via-orange-600 to-emerald-600 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div
                  key={item.id}
                  id={item.id}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } ${isVisible['timeline'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transition: 'all 0.6s ease-out', transitionDelay: `${index * 150}ms` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <Card className="inline-block hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className={`inline-flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                          <Badge className={`${item.color} text-white font-ui`}>
                            {item.era}
                          </Badge>
                        </div>
                        <CardTitle className="font-heading text-2xl mt-2">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="font-ui text-primary font-medium">
                          {item.year}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="font-body text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                        <Button asChild variant="link" className={`p-0 h-auto mt-4 font-ui ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                          <Link href={`/${item.id}`}>
                            Pelajari Lebih Lanjut
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border-4 border-primary z-10 hidden md:flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Artifacts Section */}
      <section
        id="artifacts"
        ref={(el) => { sectionRefs.current['artifacts'] = el; }}
        className="py-24 bg-secondary/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <Badge variant="outline" className="font-ui mb-4">
                Koleksi Unggulan
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Artefak Bersejarah
              </h2>
              <p className="font-body text-muted-foreground mt-2 max-w-xl">
                Jelajahi koleksi artefak pilihan yang merepresentasikan kekayaan budaya
                dan peradaban Pulau Jawa.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:inline-flex font-ui">
              <Link href="/artefak">
                Lihat Semua Artefak
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtifacts.map((artifact, index) => (
              <Card
                key={artifact.id}
                className={`group overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  isVisible['artifacts'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={artifact.image}
                    alt={artifact.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 right-4 bg-gold text-black font-ui">
                    {artifact.period}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {artifact.name}
                  </CardTitle>
                  <CardDescription className="font-ui flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {artifact.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {artifact.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Button asChild variant="outline" className="w-full font-ui">
              <Link href="/artefak">
                Lihat Semua Artefak
                <ChevronRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-terracotta text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-6 opacity-80" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Siap Menjelajahi Sejarah Jawa?
          </h2>
          <p className="font-body text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan pengguna yang telah menemukan kekayaan
            sejarah dan budaya Pulau Jawa melalui platform kami.
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
