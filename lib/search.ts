import { learningContent } from "@/data/content";

type LearningContentItem = {
  id: string;
  title: string;
  module: "sales" | "stock" | "workshop" | "vehicles" | "finance" | "support";
  process: string;
  type: "video" | "help";
  source: "youtube" | "gitbook";
  keywords: string[];
};

const intentRules: Array<{
  keywords: string[];
  module: LearningContentItem["module"];
}> = [
  { keywords: ["invoice", "factura"], module: "sales" },
  { keywords: ["stock"], module: "stock" },
  { keywords: ["order"], module: "sales" },
  { keywords: ["appointment"], module: "workshop" },
  { keywords: ["vehicle"], module: "vehicles" },
  { keywords: ["cash", "payment"], module: "finance" },
  { keywords: ["error"], module: "support" }
];

export function detectIntentModule(query: string) {
  const normalizedQuery = query.toLowerCase();

  return intentRules.find((rule) =>
    rule.keywords.some((keyword) => normalizedQuery.includes(keyword))
  )?.module;
}

export function searchLearningContent(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return [];
  }

  const intentModule = detectIntentModule(normalizedQuery);
  const terms = normalizedQuery.split(/\s+/).filter(Boolean);
  const content = learningContent as LearningContentItem[];

  return content.filter((item) => {
    const searchableText = `${item.title} ${item.process} ${item.keywords.join(" ")}`.toLowerCase();
    const matchesKeyword = terms.some((term) => searchableText.includes(term));
    const matchesIntent = intentModule ? item.module === intentModule : false;

    return matchesKeyword || matchesIntent;
  });
}
