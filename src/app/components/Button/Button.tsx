import React from "react";
import './Button.scss';

type Props = {
  title: string,
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
  handleButtonClick?: () => void;
}

export const Button: React.FC<Props> = ({ title, handleSubmit }) => {
  return (
    // @ts-ignore
    <button type="submit" className="page-button" onSubmit={(event) => handleSubmit(event)}>
      {title}
    </button>
  );
}