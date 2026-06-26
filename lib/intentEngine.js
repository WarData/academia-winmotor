import { learningContent } from "@/data/content";

const explicitIntentRules = [
  {
    terms: ["factura", "invoice"],
    module: "sales",
    process: "create_invoice"
  },
  {
    terms: ["stock", "inventario"],
    module: "stock",
    process: "stock_check"
  },
  {
    terms: ["cita", "appointment"],
    module: "workshop",
    process: "create_appointment"
  },
  {
    terms: ["pago", "cobro"],
    module: "finance",
    process: "payments"
  },
  {
    terms: ["vehículo", "vehiculo", "vehicle"],
    module: "vehicles",
    process: "vehicle_creation"
  }
];

function normalizeQuery(query) {
  return query.trim().toLowerCase();
}

function findByModuleAndProcess(module, process) {
  return learningContent.find(
    (item) => item.module === module && item.process === process
  );
}

function findGitBookFallback(module) {
  return learningContent.find(
    (item) => item.module === module && item.source === "gitbook"
  );
}

function getKeywordScore(item, queryTerms) {
  const searchableValues = [item.process, ...item.keywords].map((value) =>
    value.toLowerCase()
  );

  return queryTerms.reduce((score, term) => {
    const matched = searchableValues.some((value) => value.includes(term));
    return matched ? score + 1 : score;
  }, 0);
}

export function detectIntent(query) {
  const normalizedQuery = normalizeQuery(query);

  if (!normalizedQuery) {
    return undefined;
  }

  const explicitRule = explicitIntentRules.find((rule) =>
    rule.terms.some((term) => normalizedQuery.includes(term))
  );

  if (explicitRule) {
    return (
      findByModuleAndProcess(explicitRule.module, explicitRule.process) ??
      findGitBookFallback(explicitRule.module)
    );
  }

  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);
  const scoredItems = learningContent
    .map((item) => ({
      item,
      score: getKeywordScore(item, queryTerms)
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score);

  if (scoredItems[0]) {
    return scoredItems[0].item;
  }

  const fallbackModule = explicitIntentRules.find((rule) =>
    rule.terms.some((term) => normalizedQuery.includes(term))
  )?.module;

  return fallbackModule ? findGitBookFallback(fallbackModule) : undefined;
}
