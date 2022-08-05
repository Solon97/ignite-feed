import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {
  return (
    <section>
      <Header/>
      <Post
        title="Primeiro Post"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        author="Solon Barbosa"
      />
    </section>
  )
}