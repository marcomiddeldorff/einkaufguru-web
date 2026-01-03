import Image from "next/image";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Delete Account'
}

export default function Home() {
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
                    <h1 className="max-w-lg text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Delete Account - Einkaufguru
                    </h1>
                    <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                        Users of the <strong>Einkaufguru</strong> app can request the deletion of their user account and
                        associated
                        personal data at any time.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        🔐 How to request the deletion of your account
                    </h2>

                    <p>
                        To have your account deleted, please send an email to:
                    </p>

                    <p>
                        📧 <a className="text-primary underline" href="mailto:einkaufguru@marco-middeldorff.de">einkaufguru@marco-middeldorff.de</a>
                    </p>

                    <p>
                        Please use the email address registered with your Shopping Guru account.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        🗑️ What data will be deleted?
                    </h2>

                    <p>
                        Upon receiving your request, the following data will be completely deleted:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            User account (UID)
                        </li>
                        <li>
                            Email address
                        </li>
                        <li>
                            Profile information
                        </li>
                        <li>
                            All shopping lists you have created
                        </li>
                        <li>
                            All entries within these shopping lists
                        </li>
                        <li>
                            Uploaded images
                        </li>
                        <li>
                            Memberships in shopping lists
                        </li>
                        <li>
                            Push tokens and associated device information
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        ⏱️ Retention period
                    </h2>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Deletion usually takes place <strong>within 14 days</strong> of receiving your request.
                        </li>
                        <li>
                            Your personal data will <strong>not be stored any longer</strong>, unless there are legal obligations to retain it.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        ⚠️ Important notice
                    </h2>

                    <p>
                        Once your account has been deleted, <strong>it is not possible</strong> to restore the data.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        📩 Contact
                    </h2>

                    <p>
                        If you have any questions about data deletion or data protection, you can contact us at:
                    </p>

                    <p>
                        📧 <a className="text-primary underline" href="mailto:einkaufguru@marco-middeldorff.de">einkaufguru@marco-middeldorff.de</a>
                    </p>
                </div>

                <ul className="flex w-full items-center gap-4 mt-12">
                    <li>
                        <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/legal-notice" className="text-primary underline">Legal Notice</a>
                    </li>
                </ul>
            </main>
        </div>
    );
}
