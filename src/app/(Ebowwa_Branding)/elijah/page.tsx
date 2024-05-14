import { Suspense } from 'react';
import { redirect } from 'next/navigation';

export default async function ElijahPage() {
  // Fetch the available "Elijah" pages or any other necessary data
  const availableElijahPages = await fetchAvailableElijahPages();

  // Redirect to the first available "Elijah" page
  if (availableElijahPages.length > 0) {
    redirect(`/elijah/${availableElijahPages[0].id}`);
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {/* Render any default content or a message indicating no available "Elijah" pages */}
        <p>No available "Elijah" pages found.</p>
      </Suspense>
    </div>
  );
}

async function fetchAvailableElijahPages() {
  // Implement the logic to fetch the available "Elijah" pages
  // This could involve making an API call or accessing a database
  return [
    { id: 'whoiselijah' },
    // Add more "Elijah" pages as needed
  ];
}