import Head from 'next/head'
import ArticleList from '../components/ArticleList';

export default function Home({ articles }) {
  console.log(articles);
  return (
    <div>
      <Head>
        <title>React Title</title>
        <meta name='keywords' content='web dev, programming'></meta>
      </Head>
      <h1>Welcome to Home Page</h1>

      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    }
  }
}