import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { useState } from "react";

import { Avatar } from "../Avatar";

import style from "./style.module.css";

interface CommentProps {
  content: string;
  onDeleteComment(comment: string): void;
}

export function Comment(props: Readonly<CommentProps>) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    props.onDeleteComment(props.content);
  }

  function handleLikeComment() {
    setLikeCount(prev => prev + 1);
  }

  return (
    <div className={style.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/carlos-hfc.png"
      />

      <div className={style.commentBox}>
        <div className={style.commentContent}>
          <header>
            <div className={style.authorAndTime}>
              <strong>Carlos Faustino</strong>
              <time
                title="14 de Março, às 13h"
                dateTime="2024-03-14 13:00:00"
              >
                Cerca de 2h atrás
              </time>
            </div>

            <button
              onClick={handleDeleteComment}
              title="Deletar comentário"
            >
              <Trash size={24} />
            </button>
          </header>

          <p>{props.content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
