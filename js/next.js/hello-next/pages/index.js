import Layout from '../components/MyLayout';
import Link from 'next/link';

function getPosts() {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js' },
    { id: 'winter-is-coming', title: 'Winter is coming' },
    { id: 'another-one', title: 'Another One' },
  ];
}

const PostLink = (props) => (
  <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
    <a>{props.title}</a>
  </Link>
);

export default () => (
  <Layout>
    <h1>Next Blog</h1>
    <ul>
      {getPosts().map((post) => (
        <li key={post.id}>
          <PostLink id={post.id} title={post.title} />
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        h1, a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}
    </style>
  </Layout>
);
