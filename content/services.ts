export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  included: string[];
  useCases: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    slug: "installation-fitting",
    name: "Installation & Fitting",
    shortDescription:
      "Structural glass, doors, and windows fitted so they sit right the first time.",
    description:
      "This is the core of what we do. We fit structural glass, window frames, glass doors, curtain walls, skylights, storefronts, shower enclosures, and mirrors, on site, measured and installed to hold for years, not months.",
    included: [
      "Structural glass panels and partitions",
      "Window frames and glass doors",
      "Curtain walls and storefronts",
      "Skylights and roof glazing",
      "Shower enclosures and decorative mirrors",
    ],
    useCases: [
      "New homes and apartment fit-outs",
      "Office and retail storefronts",
      "Hotels and hospitality entrances",
      "Balcony and terrace glazing",
    ],
    image: "/images/frameless-glass-shower-enclosure.png",
    imageAlt: "Frameless glass shower enclosure with skylight, an example of precision installation and fitting",
  },
  {
    slug: "custom-cutting-fabrication",
    name: "Custom Cutting & Fabrication",
    shortDescription:
      "Tempered, laminated, insulated, acoustic, and safety glass, cut to your exact drawing.",
    description:
      "Every job starts with a measurement. We cut, edge, and shape tempered, laminated, insulated, acoustic, and safety glass to the size and finish your project calls for, so what arrives on site fits without a fight.",
    included: [
      "Precision measuring and cutting",
      "Edge polishing and beveling",
      "Tempered and laminated safety glass",
      "Insulated and acoustic glass units",
      "Shaping for curves and custom openings",
    ],
    useCases: [
      "Custom shower and staircase panels",
      "Glass table tops and shelving",
      "Angled or non-standard window openings",
      "Sound-sensitive rooms needing acoustic glass",
    ],
    image: "/images/marble-bathroom-glass-shower.webp",
    imageAlt: "Precision-cut glass shower panel in a marble bathroom, an example of custom fabrication work",
  },
  {
    slug: "repair-replacement",
    name: "Repair & Replacement",
    shortDescription:
      "A cracked pane or a failed seal, fixed without tearing up the rest of the frame.",
    description:
      "Glass fails at the worst times. We remove damaged panes safely, replace them, re-seal the frame, and check the rest of the installation while we're there, so the same problem doesn't come back in six months.",
    included: [
      "Emergency glass replacement",
      "Safe removal of damaged panes",
      "Structural re-sealing",
      "Scheduled maintenance visits",
    ],
    useCases: [
      "Storm or impact damage",
      "Broken shopfront or office glass",
      "Aging atrium and skylight roofs due for restoration",
      "Routine maintenance for buildings under a service plan",
    ],
    image: "/case-studies/angola-embassy/angola-embassy-glass-atrium-maintenance.jpg",
    imageAlt: "Our team on scaffolding carrying out maintenance work on a glass atrium roof at the Angola Embassy",
  },
  {
    slug: "sealing-weatherproofing",
    name: "Sealing & Weatherproofing",
    shortDescription:
      "Glass that keeps water out and air where it belongs.",
    description:
      "An installation is only as good as its seal. We use sealants and structural adhesives built for the job, so your shower enclosure doesn't leak and your curtain wall doesn't let rain in during the next storm.",
    included: [
      "High-grade sealants and gaskets",
      "Structural glazing adhesives",
      "Watertight checks on wet areas",
      "Airtight checks on external openings",
    ],
    useCases: [
      "Shower and wet room enclosures",
      "Curtain walls exposed to rain and wind",
      "Rooftop skylights",
      "Coastal or high-humidity properties",
    ],
    image: "/images/glass-steam-shower-enclosure.jpg",
    imageAlt: "A fully sealed glass steam shower enclosure, showing a watertight installation",
  },
  {
    slug: "blueprint-architectural-support",
    name: "Blueprint & Architectural Support",
    shortDescription:
      "We read the drawing before we cut the glass.",
    description:
      "Send us your plans before you place a glass order. We read the drawings, check what the building code requires, and tell you which glass type and framing system will actually hold up in your building.",
    included: [
      "Reading architectural plans",
      "Building code and compliance checks",
      "Glass type recommendations",
      "Framing and mounting system advice",
    ],
    useCases: [
      "Architects specifying a new build",
      "Developers wanting a second opinion before ordering",
      "Government and institutional buildings with strict compliance needs",
      "Renovations where the original glazing plan no longer fits",
    ],
    image: "/images/structural-glass-roof-kitchen-extension.jpg",
    imageAlt: "A structural glass roof extension, the kind of project that starts with architectural drawings",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
