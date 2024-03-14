import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./styles/app.module.css";

import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/carlos-hfc.png",
      name: "Carlos Faustino",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-03-14 13:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/carlos-hfc.png",
      name: "Carlos Faustino",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-03-14 13:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          {posts.map(item => (
            <Post
              key={item.id}
              {...item}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
