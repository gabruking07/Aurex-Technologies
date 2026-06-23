import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { blogPosts } from "@/lib/content";

export function BlogSection() {
  return (
    <section className="section-band py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Blog"
          title="Practical notes for better digital launches."
          description="Short, useful thinking on website strategy, performance, product decisions and growth-friendly design."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="rounded-lg border bg-card p-6 shadow-inner-border transition hover:-translate-y-1 hover:shadow-soft-lg">
              <p className="text-sm font-semibold text-primary">{post.category}</p>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">{post.title}</h3>
              <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.readTime}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
