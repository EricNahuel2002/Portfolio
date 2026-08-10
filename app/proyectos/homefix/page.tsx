import type { Metadata } from "next";
import { CaseStudyPage } from "@/components/CaseStudyPage";
import { projects } from "@/data/projects";

export function generateMetadata(): Metadata {
  const project = projects.find((p) => p.slug === "homefix");

  return {
    title: "HomeFix",
    description: project?.caseStudy?.overview ?? project?.description,
    openGraph: {
      title: "HomeFix",
      description: project?.caseStudy?.overview ?? project?.description,
    },
  };
}

const project = projects.find((p) => p.slug === "homefix");

export default function ProjectPage() {
  if (!project?.caseStudy) return null;

  return <CaseStudyPage project={project} galleryVariant="carousel" />;
}
