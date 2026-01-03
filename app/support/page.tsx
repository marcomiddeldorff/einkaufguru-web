import Image from "next/image";
import Accordion from "@/components/accordion";
import Title from "@/components/title";


export default function Support() {
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
                    <Title>
                        Support - Einkaufguru
                    </Title>

                    <p>
                        Thank you for using <strong>Einkaufguru</strong>. This page provides support information, contact details, and answers to common questions about the app.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        Contact
                    </h2>

                    <p>
                        If you have any questions, encounter issues, or would like to share feedback about the app, feel free to contact us:
                    </p>

                    <p>
                        Email: <a href="mailto:einkaufguru@marco-middeldorff.de">einkaufguru@marco-middeldorff.de</a>
                    </p>

                    <p>
                        We aim to respond to all inquiries within <strong>24 hours</strong>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        What we can help with
                    </h2>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Technical issues or bugs in teh app
                        </li>
                        <li>
                            Questions about using Einkaufguru
                        </li>
                        <li>
                            Login or account-related problems
                        </li>
                        <li>
                            Feedback, suggestions, or feature requests
                        </li>
                        <li>
                            Questions regarding data protection and privacy
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        Frequently Asked Questions (FAQ)
                    </h2>


                    <ul className="space-y-6">
                        <li>
                            <p className="text-lg font-semibold mb-1">
                                How do I create a new shopping list?
                            </p>

                            <p className="text-gray-400">
                                You can create a new shopping list in the app using the “+” button and start adding items right away.
                            </p>
                        </li>

                        <li>
                            <p className="text-lg font-semibold mb-1">
                                Can I share my shopping list with other people?
                            </p>

                            <p className="text-gray-400">
                                Yes. <span className="text-primary">Einkaufguru</span> allows you to share shopping lists with others so you can manage them together.
                            </p>
                        </li>

                        <li>
                            <p className="text-lg font-semibold mb-1">
                                Are my data synchronized across devices?
                            </p>

                            <p className="text-gray-400">
                                Yes. Your data is securely stored and synchronized across your devices as long as you are connected to the internet.
                            </p>
                        </li>

                        <li>
                            <p className="text-lg font-semibold mb-1">
                                I found a bug – what should I do?
                            </p>

                            <p className="text-gray-400">
                                Please send us a short description of the issue by email. If possible, include details about your device and the app version you are using.
                            </p>
                        </li>

                        <li>
                            <p className="text-lg font-semibold mb-1">
                                How can I delete my account?
                            </p>

                            <p className="text-gray-400">
                                You can delete your account directly within the app or contact us by email. Your data will then be removed in accordance with our privacy policy.
                            </p>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        Privacy
                    </h2>

                    <p className="text-gray-400">
                        We take the protection of your personal data seriously.
                        Details about how we process your data can be found in our privacy policy.
                    </p>

                    <p>
                        Privacy Policy: <a href="/privacy-policy" className="text-primary underline">https://einkaufguru.marco-middeldorff.de/privacy-policy</a>

                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        Legal Notice
                    </h2>

                    <p className="text-gray-400">
                        Einkaufsguru is provided “as is.” <br/>
                        We do not accept liability for data loss or damages resulting from the use of the app, to the extent permitted by law.
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