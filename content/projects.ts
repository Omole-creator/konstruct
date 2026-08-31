export type ProjectCategory = "Residential" | "Commercial" | "Industrial";

export interface ProjectMedia {
  id: string;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  summary: string;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "angola-embassy",
    name: "Angola Embassy",
    category: "Commercial",
    summary:
      "A glass atrium roof that needed restoration work, handled in stages from assessment to scaffolding to the maintenance itself.",
    media: [
      {
        id: "ae-before",
        type: "image",
        src: "/case-studies/angola-embassy/angola-embassy-glass-atrium-before.jpg",
        alt: "The Angola Embassy glass atrium roof before restoration work began",
        caption: "Before work",
      },
      {
        id: "ae-progress",
        type: "image",
        src: "/case-studies/angola-embassy/angola-embassy-glass-atrium-progress.jpg",
        alt: "Scaffolding going up around the Angola Embassy glass atrium during restoration",
        caption: "Progress",
      },
      {
        id: "ae-maintenance",
        type: "image",
        src: "/case-studies/angola-embassy/angola-embassy-glass-atrium-maintenance.jpg",
        alt: "Our team on scaffolding carrying out maintenance work on the glass roof",
        caption: "Maintenance",
      },
    ],
  },
  {
    slug: "staircase-project",
    name: "Staircase Glass Railing",
    category: "Residential",
    summary:
      "A staircase glass railing installation, from the work in progress to the finished result.",
    media: [
      {
        id: "sc-progress",
        type: "video",
        src: "/case-studies/staircase-project/staircase-project-progress.mp4",
        poster: "/case-studies/posters/staircase-project-progress.jpg",
        alt: "Work in progress on a glass staircase railing installation",
        caption: "Work in progress",
      },
      {
        id: "sc-outcome",
        type: "video",
        src: "/case-studies/staircase-project/staircase-project-outcome.mp4",
        poster: "/case-studies/posters/staircase-project-outcome.jpg",
        alt: "The finished glass staircase railing",
        caption: "Outcome",
      },
    ],
  },
  {
    slug: "shower-glass",
    name: "Shower Glass Installation",
    category: "Residential",
    summary:
      "Framed and frameless shower glass fitted for a client bathroom, sealed to handle daily water exposure.",
    media: [
      {
        id: "sg-framed-door",
        type: "image",
        src: "/case-studies/shower-glass/shower-glass-framed-door.jpg",
        alt: "A framed shower glass door installed by Designs & Konstruct",
        caption: "Framed shower door",
      },
      {
        id: "sg-framed-install",
        type: "video",
        src: "/case-studies/shower-glass/shower-glass-framed-install.mp4",
        poster: "/case-studies/posters/shower-glass-framed-install.jpg",
        alt: "Installation of a framed shower glass door",
        caption: "Framed installation",
      },
      {
        id: "sg-frameless-door",
        type: "video",
        src: "/case-studies/shower-glass/shower-glass-frameless-door.mp4",
        poster: "/case-studies/posters/shower-glass-frameless-door.jpg",
        alt: "Installation of a frameless shower glass door",
        caption: "Frameless installation",
      },
    ],
  },
  {
    slug: "shower-doors",
    name: "Shower Doors",
    category: "Residential",
    summary:
      "Fix and swing panel shower doors fitted for a clean, low-maintenance bathroom finish.",
    media: [
      {
        id: "sd-fix-and-swing",
        type: "image",
        src: "/case-studies/shower-doors/shower-doors-fix-and-swing-panel.jpg",
        alt: "A fix and swing panel shower door installed by Designs & Konstruct",
        caption: "Fix and swing panel door",
      },
    ],
  },
  {
    slug: "glass-railing",
    name: "Glass Railing Balustrade",
    category: "Residential",
    summary:
      "A frameless glass balustrade, from spigot installation to the finished railing.",
    media: [
      {
        id: "gr-prep",
        type: "image",
        src: "/case-studies/glass-railing/glass-railing-installation-prep.jpg",
        alt: "Stainless steel spigots being fitted ahead of a glass balustrade installation",
        caption: "Installation prep",
      },
      {
        id: "gr-outcome",
        type: "video",
        src: "/case-studies/glass-railing/glass-railing-outcome.mp4",
        poster: "/case-studies/posters/glass-railing-outcome.jpg",
        alt: "The finished frameless glass balustrade railing",
        caption: "Outcome",
      },
    ],
  },
];

export interface CarouselItem extends ProjectMedia {
  projectName: string;
  projectSlug: string;
}

export const featuredCarouselItems: CarouselItem[] = projects.flatMap((project) =>
  project.media.map((item) => ({
    ...item,
    projectName: project.name,
    projectSlug: project.slug,
  })),
);
