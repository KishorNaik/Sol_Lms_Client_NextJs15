import { IBook } from "@/lib/types";
import Link from "next/link";
import BookCover from "@/app/(root)/_core/components/BookCover";
import { cn } from "@/lib/utils";
import { If } from "@yookue/react-condition";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface IProps {
  item: IBook;
}

const BookCard = (props: IProps) => {
  const { item } = props;
  const { id, title, genre, coverColor, coverUrl, isLoanedBook } = item;

  return (
    <>
      <li className={cn(isLoanedBook && `xs:w-52 w-full`)}>
        <Link href={`/books/${id}`}>
          <BookCover
            coverColor={coverColor}
            coverUrl={coverUrl}
            className={cn(isLoanedBook && `w-full flex flex-col items-center`)}
          />
          <div className={cn(`mt-4`, !isLoanedBook && `xs:max-w-40 max-w-28`)}>
            <p className="book-title">{title}</p>
            <p className="book-genre">{genre}</p>
          </div>

          <If condition={isLoanedBook}>
            <If.Then>
              <div className="mt-3 w-full">
                <div className="book-loaned">
                  <Image
                    src="/icons/calendar.svg"
                    alt="calendar"
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                  <p className="text-light-100">11 days left to return</p>
                </div>
                <Button className="book-btn text-blue-500">
                  Download receipt
                </Button>
              </div>
            </If.Then>
          </If>
        </Link>
      </li>
    </>
  );
};

export default BookCard;
