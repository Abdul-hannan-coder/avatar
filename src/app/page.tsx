import DashboardLayout from "@/components/layout/DashboardLayout";
import { AvatarProvider } from "@/context/AvatarContext";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8">
      <AvatarProvider>
        <DashboardLayout />
      </AvatarProvider>
    </main>
  );
}
