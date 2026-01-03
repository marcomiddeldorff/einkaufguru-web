import ThemedView from "@/components/themed-view";
import Title from "@/components/title";
import Text from "@/components/text";
import SubTitle from "@/components/sub-title";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Impressum'
}
export default function ImpressumPage() {
    return (
        <ThemedView>
            <Title>
                Impressum - Einkaufguru
            </Title>

            <a className="text-primary underline" href="/impressum">Switch to English</a>

            <Text>
                Angaben gemäß § 5 TMG
            </Text>

            <Text>
                <strong>Marco Middeldorff</strong> <br/>
                Ruppiner Straße 23 <br/>
                51107 Köln <br/>
                Deutschland
            </Text>

            <Text>
                E-Mail: <a href="mailto:marco@marco-middeldorff.de"
                           className="text-primary underline">marco@marco-middeldorff.de</a>
            </Text>

            <Text>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </Text>

            <Text>
                DE455725241
            </Text>

            <SubTitle>
                Haftung für Inhalte
            </SubTitle>

            <Text>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich.
            </Text>

            <Text>
                Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
            </Text>

            <Text>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
                bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
            </Text>

            <SubTitle>
                Haftung für Links
            </SubTitle>

            <Text>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </Text>
        </ThemedView>
    );
}