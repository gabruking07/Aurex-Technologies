import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <form className="rounded-lg border bg-card p-6 shadow-soft-lg">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Name
          <input
            className="h-11 rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="Your name"
            name="name"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Email
          <input
            className="h-11 rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="you@company.com"
            type="email"
            name="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium sm:col-span-2">
          Project Type
          <select className="h-11 rounded-md border bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring" name="project">
            <option>Website Development</option>
            <option>Web Application</option>
            <option>E-commerce Development</option>
            <option>UI/UX Design</option>
            <option>SEO or Maintenance</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium sm:col-span-2">
          Message
          <textarea
            className="min-h-32 rounded-md border bg-background px-3 py-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
            placeholder="Tell us about your business, goals and ideal launch timeline."
            name="message"
            required
          />
        </label>
      </div>
      <Button className="mt-6 w-full sm:w-auto" type="submit">
        Send Project Brief <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
