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

export type EnquiryNotificationProps = {
  name: string;
  fromEmail: string;
  projectType: string;
  message: string;
};

/** Lands in Ryan's inbox. Reply-To is set to the enquirer, so Reply just works. */
export function EnquiryNotification({
  name,
  fromEmail,
  projectType,
  message,
}: EnquiryNotificationProps) {
  return (
    <Html lang="en">
      <Head />
      <Preview>{`New enquiry from ${name} — ${projectType}`}</Preview>
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
            New enquiry
          </Text>
          <Heading
            style={{
              fontSize: "24px",
              lineHeight: "32px",
              fontWeight: 600,
              color: c.charcoal,
              margin: "0 0 24px",
            }}
          >
            {name} got in touch
          </Heading>

          <Section
            style={{
              backgroundColor: c.surfaceContainerLowest,
              borderRadius: "12px",
              padding: "24px",
              border: `1px solid ${c.border}`,
            }}
          >
            <Row label="From" value={`${name} <${fromEmail}>`} />
            <Row label="Project type" value={projectType} />
            <Hr style={{ borderColor: c.border, margin: "16px 0" }} />
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
              Message
            </Text>
            <Text
              style={{
                fontSize: "16px",
                lineHeight: "26px",
                color: c.charcoal,
                margin: 0,
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </Text>
          </Section>

          <Text style={{ fontSize: "13px", lineHeight: "18px", color: c.outline, margin: "24px 0 0" }}>
            Reply directly to this email to reach {name} — or{" "}
            <Link href={`mailto:${fromEmail}`} style={{ color: c.amber }}>
              {fromEmail}
            </Link>
            .
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Section style={{ marginBottom: "12px" }}>
      <Text
        style={{
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: c.outline,
          margin: "0 0 2px",
        }}
      >
        {label}
      </Text>
      <Text style={{ fontSize: "14px", lineHeight: "22px", color: c.charcoal, margin: 0 }}>
        {value}
      </Text>
    </Section>
  );
}

export default EnquiryNotification;
