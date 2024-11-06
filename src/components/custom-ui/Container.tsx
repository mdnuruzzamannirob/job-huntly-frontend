import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  backgroundColor?: string | null;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  backgroundColor = null,
  ...rest
}) => {
  return typeof backgroundColor === 'string' ? (
    <div className={cn('', backgroundColor)}>
      <div
        {...rest}
        className={cn('mx-auto max-w-7xl px-4 md:px-5', className)}
      >
        {children}
      </div>
    </div>
  ) : (
    <div {...rest} className={cn('mx-auto max-w-7xl px-4 md:px-5', className)}>
      {children}
    </div>
  );
};

export default Container;
