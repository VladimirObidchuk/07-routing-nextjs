"use client";

import Loading from "@/app/loading";
import NoteDetails from "@/components/NoteDetails/NoteDetails";
import { fetchNoteById } from "@/lib/api";
import { Note } from "@/types/note";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import Error from "./error";

const Details = () => {
  const params = useParams();
  const noteId = params.id as string;

  const { data, isLoading, isError, error } = useQuery<Note>({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById({ noteId }),
    enabled: !!noteId,
  });
  if (isLoading) return <Loading />;
  if (isError) return <Error error={error} value="note details" />;
  if (!data) return <p>No note found</p>;
  return (
    <>
      <NoteDetails data={data} />
    </>
  );
};

export default Details;
