export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const target = document.getElementById(sectionId);
  if (!target) {
    console.warn(`Seção "${sectionId}" não encontrada.`);
    return;
  }

  const headerHeight = 64;
  const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

  console.log("Scroll para:", sectionId, "->", top);

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}
