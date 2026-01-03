import React from "react";
import classNames from "classnames";

type TextProps = {
    children: React.ReactNode;
    className?: string;
}

export default function Text({ children, className }: TextProps) {
    return (
        <p className={classNames('text-gray-400', className)}>
            {children}
        </p>
    );
}