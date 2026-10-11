"use client";

import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { contactSchema, type ContactValues } from "@/lib";
import { submitContact } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactValues) => {
    const result = await submitContact(values);

    if (!result.ok) {
      toast.error("Please check the form and try again.");
      return;
    }

    toast.success("Message sent. I’ll get back to you shortly.");
    reset();
    router.replace("/contact/success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-8"
      noValidate
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          error={errors.name?.message}
        >
          <Input
            id="name"
            autoComplete="name"
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
          />
        </Field>
        <Field
          id="email"
          label="Email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@studio.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
          />
        </Field>
      </div>

      <Field
        id="company"
        label="Company"
        optional
        error={errors.company?.message}
      >
        <Input
          id="company"
          autoComplete="organization"
          placeholder="Studio or company"
          aria-invalid={Boolean(errors.company)}
          {...register("company")}
        />
      </Field>

      <Field
        id="message"
        label="Project"
        error={errors.message?.message}
      >
        <Textarea
          id="message"
          placeholder="What are you building, and how can I help?"
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
      </Field>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" loading={isSubmitting} className="sm:min-w-44">
          {isSubmitting ? "Sending" : "Send message"}
        </Button>
        <p className="text-sm text-muted-foreground">
          I usually reply within two working days.
        </p>
      </div>
    </form>
  );
};

type FieldProps = {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

function Field({ id, label, optional, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} className="font-mono text-[11px] tracking-[0.16em] uppercase">
        {label}
        {optional ? (
          <span className="ml-2 font-normal text-muted-foreground">Optional</span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default ContactForm;
