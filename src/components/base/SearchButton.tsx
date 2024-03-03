'use client';

import { useUpdateSearchTermParam } from '@/lib/utils';
import { Button } from '../ui/button';
import useStore from '@/lib/store';
import { testIds } from '@/lib/constants';

function SearchButton() {
  const updateSearchTermParam = useUpdateSearchTermParam();

  return (
    <Button
      className="w-full h-12"
      onClick={() => updateSearchTermParam()}
      data-testid={testIds.SEARCH_BUTTON}
    >
      Search
    </Button>
  );
}

export default SearchButton;
