import Link from 'next/link'
import PostList from '../components/PostList'

export default () =>
  <div>
    Hello World.{' '}
    <PostList />
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
