import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type CreateLeadInput } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

/**
 * Form hook for creating a new lead.
 * Handles validation, API request, and toast notifications for success/error states.
 * @returns A mutation object from tanstack/react-query.
 */
export function useCreateLead() {
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (data: CreateLeadInput) => {
      const validated = api.leads.create.input.parse(data);
      const res = await fetch(api.leads.create.path, {
        method: api.leads.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to submit lead");
      }

      return api.leads.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Request Received",
        description: "We'll be in touch shortly to schedule your demo.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
