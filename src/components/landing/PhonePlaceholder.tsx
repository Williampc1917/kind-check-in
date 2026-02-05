interface PhonePlaceholderProps {
  label: string;
  size?: "sm" | "md" | "lg";
}

const PhonePlaceholder = ({ label, size = "md" }: PhonePlaceholderProps) => {
  const sizeClasses = {
    sm: "w-32",
    md: "w-48",
    lg: "w-64",
  };

  return (
    <div className={`${sizeClasses[size]} phone-frame`}>
      <div className="phone-frame-content">
        <p className="text-xs text-muted-foreground text-center px-2">
          {label}
        </p>
      </div>
    </div>
  );
};

export default PhonePlaceholder;