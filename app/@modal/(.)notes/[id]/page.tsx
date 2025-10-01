import { fetchNoteById } from "@/lib/api";
import NotePreviewDetails from "./NotePreview.client";

type Props = {
  params: { id: string };
};

export default async function NoteModal({ params }: Props) {
  const note = await fetchNoteById({ noteId: params.id });

  return <NotePreviewDetails note={note} />;
}
