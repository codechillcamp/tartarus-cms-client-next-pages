import { useRouter } from 'next/router';

type Props = {};

export default function Home({ ...props }: Props) {
  const router = useRouter();
  router.push('/auth/login');
  return <></>;
}
