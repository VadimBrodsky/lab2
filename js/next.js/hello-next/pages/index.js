import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>Next Blog</h1>
    <ul>
      <PostLink title="Hello Next.js" />
      <PostLink title="Winter is coming" />
      <PostLink title="Another One" />
    </ul>
  </Layout>
);
