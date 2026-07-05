import { PracticeAreas } from "../components/PracticeAreas";
import { PageLayout } from "../components/PageLayout";

export function PracticeAreasPage() {
  return (
    <PageLayout
      eyebrow="Practice Areas"
      title="Specialist Representation Across Regulated Industries"
      description="From pharmaceutical licensing to DRAP appellate proceedings — focused counsel at every stage of the regulatory lifecycle."
    >
      <PracticeAreas standalone />
    </PageLayout>
  );
}
