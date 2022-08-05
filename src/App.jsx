import "./global.css";

import styles from './App.module.css'

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    author: {
      avatarUrl: "https://github.com/Solon97.png",
      name: "Solon Barbosa",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    tags: ["novoprojeto", "nlw", "rocketseat"],
    publishedAt: new Date('2022-07-15  20:00:00'),
  },
  {
    author: {
      avatarUrl: "https://github.com/rodrigobranas.png",
      name: "Rodrigo Branas",
      role: "Educador"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'As inscrições para o Curso de Clean Code e Clean Architecture estão abertas  🚀' },
      { type: 'link', content: 'branas.io' },
    ],
    tags: ["CCCA", "branas.io"],
    publishedAt: new Date('2022-08-01 20:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <section className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            const postKey = `${post.content}-${post.author.name}-${post.publishedAt.getDate()}`

            return <Post
            key={postKey}
            author={post.author}
            content={post.content}
            tags={post.tags}
            publishedAt={post.publishedAt}
            />
          })} 
        </main>
      </section>
    </div>
  )
}