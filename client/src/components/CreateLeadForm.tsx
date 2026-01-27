import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertLeadSchema, type InsertLead } from "@shared/schema";
import { useCreateLead } from "@/hooks/use-leads";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CreateLeadForm() {
  const { mutate, isPending } = useCreateLead();

  const form = useForm<InsertLead>({
    resolver: zodResolver(insertLeadSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      message: "",
    },
  });

  function onSubmit(data: InsertLead) {
    mutate(data, {
      onSuccess: () => form.reset(),
    });
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-border/50"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-primary mb-2">Get Started Today</h3>
        <p className="text-muted-foreground">
          Ready to launch your credit-building program? Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Jane Smith" 
                      className="h-12 rounded-lg bg-muted/30 border-border/60 focus:bg-white transition-all" 
                      {...field} 
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/80 font-medium">Company / Institution</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="First National Bank" 
                      className="h-12 rounded-lg bg-muted/30 border-border/60 focus:bg-white transition-all" 
                      {...field} 
                      value={field.value || ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-medium">Work Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="jane@bank.com" 
                    className="h-12 rounded-lg bg-muted/30 border-border/60 focus:bg-white transition-all" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-foreground/80 font-medium">How can we help?</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Tell us about your institution's goals..." 
                    className="min-h-[120px] rounded-lg bg-muted/30 border-border/60 focus:bg-white transition-all resize-none" 
                    {...field} 
                    value={field.value || ''}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isPending}
            className="w-full h-14 text-lg font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
          >
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Request Demo <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
}
