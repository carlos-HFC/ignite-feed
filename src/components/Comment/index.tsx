import { ThumbsUp, Trash } from "@phosphor-icons/react";

import { Avatar } from "../Avatar";

import style from './style.module.css';

export function Comment() {
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

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}