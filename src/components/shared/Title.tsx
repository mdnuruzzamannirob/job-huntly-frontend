import { cn } from '@/lib/utils';

type TTitleProps = {
  className?: string;
  title: string;
};
const Title = ({ className = '', title }: TTitleProps) => {
  return <div className={cn('', className)}>{title}</div>;
};

export default Title;
