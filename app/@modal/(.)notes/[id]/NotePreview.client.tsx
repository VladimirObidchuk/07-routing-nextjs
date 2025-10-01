"use client";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { Note } from "@/types/note";
import { useRouter } from "next/navigation";

import React from "react";

type Props = {
  note: Note;
};
const NotePreviewDetails = ({ note }: Props) => {
  const router = useRouter();

  const handleClouse = () => {
    router.back();
  };
  return (
    <Modal onClose={handleClouse}>
      <NotePreview data={note} onClose={handleClouse} />
    </Modal>
  );
};

export default NotePreviewDetails;
