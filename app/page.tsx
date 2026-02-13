'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, MapPin, Phone, MessageCircle, ChevronUp, Star } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('All')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const mainRef = useRef<HTMLDivElement>(null)
  const reviewsContainerRef = useRef<HTMLDivElement>(null)

  const reviewsData = [
    {
      name: 'Raj Patel',
      rating: 5,
      text: 'Absolutely authentic! The Kung Pao Chicken was exceptional. Best Chinese in Chincholi!',
      date: '2 weeks ago'
    },
    {
      name: 'Priya Singh',
      rating: 5,
      text: 'Amazing ambiance and delicious food. Tried their dim sum and it was perfect!',
      date: '1 month ago'
    },
    {
      name: 'Ahmed Khan',
      rating: 4,
      text: 'Great service and food quality. Will definitely come back for more.',
      date: '3 weeks ago'
    }
  ]

  // Handle scroll for back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-scroll reviews carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prev) => (prev + 1) % reviewsData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reviewsData.length])

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const dishesData = [
    {
      id: 1,
      name: 'Kung Pao Chicken',
      price: '₹250',
      description: 'Tender chicken with peanuts and dried chilies',
      category: 'Non-Vegetarian',
      image: '/noodles.jpg'
    },
    {
      id: 2,
      name: 'Mapo Tofu',
      price: '₹180',
      description: 'Silky tofu in spicy numbing sauce',
      category: 'Vegetarian',
      image: '/dim-sum.jpg'
    },
    {
      id: 3,
      name: 'Peking Duck',
      price: '₹450',
      description: 'Crispy duck with thin pancakes and sauce',
      category: 'Non-Vegetarian',
      image: '/dishes-collage.jpg'
    },
    {
      id: 4,
      name: 'Vegetable Fried Rice',
      price: '₹150',
      description: 'Fluffy rice with mixed vegetables',
      category: 'Vegetarian',
      image: '/noodles.jpg'
    },
    {
      id: 5,
      name: 'Hot and Sour Soup',
      price: '₹120',
      description: 'Tangy soup with vegetables and spices',
      category: 'Vegetarian',
      image: '/dim-sum.jpg'
    },
    {
      id: 6,
      name: 'Chow Mein with Shrimp',
      price: '₹280',
      description: 'Stir-fried noodles with fresh shrimp',
      category: 'Non-Vegetarian',
      image: '/noodles.jpg'
    }
  ]

  const filteredDishes = activeFilter === 'All' 
    ? dishesData 
    : dishesData.filter(dish => dish.category === activeFilter)

  return (
    <main ref={mainRef} className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-primary shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <h1 className="text-2xl font-playfair font-bold text-primary-foreground">🐉 Dragon's Feast</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-primary-foreground hover:text-secondary transition">Home</button>
            <button onClick={() => scrollToSection('dishes')} className="text-primary-foreground hover:text-secondary transition">Dishes</button>
            <button onClick={() => scrollToSection('menu')} className="text-primary-foreground hover:text-secondary transition">Menu</button>
            <button onClick={() => scrollToSection('about')} className="text-primary-foreground hover:text-secondary transition">About</button>
            <button onClick={() => scrollToSection('reviews')} className="text-primary-foreground hover:text-secondary transition">Reviews</button>
            <button onClick={() => scrollToSection('location')} className="text-primary-foreground hover:text-secondary transition">Location</button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-primary-foreground">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-primary/95 border-t border-accent px-4 py-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left text-primary-foreground hover:text-secondary py-2">Home</button>
            <button onClick={() => scrollToSection('dishes')} className="text-left text-primary-foreground hover:text-secondary py-2">Dishes</button>
            <button onClick={() => scrollToSection('menu')} className="text-left text-primary-foreground hover:text-secondary py-2">Menu</button>
            <button onClick={() => scrollToSection('about')} className="text-left text-primary-foreground hover:text-secondary py-2">About</button>
            <button onClick={() => scrollToSection('reviews')} className="text-left text-primary-foreground hover:text-secondary py-2">Reviews</button>
            <button onClick={() => scrollToSection('location')} className="text-left text-primary-foreground hover:text-secondary py-2">Location</button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/image.jpeg"
          alt="Dragon's Feast Restaurant"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-balance">Welcome to Dragon's Feast</h2>
          <p className="text-xl md:text-2xl mb-8 text-secondary">Authentic Chinese Cuisine in Chincholi</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20want%20to%20order%20food."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Order Now
            </a>
            <a
              href="tel:+919876543210"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section id="dishes" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-foreground">Featured Dishes</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">Discover our most beloved traditional Chinese dishes, crafted with authentic recipes and finest ingredients</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishesData.slice(0, 3).map((dish) => (
              <div key={dish.id} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition bg-card">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    {dish.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold mb-2 text-foreground">{dish.name}</h3>
                  <p className="text-muted-foreground mb-4">{dish.description}</p>
                  <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition font-semibold">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Menu Section with Filters */}
      <section id="menu" className="py-20 px-4 bg-secondary/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-foreground">Complete Menu</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Browse our extensive collection of authentic Chinese dishes</p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Vegetarian', 'Non-Vegetarian'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition border border-border">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={dish.image || "/placeholder.svg"}
                    alt={dish.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                  />
                </div>
                <h3 className="text-xl font-playfair font-bold mb-2 text-foreground">{dish.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-accent">{dish.price}</span>
                  <span className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                    {dish.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/restaurant-interior.jpg"
                alt="Dragon's Feast Restaurant Interior"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-foreground">About Dragon's Feast</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Since 1995, Dragon's Feast has been serving the finest authentic Chinese cuisine in Chincholi. Our chefs, trained in traditional Chinese cooking methods, bring decades of expertise to every dish.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We believe in using the freshest ingredients, time-honored recipes, and impeccable service to create an unforgettable dining experience. Each dish is a masterpiece crafted with passion and precision.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-3xl font-playfair font-bold text-accent mb-2">25+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                  <p className="text-3xl font-playfair font-bold text-accent mb-2">50K+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 bg-secondary/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-foreground">Customer Reviews</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">See what our happy customers have to say</p>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsData.map((review, index) => (
              <div key={index} className="bg-card rounded-lg p-8 shadow-md hover:shadow-lg transition border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{review.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Auto-Scrolling Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div 
                ref={reviewsContainerRef}
                className="overflow-x-auto scroll-smooth"
                style={{
                  scrollBehavior: 'smooth',
                  display: 'flex',
                  gap: '1rem',
                }}
              >
                {reviewsData.map((review, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-lg p-8 shadow-md border border-border flex-shrink-0"
                    style={{ minWidth: '100%' }}
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} className="fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">"{review.text}"</p>
                    <div className="border-t border-border pt-4">
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {reviewsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentReviewIndex(index)
                      if (reviewsContainerRef.current) {
                        const cardWidth = reviewsContainerRef.current.scrollWidth / reviewsData.length
                        reviewsContainerRef.current.scrollLeft = index * cardWidth
                      }
                    }}
                    className={`w-3 h-3 rounded-full transition ${
                      index === currentReviewIndex ? 'bg-accent' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-foreground">Find Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.797518157859!2d74.70999532346826!3d17.62627968335542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5900c0da87d77%3A0xf9b55c5d5c5c5c5c!2sChincholi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-6 text-foreground">Visit Us</h3>
                
                <div className="mb-8">
                  <div className="flex gap-4 items-start mb-6">
                    <MapPin className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Address</h4>
                      <p className="text-muted-foreground">Near City Center, Chincholi, Maharashtra 431001</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start mb-6">
                    <Phone className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                      <p className="text-muted-foreground">+91 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <MessageCircle className="text-accent mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Hours</h4>
                      <p className="text-muted-foreground">Mon-Thu: 11 AM - 10 PM</p>
                      <p className="text-muted-foreground">Fri-Sun: 11 AM - 11 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-semibold transition"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-3 rounded-lg font-semibold transition"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-playfair font-bold mb-4">Dragon's Feast</h3>
              <p className="text-sm text-primary-foreground/80">Authentic Chinese cuisine serving Chincholi since 1995.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-secondary transition">Home</button></li>
                <li><button onClick={() => scrollToSection('menu')} className="hover:text-secondary transition">Menu</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary transition">About</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-secondary transition">Location</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4 text-sm">
                <a href="#" className="hover:text-secondary transition">Facebook</a>
                <a href="#" className="hover:text-secondary transition">Instagram</a>
                <a href="#" className="hover:text-secondary transition">Twitter</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-sm space-y-2">
                <p>+91 (555) 123-4567</p>
                <p>contact@dragonsfeast.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
            <p>&copy; 2024 Dragon's Feast. All rights reserved. | Best Chinese Restaurant in Chincholi</p>
            <p className="mt-2">Terms of Service | Privacy Policy | Food Near Me</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition animate-bounce"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </main>
  )
}
