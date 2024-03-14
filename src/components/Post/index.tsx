import { format, formatDistanceToNow } from 'date-fns';

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import style from './style.module.css';

interface PostProps {
  id: string | number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: string;
    content: string;
  }[];
  publishedAt: Date;
}

export function Post(props: Readonly<PostProps>) {
  const publishedDateFormat = format(props.publishedAt, "dd 'de' MMMM 'às' HH'h'");
  const publishedDateRelative = formatDistanceToNow(props.publishedAt, {
    addSuffix: true
  });

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar src={props.author.avatarUrl} />

          <div className={style.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormat}
          dateTime={props.publishedAt.toISOString()}
        >
          Publicado {publishedDateRelative}
        </time>
      </header>

      <div className={style.content}>
        {props.content.map(item => {
          if (item.type === 'paragraph') return <p>{item.content}</p>
          if (item.type === 'link') return <p><a>{item.content}</a></p>
        })}
      </div>

      <form className={style.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={style.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}