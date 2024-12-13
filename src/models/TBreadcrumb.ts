import { EPrivatePaths, EPublicPaths } from './TRoute.ts';

export type TBreadcrumb = {
  params?: string;
  label: string;
  path: EPublicPaths | EPrivatePaths;
};
