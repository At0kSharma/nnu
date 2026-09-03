/**
 * Every piece of copy and every contact detail, in one place.
 *
 * The main site reads these from Payload; here they are literals, because a
 * static brochure with no CMS has nowhere else to put them. If a phone number
 * or address changes, this is the only file to edit.
 */
export const site = {
  name: 'New Nepal Udyog',
  tagline: 'Cinema & auditorium seating since 1985',
  description:
    'Fixed seating engineered around sightlines, acoustics, and the demands of daily use. Manufactured, delivered and installed from our own workshop in Birgunj.',

  hero: {
    eyebrow: 'Cinema & auditorium seating',
    ctaSeating: 'View seating',
    ctaContact: 'Get in touch',
    imageAlt: 'A red cinema seat with cupholder armrests and a steel pedestal frame.',
  },

  contact: {
    heading: 'Talk to us about your hall',
    intro:
      'Send us your hall dimensions or drawings and we will come back with suitable models, a quote and a lead time.',
    phone: '+977-9855026621',
    // Digits only, as wa.me requires; no plus, no spaces.
    whatsapp: '9779855026621',
    whatsappMessage: 'Hello New Nepal Udyog, I would like to enquire about seating.',
    email: 'info@newnepaludyog.com.np',
    address: 'Medical Road, Bus Park, Birgunj, Parsa, Nepal',
    facebook: 'https://www.facebook.com/newnepaludyog',
  },

  footer: {
    note: 'Manufactured in Nepal',
  },
} as const

/** wa.me link with the enquiry text pre-filled. */
export const whatsappLink = `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(
  site.contact.whatsappMessage,
)}`

/** tel: needs the number stripped of spaces and dashes. */
export const telLink = `tel:${site.contact.phone.replace(/[^+\d]/g, '')}`
