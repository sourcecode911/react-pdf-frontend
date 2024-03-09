import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string;
}

export const Text: React.FC<Props> = ({
  className,
  children
}) => (
  <span
    className={cn(
      className
    )}
  >
    {children}
  </span>
);
