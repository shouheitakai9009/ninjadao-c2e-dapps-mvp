import { Header } from './components/organisms/Header'
import { Earn } from './components/organisms/Earn'
import { Throwing } from './components/organisms/Throwing'
import { Profile } from './components/organisms/Profile'

export const App = () => (
  <article className="app">
    <Header />
    <Earn />
    <section className="app--flexArea">
      <Throwing />
      <Profile />
    </section>
  </article>
)