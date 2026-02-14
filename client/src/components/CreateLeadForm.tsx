import { motion } from "motion/react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

/**
 * A simple form component for capturing lead information.
 * @returns The Lead capture form component.
 */
export function CreateLeadForm() {
  const { toast } = useToast();
  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertLead) => {
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit lead");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your request has been submitted. We'll be in touch soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: error.message,
      });
    },
  });

  const onSubmit = (data: InsertLead) => {
    mutation.mutate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Get Started Today
        </h3>
        <p className="text-gray-600">
          Ready to launch your credit-building program? Fill out the form below
          and our team will get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Full Name
            </label>
            <Input
              {...form.register("name")}
              type="text"
              placeholder="Jane Smith"
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-secondary-500 transition-all px-4"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">
              Company / Institution
            </label>
            <Input
              {...form.register("companyName")}
              type="text"
              placeholder="First National Bank"
              className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-secondary-500 transition-all px-4"
            />
            {form.formState.errors.companyName && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.companyName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            Work Email
          </label>
          <Input
            {...form.register("email")}
            type="email"
            placeholder="jane@bank.com"
            className="w-full h-12 rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-secondary-500 transition-all px-4"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-800 font-medium mb-2">
            How can we help?
          </label>
          <Textarea
            {...form.register("message")}
            placeholder="Tell us about your institution's goals..."
            className="w-full min-h-[120px] rounded-lg bg-gray-50 border border-gray-300 focus:bg-white focus:border-secondary-500 transition-all resize-none px-4 py-3"
          />
          {form.formState.errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          disabled={mutation.isPending}
          className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
        >
          {mutation.isPending ? (
            <>
              Submitting... <Loader2 className="w-5 h-5 animate-spin" />
            </>
          ) : (
            <>
              Request Demo <ArrowRight className="w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
