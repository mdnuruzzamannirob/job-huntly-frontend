import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div {...rest} className={cn('max-w-7xl mx-auto px-4 md:px-5', className)}>
      {children}
    </div>
  );
};

export default Container;
