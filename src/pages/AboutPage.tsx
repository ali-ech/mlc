import { About } from "../components/About";
import { Differentiators } from "../components/Differentiators";
import { PageLayout } from "../components/PageLayout";

export function AboutPage() {
  return (
    <PageLayout
      eyebrow="About the Firm"
      title="Two Decades of Focused Regulatory Counsel"
      description="Established in 2003, Muntaha Law Consultants has built one of Pakistan's most dedicated practices in pharmaceutical and regulatory law."
    >
      <About standalone />
      <Differentiators />
    </PageLayout>
  );
}
