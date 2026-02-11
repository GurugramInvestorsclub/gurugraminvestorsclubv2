import { groq } from 'next-sanity'

// --- BLOG QUERIES ---

export const getAllBlogsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }
`

export const getBlogBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    body,
    "relatedPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage
    }
  }
`

export const getLatestBlogsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    excerpt
  }
`

// --- EVENT QUERIES ---

export const getUpcomingEventsQuery = groq`
  *[_type == "event" && status == "Upcoming"] | order(eventDate asc) {
    _id,
    title,
    slug,
    eventDate,
    mode,
    price,
    description,
    featured
  }
`

export const getPastEventsQuery = groq`
  *[_type == "event" && status == "Completed"] | order(eventDate desc) {
    _id,
    title,
    slug,
    eventDate,
    mode,
    price,
    description
  }
`

export const getEventBySlugQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    eventDate,
    duration,
    mode,
    price,
    description,
    agenda,
    keyTakeaways,
    targetAudience,
    registrationLink,
    recordingLink,
    status,
    mainImage
  }
`

export const getFeaturedEventQuery = groq`
  *[_type == "event" && featured == true && status == "Upcoming"] | order(eventDate asc)[0] {
    _id,
    title,
    slug,
    eventDate,
    mode,
    price,
    description,
    mainImage,
    registrationLink
  }
`
