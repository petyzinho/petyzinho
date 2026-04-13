import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.isasaude.com";

  const routes = [
    "",
    "/para-profissionais",
    "/para-pacientes",
    "/para-parceiros",
    "/trabalhe-conosco",
    "/como-funciona",
    "/sobre",
    "/contato",
    "/busca",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
