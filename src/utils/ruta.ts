// Antepone el "base" del sitio a cualquier ruta interna (/proyectos/, /images/foto.jpg…)
export function ruta(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}