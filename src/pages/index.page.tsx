import { useRouter } from 'next/router';
import { DefaultPageProps } from '~/comp';

export async function getStaticProps() {
  const pageProps: DefaultPageProps = {
    withoutAuth: true,
  };

  return {
    props: {
      ...pageProps,
    },
  };
}

export default function MainPage() {
  const router = useRouter();

  function routeAction(url: string) {
    router.push(url);
  }

  return (
    <div>
      <h1>main pages</h1>
      <button type="button" onClick={() => routeAction('/admin')}>Go To AdminPage</button>
      <button type="button" onClick={() => routeAction('/member')}>Go To MemberPage</button>
      <button type="button" onClick={() => routeAction('/projectmanager')}>Go To ProjectManagerPage</button>
    </div>
  );
}
