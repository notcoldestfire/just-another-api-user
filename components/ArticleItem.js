import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

const Articleitem = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3 className="font-bold">{article.title} &rarr;</h3>
        <p>{article.genre}</p>
      </a>
    </Link>
  )
}

export default Articleitem