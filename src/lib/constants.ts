import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://getcvfolio.com',
  author: {
    avatar,
    name: 'Aip Achtarudin',
    headline: 'Fullstack Web Developer',
    username: 'achtarudin',
    location: 'Jakarta, Indonesia',
    pronouns: 'He/Him',
  },
  seo: {
    title: "Aip Achtarudin — Fullstack WebDeveloper",
    description: 'Personal portfolio of Aip Achtarudin, a Fullstack Web Developer based in Jakarta, Indonesia. Clean and aesthetic showcase for projects and skills.',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@achtarudin'
    },
    robots: 'index, follow',
  }
};