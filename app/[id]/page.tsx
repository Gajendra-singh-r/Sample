import { QueryDisplay } from "./QueryDisplay";
import { QueryOutput } from "./QueryOutput";

export default function QueryPage() {
  return (
    <div className="grid grid-cols-2 h-full overflow-y-auto">
      <QueryDisplay />
      <QueryOutput />
    </div>
  );
}
