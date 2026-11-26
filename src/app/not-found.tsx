import { Button, PageHero } from "@/components/ui";

export default function NotFound() {
  return (
    <PageHero eyebrow="404" title="This page took a different career path." text="The page you're looking for doesn't exist or has moved.">
      <div className="mt-10">
        <Button href="/">Back to home</Button>
      </div>
    </PageHero>
  );
}
