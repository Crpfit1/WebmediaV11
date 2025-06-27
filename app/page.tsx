import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileMenu } from "@/components/mobile-menu"
import {
  Users,
  BookOpen,
  TrendingUp,
  Calendar,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="TechBlockchainAfr Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-lg">TechBlockchainAfr</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#accueil" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Événements
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
              <Button className="hidden md:flex bg-orange-500 hover:bg-orange-600 text-white">
                Écouter Maintenant
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100">
                🎧 Podcast #1 sur la Blockchain en Afrique
              </Badge>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                La Technologie <span className="text-orange-500">Blockchain</span> en Afrique Francophone
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Découvrez l'avenir de la technologie blockchain en Afrique francophone. Nos podcasts, événements et
                contenus éducatifs vous connectent aux innovations qui transforment le continent.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="https://www.youtube.com/@techblockchainaf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">
                    Écouter les Podcasts
                  </Button>
                </Link>
                <Link
                  href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-50 w-full sm:w-auto"
                  >
                    Rejoindre la Communauté
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>200+ Auditeurs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/logo.png"
                    alt="TechBlockchainAfr"
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  <span>60+ Épisodes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>10+ Événements</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero-section.png"
                alt="La Technologie Blockchain en Afrique Francophone - Événements et Communauté"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">Nos Services</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Votre Passerelle vers la <span className="text-orange-500">Blockchain</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous offrons une gamme complète de services pour démocratiser la technologie blockchain en Afrique
              francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors">
                  <Image
                    src="/images/logo.png"
                    alt="TechBlockchainAfr"
                    width={32}
                    height={32}
                    className="rounded-full group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">Podcasts Éducatifs</h3>
                <p className="text-gray-600">
                  Des épisodes hebdomadaires avec des experts pour comprendre la blockchain et ses applications en
                  Afrique.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-500 transition-colors">
                  <Users className="w-8 h-8 text-green-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Communauté Active</h3>
                <p className="text-gray-600">
                  Rejoignez une communauté dynamique de passionnés, développeurs et entrepreneurs blockchain.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500 transition-colors">
                  <BookOpen className="w-8 h-8 text-purple-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Formation & Éducation</h3>
                <p className="text-gray-600">
                  Programmes de formation complets pour maîtriser les technologies blockchain et crypto-monnaies.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-red-500 transition-colors">
                  <TrendingUp className="w-8 h-8 text-red-500 group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Analyses de Marché</h3>
                <p className="text-gray-600">
                  Insights exclusifs sur les tendances blockchain et opportunités d'investissement en Afrique.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="evenements" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">Nos Événements</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Événements <span className="text-orange-500">Marquants</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les moments forts de nos conférences, meetups et événements blockchain à travers l'Afrique
              francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Blockchain+Summit+Dakar"
                  alt="Blockchain Summit Dakar 2024"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-orange-500 text-white">Conférence</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Mars 2024
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Dakar, Sénégal
                </div>
                <h3 className="text-xl font-bold mb-3">Blockchain Summit Dakar 2024</h3>
                <p className="text-gray-600 mb-4">
                  Le plus grand événement blockchain d'Afrique de l'Ouest avec plus de 500 participants et 30 speakers
                  internationaux.
                </p>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Crypto+Meetup+Abidjan"
                  alt="Crypto Meetup Abidjan"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Meetup</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Janvier 2024
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Côte d'Ivoire
                </div>
                <h3 className="text-xl font-bold mb-3">Crypto Meetup Abidjan</h3>
                <p className="text-gray-600 mb-4">
                  Rencontre mensuelle de la communauté crypto d'Abidjan pour échanger sur les dernières innovations
                  blockchain.
                </p>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=DeFi+Workshop+Casablanca"
                  alt="DeFi Workshop Casablanca"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 text-white">Workshop</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Février 2024
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Casablanca, Maroc
                </div>
                <h3 className="text-xl font-bold mb-3">DeFi Workshop Casablanca</h3>
                <p className="text-gray-600 mb-4">
                  Formation intensive sur la finance décentralisée (DeFi) avec des cas d'usage pratiques pour l'Afrique
                  du Nord.
                </p>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Link Bar */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center">
            <p className="text-gray-600 mb-6">Découvrez tous nos événements passés et à venir</p>
            <Link href="/evenements">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Voir Tous les Événements
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">Notre Équipe</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Les Visionnaires derrière <span className="text-orange-500">TechBlockchainAfr</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe passionnée d'experts blockchain, journalistes tech et entrepreneurs dédiés à l'éducation et
              l'innovation en Afrique.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Aminata Diallo"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Aminata Diallo</h3>
                <p className="text-orange-500 font-medium mb-3">Fondatrice & Host Principal</p>
                <p className="text-gray-600 text-sm mb-6">
                  Experte blockchain avec 8 ans d'expérience. Ancienne développeuse chez Ethereum Foundation, passionnée
                  par l'adoption blockchain en Afrique.
                </p>
                <div className="flex justify-center space-x-3">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Omar Benali"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Omar Benali</h3>
                <p className="text-orange-500 font-medium mb-3">Co-Host & Analyste Crypto</p>
                <p className="text-gray-600 text-sm mb-6">
                  Trader professionnel et analyste crypto depuis 6 ans. Spécialiste des marchés africains et des
                  stablecoins régionaux.
                </p>
                <div className="flex justify-center space-x-3">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="group text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <Image
                    src="/placeholder.svg?height=120&width=120"
                    alt="Fatou Kone"
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Fatou Koné</h3>
                <p className="text-orange-500 font-medium mb-3">Responsable Communauté</p>
                <p className="text-gray-600 text-sm mb-6">
                  Community manager experte avec une passion pour l'éducation tech. Gère notre communauté de 50K+
                  membres à travers l'Afrique.
                </p>
                <div className="flex justify-center space-x-3">
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Rejoignez la Révolution Blockchain en Afrique
            </h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Ne manquez aucun épisode, événement ou opportunité. Inscrivez-vous à notre newsletter et faites partie de
              la communauté qui façonne l'avenir de la blockchain en Afrique francophone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <Input
                type="email"
                placeholder="Votre adresse email"
                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 flex-1"
              />
              <Button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold">
                S'inscrire Maintenant
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500"
              >
                Écouter les Podcasts
              </Button>
            </div>

            <p className="text-orange-200 text-sm mt-6">Construisons ensemble pour la prochaine génération</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image
                  src="/images/logo.png"
                  alt="TechBlockchainAfr Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-bold text-lg">TechBlockchainAfr</span>
              </div>
              <p className="text-gray-400 mb-6">
                La référence podcast blockchain en Afrique francophone. Éducation, innovation et communauté au cœur de
                notre mission.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/tech_blockaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/19JWe3NEpJ/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.instagram.com/techblockchainafr?igsh=MTEzZjliMGc4eHdxOA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@techblockchainafr1?_t=ZS-8xRbxM0xAHa&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contenu</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.youtube.com/@techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Tous les Podcasts
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://youtu.be/zHDL3QFrfUo?si=qOHORr0tqkBpNj6J"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Épisodes Récents
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Interviews Exclusives
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://calendar.app.google/MksninUEWKQTgaht7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Analyses de Marché
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://icmjjcmu.mychariow.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Guides Débutants
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Communauté</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.linkedin.com/company/techblockchainaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://whatsapp.com/channel/0029Vao6uuXDuMRXaIQPqb16"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link href="/evenements" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Meetups
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Partenariats
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400 text-sm">technologieblockchainafriquefr@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-400">+225 0758473042</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-orange-500 mt-1" />
                  <span className="text-gray-400">Abidjan, Côte d'Ivoire</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} TechBlockchainAfr. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Politique de Confidentialité
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Conditions d'Utilisation
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                Mentions Légales
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
