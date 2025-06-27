import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  Ticket,
  Video,
  ImageIcon,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { MobileMenu } from "@/components/mobile-menu"

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Blockchain & IA Summit Abidjan 2024",
      description:
        "Le plus grand événement tech de l'année en Côte d'Ivoire. Découvrez comment l'IA et la blockchain transforment l'Afrique de l'Ouest.",
      date: "15 Juin 2024",
      time: "09:00 - 18:00",
      location: "Sofitel Abidjan Hotel Ivoire",
      city: "Abidjan, Côte d'Ivoire",
      type: "Conférence",
      status: "Inscriptions Ouvertes",
      attendees: "500+ participants attendus",
      price: "Gratuit",
      image: "/placeholder.svg?height=300&width=400",
      highlights: [
        "20+ speakers internationaux",
        "3 tracks parallèles",
        "Networking premium",
        "Déjeuner d'affaires inclus",
      ],
      speakers: ["Aminata Diallo", "Omar Benali", "Invités Spéciaux"],
    },
    {
      id: 2,
      title: "DeFi Workshop Pratique - Dakar",
      description:
        "Formation intensive sur la finance décentralisée avec des cas pratiques adaptés au marché sénégalais.",
      date: "28 Mai 2024",
      time: "14:00 - 17:00",
      location: "Université Cheikh Anta Diop",
      city: "Dakar, Sénégal",
      type: "Workshop",
      status: "Places Limitées",
      attendees: "50 participants max",
      price: "15,000 FCFA",
      image: "/placeholder.svg?height=300&width=400",
      highlights: [
        "Formation pratique 3h",
        "Certificat de participation",
        "Kit de démarrage DeFi",
        "Support post-formation",
      ],
      speakers: ["Omar Benali", "Experts DeFi locaux"],
    },
    {
      id: 3,
      title: "Crypto Meetup Mensuel - Casablanca",
      description: "Rencontre mensuelle de la communauté crypto marocaine pour échanger et networker.",
      date: "10 Mai 2024",
      time: "19:00 - 21:00",
      location: "Technopark Casablanca",
      city: "Casablanca, Maroc",
      type: "Meetup",
      status: "Inscription Gratuite",
      attendees: "80+ participants",
      price: "Gratuit",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Présentation du mois", "Session Q&A", "Networking informel", "Rafraîchissements offerts"],
      speakers: ["Communauté LTBAF Maroc"],
    },
  ]

  const pastEvents = [
    {
      id: 4,
      title: "Blockchain Summit Dakar 2024",
      description:
        "Le plus grand événement blockchain d'Afrique de l'Ouest avec plus de 500 participants et 30 speakers internationaux.",
      date: "15 Mars 2024",
      location: "King Fahd Palace Hotel",
      city: "Dakar, Sénégal",
      type: "Conférence",
      attendees: "500+ participants",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["30 speakers internationaux", "500+ participants", "15 pays représentés", "20+ startups présentées"],
      resources: {
        photos: true,
        videos: true,
        presentations: true,
      },
    },
    {
      id: 5,
      title: "Crypto Meetup Abidjan - Édition Spéciale",
      description: "Rencontre exceptionnelle avec des experts internationaux de passage en Côte d'Ivoire.",
      date: "20 Janvier 2024",
      location: "Pullman Abidjan",
      city: "Abidjan, Côte d'Ivoire",
      type: "Meetup",
      attendees: "120+ participants",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Experts internationaux", "Panel sur l'adoption crypto", "Networking premium", "Couverture média"],
      resources: {
        photos: true,
        videos: true,
        presentations: false,
      },
    },
    {
      id: 6,
      title: "DeFi Workshop Casablanca",
      description:
        "Formation intensive sur la finance décentralisée avec des cas d'usage pratiques pour l'Afrique du Nord.",
      date: "10 Février 2024",
      location: "Mohammed VI Polytechnic University",
      city: "Casablanca, Maroc",
      type: "Workshop",
      attendees: "60+ participants",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Formation pratique 4h", "Cas d'usage locaux", "Certificats délivrés", "Suivi personnalisé"],
      resources: {
        photos: true,
        videos: false,
        presentations: true,
      },
    },
    {
      id: 7,
      title: "Web3 & Entrepreneuriat - Bamako",
      description: "Conférence sur les opportunités entrepreneuriales dans l'écosystème Web3 au Mali.",
      date: "5 Décembre 2023",
      location: "Azalaï Hotel Bamako",
      city: "Bamako, Mali",
      type: "Conférence",
      attendees: "200+ participants",
      image: "/placeholder.svg?height=300&width=400",
      highlights: ["Focus entrepreneuriat", "Pitch de startups", "Investisseurs présents", "Partenariats signés"],
      resources: {
        photos: true,
        videos: true,
        presentations: true,
      },
    },
  ]

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
            <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Accueil
            </Link>
            <Link href="/#services" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Services
            </Link>
            <Link href="/evenements" className="text-sm font-medium text-orange-500">
              Événements
            </Link>
            <Link href="/equipe" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Équipe
            </Link>
            <Link href="/blog" className="text-sm font-medium hover:text-orange-500 transition-colors">
              Blog
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

      {/* Events Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-100 mb-4">🎪 Nos Événements</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Événements <span className="text-orange-500">Blockchain</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Rejoignez-nous lors de nos conférences, workshops et meetups à travers l'Afrique francophone. Des
              événements qui rassemblent la communauté blockchain pour apprendre, échanger et innover ensemble.
            </p>
          </div>

          {/* Event Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-600">Événements Organisés</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
              <p className="text-gray-600">Participants Total</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">6</h3>
              <p className="text-gray-600">Villes Visitées</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Ticket className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3</h3>
              <p className="text-gray-600">Événements à Venir</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="upcoming" className="text-lg">
                À Venir
              </TabsTrigger>
              <TabsTrigger value="archived" className="text-lg">
                Archivés
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Événements à Venir</h2>
                <p className="text-gray-600 text-lg">
                  Découvrez nos prochains événements et réservez votre place dès maintenant.
                </p>
              </div>

              <div className="grid lg:grid-cols-1 gap-8">
                {upcomingEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg"
                  >
                    <div className="grid lg:grid-cols-3 gap-0">
                      <div className="relative">
                        <Image
                          src={
                            event.id === 1
                              ? "/placeholder.svg?height=300&width=400&text=Blockchain+IA+Summit+Abidjan"
                              : event.id === 2
                                ? "/placeholder.svg?height=300&width=400&text=DeFi+Workshop+Dakar"
                                : "/placeholder.svg?height=300&width=400&text=Crypto+Meetup+Casablanca"
                          }
                          alt={event.title}
                          width={400}
                          height={300}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge
                            className={`${
                              event.type === "Conférence"
                                ? "bg-orange-500"
                                : event.type === "Workshop"
                                  ? "bg-purple-500"
                                  : "bg-green-500"
                            } text-white`}
                          >
                            {event.type}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4">
                          <Badge
                            className={`${
                              event.status === "Inscriptions Ouvertes"
                                ? "bg-green-500"
                                : event.status === "Places Limitées"
                                  ? "bg-red-500"
                                  : "bg-blue-500"
                            } text-white`}
                          >
                            {event.status}
                          </Badge>
                        </div>
                      </div>

                      <CardContent className="lg:col-span-2 p-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{event.description}</p>
                          </div>

                          {/* Event Details */}
                          <div className="grid md:grid-cols-2 gap-4 py-4 border-y border-gray-100">
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <Calendar className="w-5 h-5 text-orange-500" />
                                <div>
                                  <p className="font-medium">{event.date}</p>
                                  <p className="text-sm text-gray-500">{event.time}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-orange-500" />
                                <div>
                                  <p className="font-medium">{event.location}</p>
                                  <p className="text-sm text-gray-500">{event.city}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <Users className="w-5 h-5 text-orange-500" />
                                <p className="font-medium">{event.attendees}</p>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Ticket className="w-5 h-5 text-orange-500" />
                                <p className="font-medium">{event.price}</p>
                              </div>
                            </div>
                          </div>

                          {/* Highlights */}
                          <div>
                            <h4 className="font-semibold mb-3">Points Forts</h4>
                            <div className="grid md:grid-cols-2 gap-2">
                              {event.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                  <span className="text-sm text-gray-600">{highlight}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Speakers */}
                          <div>
                            <h4 className="font-semibold mb-3">Intervenants</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.speakers.map((speaker) => (
                                <Badge key={speaker} variant="outline" className="border-orange-200 text-orange-700">
                                  {speaker}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white flex-1">
                              S'inscrire Maintenant
                              <ExternalLink className="w-4 h-4 ml-2" />
                            </Button>
                            <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                              Plus d'Infos
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Archived Events */}
            <TabsContent value="archived" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Événements Archivés</h2>
                <p className="text-gray-600 text-lg">
                  Revivez nos événements passés et accédez aux ressources disponibles.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {pastEvents.map((event) => (
                  <Card
                    key={event.id}
                    className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
                  >
                    <div className="relative">
                      <Image
                        src={
                          event.id === 4
                            ? "/placeholder.svg?height=300&width=400&text=Blockchain+Summit+Dakar+2024"
                            : event.id === 5
                              ? "/placeholder.svg?height=300&width=400&text=Crypto+Meetup+Abidjan+Special"
                              : event.id === 6
                                ? "/placeholder.svg?height=300&width=400&text=DeFi+Workshop+Casablanca+Past"
                                : "/placeholder.svg?height=300&width=400&text=Web3+Entrepreneuriat+Bamako"
                        }
                        alt={event.title}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge
                          className={`${
                            event.type === "Conférence"
                              ? "bg-orange-500"
                              : event.type === "Workshop"
                                ? "bg-purple-500"
                                : "bg-green-500"
                          } text-white`}
                        >
                          {event.type}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gray-500 text-white">Terminé</Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                        </div>

                        {/* Event Info */}
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4 text-orange-500" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-orange-500" />
                            <span>{event.city}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-4 h-4 text-orange-500" />
                            <span>{event.attendees}</span>
                          </div>
                        </div>

                        {/* Highlights */}
                        <div>
                          <h4 className="font-semibold mb-2 text-sm">Résultats</h4>
                          <div className="space-y-1">
                            {event.highlights.slice(0, 3).map((highlight, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                <span className="text-xs text-gray-600">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Resources */}
                        <div className="border-t pt-4">
                          <h4 className="font-semibold mb-3 text-sm">Ressources Disponibles</h4>
                          <div className="flex space-x-4">
                            {event.resources.photos && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <ImageIcon className="w-3 h-3 mr-1" />
                                Photos
                              </Button>
                            )}
                            {event.resources.videos && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <Video className="w-3 h-3 mr-1" />
                                Vidéos
                              </Button>
                            )}
                            {event.resources.presentations && (
                              <Button size="sm" variant="outline" className="text-xs">
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Slides
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ne Manquez Aucun Événement</h2>
            <p className="text-xl text-orange-100 mb-8 leading-relaxed">
              Inscrivez-vous à notre newsletter pour être informé en priorité de nos prochains événements et recevoir
              des invitations exclusives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 outline-none"
              />
              <Button className="bg-white text-orange-500 hover:bg-orange-50 font-semibold px-8">S'abonner</Button>
            </div>
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
