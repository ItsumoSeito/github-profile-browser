import React, { FC, PropsWithChildren } from 'react';

type ConditionProps = {
  condition: boolean;
};

const Condition: FC<PropsWithChildren<ConditionProps>> = function ({
  children,
  condition,
}) {
  if (!condition) return null;
  return children;
};

export default Condition;
