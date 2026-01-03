import React from "react";


type SubTitleProps = {
    children: React.ReactNode;
}

export default function SubTitle({ children }: SubTitleProps) {
    return (
        <h2 className="text-2xl font-semibold mt-6">
            {children}
        </h2>
    );
}