import { useState } from "react";
import { z } from "zod";
import { Check } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150).optional().or(z.literal("")),
  interest: z.enum(["Scarves", "Bags", "Dresses", "Accessories", "Other"]),
  message: z.string().trim().min(1, "Tell us a little about your project").max(1500),
});

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      interest: String(fd.get("interest") ?? "Scarves"),
      message: String(fd.get("message") ?? ""),
    };
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    const message = [
      "Hello HH Textiles,",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "N/A"}`,
      `Product Interest: ${data.interest}`,
      "",
      "Message:",
      data.message,
    ].join("\n");
    const whatsappUrl = `https://wa.me/919773828007?text=${encodeURIComponent(message)}`;
    if (window.top) {
      window.top.location.href = whatsappUrl;
    } else {
      window.location.href = whatsappUrl;
    }
    e.currentTarget.reset();
  };

  const fieldCls =
    "w-full bg-white/8 border border-white/20 rounded-lg px-4 py-3 text-cream placeholder:text-cream/50 focus:outline-none focus:border-accent focus:bg-white/12 transition-colors";

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/20 bg-white/8 p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-accent/20 border border-accent flex items-center justify-center mb-4">
          <Check className="text-accent" />
        </div>
        <h3 className="font-display text-2xl text-cream mb-2">Thank you</h3>
        <p className="text-cream/75 text-sm leading-relaxed">
          Your enquiry has reached our team. We'll be in touch within one business day.
        </p>
        <button
          onClick={() => setSent(false)}
          className="mt-6 text-accent text-sm underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <input name="name" placeholder="Your Name" className={fieldCls} />
          {errors.name && <p className="text-xs text-accent mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="email" type="email" placeholder="Email" className={fieldCls} />
          {errors.email && <p className="text-xs text-accent mt-1">{errors.email}</p>}
        </div>
      </div>
      <input name="company" placeholder="Company Name" className={fieldCls} />
      <select name="interest" defaultValue="Scarves" className={fieldCls}>
        {["Scarves", "Bags", "Dresses", "Accessories", "Other"].map((o) => (
          <option key={o} value={o} className="bg-[color:var(--olive-deep)] text-cream">
            {o}
          </option>
        ))}
      </select>
      <div>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your project, quantities, fabrics…"
          className={fieldCls + " resize-none"}
        />
        {errors.message && <p className="text-xs text-accent mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-charcoal font-medium py-3.5 rounded-lg hover:brightness-95 transition cursor-pointer"
      >
        Send Enquiry
      </button>
    </form>
  );
}
