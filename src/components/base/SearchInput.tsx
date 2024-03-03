'use client';

import React from 'react';
import { Input } from '../ui/input';

import { XMarkIcon } from '@heroicons/react/24/outline';
import { Button } from '../ui/button';
import useStore from '@/lib/store';
import Condition from './Condition';
import { useUpdateSearchTermParam } from '@/lib/utils';
import { testIds } from '@/lib/constants';

function SearchInput() {
  const { searchTerm, setSearchTerm, resetSearchTerm } = useStore(state => ({
    searchTerm: state.searchTerm,
    setSearchTerm: state.setSearchTerm,
    resetSearchTerm: state.resetSearchTerm,
  }));
  const updateSearchTermParam = useUpdateSearchTermParam();

  function handleSearchChange(ev: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(ev.target.value);
  }

  function handleSearchTermReset() {
    resetSearchTerm();
    updateSearchTermParam('');
  }

  return (
    <div className="relative w-full">
      <Input
        placeholder="Enter username"
        onChange={handleSearchChange}
        value={searchTerm}
        data-testid={testIds.SEARCH_INPUT}
      />
      <Condition condition={!!searchTerm}>
        <Button
          className="absolute right-4 top-2 p-0 h-6 w-6"
          variant="link"
          onClick={handleSearchTermReset}
          data-testid={testIds.CLEAR_SEARCH_BUTTON}
        >
          <XMarkIcon className="w-full h-full text-slate-900" />
        </Button>
      </Condition>
    </div>
  );
}

export default SearchInput;
