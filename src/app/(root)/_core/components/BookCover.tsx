import { cn } from "@/lib/utils";
import Image from "next/image";
import BookCoverSvg from "@/app/(root)/_core/components/BookCoverSvg";

type BookCoverVariant = "extraSmall" | "small" | "medium" | "regular" | "wide";

const variantStyle: Record<BookCoverVariant, string> = {
  extraSmall: "book-cover_extra_small",
  small: "book-cover_small",
  medium: "book-cover_medium",
  regular: "book-cover_regular",
  wide: "book-cover_wide",
};

interface IProps {
  variant?: BookCoverVariant;
  className?: string;
  coverColor: string;
  coverUrl: string;
}
const BookCover = (props: IProps) => {
  const {
    variant = "regular",
    className,
    coverColor = "#012B48",
    coverUrl = "https://placehold.co/400x600.png",
  } = props;

  return (
    <>
      <div
        className={cn(
          `relative transition-all duration-300`,
          variantStyle[variant],
          className,
        )}
      >
        <BookCoverSvg coverColor={coverColor} />
        <div
          className="absolute z-10"
          style={{ left: "12%", width: "87.5%", height: "88%" }}
        >
          <Image
            src={coverUrl}
            alt="book cover"
            fill
            className="rounded-sm object-fill"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default BookCover;
