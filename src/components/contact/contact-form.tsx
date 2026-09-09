"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { submitContact } from "@/actions/contact";
import { Icon } from "@/components/site/icon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { projectTypes } from "@/content/contact";
import { contactSchema, type ContactInput } from "@/lib/validation";

export function ContactForm() {
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      projectType: projectTypes[0].value,
      message: "",
      company: "",
    },
  });

  function onSubmit(values: ContactInput) {
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.status === "success") {
        toast.success("Message sent", {
          description: "Thanks — I'll get back to you shortly.",
        });
        reset();
      } else {
        toast.error("Couldn't send that", { description: result.message });
      }
    });
  }

  return (
    <form
      id="contact-form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-space-md"
    >
      <Field id="name" label="Your Name" error={errors.name?.message}>
        <Input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="e.g. Sarah Jenkins"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          {...register("name")}
        />
      </Field>

      <Field id="email" label="Email Address" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="s.jenkins@company.com"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          {...register("email")}
        />
      </Field>

      <Field id="projectType" label="Project Type" error={errors.projectType?.message}>
        <Select id="projectType" {...register("projectType")}>
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </Select>
      </Field>

      <Field id="message" label="Message" error={errors.message?.message}>
        <Textarea
          id="message"
          rows={5}
          placeholder="Tell me about your product goals, timeline, and scope..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
        />
      </Field>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <Button
        type="submit"
        variant="contained"
        size="lg"
        disabled={isPending}
        className="mt-space-xs w-full"
      >
        {isPending ? "Sending…" : "Send Message"}
        <Icon name="arrow_forward" className="text-[18px]" />
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-space-2xs">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-body-sm text-error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
