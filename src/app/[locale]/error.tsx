'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleGoBack = () => router.back();

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={handleGoBack}>Try again please</button>
    </div>
  );
}
