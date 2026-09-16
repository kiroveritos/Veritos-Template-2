import type { Metadata } from "next";

export const siteConfig = {
  name: "Veritos Infosolutions",
  description: "Premier IT Service Provider delivering mission-critical e-Governance, University Management Systems, Enterprise ERP & SaaS solutions.",
  url: "https://veritos.in",
  ogImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  logo: "https://veritos.in/logo.png",
  keywords: [
    "Veritos Infosolutions",
    "e-Governance Modules",
    "DigiLocker Integration",
    "University Management System",
    "Online Result Processing",
    "Enterprise ERP",
    "SaaS Business Applications",
    "IT Consultancy Services",
    "Mobile App Development",
    "Toll-Free IVR & Bulk SMS",
    "Mohali IT Company"
  ],
  authors: [
    {
      name: "Veritos Infosolutions Team",
      url: "https://veritos.in",
    },
  ],
  creator: "Veritos Infosolutions Pvt Ltd",
  publisher: "Veritos Infosolutions Pvt Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://veritos.in",
    siteName: "Veritos Infosolutions",
    title: "Veritos Infosolutions | Innovative Thoughts. Successful Solutions.",
    description: "Uniting information, processes, people and technology for good governance, academic excellence, and enterprise scale.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Veritos Infosolutions - Premier Enterprise IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritos Infosolutions | Innovative Thoughts. Successful Solutions.",
    description: "Uniting information, processes, people and technology for good governance, academic excellence, and enterprise scale.",
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"],
    creator: "@Veritos_India",
  },
  verification: {
    google: "google-site-verification", 
  },
  alternates: {
    canonical: "https://veritos.in",
  },
  category: "technology",
};

export const pageMetadata = {
  home: {
    title: "Veritos Infosolutions | e-Governance, Academics & Enterprise IT Solutions",
    description: "Veritos delivers secure e-Governance modules, University Management Systems (UMS), DigiLocker integration, Enterprise ERP, and scalable IT services.",
    keywords: [
      "e-Governance",
      "University Management System",
      "DigiLocker",
      "Online Examination System",
      "Enterprise ERP",
      "IT Consultancy",
      "Veritos Mohali"
    ],
    openGraph: {
      title: "Veritos Infosolutions | e-Governance, Academics & Enterprise IT Solutions",
      description: "Veritos delivers secure e-Governance modules, University Management Systems (UMS), DigiLocker integration, Enterprise ERP, and scalable IT services.",
      url: "https://veritos.in",
      type: "website",
    },
    twitter: {
      title: "Veritos Infosolutions | e-Governance, Academics & Enterprise IT Solutions",
      description: "Veritos delivers secure e-Governance modules, University Management Systems (UMS), DigiLocker integration, Enterprise ERP, and scalable IT services.",
    },
    alternates: {
      canonical: "https://veritos.in",
    },
  },
  about: {
    title: "About Us | Veritos Infosolutions",
    description: "Learn about Veritos Infosolutions' mission, values, and experience in building reliable IT systems for government institutions and enterprises.",
    keywords: [
      "About Veritos",
      "Veritas Infosolutions Pvt Ltd",
      "eGovernance IT company Mohali",
      "Govt IT solutions provider"
    ],
    openGraph: {
      title: "About Us | Veritos Infosolutions",
      description: "Learn about Veritos Infosolutions' mission, values, and experience in building reliable IT systems for government institutions and enterprises.",
      url: "https://veritos.in/about",
      type: "website",
    },
    twitter: {
      title: "About Us | Veritos Infosolutions",
      description: "Learn about Veritos Infosolutions' mission, values, and experience in building reliable IT systems for government institutions and enterprises.",
    },
    alternates: {
      canonical: "https://veritos.in/about",
    },
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Veritos Infosolutions Pvt Ltd",
      "description": "IT Service Provider specializing in e-Governance, Academics Software, ERP and Managed Infrastructure",
      "url": "https://veritos.in",
      "logo": "https://veritos.in/logo.png",
      "foundingDate": "2013",
      "numberOfEmployees": "50-200",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "D-190, 3rd Floor, Industrial Area Phase 8b",
        "addressLocality": "Mohali",
        "addressRegion": "Punjab",
        "postalCode": "160071",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8968321512",
        "contactType": "Customer Support",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/veritasinfosolutions/",
        "https://twitter.com/Veritos_India",
        "https://www.facebook.com/veritosindia"
      ],
      "knowsAbout": [
        "e-Governance Modules",
        "University Management Systems",
        "DigiLocker Integration",
        "Enterprise Resource Planning",
        "Cloud IT Consultancy"
      ]
    }
  },
  blog: {
    title: "Technology Insights & Case Studies - Veritos Blog",
    description: "Explore the latest developments in e-governance, digital transformation in higher education, secure examination pipelines, and enterprise automation.",
    keywords: [
      "e-governance insights",
      "university digitization",
      "digilocker implementation",
      "enterprise cloud ERP"
    ],
    openGraph: {
      title: "Technology Insights & Case Studies - Veritos Blog",
      description: "Explore the latest developments in e-governance, digital transformation in higher education, secure examination pipelines, and enterprise automation.",
      url: "https://veritos.in/blog",
      type: "website",
    },
    twitter: {
      title: "Technology Insights & Case Studies - Veritos Blog",
      description: "Explore the latest developments in e-governance, digital transformation in higher education, secure examination pipelines, and enterprise automation.",
    },
    alternates: {
      canonical: "https://veritos.in/blog",
    },
  },
};

export function generatePageMetadata(
  page: keyof typeof pageMetadata,
  customMetadata?: Partial<Metadata>
): Metadata {
  const baseMetadata = pageMetadata[page];
  
  return {
    title: baseMetadata.title,
    description: baseMetadata.description,
    keywords: baseMetadata.keywords,
    openGraph: {
      ...siteConfig.openGraph,
      ...baseMetadata.openGraph,
    },
    twitter: {
      ...siteConfig.twitter,
      ...baseMetadata.twitter,
    },
    alternates: baseMetadata.alternates,
    robots: siteConfig.robots,
    verification: siteConfig.verification,
    ...customMetadata,
  };
}

export function generateBlogPostMetadata(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  image?: string
): Metadata {
  const blogUrl = `https://veritos.in/blog/${slug}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title: `${title} - Veritos Insights`,
    description,
    keywords: [
      ...siteConfig.keywords,
      "IT case study",
      "digital transformation"
    ],
    openGraph: {
      ...siteConfig.openGraph,
      title: `${title} - Veritos Insights`,
      description,
      url: blogUrl,
      type: "article",
      publishedTime,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${title} - Veritos Insights`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: siteConfig.robots,
  };
}

export function generateBlogPostStructuredData(
  title: string,
  description: string,
  publishedTime: string,
  slug: string,
  author?: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    datePublished: publishedTime,
    dateModified: publishedTime,
    description,
    url: `https://veritos.in/blog/${slug}`,
    author: {
      "@type": "Person",
      name: author || "Veritos Team",
    },
    publisher: {
      "@type": "Organization",
      name: "Veritos Infosolutions Pvt Ltd",
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://veritos.in/blog/${slug}`,
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  robots: siteConfig.robots,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  verification: siteConfig.verification,
  alternates: siteConfig.alternates,
  category: siteConfig.category,
};
