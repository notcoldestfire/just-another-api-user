import {server} from '../../../config'
import Link from 'next/link'
import Meta from '../../../components/Meta'
import {useRouter} from 'next/router'

const article = ({ article }) => {
  function handleClick() {
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer <API_KEY>'
      },
      body: JSON.stringify({
        source: {type: 'wallet', id: '1015154892'},
        destination: {type: 'wallet', id: '1015155127'},
        amount: {amount: '1', currency: 'USD'},
        idempotencyKey: '<IDEM_KEY>'
      })
    };

    fetch('https://api-sandbox.circle.com/v1/transfers', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }

  return (
    <>
      <Meta title={article.title} description={article.genre} />
      <h1 className="text-4xl font-bold">{article.title}</h1>
      <p>{article.genre}</p>
      <button onClick={handleClick} className="btn btn-info">Pay</button>
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