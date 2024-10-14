import { TriangleIcon } from 'lucide-react';

export default function ErrorMessage({ error }: { error: string }) {
  return (
    <div
      className="flex w-full items-center p-4 mb-4 gap-2 text-sm text-red-800 rounded-lg bg-card"
      role="alert"
    >
      <TriangleIcon />
      <span className="sr-only">Error</span>
      <div>{error}</div>
    </div>
  );
}
