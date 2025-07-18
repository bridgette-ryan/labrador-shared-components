import { MouseEventHandler, FormEventHandler, ChangeEventHandler } from "react";

export type InteractiveProps = {
  onChange?: ChangeEventHandler | FormEventHandler;
  onClick?: MouseEventHandler;
};

export default InteractiveProps;
