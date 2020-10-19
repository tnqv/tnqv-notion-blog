import ExtLink from './ext-link'
import { Text } from 'atomize'

export default () => (
  <>
    <footer>
      <Text>Blog designed and developed by TNQV</Text>
      <Text>
        Templete using{' '}
        <ExtLink href="https://github.com/ijjk/notion-blog">
          notion-blog
        </ExtLink>
      </Text>
      <Text>
        Layout component from{' '}
        <ExtLink href="https://atomizecode.com/">atomizecode</ExtLink>
      </Text>
    </footer>
  </>
)
