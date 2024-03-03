'use client';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

type GithubLinkProps = {
  url: string;
};

export default function GitHubLink({ url }: GithubLinkProps) {
  const { push } = useRouter();

  return (
    <Button
      variant="link"
      className="w-min pl-0"
      onClick={() => {
        push(url);
      }}
    >
      Open
      <ArrowUpRightIcon className="w-[0.75rem] h-[0.75rem] ml-1" />
    </Button>
  );
}
