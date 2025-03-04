import Image from "next/image";
import { Button } from "@/components/ui/button";
import BookOverview from "@/app/(root)/_core/components/BookOverview";
import BookList from "@/app/(root)/_core/components/BookList";
import { sampleBooks } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <BookOverview book={sampleBooks[0]} />
      <BookList
        title="Latest Books"
        books={sampleBooks}
        containerClassName="mt-28"
      />
    </>
  );
}
