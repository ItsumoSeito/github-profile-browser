import LoadingSpinner from '@/components/base/LoadingSpinner';
import SearchButton from '@/components/base/SearchButton';
import SearchInput from '@/components/base/SearchInput';
import SearchResultsContainer from '@/components/patterns/SearchResultsContainer';
import { SearchParams } from '@/lib/types';
import { Suspense } from 'react';

export default function Home({ searchParams }: { searchParams: SearchParams }) {
  return (
    <main className="flex flex-col items-center h-full">
      <div className="w-full md:w-3/4 xl:w-1/2 flex flex-col gap-8 items-center h-full">
        <section className="w-full flex flex-col gap-2 items-center">
          <Suspense fallback={<LoadingSpinner />}>
            <SearchInput />
            <SearchButton />
          </Suspense>
        </section>
        <SearchResultsContainer searchParams={searchParams} />
      </div>
    </main>
  );
}
