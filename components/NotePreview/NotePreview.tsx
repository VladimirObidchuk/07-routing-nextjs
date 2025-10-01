"use client";

import { Note } from "@/types/note";
import css from "./NotePreview.module.css";
import Button from "../Button/Button";

type Props = {
  note: Note;
};

const NotePreview = ({ note }: Props) => {
  return (
    <div className={css.container}>
      <Button typeBtn="button" value="<- Back" className={css.backBtn} />
      <div className={css.header}>
        <h2>{note.title}</h2>
      </div>
      <div className={css.content}>
        <p className={css.content}>{note.content}</p>
        <p className={css.tag}>Tag: {note.tag}</p>
      </div>
    </div>
  );
};

export default NotePreview;
