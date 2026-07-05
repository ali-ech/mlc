import { Contact } from "../components/Contact";
import { PageLayout } from "../components/PageLayout";

export function ContactPage() {
  return (
    <PageLayout
      eyebrow="Contact"
      title="Begin the Conversation"
      description="Confidential inquiries welcomed. Our team responds within one business day."
    >
      <Contact standalone />
    </PageLayout>
  );
}
