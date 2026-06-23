import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";

type ServicesSectionProps = {
  compact?: boolean;
};

export function ServicesSection({ compact = false }: ServicesSectionProps) {
  return (
    <section className="section-band py-20">
      <div className="container">
        {!compact ? (
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to launch, improve and scale online."
            description="We bring design taste and engineering discipline together across websites, applications, commerce, SEO and long-term maintenance."
          />
        ) : null}
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full transition hover:-translate-y-1 hover:shadow-soft-lg">
              <CardHeader>
                <div className="grid h-11 w-11 place-items-center rounded-md bg-secondary text-primary">
                  <service.icon className="h-5 w-5" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
