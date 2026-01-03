import React from "react";


type TitleProps = {
    children: React.ReactNode;
}

export default function Title({ children }: TitleProps) {
    return (
        <h1 className="max-w-lg text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            {children}
        </h1>
    );
}