import React from 'react';
import UserAccordion from './UserAccordion';
import { getUsersWithRepositories } from '@/lib/api/handlers';

type SearchResultsContentProps = {
  searchTerm: string;
};

export default async function SearchResultsContent({
  searchTerm,
}: SearchResultsContentProps) {
  const usersWithRepos = await getUsersWithRepositories(searchTerm);

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <p>{`Showing users for "${searchTerm}"`}</p>
      <UserAccordion usersWithRepos={usersWithRepos} />
    </div>
  );
}
