import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MobileMenu } from "@/components/mobile-menu"
import { Calendar, MapPin, Users, Clock, ExternalLink, ArrowLeft, Trophy, Gamepad2, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function EventsPage() {
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
            <Link href="/#accueil" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium text-orange-500">
              Événements
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/#footer" className="text-sm font-medium hover:text-orange-500 transition-colors">
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

      {/* Back to Home */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="container mx-auto px-4 lg:px-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-orange-500 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'accueil
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-6">🏛️ Nos Événements</Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Événements <span className="text-orange-500">Blockchain</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Rejoignez-nous lors de nos conférences, workshops et meetups à travers l'Afrique francophone. Des événements
            qui rassemblent la communauté blockchain pour apprendre, échanger et innover ensemble.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Événements Organisés</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">250+</div>
              <div className="text-gray-600">Participants Total</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Villes Visitées</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-red-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">3</div>
              <div className="text-gray-600">Événements à Venir</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100 mb-4">Événements à Venir</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Prochains <span className="text-orange-500">Rendez-vous</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ne manquez pas nos prochains événements blockchain. Inscrivez-vous dès maintenant pour réserver votre
              place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stellar Meetup Abidjan */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/stellar-meetup-abidjan.jpeg"
                  alt="Stellar Meetup Abidjan N°2"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-yellow-500 text-white">Meetup</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">À Venir</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  19 Juillet 2025
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Riviera
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  10:00 - 15:00 (GMT)
                </div>
                <h3 className="text-xl font-bold mb-3">Stellar Meetup Abidjan N°2</h3>
                <p className="text-gray-600 mb-4">
                  Construire, connecter et innover sur Stellar. Un meetup dédié à l'écosystème Stellar avec des
                  workshops pratiques et du networking.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Stellar
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Workshop
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Networking
                  </Badge>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  S'inscrire
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Africa Trading Cup */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <Image
                    src="/images/africa-trading-cup-logo.jpeg"
                    alt="Africa Trading Cup - 1ère Édition"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">Compétition</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">À Venir</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date à confirmer
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Afrique
                </div>
                <h3 className="text-xl font-bold mb-3">Africa Trading Cup - 1ère Édition</h3>
                <p className="text-gray-600 mb-4">
                  La première compétition de trading crypto en Afrique. Démontrez vos compétences et gagnez des prix
                  exceptionnels dans cette compétition continentale.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Trading
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Compétition
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Prix
                  </Badge>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  En savoir plus
                  <Trophy className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* GameFi & NFTs Conference */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/gamefi-nfts-announce.png"
                  alt="GameFi & NFTs Conference Abidjan"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 text-white">Conférence</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white">À Venir</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  12 Octobre 2024
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Abidjan, Côte d'Ivoire
                </div>
                <h3 className="text-xl font-bold mb-3">GameFi & NFTs Conference</h3>
                <p className="text-gray-600 mb-4">
                  Le développement des industries de la GameFi et des NFTs sur le marché africain francophone. Une
                  conférence dédiée aux jeux blockchain et aux NFTs.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    GameFi
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    NFTs
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Gaming
                  </Badge>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  S'inscrire
                  <Gamepad2 className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">Événements Passés</Badge>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Nos <span className="text-orange-500">Réalisations</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les moments forts de nos événements passés qui ont marqué la communauté blockchain en Afrique
              francophone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Afro Web3 Babi 2024 */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/images/afro-web3-cover.png"
                  alt="Afro Web3 Babi 2024"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-purple-500 text-white">Série d'événements</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Juillet 2024
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  En ligne
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Clock className="w-4 h-4 mr-2" />
                  10:00 - 14:00 (GMT)
                </div>
                <h3 className="text-xl font-bold mb-3">Afro Web3 Babi 2024</h3>
                <p className="text-gray-600 mb-4">
                  L'aventure Web3 proche de chez vous ! Une série d'événements virtuels sur 3 samedis consécutifs pour
                  découvrir le Web3 africain.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Web3
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Virtuel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Série
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Blockchain Summit Dakar 2024 */}
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
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
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Summit
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    500+ participants
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    International
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Crypto Meetup Abidjan */}
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
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
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Crypto
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Mensuel
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Communauté
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* DeFi Workshop Casablanca */}
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
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
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
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    DeFi
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Formation
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Pratique
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* NFT Art Exhibition */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=NFT+Art+Exhibition"
                  alt="NFT Art Exhibition"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-pink-500 text-white">Exhibition</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Décembre 2023
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Lomé, Togo
                </div>
                <h3 className="text-xl font-bold mb-3">NFT Art Exhibition</h3>
                <p className="text-gray-600 mb-4">
                  Première exposition d'art NFT en Afrique de l'Ouest, mettant en valeur les artistes numériques
                  africains.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    NFT
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Art
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Exposition
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Web3 Developers Bootcamp */}
            <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400&text=Web3+Developers+Bootcamp"
                  alt="Web3 Developers Bootcamp"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-blue-500 text-white">Bootcamp</Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gray-500 text-white">Terminé</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Novembre 2023
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  Ouagadougou, Burkina Faso
                </div>
                <h3 className="text-xl font-bold mb-3">Web3 Developers Bootcamp</h3>
                <p className="text-gray-600 mb-4">
                  Bootcamp intensif de 5 jours pour former les développeurs aux technologies Web3 et blockchain.
                </p>
                <div className="flex gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    Web3
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Développement
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    5 jours
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-orange-500 text-orange-500 hover:bg-orange-50 bg-transparent"
                >
                  Voir les Highlights
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">Participez à Nos Prochains Événements</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Rejoignez la communauté blockchain la plus dynamique d'Afrique francophone. Inscrivez-vous à notre
              newsletter pour être informé en premier de nos événements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-orange-50 font-semibold">
                S'inscrire aux Événements
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-500 bg-transparent"
              >
                Rejoindre la Communauté
              </Button>
            </div>

            <p className="text-orange-200 text-sm">Plus de 250 participants nous ont déjà fait confiance</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
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
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/techblockchainaf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Événements</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements à Venir
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Événements Passés
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Organiser un Événement
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Devenir Sponsor
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Communauté</h3>
              <ul className="space-y-3">
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
                  <Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/equipe" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Équipe
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                    Partenaires
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span className="text-gray-400 text-sm">technologieblockchainafriquefr@gmail.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
