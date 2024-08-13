import AuthUpdater from "@/components/auth-updater";
import AuthViewer from "@/components/auth-viewer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      home pages
      <AuthViewer />
      <AuthUpdater />
    </main>
  );
}
