/**
 * Portfolio content. Edit this file to update the site.
 * Wording follows the resume; do not add facts that are not listed here.
 */
export const site = {
  name: "Sangeeta Sinha",
  location: "Tomball, TX",
  role: "Founder & CEO, VigilAI Solutions",
  descriptor: "Healthcare and payments AI agents with human sign-off",
  statement:
    "I founded VigilAI Solutions in January 2026 because clinical, financial, compliance and security systems are still fragmented, and AI is arriving faster than organizations can govern it.",
  about: {
    place: "Tomball, TX",
    paragraphs: [
      "Healthcare technology founder and product executive with 20+ years inside healthcare: as a Medical Officer in the Army Medical Corps (India), then ran two Houston-area outpatient clinics, then led healthcare data, revenue-cycle and AI products. I have done the front-desk, billing-coding, clinical-data and compliance work that AI is now being asked to take over, and I have seen where it goes wrong.",
      "I build AI agents that do this work while a named person keeps the authority: the model drafts, the rules check, a human approves, and every step is logged. With formal training in AI, machine learning and cybersecurity, I write the code myself and also work as a forward-deployed consultant, building inside each client's own workflow and turning technology into measurable clinical, operational and financial results.",
    ],
  },
  projects: [
    {
      name: "Nilu, an AI-Companion for My Father",
      categories: ["Personal"],
      tagline: "Personal project",
      description:
        "Designed and built a warm, voice-friendly AI companion that keeps my father company and supports his daily routine after the passing of my mother. It has daily conversation, gentle health check-ins, and a respectful, family-aware persona, with clear honesty that it's an AI. Validated with a real-world questionnaire from my father's daily life. Dedicated to my mother Late Smt. Nilu Sinha.",
    },
    {
      name: "VigilAI CareIntegrity",
      categories: ["Healthcare AI"],
      tagline: "Institution-wide clinical documentation integrity",
      context: "flagship prototype",
      description:
        "Institution-wide audit platform for hospitals and health systems. It detects tampered, inconsistent or risky entries in medical records across departments before they become compliance, billing or legal problems, and gives reviewers a clear evidence trail. It's VigilAI's flagship product, and the one I plan to scale with EWOR's support.",
      builtWith: ["Python", "local web app", "append-only records"],
      tests: "131 automated tests",
      feature: true,
    },
    {
      name: "Patient CashPay AI Agent",
      categories: ["Healthcare AI", "Hackathons"],
      tagline: "AI payment & booking agent for clinics",
      context: "PayPal AI Hackathon, team lead",
      description:
        "An AI front-desk agent that quotes transparent cash prices, books appointments and takes payments, with every refund or exception routed to a human for approval.",
      builtWith: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "PayPal REST APIs",
        "Docker Compose",
        "AWS Lightsail",
      ],
      tests: "230+ automated tests",
      labels: ["public repo"],
      demo: {
        href: "https://cashpay.vigilaisolutions.com",
        label: "cashpay.vigilaisolutions.com",
      },
      feature: true,
    },
    {
      name: "Copay Accumulator Audit",
      categories: ["Healthcare AI"],
      tagline: "Patient financial advocacy",
      description:
        "Recalculates whether manufacturer copay assistance was credited toward a patient's deductible and out-of-pocket limit, or quietly excluded by the plan, and drafts the appeal letter.",
    },
    {
      name: "ProxyAfter",
      categories: ["Security"],
      tagline: "HIPAA access control",
      description:
        "Finds patient-portal proxy access that is still active after it should have ended, such as after a death, an 18th birthday, or the end of a guardianship, before it becomes a privacy breach.",
    },
    {
      name: "RangeFlip",
      categories: ["Clinical Trials"],
      tagline: "Clinical trial data quality",
      description:
        "Re-scores trial participants when a site's lab reference ranges change and flags anyone whose eligibility flips, protecting both patient safety and trial integrity.",
    },
    {
      name: "OverrideLens",
      categories: ["Healthcare AI"],
      tagline: "Medication safety",
      description:
        "Reviews drug-allergy and drug-interaction alert overrides, grading each as justified, weak or unjustified, with the quoted reason and repeat-pattern risk for pharmacy and patient-safety teams.",
    },
    {
      name: "WellProof",
      categories: ["Healthcare AI"],
      tagline: "Consumer environmental health",
      description:
        "A Pass, Fail or Fix check of a private-well water lab report against accreditation, freshness, completeness and EPA and state limits, so a homebuyer knows what they're buying before closing.",
    },
    {
      name: "Med-Sec Audit AI Agent",
      categories: ["Security", "Hackathons"],
      tagline: "Google and Kaggle AI Agents Intensive capstone (Agents for Good), team PHI Guardians",
      description:
        "Red, Blue and Green team agents attack, scan EHR access logs and patch; a compliance agent checks findings against HIPAA, HITECH and NIST text. Sandboxed tools, PHI masking and a SHA-256 audit log, on 500+ synthetic EHR records.",
      builtWith: ["Python", "MCP", "hybrid retrieval", "Streamlit"],
      labels: ["public repo"],
    },
    {
      name: "Silent Siren",
      categories: ["Hackathons"],
      tagline: "UGREEN AI NAS Hackathon 2026",
      description:
        "A privacy-first safety skill for elders living alone or in senior living. It runs entirely on a home NAS (a home storage server) and checks saved room audio against camera events to catch emergencies, with no vendor cloud, so the family's recordings never leave the house.",
    },
    {
      name: "QNX Bedside Guardian",
      categories: ["Healthcare AI", "Hackathons"],
      tagline: "QNX Global Hackathon (Robotics & Medical)",
      description:
        "Alarm escalation for a hospital unit, written in C on QNX 8.0: unanswered high-priority alarms move from bedside nurse to charge nurse to rapid response on fixed deadlines, and a person must acknowledge the exact alarm version they were shown.",
      builtWith: ["C on QNX 8.0", "native message passing", "hash-chained event log"],
      labels: ["public repo"],
    },
    {
      name: "ClearSend",
      categories: ["Healthcare AI", "Hackathons"],
      tagline: "#BuildHybridAI 2026",
      description:
        'Private pre-check for patient portal messages, run on-device in the browser: flags red-flag symptoms ("call 911 now"), strips identifiers a clinic never needs, and routes the message to the right desk. Health details stay on the device.',
      builtWith: ["On-device model in the browser", "fixed safety rules"],
      labels: ["public repo"],
    },
    {
      name: "TrialGuard",
      categories: ["Clinical Trials", "Hackathons"],
      tagline: "Clinical trial protocol compliance",
      context: "Atlassian Codegeist 2026",
      description:
        "An assistant for research teams that reviews protocol deviations, proposes a severity level and corrective actions, and keeps people in charge. It can't approve or close anything on its own, and Major or Critical deviations need a second person to sign off.",
      builtWith: ["TypeScript on Atlassian Forge"],
      tests: "217 automated tests",
    },
    {
      name: "VigilAI Trial Match",
      categories: ["Clinical Trials"],
      tagline: "Clinical trial patient pre-screening",
      description:
        "Pre-screens patients against a trial's eligibility criteria and marks each one Found, Not found or Unclear, with the evidence behind it. Only the investigator can mark a patient eligible, so the tool speeds up screening without making the medical decision.",
      builtWith: ["Python", "PostgreSQL", "FHIR R4", "HL7 v2"],
    },
    {
      name: "Healthcare security set",
      categories: ["Security"],
      tagline: "Clinic SOC, ransomware detector and phishing screener",
      context: "three public repos",
      description:
        "Three tools for healthcare security teams: a security-monitoring detection pack for clinics, a hospital ransomware detector, and a phishing screener for clinic front desks. On fictional clinic email it had never seen, the screener caught 58 of 60 phishing messages and flagged none of the 60 legitimate ones.",
      builtWith: ["Python", "Sigma", "YARA", "scikit-learn"],
    },
  ],
  experience: [
    {
      heading: "Founder experience",
      roles: [
        {
          title: "Founder & CEO",
          org: "VigilAI Solutions LLC, United States (Remote)",
          dates: "Jan 2026–Present",
          bullets: [
            "Solo founder: I set the direction, write the code and deliver the client work. The company builds AI agents for healthcare and fintech in which the AI understands and drafts, server-side rules decide what is allowed, and a person signs off before money moves, a record changes or a message goes out.",
          ],
        },
        {
          kicker: "Client engagement",
          title: "Director of AI-Automations & Clinical Operations Innovation (Consultant)",
          org: "King Wellness Institute, Houston, TX (Hybrid)",
          dates: "Jun 2026–Present",
          bullets: [
            "Work with clinicians and clinic leadership on clinical and documentation workflows and where AI can help; set the human-review criteria for AI output (accuracy, evidence, unsupported conclusions, privacy) before anything reaches staff.",
          ],
        },
        {
          title: "Founder & Principal Consultant",
          org: "Grandeur Healthcare Consultants, Houston, TX",
          dates: "Jan 2012–Mar 2020",
          bullets: [
            "Founded and ran a bootstrapped healthcare consulting practice for eight years, alongside running clinic operations.",
          ],
        },
      ],
    },
    {
      heading: "Professional experience",
      roles: [
        {
          title: "Director / Product Owner Healthcare",
          org: "Domain Experts Group, Houston, TX",
          dates: "Apr 2020–Jun 2026",
          focus: "Data Science, Analytics, AI Agent, Cybersecurity",
          bullets: [
            "Led an agentic revenue-cycle platform with human review of AI output; it cut chart-review effort 73%, reached 91% clinician acceptance and identified $1.8M in at-risk revenue.",
            "Owned roadmaps, requirements and releases for healthcare data, claims, denials and analytics products with engineering, data science and compliance; contributed to a predictive analytics solution associated with a 12% reduction in hospital readmissions.",
            "Built HIPAA- and NIST-aligned PHI handling into release criteria, so privacy and security were checked before each release.",
          ],
        },
        {
          title: "Senior Clinical Data Manager (Freelance)",
          org: "ARR Clinical Research Inc., Houston, TX (Remote)",
          dates: "Oct 2020–Sep 2025",
          bullets: [
            "Ran clinical-trial data work end to end under GCP: validation, discrepancy and query management, reconciliation and database-lock readiness; improved data quality and accuracy 25% through validation rules and structured review.",
          ],
        },
        {
          title: "Clinic Administrator",
          org: "Maternal & Family Clinic, The Woodlands, TX",
          dates: "Sep 2012–Mar 2020",
          note: "Also Clinical Coordinator (part-time) at the same clinic, Feb 2013–Dec 2016",
          bullets: [
            "Ran daily operations from patient access and scheduling to documentation, coding, billing and reimbursement; led EMR and e-prescribing adoption.",
          ],
        },
        {
          title: "Clinic Administrator",
          org: "Infinity Mind & Body, Tomball, TX",
          dates: "Oct 2007–Aug 2012",
          bullets: [
            "Managed patient access, billing, documentation, clinical workflows and staff; helped clinicians adopt EMR and e-prescribing.",
          ],
        },
        {
          title: "Medical Officer",
          org: "Army Medical Corps, India",
          dates: "2004–Jun 2007",
          bullets: [
            "Served as a Captain; provided clinical care in field and hospital settings and led medical teams, supplies and care priorities under pressure.",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      name: "Founder",
      text: "0-to-1 product strategy, customer discovery, roadmaps, and delivery with a named person in the loop",
    },
    {
      name: "Healthcare",
      text: "Clinical workflows, revenue cycle (claims, denials, prior authorization, ICD-10-CM, CPT, HCPCS), clinical data management, ICH-GCP, HIPAA; hands-on with multiple EMR/EHR and CTMS systems; FHIR R4, HL7 v2",
    },
    {
      name: "Building",
      text: "Python, TypeScript, C, SQL (PostgreSQL), R; FastAPI, React, Docker Compose, GitHub Actions, AWS; LLM agents with retrieval, eval sets, prompt-injection tests and human approval steps; machine learning with scikit-learn and PyTorch",
    },
    {
      name: "Security",
      text: "Threat detection (SIEM, Sigma, YARA), incident response, DFIR, network security, ethical hacking, NIST, ISO 27001",
    },
  ],
  certifications: [
    "CompTIA Security+",
    "CompTIA CySA+",
    "EC-Council Certified Ethical Hacker (CEH)",
    "Certified Scrum Product Owner (CSPO)",
  ],
  training:
    "Clinical Data Management; Good Clinical Practice; Google Project Management; AWS Cloud Technical Essentials; Architecting Solutions on AWS; Generative AI and AI Data Management",
  education: [
    "Post Graduate Program in AI & Machine Learning, McCombs School of Business, University of Texas at Austin",
    "Cybersecurity Professional Program, San Diego State University Global Campus",
    "Bachelor of Medicine & Bachelor of Surgery, Armed Forces Medical College, Pune, India",
    "B.Sc. Physics (Honours), Patna Women's College, Patna, India",
  ],
  contact: [
    { label: "sangeeta@vigilaisolutions.com", href: "mailto:sangeeta@vigilaisolutions.com" },
    { label: "linkedin.com/in/sangeeta-sinha76", href: "https://www.linkedin.com/in/sangeeta-sinha76" },
    { label: "vigilaisolutions.com", href: "https://vigilaisolutions.com" },
    { label: "github.com/vigilai-stack", href: "https://github.com/vigilai-stack" },
  ],
  footer: "© 2026 Sangeeta Sinha | VigilAI Solutions LLC. All rights reserved.",
};

export const categories = [
  "All",
  "Healthcare AI",
  "Clinical Trials",
  "Security",
  "Hackathons",
  "Personal",
];

export const themes = [
  { id: "cyberpunk", label: "Cyberpunk" },
  { id: "vigilai", label: "VigilAI" },
  { id: "clinical", label: "Clinical" },
];

export const tabs = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];
