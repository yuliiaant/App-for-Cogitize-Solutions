import React from "react";
import './Button.scss';
import { Position } from "@/app/utils/types";

type Props = {
  title: string,
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
  handleButtonClick?: () => void;
  tempPosition?: Position | null;
}

export const Button: React.FC<Props> = ({ title, handleSubmit }) => {
  return (
    // @ts-ignore
    <button type="submit" className="page-button" onSubmit={(event) => handleSubmit(event)}>
      {title}
    </button>
  );
}