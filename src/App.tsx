import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import style from "./styles/app.module.css";

import "./styles/global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}
