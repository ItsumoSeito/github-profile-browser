import React, { Suspense } from 'react';
import { Card, CardContent } from '../ui/card';
import SearchResultsContent from '../base/SearchResultsContent';
import Condition from '../base/Condition';
import { SearchParams } from '@/lib/types';
import LoadingSpinner from '../base/LoadingSpinner';

type SearchResultsContainerProps = {
  searchParams: SearchParams;
};

async function SearchResultsContainer({
  searchParams,
}: SearchResultsContainerProps) {
  const usernameIsSet = !!searchParams.username;

  return (
    <Card className="w-full grow p-6 lg:overflow-scroll">
      <CardContent className="flex flex-col items-center h-full w-full p-0">
        <Condition condition={!usernameIsSet}>
          <div className="w-full h-full flex justify-center items-center text-xl">
            Please enter a username to look up
          </div>
        </Condition>
        <Condition condition={usernameIsSet}>
          <Suspense fallback={<LoadingSpinner />}>
            <SearchResultsContent searchTerm={searchParams.username!} />
          </Suspense>
        </Condition>
      </CardContent>
    </Card>
  );
}

export default SearchResultsContainer;
