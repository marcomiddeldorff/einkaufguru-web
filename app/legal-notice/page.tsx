import ThemedView from "@/components/themed-view";
import Title from "@/components/title";
import Text from "@/components/text";
import SubTitle from "@/components/sub-title";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Legal Notice'
}

export default function LegalNotice() {
    return (
        <ThemedView>
            <Title>
                Legal Notice - Einkaufguru
            </Title>

            <a className="text-primary underline" href="/impressum">Switch to German</a>

            <Text>
                Information pursuant to Section 5 of the German Telemedia Act (TMG)
            </Text>

            <Text>
                <strong>Marco Middeldorff</strong> <br/>
                Ruppiner Straße 23 <br/>
                51107 Cologne <br/>
                Germany
            </Text>

            <Text>
                Email: <a href="mailto:marco@marco-middeldorff.de"
                          className="text-primary underline">marco@marco-middeldorff.de</a>
            </Text>

            <Text>
                VAT identification number according to § 27 a of the German VAT Act:
            </Text>

            <Text>
                DE455725241
            </Text>

            <SubTitle>
                Liability for Content
            </SubTitle>

            <Text>
                As a service provider, we are responsible for our own content on these pages in accordance with general
                laws pursuant to Section 7 (1) TMG.
            </Text>

            <Text>
                However, according to Sections 8 to 10 TMG, we are not obligated to monitor transmitted or stored
                third-party information or to investigate circumstances that indicate illegal activity.
            </Text>

            <Text>
                Obligations to remove or block the use of information under general laws remain unaffected. Liability in
                this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming
                aware of such violations, we will remove the content immediately.
            </Text>

            <SubTitle>
                Liability for Links
            </SubTitle>

            <Text>
                Our website may contain links to external third-party websites over whose content we have no control.
                Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked sites is always responsible for their content.
            </Text>
        </ThemedView>
    );
}