export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 text-center space-y-4">
      <h2 className="text-3xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="flex justify-center">
        <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />
      </div>
      <p className="mx-auto max-w-2xl text-base font-medium text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
