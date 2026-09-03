/**
 * The seating range, grouped the way the main site's categories group it.
 *
 * Name and photograph only. No prices, no dimensions, no certifications: this
 * site makes no claim it cannot back, and anything measurable belongs in a
 * conversation about a specific hall.
 */
export type Chair = {
  name: string
  image: string
  alt: string
}

export type ChairSection = {
  id: string
  heading: string
  intro: string
  chairs: Chair[]
}

export const sections: ChairSection[] = [
  {
    id: 'cinema',
    heading: 'Cinema chairs',
    intro: 'Push-back and recliner seating for multiplexes and single-screen halls.',
    chairs: [
      {
        name: 'Push-back Cinema Chair',
        image: '/img/cinema-push-back.webp',
        alt: 'Push-back cinema chair upholstered in red with a moulded backrest.',
      },
      {
        name: 'VIP Recliner Chair',
        image: '/img/cinema-vip-recliner.webp',
        alt: 'Wide VIP recliner chair in red with padded armrests and a cup holder.',
      },
      {
        name: 'Multiplex Standard Chair',
        image: '/img/cinema-multiplex-standard.webp',
        alt: 'Standard multiplex cinema chair in red with a fixed steel frame.',
      },
    ],
  },
  {
    id: 'auditorium',
    heading: 'Auditorium chairs',
    intro: 'Fixed seating for lecture theatres, conference halls and performing-arts venues.',
    chairs: [
      {
        name: 'Deluxe Auditorium Chair',
        image: '/img/auditorium-deluxe.webp',
        alt: 'Deluxe auditorium chair with upholstered seat, back and wooden armrests.',
      },
      {
        name: 'Economy Fixed Chair',
        image: '/img/auditorium-economy-fixed.webp',
        alt: 'Economy fixed auditorium chair with a slim upholstered seat and back.',
      },
    ],
  },
]
