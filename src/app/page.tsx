import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  return (
   <div className="flex flex-col items-center justify-center h-full w-full">
    <div className="text-4xl font-semibold text-accent">Theme changer</div>
    <div className="flex flex-col gap-10">
      <ThemeSwitcher/>
    </div>
   </div>
  );
}
