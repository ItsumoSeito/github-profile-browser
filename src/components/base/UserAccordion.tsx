import { UserWithRepositories } from '@/lib/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import RepositoryAccordionCard from './RepositoryAccordionCard';
import { testIds } from '@/lib/constants';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Condition from './Condition';

type UserAccordionProps = {
  usersWithRepos: UserWithRepositories[];
};

function UserAccordion({ usersWithRepos }: UserAccordionProps) {
  return (
    <Accordion type="multiple" className="w-full">
      {usersWithRepos.map(user => {
        return (
          <AccordionItem
            value={user.login}
            key={user.login}
            data-testid={testIds.USER_ACCORDION_ITEM}
          >
            <AccordionTrigger className="flex items-center gap-4 justify-start">
              <Avatar>
                <AvatarImage
                  src={user.avatarUrl}
                  alt={`@${user.login} avatar`}
                />
                <AvatarFallback>
                  {user.login.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span>{user.login}</span>
            </AccordionTrigger>
            <AccordionContent className="pl-8">
              <Condition condition={!!user.repositories.length}>
                {user.repositories.map(repository => (
                  <RepositoryAccordionCard
                    repository={repository}
                    key={repository.url}
                  />
                ))}
              </Condition>
              <Condition condition={!user.repositories.length}>
                <div>No repositories available</div>
              </Condition>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default UserAccordion;
