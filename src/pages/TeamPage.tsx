import { Team } from "../components/Team";
import { PageLayout } from "../components/PageLayout";

export function TeamPage() {
  return (
    <PageLayout
      eyebrow="Our Team"
      title="Experienced Advocates, Unified Purpose"
      description="A focused team of regulatory specialists representing clients before DRAP, Drug Courts, and Provincial Quality Control Boards nationwide."
    >
      <Team standalone />
    </PageLayout>
  );
}
