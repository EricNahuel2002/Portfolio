import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { Carousel } from "@/components/Carousel";
import { projects } from "@/data/projects";

export function generateMetadata(): Metadata {
  const project = projects.find((p) => p.slug === "adivina-la-palabra");

  return {
    title: "Adivina la palabra",
    description: project?.caseStudy?.overview ?? project?.description,
    openGraph: {
      title: "Adivina la palabra",
      description: project?.caseStudy?.overview ?? project?.description,
    },
  };
}

const project = projects.find((p) => p.slug === "adivina-la-palabra");

export default function ProjectPage() {
  if (!project?.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <CaseStudyPage
      project={project}
      showBadge={false}
      gallery={
        <Carousel
          images={caseStudy.screenshots.slice(1)}
          title="Imágenes del proyecto"
          alt={`Captura de ${project.title}`}
        />
      }
    />
  );
}
