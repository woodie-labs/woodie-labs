type TProps = {
  title: string;
  subTitle?: string;
  className?: string;
};

export const Title = ({ title, subTitle, className }: TProps) => {
  return (
    <div className={className}>
      <h2 className={`scroll-m-20 text-3xl font-bold tracking-tight first:mt-0`}>{title}</h2>
      {subTitle && <p className="text-muted-foreground mt-2">{subTitle}</p>}
    </div>
  );
};
