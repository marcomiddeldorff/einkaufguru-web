import {Metadata} from "next";
import Image from "next/image";
import Link from "next/link";
import {ChevronRight} from "lucide-react";


export const metadata: Metadata = {
    title: 'Privacy Policy'
}

export default function Page() {
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
                        Privacy Policy
                    </h1>

                    <Link href="/datenschutz" className="text-primary flex gap-5 items-center">
                        Switch to German
                        <ChevronRight size={18}/>
                    </Link>

                    <p>
                        Last updated: <strong>30.12.2025</strong>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        1. Controller
                    </h2>

                    <p>
                        The controller responsible for data processing within the <strong>Einkaufguru</strong> app is:
                    </p>

                    <p className="font-semibold">
                        Marco Middeldorff <br/>
                        Ruppiner Straße 23 <br/>
                        51107 Cologne <br/>
                        Germany
                    </p>

                    <p>
                        Email: {' '}
                        <a href="mailto:marco@marco-middeldorff.de" className="text-primary underline">
                            marco@marco-middeldorff.de
                        </a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        2. General Information
                    </h2>

                    <p>
                        We take the protection of your personal data very seriously. Personal data is processed
                        exclusively in accordance with applicable data protection laws, in particular the GDPR.
                    </p>

                    <p>
                        Personal data is collected only to the extent necessary to provide the app’s functionality.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        3. User Account & Verification
                    </h2>

                    <p>
                        To use Einkaufguru, a user account is required. The following data may be processed:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Email address
                        </li>
                        <li>
                            User ID (UID)
                        </li>
                        <li>
                            Display name (if available)
                        </li>
                        <li>
                            Profile picture (optional)
                        </li>
                        <li>
                            Registration date
                        </li>
                    </ul>

                    <p>
                        Login methods:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            E-Mail-Adresse
                        </li>
                        <li>
                            Google Sign-In
                        </li>
                        <li>
                            Apple Sign-In
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        4. Shopping Lists & Content
                    </h2>

                    <p>
                        The following data is stored to enable core app functionality:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Shopping lists (name, creation date)
                        </li>
                        <li>
                            Items within shopping lists (e.g. product name, category, status)
                        </li>
                        <li>
                            Uploaded images (optional)
                        </li>
                        <li>
                            Members and roles within a shopping list
                        </li>
                        <li>
                            Activity information (e.g. list or item changes)
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        5. Analytics & App Stability
                    </h2>

                    <h3 className="text-lg mt-3 font-semibold">
                        5.1 Firebase Analytics
                    </h3>

                    <p>
                        Einkaufguru uses <strong>Firebase Analytics</strong> to collect anonymized usage data to improve the app experience
                    </p>

                    <p>
                        Collected data may include:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            App interactions
                        </li>
                        <li>
                            Device information
                        </li>
                        <li>
                            Usage behavior
                        </li>
                    </ul>


                    <h3 className="text-lg mt-3 font-semibold">
                        5.2 Firebase Crashlytics
                    </h3>

                    <p>
                        To improve stability, we use Firebase Crashlytics, which collects technical crash data such as:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Device type
                        </li>
                        <li>
                            Operating system
                        </li>
                        <li>
                            Time of crash
                        </li>
                        <li>
                            Technical error information
                        </li>
                    </ul>

                    <p>
                        No personal content (e.g. shopping lists) is analyzed.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        6. Push Notifications
                    </h2>

                    <p>
                        Einkaufguru may send push notifications, for example when shopping lists are updated.
                    </p>

                    <p>
                        Push notifications are optional and can be disabled at any time via the device settings.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        7. Firebase Services
                    </h2>

                    <p>
                        Einkaufguru uses <strong>Firebase</strong> (Google Ireland Limited) for:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Authentication
                        </li>
                        <li>
                            Cloud Firestore
                        </li>
                        <li>
                            Firebase Storage
                        </li>
                        <li>
                            Cloud Functions
                        </li>
                        <li>
                            Firebase Analytics
                        </li>
                        <li>
                            Firebase Crashlytics
                        </li>
                        <li>
                            Firebase Cloud Messaging
                        </li>
                    </ul>

                    <p>
                        Data may be processed on servers within or outside the EU in accordance with standard contractual clauses under Art. 46 GDPR.
                    </p>

                    <p>
                        More information: {' '}
                        <a href="https://firebase.google.com/support/privacy" className="texxt-primary">https://firebase.google.com/support/privacy</a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        8. Data Sharing
                    </h2>

                    <p>
                        Personal data is not shared with third parties except:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            where required for technical operation (e.g. Firebase)
                        </li>
                        <li>
                            where required by law
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        9. Data Retention & Deletion
                    </h2>

                    <p>
                        Personal data is stored only as long as necessary.
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            When a user account is deleted, all associated data is removed.
                        </li>
                        <li>
                            When a shopping list is deleted, all related data and files are permanently removed.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        10. User Rights
                    </h2>

                    <p>
                        You have the right to:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Access your data (Art. 15 GDPR)
                        </li>
                        <li>
                            Rectification (Art. 16 GDPR)
                        </li>

                        <li>
                            Erasure (Art. 17 GDPR)
                        </li>

                        <li>
                            Restriction of processing (Art. 18 GDPR)
                        </li>

                        <li>
                            Data portability (Art. 20 GDPR)
                        </li>

                        <li>
                            Withdrawal of consent (Art. 7(3) GDPR)
                        </li>
                    </ul>

                    <p>
                        Requests can be sent via email at any time.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        11. Changes
                    </h2>

                    <p>
                        This privacy policy may be updated to reflect legal or technical changes.
                    </p>

                    <p>
                        The current version is always available within the app.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        12. Contact
                    </h2>

                    <p>
                        For privacy-related questions: {' '}
                        <a href="mailto:einkaufguru@marco-middeldorff.de" className="text-primary underline">einkaufguru@marco-middeldorff.de</a>
                    </p>
                </div>
            </main>
        </div>
    );
}