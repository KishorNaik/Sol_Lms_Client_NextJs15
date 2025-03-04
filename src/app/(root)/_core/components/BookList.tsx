import { IBook } from "@/lib/types";
import { For } from "@yookue/react-condition";
import BookCard from "@/app/(root)/_core/components/BookCard";

interface IProps {
  title: string;
  books: Array<IBook>;
  containerClassName?: string;
}

const BookList = (props: IProps) => {
  const { title, books, containerClassName } = props;

  return (
    <>
      <section className={containerClassName}>
        <h2 className="font-bebas-neue text-4xl text-light-100">{title}</h2>
        <ul className="book-list">
          <For
            of={books}
            render={(item: IBook, index: number) => {
              return (
                <>
                  <BookCard key={item.title} item={item} />
                </>
              );
            }}
          />
        </ul>
      </section>
    </>
  );
};

export default BookList;
