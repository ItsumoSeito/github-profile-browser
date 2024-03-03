import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useStore from './store';
import { Edge } from './types';
import _ from 'lodash';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useUpdateSearchParam() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return function updateSearchParam(key: string, value?: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value) {
      newSearchParams.set(key, value);
    } else {
      newSearchParams.delete(key);
    }
    replace(`${pathname}?${newSearchParams.toString()}`);
  };
}

export function useUpdateSearchTermParam() {
  const storeSearchTerm = useStore(state => state.searchTerm);
  const updateSearchParam = useUpdateSearchParam();

  return function updateSearchTermParam(searchTerm?: string) {
    const newSearchTerm =
      typeof searchTerm === 'string' ? searchTerm : storeSearchTerm;
    updateSearchParam('username', newSearchTerm);
  };
}

export function extractDataFromNode<N>(edges: Edge<N>[]) {
  return edges.reduce(
    (data, edge) => [...data, ...(_.isEmpty(edge.node) ? [] : [edge.node])],
    [] as N[]
  );
}
