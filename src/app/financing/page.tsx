import { Metadata } from "next";
import FinancingContent from "@/components/FinancingContent";

export const metadata: Metadata = {
  title: "Car Loans & Auto Financing | Fresno Auto Sales",
  description: "Get pre-qualified for an auto loan in Fresno. We work with Chase, Wells Fargo, and more to help first-time buyers and bad credit history.",
};

export default function FinancingPage() {
  return <FinancingContent />;
}