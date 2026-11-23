import { site } from "../src/data.js";

const blob = JSON.stringify(site);
const errors = [];

const banned = [
  /\bMD\b/,
  /\bM\.D\./,
  /\bMBBS\b/,
  /physician/i,
  /\bdoctor\b/i,
  /\bDr\./,
  /openai/i,
  /anthropic/i,
  /chatgpt/i,
  /\bclaude\b/i,
  /gemini/i,
  /midjourney/i,
  /mistral/i,
  /huggingface/i,
  /copilot/i,
];

for (const pattern of banned) {
  if (pattern.test(blob)) errors.push(`Banned text matched ${pattern}`);
}

const degree = "Bachelor of Medicine & Bachelor of Surgery";
if (!site.education.some((item) => item.includes(degree))) {
  errors.push("Degree line is missing or altered.");
}

const allowedHrefs = new Set([
  "https://cashpay.vigilaisolutions.com",
  "https://www.linkedin.com/in/sangeeta-sinha76",
  "https://vigilaisolutions.com",
  "https://github.com/vigilai-stack",
  "mailto:sangeeta@vigilaisolutions.com",
]);

function walk(value, path) {
  if (typeof value === "string") {
    if (value.includes("github.com/") && !value.includes("github.com/vigilai-stack")) {
      errors.push(`Unexpected GitHub URL at ${path}: ${value}`);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key === "href" && typeof child === "string" && !allowedHrefs.has(child)) {
        errors.push(`Unexpected link at ${path}.${key}: ${child}`);
      }
      walk(child, `${path}.${key}`);
    }
  }
}

walk(site, "site");

const demoHrefs = site.projects
  .map((project) => project.demo?.href)
  .filter(Boolean);
if (demoHrefs.length !== 1 || demoHrefs[0] !== "https://cashpay.vigilaisolutions.com") {
  errors.push("CashPay must be the only project demo link.");
}

const allowedCategories = new Set([
  "Healthcare AI",
  "Clinical Trials",
  "Security",
  "Hackathons",
  "Personal",
]);
for (const project of site.projects) {
  if (!project.categories?.length) errors.push(`${project.name} is missing categories`);
  for (const category of project.categories || []) {
    if (!allowedCategories.has(category)) errors.push(`${project.name} has unknown category ${category}`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Content check passed.");
