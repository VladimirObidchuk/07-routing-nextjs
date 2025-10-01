import NotePreviewDetails from "./NotePreview.client";
import { fetchNoteById } from "@/lib/api";

type Props = {
  params: { id: string };
};

export default async function NoteModal({ params }: Props) {
  const note = await fetchNoteById({ noteId: params.id });

  return <NotePreviewDetails note={note} />;
}
