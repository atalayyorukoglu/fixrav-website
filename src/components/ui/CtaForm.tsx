import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cta } from "@/i18n/cta";
import { t } from "@/i18n/utils";
import type { Locale } from "@/i18n/utils";

interface Props {
  locale: Locale;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function CtaForm({ locale }: Props) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY,
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          from_name: "FixRav Website",
        }),
      });

      const data = (await res.json()) as { success?: boolean };
      setStatus(data.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 text-center">
        <p className="text-sm font-medium text-primary">{t(cta.success, locale)}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">{t(cta.labelName, locale)}</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">{t(cta.labelEmail, locale)}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={status === "submitting"}
        />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{t(cta.labelMessage, locale)}</Label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder={t(cta.placeholderMessage, locale)}
          disabled={status === "submitting"}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-destructive">{t(cta.error, locale)}</p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="w-full btn btn--primary">
        {status === "submitting" ? t(cta.submitting, locale) : t(cta.submit, locale)}
      </Button>
    </form>
  );
}
