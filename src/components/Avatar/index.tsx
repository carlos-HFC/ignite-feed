import { ComponentProps } from "react";

import style from './style.module.css';

interface AvatarProps extends ComponentProps<'img'> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      {...props}
      className={hasBorder ? style.avatarBorder : style.avatar}
    />
  );
}