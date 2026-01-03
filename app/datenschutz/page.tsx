import Image from "next/image";
import Link from "next/link";
import {ChevronRight} from "lucide-react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Datenschutz'
}

export default function DatenschutzPage() {
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
                        Datenschutzerklärung
                    </h1>

                    <Link href="/privacy-policy" className="text-primary flex gap-5 items-center">
                        Zu Englisch wechseln
                        <ChevronRight size={18}/>
                    </Link>

                    <p>
                        Stand: <strong>30.12.2025</strong>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        1. Verantwortlicher
                    </h2>

                    <p>
                        Verantwortlich für die Verarbeitung personenbezogener Daten im Rahmen der
                        App <strong>Einkaufguru</strong> ist:
                    </p>

                    <p className="font-semibold">
                        Marco Middeldorff <br/>
                        Ruppiner Straße 23 <br/>
                        51107 Köln <br/>
                        Deutschland
                    </p>

                    <p>
                        E-Mail: {' '}
                        <a href="mailto:marco@marco-middeldorff.de" className="text-primary underline">
                            marco@marco-middeldorff.de
                        </a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        2. Allgemeines zur Datenverarbeitung
                    </h2>

                    <p>
                        Der Schutz deiner personenbezogenen Daten hat für uns höchste Priorität. Die Verarbeitung
                        erfolgt ausschließlich im Rahmen der geltenden Datenschutzgesetze, insbesondere der
                        Datenschutz-Grundverordnung (DSGVO).
                    </p>

                    <p>
                        Personenbezogene Daten werden nur erhoben, wenn dies für die Bereitstellung der Funktionen von
                        Einkaufguru erforderlich ist.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        3. Benutzerkonto & Authentifizierung
                    </h2>

                    <p>
                        Zur Nutzung der App ist ein Benutzerkonto erforderlich. Dabei können folgende Daten verarbeitet
                        werden:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            E-Mail-Adresse
                        </li>
                        <li>
                            Benutzer-ID (UID)
                        </li>
                        <li>
                            Anzeigename (falls vorhanden)
                        </li>
                        <li>
                            Profilbild (optional)
                        </li>
                        <li>
                            Zeitpunkt der Registrierung
                        </li>
                    </ul>

                    <p>
                        Die Anmeldung kann über folgende Methoden erfolgen:
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
                        4. Einkaufslisten & Inhalte
                    </h2>

                    <p>
                        Im Rahmen der Nutzung der App werden folgende Inhalte gespeichert:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Einkaufslisten (Name, Erstellungsdatum)
                        </li>
                        <li>
                            Einträge innerhalb von Einkaufslisten (z. B. Produktname, Kategorie, Status)
                        </li>
                        <li>
                            Hochgeladene Bilder zu Einträgen (optional)
                        </li>
                        <li>
                            Mitglieder und Rollen innerhalb einer Einkaufsliste
                        </li>
                        <li>
                            Aktivitätsinformationen (z. B. Änderungen an Listen oder Einträgen)
                        </li>
                    </ul>

                    <p>
                        Diese Daten dienen ausschließlich der Funktionalität der App.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        5. Analyse & Stabilität
                    </h2>

                    <h3 className="text-lg mt-3 font-semibold">
                        5.1 Firebase Analytics
                    </h3>

                    <p>
                        Einkaufguru nutzt <strong>Firebase Analytics</strong>, um anonymisierte Informationen über die
                        Nutzung der App zu erfassen. Dies hilft uns, Funktionen zu verbessern und die
                        Benutzerfreundlichkeit zu erhöhen.
                    </p>

                    <p>
                        Erhobene Daten können u. a. umfassen:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            App-Interaktionen
                        </li>
                        <li>
                            Geräteinformationen
                        </li>
                        <li>
                            Nutzungsverhalten
                        </li>
                    </ul>


                    <h3 className="text-lg mt-3 font-semibold">
                        5.2 Firebase Crashlytics
                    </h3>

                    <p>
                        Zur Verbesserung der App-Stabilität verwenden wir Firebase Crashlytics. Dabei werden technische Informationen zu App-Abstürzen erfasst, z. B.:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Geräte-Typ
                        </li>
                        <li>
                            Betriebssystem
                        </li>
                        <li>
                            Zeitpunkt des Absturzes
                        </li>
                        <li>
                            technische Fehlerdaten
                        </li>
                    </ul>

                    <p>
                        Personenbezogene Inhalte (z. B. Einkaufslisten) werden hierbei nicht ausgewertet.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        6. Push-Benachrichtigungen
                    </h2>

                    <p>
                        Einkaufguru kann Push-Benachrichtigungen senden, z. B. bei Änderungen an Einkaufslisten.
                    </p>

                    <p>
                        Die Nutzung von Push-Benachrichtigungen ist freiwillig und kann jederzeit in den Geräteeinstellungen deaktiviert werden.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        7. Firebase als Dienstleister
                    </h2>

                    <p>
                        Einkaufguru verwendet <strong>Firebase</strong> (Google Ireland Limited) für:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Authentifizierung
                        </li>
                        <li>
                            Cloud Firestore (Datenbank)
                        </li>
                        <li>
                            Firebase Storage (Dateispeicherung)
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
                            Firebase Cloud Messaging (Push-Benachrichtigungen)
                        </li>
                    </ul>

                    <p>
                        Firebase kann Daten auf Servern innerhalb und außerhalb der EU verarbeiten. Die Verarbeitung erfolgt auf Grundlage von <strong>Standardvertragsklauseln</strong> gemäß Art. 46 DSGVO.
                    </p>

                    <p>
                        Weitere Informationen: {' '}
                        <a href="https://firebase.google.com/support/privacy"
                           className="texxt-primary">https://firebase.google.com/support/privacy</a>
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        8. Weitergabe von Daten
                    </h2>

                    <p>
                        Eine Weitergabe personenbezogener Daten an Dritte erfolgt nicht, außer:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            dies ist zur technischen Bereitstellung der App erforderlich (z. B. Firebase)
                        </li>
                        <li>
                            oder wir sind gesetzlich dazu verpflichtet
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        9. Speicherung & Löschung
                    </h2>

                    <p>
                        Personenbezogene Daten werden nur so lange gespeichert, wie sie für den jeweiligen Zweck erforderlich sind.
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Bei Löschung eines Benutzerkontos werden alle zugehörigen Daten entfernt.
                        </li>
                        <li>
                            Beim Löschen einer Einkaufsliste werden alle enthaltenen Daten und Dateien unwiderruflich gelöscht.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6">
                        10. Rechte der Nutzerinnen und Nutzer
                    </h2>

                    <p>
                        Du hast jederzeit das Recht auf:
                    </p>

                    <ul className="list-disc ml-6 leading-8">
                        <li>
                            Auskunft (Art. 15 DSGVO)
                        </li>
                        <li>
                            Berichtigung (Art. 16 DSGVO)
                        </li>

                        <li>
                            Löschung (Art. 17 DSGVO)
                        </li>

                        <li>
                            Einschränkung der Verarbeitung (Art. 18 DSGVO)
                        </li>

                        <li>
                            Datenübertragbarkeit (Art. 20 DSGVO)
                        </li>

                        <li>
                            Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)
                        </li>
                    </ul>

                    <p>
                        Anfragen kannst du jederzeit per E-Mail an uns richten.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        11. Änderungen
                    </h2>

                    <p>
                        Diese Datenschutzerklärung kann angepasst werden, um rechtliche oder technische Änderungen zu berücksichtigen.
                    </p>

                    <p>
                        Die aktuelle Version ist jederzeit innerhalb der App abrufbar.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6">
                        12. Kontakt
                    </h2>

                    <p>
                        Bei Fragen zum Datenschutz: {' '}
                        <a href="mailto:einkaufguru@marco-middeldorff.de"
                           className="text-primary underline">einkaufguru@marco-middeldorff.de</a>
                    </p>
                </div>
            </main>
        </div>
    );
}