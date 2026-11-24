import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ base: './src/content/proyectos', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(200),
    imagen: z.string(),
    imagenAlt: z.string(),
    tecnologias: z.array(z.string()).min(1),
    demo: z.string().url().optional(),
    codigo: z.string().url().optional(),
    orden: z.number().default(99),
  }),
});

export const collections = { proyectos };