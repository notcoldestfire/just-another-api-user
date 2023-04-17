import {server} from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import {useRouter} from 'next/router'

const article = ({ article }) => {
  // const router = useRouter();
  // const {id} = router.query;
  function handleClick() {
    console.log('Button clicked');
  }

  return (
    <>
      <Meta title={article.title} description={article.genre} />
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p>{article.genre}</p>
      <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Pay
      </button>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    }
  }
}

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({params: {id: id.toString()}}))

  return {
    paths,
    fallback: false
  }
}


// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map(article => article.id);
//   const paths = ids.map(id => ({params: {id: id.toString()}}))

//   return {
//     paths,
//     fallback: false
//   }
// }

export default article