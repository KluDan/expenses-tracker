import AppHeader from "@/components/app-header";
import BackgroundPattern from "@/components/background-pattern";

export default function Layout({ children }) {
  return (
    <>
      <BackgroundPattern />
      <div className="flex flex-col gap-y-10 max-w-[1050px] mx-auto px-4 min-h-screen">
        <AppHeader />
        {children}
      </div>
    </>
  );
}
