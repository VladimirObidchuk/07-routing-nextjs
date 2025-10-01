"use client";

import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";

type Props = {
  note: Note;
};

const NotePreviewDetails = ({ note }: Props) => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <NotePreview data={note} onClose={handleClose} />
    </Modal>
  );
};

export default NotePreviewDetails;
