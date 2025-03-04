import Header from "@/app/(root)/_core/components/Header";

interface IProps {
  children: React.ReactNode;
}
const RootLayout = (props: IProps) => {
  const { children } = props;
  return (
    <>
      <main className="root-container">
        <div className="mx-auto max-w-7xl">
          <Header />
          <div className="mt-20 pb-20">{children}</div>
        </div>
      </main>
    </>
  );
};

export default RootLayout;
