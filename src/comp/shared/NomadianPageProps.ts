import { Role } from '~/role';

interface DefaultPageProps {
  withoutLayout?: boolean,
  withoutAuth?: boolean
}

interface NomadianPageProps extends DefaultPageProps {
  kollectieType: keyof typeof Role;
}

export type { DefaultPageProps, NomadianPageProps };
