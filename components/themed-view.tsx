import Image from "next/image";
import React from "react";

type ThemedViewProps = {
    children: React.ReactNode;
}

export default function ThemedView({ children }: ThemedViewProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main
                className="flex min-h-screen w-full max-w-3xl flex-col items-center py-16 px-16 bg-white dark:bg-black sm:items-start">
                <Image
                    src="/logo.png"
                    alt="Next.js logo"
                    width={250}
                    height={20}
                    priority
                />
                <div className="flex flex-1 flex-col items-center gap-6 sm:items-start sm:text-left">
                    {children}
                </div>
            </main>
        </div>
    );
}