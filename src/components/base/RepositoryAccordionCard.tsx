import { Repository } from '@/lib/types';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import { StarIcon } from '@heroicons/react/24/outline';
import GitHubLink from './GithubLink';

type RepositoryAccordionCardProps = {
  repository: Repository;
};

function RepositoryAccordionCard({ repository }: RepositoryAccordionCardProps) {
  return (
    <Card className="mb-4 py-6 px-4">
      <CardContent className="p-0 flex flex-col gap-2">
        <span className="flex justify-between items-center">
          <h3 className="font-medium">{repository.name}</h3>
          <div className="flex items-center gap-2">
            {repository.stargazerCount}
            <StarIcon className="w-5 h-5" />
          </div>
        </span>
        {repository.description ? (
          <span>{repository.description}</span>
        ) : (
          <span className="italic">{'No description'}</span>
        )}
        <GitHubLink url={repository.url} />
      </CardContent>
    </Card>
  );
}

export default RepositoryAccordionCard;
