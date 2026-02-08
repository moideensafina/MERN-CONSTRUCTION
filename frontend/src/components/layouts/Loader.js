import { Loader2 } from "lucide-react";
import "../../index.css"; // Ensure tokens are available

export default function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Loader2 className="animate-spin text-secondary" size={48} />
    </div>
  );
}
