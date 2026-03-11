const Header = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="space-y-4">
      <h1 className="text-default-blue text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
        {title}
      </h1>
      {description && (
        <p className="text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-prose">
          {description}
        </p>
      )}
    </div>
  );
};

export default Header;
