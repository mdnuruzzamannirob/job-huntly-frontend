import { cn } from '@/lib/utils';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const PageContainer: React.FC<ContainerProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={cn(
        'mx-auto min-h-dvh max-w-7xl px-4 pt-16 md:px-5 xl:pt-20',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageContainer;
