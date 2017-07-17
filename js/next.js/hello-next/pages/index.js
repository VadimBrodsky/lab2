import Layout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'winter-is-coming', title: 'Winter is coming' },
    { id: 'another-one', title: 'Another One' },
  ];
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>
      {`
        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
          font-family: 'Arial';
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </li>
);

export default () => (
  <Layout>
    <h1>Next Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post} />
      ))}
    </ul>
    <style jsx>
      {`
        h1 {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }
      `}
    </style>
  </Layout>
);
