"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import Details from "@/app/notes/[id]/NoteDetails.client";

type Props = {
  params: { id: string };
};

export default function NoteModal({ params }: Props) {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };

  return (
    <Modal onClose={handleClose}>
      <Details onClose={handleClose} />
    </Modal>
  );
}
