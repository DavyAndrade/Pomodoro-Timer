import { forwardRef, type TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className = "", ...props }, ref) => {
    const baseStyles = "border-2 border-gray-600 rounded-md p-2";

    return (
      <div className="flex flex-col gap-2 w-full">
        <label htmlFor={props.id}>{label}</label>
        <textarea
          ref={ref}
          className={`${baseStyles} ${className}`}
          {...props}
        ></textarea>
      </div>
    );
  }
);

export default TextArea;
