import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';
import { RxReload } from 'react-icons/rx';

interface ContainerProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'loading';
}

const Button: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'md',
  variant = 'primary',
  ...rest
}) => {
  return variant === 'loading' ? (
    <button
      {...rest}
      disabled={true}
      className={cn(
        'flex select-none items-center justify-center gap-2 rounded bg-black/50 font-RHDisplay font-bold text-white hover:bg-black/50',
        size === 'xs' && 'px-3 py-1 text-[10px]',
        size === 'sm' && 'px-4 py-[6px] text-xs',
        size === 'md' && 'px-5 py-2 text-sm',
        size === 'lg' && 'px-6 py-[10px] text-base',
        className,
      )}
    >
      <RxReload
        className={cn(
          'animate-spin',
          size === 'xs' && 'min-h-3 min-w-3',
          size === 'sm' && 'min-h-4 min-w-4',
          size === 'md' && 'min-h-5 min-w-5',
          size === 'lg' && 'min-h-6 min-w-6',
        )}
      />
      {children ? children : 'Please wait'}
    </button>
  ) : (
    <button
      {...rest}
      className={cn(
        'select-none rounded bg-primary font-RHDisplay font-bold text-white duration-200 ease-out hover:bg-primary/95 active:scale-95',
        size === 'xs' && 'px-3 py-1 text-[10px]',
        size === 'sm' && 'px-4 py-[6px] text-xs',
        size === 'md' && 'px-5 py-2 text-sm',
        size === 'lg' && 'px-6 py-[10px] text-base',
        variant === 'secondary' &&
          'bg-primary/10 text-primary hover:bg-primary/5',
        variant === 'outline' &&
          'border border-black/10 bg-white text-neutral-700 hover:bg-black/5',
        variant === 'ghost' && 'bg-white text-primary hover:bg-primary/10',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
