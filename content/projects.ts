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
    slug: "governors-house-bayelsa",
    name: "Governor's House, Bayelsa",
    category: "Residential",
    summary:
      "Glass installation and follow-up maintenance at the Governor's House in Bayelsa State.",
    media: [
      {
        id: "gm-main",
        type: "video",
        src: "/case-studies/governors-house-bayelsa/governors-house-bayelsa-glass-installation.mp4",
        poster: "/case-studies/posters/governors-house-bayelsa-glass-installation.jpg",
        alt: "Glass balustrade installation at the Governor's House, Bayelsa",
        caption: "Installation",
      },
      {
        id: "gm-second",
        type: "video",
        src: "/case-studies/governors-house-bayelsa/governors-house-bayelsa-glass-installation-2.mp4",
        poster: "/case-studies/posters/governors-house-bayelsa-glass-installation-2.jpg",
        alt: "A finished glass and steel balcony railing at the Governor's House, Bayelsa",
        caption: "Finished balcony",
      },
      {
        id: "gm-maintenance",
        type: "video",
        src: "/case-studies/governors-house-bayelsa/governors-house-bayelsa-glass-maintenance.mp4",
        poster: "/case-studies/posters/governors-house-bayelsa-glass-maintenance.jpg",
        alt: "Maintenance work on a glass roof at the Governor's House, Bayelsa",
        caption: "Maintenance",
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
