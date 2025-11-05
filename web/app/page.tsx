export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        aria-label="Hare Krishna Mahamantra"
      >
        <div className="absolute inset-0 bg-radha-krishna bg-cover bg-center" />
        <div className="absolute inset-0 bg-peacock/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-peacock/20 to-white" />

        <div className="relative z-10 max-w-5xl px-6 py-10">
          <h1 className="gold-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-relaxed font-serif">
            ??? ????? ??? ????? ????? ????? ??? ???
            <br className="hidden sm:block" />
            ??? ??? ??? ??? ??? ??? ??? ??? ?
          </h1>

          <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl">
            Hare Krishna Hare Krishna Krishna Krishna Hare Hare ? Hare Rama Hare Rama Rama Rama Hare Hare
          </p>

          <p className="mt-4 text-peacock-100 text-sm sm:text-base font-serif text-white/80">
            Bhakti is the journey of the heart, a path of pure love and eternal peace.
          </p>

          <div className="mt-10">
            <a
              href="#books"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-peacock font-medium px-6 py-3 shadow-lg hover:brightness-110 transition focus:outline-none focus:ring-2 focus:ring-gold/40 focus:ring-offset-2 focus:ring-offset-white"
            >
              <span role="img" aria-label="books">??</span> Get Books
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative py-20 bg-white">
        <div className="absolute inset-x-0 -top-24 mx-auto h-48 w-[80%] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(circle, #D4AF37 0%, transparent 60%)'}} />
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-peacock">About Krishna Consciousness</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Krishna Consciousness, or Bhakti Yoga, is the timeless path of devotion?uniting the soul with the Supreme through love, remembrance, and service. Centered on the chanting of the Mah?mantra, it purifies the heart and awakens our eternal nature.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-gold">?</span><span>Chanting the holy names brings peace, joy, and spiritual clarity.</span></li>
                <li className="flex items-start gap-3"><span className="text-gold">?</span><span>Scriptural wisdom from the Bhagavad-gita and Srimad Bhagavatam guides daily life.</span></li>
                <li className="flex items-start gap-3"><span className="text-gold">?</span><span>Devotional practices include kirtan, meditation, service, and prasadam.</span></li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glow">
                <img
                  src="https://images.unsplash.com/photo-1602693866808-62bc4393302a?q=80&w=1887&auto=format&fit=crop"
                  alt="Peacock feather and temple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-peacock/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" className="py-20 bg-gradient-to-b from-white to-peacock/5">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-peacock">Sacred Books</h2>
            <p className="mt-3 text-slate-700">Timeless wisdom to illuminate the heart.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <article key={book.title} className="rounded-2xl overflow-hidden bg-white shadow-sm ring-1 ring-slate-100 hover:shadow-md transition">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-peacock">{book.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{book.subtitle}</p>
                  <div className="mt-4 flex gap-3">
                    <a href={book.readUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-full bg-peacock text-white hover:brightness-110">Read Online</a>
                    {book.buyUrl && (
                      <a href={book.buyUrl} target="_blank" rel="noreferrer" className="text-sm px-3 py-2 rounded-full bg-gold text-peacock hover:brightness-110">Buy</a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-600">
        <p>Hare Krishna ? With gratitude and devotion</p>
      </footer>
    </main>
  )
}

const books = [
  {
    title: 'Bhagavad-g?t? As It Is',
    subtitle: 'The song of God ? direct, profound, and ever-fresh.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=1887&auto=format&fit=crop',
    readUrl: 'https://vedabase.io/en/library/bg/',
    buyUrl: 'https://krishnastore.com/books-c-1.html',
  },
  {
    title: '?r?mad-Bh?gavatam',
    subtitle: 'The spotless Pur??a ? a symphony of devotion.',
    image: 'https://images.unsplash.com/photo-1589994965851-d6f180cc4dfe?q=80&w=1887&auto=format&fit=crop',
    readUrl: 'https://vedabase.io/en/library/sb/',
    buyUrl: 'https://krishnastore.com/books-c-1.html',
  },
  {
    title: '?r? Caitanya-carit?m?ta',
    subtitle: 'The life and teachings of Lord Caitanya.',
    image: 'https://images.unsplash.com/photo-1519682234381-20ea0bd532de?q=80&w=1887&auto=format&fit=crop',
    readUrl: 'https://vedabase.io/en/library/cc/',
    buyUrl: 'https://krishnastore.com/books-c-1.html',
  },
  {
    title: 'The Nectar of Devotion',
    subtitle: 'Bhakti-rasa?the science of devotional service.',
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0ea?q=80&w=1887&auto=format&fit=crop',
    readUrl: 'https://vedabase.io/en/library/nod/',
    buyUrl: 'https://krishnastore.com/books-c-1.html',
  },
] as const
