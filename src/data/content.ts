export const firmInfo = {
  name: "Muntaha Law Consultants",
  shortName: "MLC",
  founder: "Shahin Shah",
  founderTitle: "Advocate High Court",
  founded: 2003,
  email: "postshaheen@gmail.com",
  whatsapp: "+92 331 33 33 131",
  website: "https://www.muntahalc.com",
  websiteDisplay: "www.muntahalc.com",
  address: {
    line1: "Office # 3, 2nd Floor, Bilal Tower",
    line2: "Opp. Sarki Gate, Circular Road",
    city: "Peshawar City",
    country: "Pakistan",
  },
  linkedinName: "Shahin Shah",
  linkedin: "https://www.linkedin.com",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM PKT",
} as const;

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Practice Areas", to: "/practice-areas" },
  { label: "Our Team", to: "/team" },
  { label: "Contact", to: "/contact" },
] as const;

export const teamMembers = [
  {
    id: "shaheen-shah",
    name: "Shahin Shah",
    title: "Advocate High Court",
    subtitle: "Founder · Former Drug Court Prosecutor",
    image: "/team/shaheen-shah.jpeg",
    imagePosition: "center 15%",
    bio: "With over two decades of experience, Mr. Shah established Muntaha Law Consultants in 2003 and has built one of Pakistan's most focused practices in pharmaceutical and regulatory law. His career began as a Prosecutor in the Drug Court, giving him rare insight into enforcement standards and prosecution strategy — knowledge that continues to inform every matter the firm handles.",
    fullBio: "Shahin Shah is an Advocate of the High Court and Founder of Muntaha Law Consultants. After serving as a Prosecutor in the Drug Court, he transitioned to private practice with a singular focus on pharmaceutical and regulatory law. Over twenty years, he has represented manufacturers, importers, and distributors before DRAP, Drug Courts, Provincial Quality Control Boards, and the High Courts. His dual perspective — prosecution and defense — is the firm's defining strategic advantage.",
    expertise: ["Drug Court Litigation", "DRAP Registration and Appeals", "GMP Compliance", "Pricing Disputes", "Enforcement Defense"],
  },
  {
    id: "amna-raza",
    name: "Amna Raza",
    title: "Senior Associate",
    subtitle: "DRAP and Regulatory Affairs",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&auto=format&fit=crop",
    bio: "Amna leads the firm's DRAP registration and licensing practice, advising manufacturers and importers on product registration, pricing committee matters, and compliance with Pakistan's drug regulatory framework. She represents clients before the Registration Board and Appellate Board nationwide.",
    fullBio: "Amna Raza serves as Senior Associate and heads the firm's DRAP regulatory practice. She advises clients on product registration pathways, pricing committee proceedings, and compliance frameworks under Pakistan's drug laws. Amna regularly appears before DRAP's Registration Board and Appellate Board on behalf of domestic and international pharmaceutical clients.",
    expertise: ["Product Registration", "Pricing Committee", "Appellate Board", "Import Permits", "Label Compliance"],
  },
  {
    id: "hassan-malik",
    name: "Hassan Malik",
    title: "Associate",
    subtitle: "Drug Court Litigation",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80&auto=format&fit=crop",
    bio: "Hassan specializes in Drug Court litigation and enforcement defense, representing clients in prosecutions, seizures, and quality control disputes. His practice spans Provincial Quality Control Boards and appellate proceedings before the High Courts.",
    fullBio: "Hassan Malik focuses on Drug Court litigation and regulatory enforcement defense. He represents clients facing prosecution, product seizures, and quality control actions across Pakistan's provincial boards. Hassan also handles judicial review and appellate matters arising from regulatory decisions.",
    expertise: ["Drug Court Defense", "Seizure Actions", "QC Board Proceedings", "Appellate Litigation", "Judicial Review"],
  },
  {
    id: "sara-khawaja",
    name: "Sara Khawaja",
    title: "Legal Advisor",
    subtitle: "Compliance and Licensing",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&auto=format&fit=crop",
    bio: "Sara advises nutraceutical, herbal, and homeopathic clients on product enlistment, labeling compliance, and contract manufacturing agreements. She supports manufacturers through licensing applications and regulatory gap analysis for new market entries.",
    fullBio: "Sara Khawaja advises clients in the nutraceutical, herbal, and homeopathic sectors on licensing, product enlistment, and labeling compliance. She drafts contract manufacturing and distribution agreements and conducts regulatory gap analyses for companies entering the Pakistani market.",
    expertise: ["Product Enlistment", "Labeling Compliance", "Manufacturing Agreements", "Herbal Licensing", "Market Entry Strategy"],
  },
] as const;

/** Placeholder client names — replace with real logos before launch */
export const clients = [
  { id: "medipharm", name: "MediPharm Industries", abbr: "MPI", sector: "Pharmaceutical", color: "#1a4a6e" },
  { id: "al-hikmah", name: "Al-Hikmah Laboratories", abbr: "AHL", sector: "Pharmaceutical", color: "#b08c4f" },
  { id: "nutrilife", name: "NutriLife Pakistan", abbr: "NLP", sector: "Nutraceutical", color: "#2d5a4a" },
  { id: "herbalcare", name: "HerbalCare Manufacturing", abbr: "HCM", sector: "Herbal", color: "#4a3d6b" },
  { id: "pharmadist", name: "PharmaDist International", abbr: "PDI", sector: "Distribution", color: "#1e4d5c" },
  { id: "crescent", name: "Crescent Imports Ltd.", abbr: "CIL", sector: "Import/Export", color: "#5c3d2e" },
  { id: "homeomed", name: "HomeoMed Clinics Group", abbr: "HMC", sector: "Homeopathic", color: "#3d5266" },
  { id: "sindh-quality", name: "Sindh Quality Pharma", abbr: "SQP", sector: "Manufacturing", color: "#4a5568" },
] as const;

export const practiceAreas = [
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Law",
    icon: "Pill" as const,
    summary:
      "Comprehensive counsel on licensing, product registration, and import/export permits. We represent manufacturers and distributors before DRAP and Drug Courts in pricing disputes, GMP compliance matters, and M&A transactions involving pharmaceutical licensing agreements.",
    details: [
      "Drug registration and renewal before DRAP",
      "Import and export permit applications",
      "Drug Court litigation and enforcement defense",
      "Pricing committee disputes and appeals",
      "GMP compliance advisory and audit preparation",
      "Pharmaceutical M&A and licensing agreements",
    ],
    overview: "Our pharmaceutical practice covers the full regulatory lifecycle — from initial product registration and licensing through to complex Drug Court litigation and M&A transactions. We represent manufacturers, importers, and distributors before DRAP, Drug Courts, and Provincial Quality Control Boards across Pakistan.",
  },
  {
    id: "nutraceuticals",
    title: "Nutraceuticals Law",
    icon: "Leaf" as const,
    summary:
      "Guidance on product enlistment, registration pathways, and labeling compliance for dietary supplements and functional foods. We resolve classification disputes and draft contract manufacturing and distribution agreements tailored to Pakistan's regulatory framework.",
    details: [
      "Product enlistment and registration strategy",
      "Labeling and health-claim compliance review",
      "Product classification dispute resolution",
      "Contract manufacturing agreements",
      "Distribution and franchise agreements",
      "Regulatory gap analysis for new product launches",
    ],
    overview: "Nutraceutical and dietary supplement companies face unique classification and labeling challenges under Pakistan's regulatory framework. We guide clients through product enlistment, health-claim compliance, and dispute resolution before DRAP and allied regulatory bodies.",
  },
  {
    id: "herbal",
    title: "Herbal Products Law",
    icon: "Sprout" as const,
    summary:
      "Specialized representation for herbal medicine manufacturers navigating licensing requirements, product registration, and classification guidance. We defend against enforcement actions and assist with export documentation for international markets.",
    details: [
      "Herbal manufacturing license applications",
      "Product registration and formulation review",
      "Classification and scheduling guidance",
      "Enforcement and seizure defense",
      "Export documentation and compliance",
      "Provincial quality control board representation",
    ],
    overview: "Herbal medicine manufacturers operate within a distinct regulatory framework requiring specialized licensing, product registration, and classification guidance. We defend against enforcement actions and assist with export documentation for international markets.",
  },
  {
    id: "homeopathic",
    title: "Homeopathic Law",
    icon: "Droplets" as const,
    summary:
      "Dedicated counsel for homeopathic manufacturers, practitioners, and clinics on licensing, product registration, and quality control standards. We provide litigation support and ensure advertising and promotional materials meet regulatory requirements.",
    details: [
      "Homeopathic manufacturing licenses",
      "Product registration and potency claims",
      "Quality control dispute resolution",
      "Advertising and promotional compliance",
      "Clinic and practitioner licensing support",
      "Drug Court and appellate litigation",
    ],
    overview: "We provide dedicated counsel for homeopathic manufacturers, practitioners, and clinics — covering licensing, product registration, quality control standards, and advertising compliance across Pakistan.",
  },
  {
    id: "drap",
    title: "DRAP Matters",
    icon: "Scale" as const,
    summary:
      "Full-spectrum representation before DRAP's Registration Board, Pricing Committee, and Appellate Board. From routine regulatory filings to complex Drug Court litigation and constitutional challenges before the High Courts — we handle matters at every level.",
    details: [
      "Registration Board hearings and appeals",
      "Pricing Committee representation",
      "Appellate Board proceedings",
      "Drug Court prosecution and defense",
      "Judicial review petitions",
      "Constitutional challenges before High Courts",
    ],
    overview: "DRAP Matters encompasses our full-spectrum representation before the Drug Regulatory Authority of Pakistan — from routine filings to complex appellate proceedings and constitutional challenges before the High Courts.",
  },
] as const;

export const differentiators = [
  {
    value: "20+",
    label: "Years of Focused Pharmaceutical Law Practice",
  },
  {
    value: "Nationwide",
    label: "Representation Before DRAP and Drug Courts",
  },
  {
    value: "Dual",
    label: "Prosecution and Defense Experience",
  },
  {
    value: "Trusted",
    label: "By Manufacturers, Importers and Distributors",
  },
] as const;

export const formSubjects = [
  "General Inquiry",
  "Pharmaceutical Law",
  "Nutraceuticals Law",
  "Herbal Products Law",
  "Homeopathic Law",
  "DRAP Matters",
  "Schedule a Consultation",
] as const;

/** Unsplash architectural images — desaturated via CSS */
export const images = {
  hero:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&auto=format&fit=crop",
  about:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&auto=format&fit=crop",
  founderPortrait: "/team/shaheen-shah.jpeg",
  cta:
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&auto=format&fit=crop",
} as const;
