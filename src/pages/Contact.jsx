import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Check } from 'lucide-react'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'hello@luxecart.ai', href: 'mailto:hello@luxecart.ai' },
  { icon: Phone, label: 'Phone', value: '+1 (800) 555-0199', href: 'tel:+18005550199' },
  { icon: MapPin, label: 'Address', value: '100 Luxury Ave, New York, NY 10001', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri, 9AM - 6PM EST', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="pt-24 md:pt-28 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="Have a question? We'd love to hear from you. Reach out and we'll respond within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="card-luxury p-5 flex items-center gap-4 hover-lift"
                >
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-emerald" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm text-white font-medium">{item.value}</div>
                  </div>
                </motion.div>
              )
            })}

            <div className="card-luxury p-6 mt-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={20} className="text-emerald" />
                <h3 className="text-base font-semibold text-white">Live Chat</h3>
              </div>
              <p className="text-sm text-white/50 mb-4">
                Our support team is available for instant chat during business hours.
              </p>
              <Button variant="outline" size="sm">Start Chat</Button>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="card-luxury p-6 md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full glass rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-emerald/50 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full glass rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-emerald/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Subject</label>
                <input
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full glass rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-emerald/50 transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-white/80 mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full glass rounded-2xl px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-emerald/50 transition-colors resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                {sent ? <><Check size={18} /> Message Sent!</> : <><Send size={18} /> Send Message</>}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
