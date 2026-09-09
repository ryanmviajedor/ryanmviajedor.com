import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import { email as c, fontStack } from "./theme";

export type EnquiryAcknowledgementProps = {
  name: string;
  message: string;
  siteName: string;
  siteRole: string;
  siteUrl: string;
  replyTo: string;
};

/** Goes back to the enquirer so they know the message landed. */
export function EnquiryAcknowledgement({
  name,
  message,
  siteName,
  siteRole,
  siteUrl,
  replyTo,
}: EnquiryAcknowledgementProps) {
  const firstName = name.split(" ")[0];

  return (
    <Html lang="en">
      <Head />
      <Preview>Thanks for getting in touch — I&apos;ll come back to you shortly.</Preview>
      <Body style={{ backgroundColor: c.surface, fontFamily: fontStack, margin: 0 }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "32px 24px" }}>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: c.amber,
              margin: "0 0 8px",
            }}
          >
            Message received
          </Text>
          <Heading
            style={{
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: 600,
              color: c.charcoal,
              margin: "0 0 16px",
            }}
          >
            Thanks, {firstName}.
          </Heading>

          <Text
            style={{
              fontSize: "16px",
              lineHeight: "26px",
              color: c.onSurfaceVariant,
              margin: "0 0 24px",
            }}
          >
            Your message reached me and I&apos;ll read it properly rather than
            fire back a template. Expect a reply within a couple of working days —
            sooner if it&apos;s time-sensitive.
          </Text>

          <Section
            style={{
              backgroundColor: c.surfaceContainerLow,
              borderRadius: "12px",
              padding: "20px 24px",
              border: `1px solid ${c.border}`,
            }}
          >
            <Text
              style={{
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: c.outline,
                margin: "0 0 8px",
              }}
            >
              What you sent
            </Text>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "22px",
                color: c.onSurfaceVariant,
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          <Hr style={{ borderColor: c.border, margin: "32px 0 16px" }} />

          <Text style={{ fontSize: "14px", lineHeight: "22px", color: c.charcoal, margin: "0 0 2px", fontWeight: 600 }}>
            {siteName}
          </Text>
          <Text style={{ fontSize: "13px", lineHeight: "18px", color: c.outline, margin: "0 0 12px" }}>
            {siteRole}
          </Text>
          <Text style={{ fontSize: "13px", lineHeight: "18px", color: c.outline, margin: 0 }}>
            <Link href={siteUrl} style={{ color: c.amber }}>
              {siteUrl.replace(/^https?:\/\//, "")}
            </Link>
            {"  ·  "}
            <Link href={`mailto:${replyTo}`} style={{ color: c.amber }}>
              {replyTo}
            </Link>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

export default EnquiryAcknowledgement;
