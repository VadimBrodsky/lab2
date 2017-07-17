import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>Next Blog</h1>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="winter-is-coming" title="Winter is coming" />
      <PostLink id="another-one" title="Another One" />
    </ul>
  </Layout>
);
