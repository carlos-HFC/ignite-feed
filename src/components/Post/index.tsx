import { format, formatDistanceToNow } from "date-fns";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";

import style from "./style.module.css";

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

const COMMENTS = ["Post muito bacana"];

export function Post(props: Readonly<PostProps>) {
  const [comments, setComments] = useState(COMMENTS);
  const [commentText, setCommentText] = useState("");

  const publishedDateFormat = format(
    props.publishedAt,
    "dd 'de' MMMM 'às' HH'h'",
  );

  const publishedDateRelative = formatDistanceToNow(props.publishedAt, {
    addSuffix: true,
  });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!commentText.trim()) return;

    setComments(prev => [...prev, commentText]);
    setCommentText("");
  }

  function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setCommentText(event.target.value);
  }

  function handleCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!!");
  }

  function handleDeleteComment(item: string) {
    const filteredComments = comments.filter(comment => comment !== item);

    setComments(filteredComments);
  }

  const IS_NEW_COMMENT_EMPTY = commentText.trim().length === 0;

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
          if (item.type === "paragraph") return <p>{item.content}</p>;
          if (item.type === "link")
            return (
              <p>
                <a>{item.content}</a>
              </p>
            );
        })}
      </div>

      <form
        className={style.commentForm}
        onSubmit={handleSubmit}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={commentText}
          onChange={handleCommentChange}
          onInvalid={handleCommentInvalid}
          required
        />

        <footer>
          <button
            type="submit"
            disabled={IS_NEW_COMMENT_EMPTY}
          >
            Publicar
          </button>
        </footer>
      </form>

      {comments.length > 0 && (
        <div className={style.commentList}>
          {comments.map(item => (
            <Comment
              key={item}
              content={item}
              onDeleteComment={handleDeleteComment}
            />
          ))}
        </div>
      )}
    </article>
  );
}
