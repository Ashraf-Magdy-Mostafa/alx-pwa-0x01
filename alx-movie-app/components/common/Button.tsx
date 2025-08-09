import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost";
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", className = "", children, ...props }) => {
    const base =
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring";
    const styles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
        secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300",
        ghost: "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
    }[variant];

    return (
        <button className={`${base} ${styles} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
