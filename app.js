/* ==========================================================================
   AI Fluency Training Library — Application Logic & Complete 2026 Stack Data
   Updated as of November 5, 2026 | Source: Dan Martell's 2026 AI Tech Stack
   ========================================================================== */

const STACK_SHIFTS = [
  {
    id: "shift-codex",
    tag: "Daily Driver #1",
    tagClass: "driver",
    date: "Nov 5, 2026 Audit",
    title: "Codex Overtakes Claude as #1 Daily Driver",
    oldState: "#1 Claude / Chat-First",
    newState: "#1 OpenAI Codex (Outcome Agent)",
    body: "Previously tucked inside ChatGPT (#2), Codex is now the #1 starting point. Instead of prompting back-and-forth, give Codex the outcome, context, connected apps, and a clear Definition of Done."
  },
  {
    id: "shift-grokbot",
    tag: "New #2 Addition",
    tagClass: "driver",
    date: "Nov 5, 2026 Audit",
    title: "Grok Bot Enters at #2 for Repeatable AI Teammates",
    oldState: "Ad-hoc weekly prompting",
    newState: "#2 Grok Bot (Role Routines)",
    body: "Right behind Codex, Grok Bot lets you build specialist AI teammates with defined roles, connected tools, and recurring weekly routines for research, inbox triage, and reporting."
  },
  {
    id: "shift-agents-replaced",
    tag: "Agent Consolidation",
    tagClass: "replaced",
    date: "Nov 5, 2026 Audit",
    title: "Hermes Agent & Perplexity Replace Manus & OpenClaw",
    oldState: "Manus (#5) & OpenClaw (#9)",
    newState: "Perplexity (#7) & Hermes (#10)",
    body: "High-risk or brittle browser agents (OpenClaw, Manus) were retired from the stack in favor of Perplexity for source-verified research and Nous Research's open-source Hermes Agent for persistent skills."
  },
  {
    id: "shift-apex-precision",
    tag: "Repositioned Core",
    tagClass: "architecture",
    date: "Nov 5, 2026 Audit",
    title: "Apex Becomes Shared Memory; Precision Adds Operators",
    oldState: "Isolated bots & BI dashboards",
    newState: "Shared Context + Human Operators",
    body: "Apex (#9) now serves as the cross-model Shared Business Memory across Claude, ChatGPT, and Grok. Precision (#16) evolved from KPI dashboards into a managed AI agent platform with operators for 10–50 person teams."
  },
  {
    id: "shift-winly-topicfinder",
    tag: "Revenue & Content",
    tagClass: "roi",
    date: "Nov 5, 2026 Audit",
    title: "Winly Replaces Revio; TopicFinder Anchors Content",
    oldState: "Revio (#16) & Blank-Page Scripts",
    newState: "Winly (#14) & TopicFinder (#18)",
    body: "Winly replaces Revio to bring Instagram/Facebook DM pipelines into a team CRM. TopicFinder joins at #18 to identify outlier topics before scripting in your voice, while Higgsfield (#20) stands alone for AI video."
  },
  {
    id: "shift-obsolete-automation",
    tag: "Category Retired",
    tagClass: "replaced",
    date: "Nov 5, 2026 Audit",
    title: "Legacy Workflow Tools (Zapier, n8n, Make) Sunsetted",
    oldState: "35 Tools across 9 Categories",
    newState: "22 High-Leverage Tools in 5 Categories",
    body: "The entire 'Automation & Workflow Tools' category (Zapier #33, n8n #34, Make #35) plus 16 overlapping point tools were pruned as connected agents and shared memory handle orchestration natively."
  }
];

const TOOLS_DATA = [
  {
    rank: 1,
    id: "codex",
    name: "Codex",
    url: "https://openai.com/codex/",
    category: "Chatbots & AI Agents",
    roleTag: "My #1 Daily Driver",
    status: "Promoted to #1",
    venture: null,
    takeQuote: "Codex is where I start now. Give it the outcome, the context, and access to the tools it needs. Then let it get to work.",
    takeSummary: "Previously viewed mainly as a coding tool, Codex with connected apps and plugins works through documents, research, software builds, and actual operational tasks in one place while you steer and review the result.",
    bestFor: "Building software, working across connected apps, research, and getting real work done.",
    novUpdate: "Promoted from a footnote under ChatGPT (#2 in the old 35-tool doc) to the #1 Daily Driver across the entire 2026 stack, overtaking Claude.",
    trainingLabTitle: "Lab 01: Outcome Delegation & Definition of Done (DoD)",
    trainingSteps: [
      "Select one recurring workflow you already know well (e.g., weekly ops synthesis, internal tool feature, or document audit).",
      "Connect the required source apps/repos rather than pasting fragmented snippets.",
      "Write a 4-part brief: (1) Desired Outcome, (2) Context & Constraints, (3) Connected Tools Allowed, and (4) Clear Definition of Done."
    ],
    sopPrompt: `OUTCOME BRIEF FOR CODEX:
1. Objective: Complete [specific deliverable/feature/document] ready for final review.
2. Context & Source of Truth: Use connected [Repo / Drive doc / dataset] as the canonical reference.
3. Definition of Done (DoD):
   - All acceptance criteria verified against source data
   - Edge cases documented clearly
   - Summary of changes and open decisions listed at the top`
  },
  {
    rank: 2,
    id: "grok-bot",
    name: "Grok Bot",
    url: "https://x.ai/bot",
    category: "Chatbots & AI Agents",
    roleTag: "#2 Daily Stack — AI Teammates",
    status: "New in Nov 2026 Update",
    venture: null,
    takeQuote: "Grok Bot lets you build a team of AI teammates, each with a specific job, the tools to do it, and routines that keep the work moving.",
    takeSummary: "Built for work that comes back every single week: research, inbox triage, reports, and following up on loose ends. Give a bot a single clearly explained role, show it what a good result looks like, and refine its repeatability before scaling to a full AI team.",
    bestFor: "Recurring tasks, research, inbox support, reporting, and specialist AI teammates.",
    novUpdate: "Brand-new addition at #2 overall ('Codex is my daily driver now, with Grok Bot right behind it'). Replaces brittle browser automation with repeatable role-based AI teammates.",
    trainingLabTitle: "Lab 02: Single-Role AI Teammate Routine Design",
    trainingSteps: [
      "Audit your calendar/inbox for one task that repeats every week (e.g., Monday market pulse, inbox triage, or KPI roll-up).",
      "Define one specialist Grok Bot role with a single job description and one gold-standard example output.",
      "Run the routine for two cycles with human-in-the-loop review before adding a second teammate."
    ],
    sopPrompt: `GROK BOT TEAMMATE CHARTER:
Role Name: Weekly Executive Triage & Follow-Up Specialist
Cadence: Every Monday & Thursday at 7:30 AM
Inputs: Connected Inbox, Open Commitments List, Weekly Priority Tracker
Gold-Standard Output Format:
1. Top 3 loose ends requiring founder sign-off (with drafted replies ready)
2. Stalled threads >48 hours old
3. 5-bullet weekly briefing summary`
  },
  {
    rank: 3,
    id: "claude",
    name: "Claude",
    url: "https://claude.com/product/overview",
    category: "Chatbots & AI Agents",
    roleTag: "My Writing & Thinking Partner",
    status: "Repositioned (#1 → #3)",
    venture: null,
    takeQuote: "Claude still earns a place in my stack. Writing. Editing. Analysis. Nuanced thinking. Those are the reasons I keep it around.",
    takeSummary: "One of the primary writing and editing tools in the stack because it thinks carefully, pushes back when you're wrong, and doesn't just tell you what you want to hear. Paired with Claude Code when it's time to build.",
    bestFor: "Writing, editing, analysis, coding.",
    novUpdate: "Moved from #1 Daily Driver to #3 Dedicated Writing & Thinking Partner, and absorbed the separate 'Claude Cowork' (#6) entry from the earlier 35-tool edition.",
    trainingLabTitle: "Lab 03: Dialectical Strategy Red-Teaming & Editorial Polish",
    trainingSteps: [
      "Bring a high-stakes draft, memo, or strategic plan into Claude.",
      "Explicitly instruct Claude not to flatter the draft, but to identify weak assumptions, blind spots, and structural fluff.",
      "Iterate through a two-pass edit: Pass 1 for logic & counterarguments, Pass 2 for voice and clarity."
    ],
    sopPrompt: `THINKING PARTNER PROMPT (CLAUDE):
I am working through the attached draft/strategy. Do not simply validate my ideas.
1. Identify the 3 weakest assumptions or logical gaps in this argument.
2. Push back from the perspective of a skeptical customer or executive.
3. Rewrite the core narrative in a direct, zero-fluff voice while preserving my core thesis.`
  },
  {
    rank: 4,
    id: "chatgpt",
    name: "ChatGPT",
    url: "https://chatgpt.com/",
    category: "Chatbots & AI Agents",
    roleTag: "Voice, Custom GPTs & Visuals",
    status: "Core Retained (#2 → #4)",
    venture: null,
    takeQuote: "Voice mode is helpful for hands-free thinking, and the Custom GPTs are useful for specific workflows. The image model is genuinely impressive.",
    takeSummary: "With Codex as the #1 daily driver, OpenAI plays an even larger role in daily execution. Use ChatGPT to talk through an idea hands-free in Voice Mode, work through a document, generate an image, or package a repeatable team workflow as a Custom GPT.",
    bestFor: "Voice mode, Custom GPTs, images, everyday thinking and drafting.",
    novUpdate: "Consolidated at #4 for multimodal versatility—specifically Voice Mode ideation, Custom GPT team workflows, and native image generation (replacing the standalone Nano Banana image entry).",
    trainingLabTitle: "Lab 04: Hands-Free Voice Ideation to Custom GPT Workflow",
    trainingSteps: [
      "Use ChatGPT Voice Mode during a walk or commute to talk through a messy problem for 5 minutes.",
      "Ask ChatGPT to synthesize your spoken thoughts into a structured 1-page SOP.",
      "Package that SOP into a Custom GPT with 3 starter conversation prompts for your team."
    ],
    sopPrompt: `VOICE MODE SYNTHESIS PROMPT:
I am going to talk through a brain dump on [project/initiative] for the next 3 minutes.
Listen without interrupting, then:
1. Extract the core objective and 3 key constraints.
2. Organize my thoughts into a clean 30/60/90 action plan.
3. Ask me the 2 most important clarifying questions I missed.`
  },
  {
    rank: 5,
    id: "gemini",
    name: "Gemini",
    url: "https://gemini.google/",
    category: "Chatbots & AI Agents",
    roleTag: "My Deep Research Partner",
    status: "Core Retained (#3 → #5)",
    venture: null,
    takeQuote: "Stay on the free tier, it's great for researching past events, full access to YouTube, but other tools give you more for less money on the paid side.",
    takeSummary: "If you live in the Google ecosystem, Gemini inside Gmail is a legitimate and underrated productivity upgrade, and its direct access to YouTube and historical research makes the free tier a high-ROI staple without needing paid seat bloat.",
    bestFor: "Gmail integration, research.",
    novUpdate: "Retained as Deep Research Partner (#5) with the same disciplined subscription guidance: maximize the free tier for YouTube/historical research and Gmail integration, and deploy paid budget toward execution agents.",
    trainingLabTitle: "Lab 05: YouTube Corpus Synthesis & Gmail Triage",
    trainingSteps: [
      "Pull 3 long-form YouTube keynote or interview links on a domain topic into Gemini.",
      "Extract a comparative matrix of frameworks, claims, and tactical takeaways across all videos.",
      "Use Gemini in Gmail to summarize long multi-stakeholder email threads into a 3-bullet action reply."
    ],
    sopPrompt: `GEMINI YOUTUBE & WORKSPACE RESEARCH PROMPT:
Analyze these YouTube lectures/interviews on [topic]:
1. Synthesize the top 5 non-obvious insights with timestamps.
2. Identify where the speakers agree vs. disagree.
3. Translate the findings into 3 immediate action items for our team this week.`
  },
  {
    rank: 6,
    id: "grok",
    name: "Grok",
    url: "https://x.ai/grok",
    category: "Chatbots & AI Agents",
    roleTag: "My Insights Partner",
    status: "Core Retained (#4 → #6)",
    venture: null,
    takeQuote: "Grok Heavy is in a different league when it comes to research. The depth, the accuracy, the ability to pull real-time information from X.",
    takeSummary: "Unmatched for understanding what is actually happening in the world today—not six months ago. Used constantly for competitor research, live market intelligence, and rapid visual generation via Grok Imagine.",
    bestFor: "Deep research, current events, real-time market intelligence, image generation.",
    novUpdate: "Positioned at #6 as the dedicated Real-Time Insights Partner (paired with #2 Grok Bot); updated copy drops the old $300/mo pricing callout to focus on Grok Heavy's multi-agent research depth and Grok Imagine.",
    trainingLabTitle: "Lab 06: Real-Time Market & Competitor Pulse Audit",
    trainingSteps: [
      "Run a Grok Heavy multi-agent query on your top 3 competitors and industry keywords over the past 14 days.",
      "Identify live customer complaints, pricing reactions, and emerging sentiment shifts on X.",
      "Generate 2 rapid concept visuals using Grok Imagine to test messaging angles."
    ],
    sopPrompt: `GROK HEAVY REAL-TIME INTELLIGENCE PROMPT:
Run a deep multi-agent scan on [Competitor / Market Category] over the last 30 days:
1. What real-time buyer complaints or friction points are surfacing right now?
2. Which product launches or positioning angles are getting organic traction?
3. Give me 3 counter-positioning hooks we can deploy this week.`
  },
  {
    rank: 7,
    id: "perplexity",
    name: "Perplexity",
    url: "https://www.perplexity.ai/",
    category: "Chatbots & AI Agents",
    roleTag: "Sourced Research & Fact-Checking",
    status: "New in Nov 2026 Update",
    venture: null,
    takeQuote: "When I want an answer I can actually check, this is a good place to start. Ask a question, get the research, and open the sources.",
    takeSummary: "The biggest mistake people make with AI research is stopping at the generated answer. Perplexity makes it easy to go one level deeper: Who said it? When? Does the primary source actually support the claim?",
    bestFor: "Sourced research, market questions, comparisons, and getting up to speed quickly.",
    novUpdate: "Brand-new addition at #7 in the updated 22-tool stack. Enforces source verification and primary-citation auditing before making executive decisions.",
    trainingLabTitle: "Lab 07: The 'One Level Deeper' Source Verification Protocol",
    trainingSteps: [
      "Query Perplexity to compare 3 vendor options or validate a market statistic.",
      "Click through the top 3 cited primary sources—never copy a statistic into a deck without verifying the underlying study date and methodology.",
      "Document verified citations alongside your recommendation memo."
    ],
    sopPrompt: `PERPLEXITY VERIFICATION PROTOCOL:
Research [market claim / vendor comparison / regulatory question].
For every key claim in your response:
1. Cite the primary source, author/organization, and exact publication date.
2. Flag any claims that rely on secondary commentary rather than primary data.
3. Provide a side-by-side comparison table with verified pros, cons, and pricing.`
  },
  {
    rank: 8,
    id: "claude-code",
    name: "Claude Code",
    url: "https://claude.com/product/claude-code",
    category: "Chatbots & AI Agents",
    roleTag: "Terminal-Native Software Builder",
    status: "Core Retained (#7 → #8)",
    venture: null,
    takeQuote: "It lives inside your terminal and builds from prompts in English. Still one of the strongest tools in my stack for building software.",
    takeSummary: "Sits directly inside your terminal where you describe what you want to build in plain English, test it, refine it, and ship internal tools or process automations that would have taken a dev team weeks.",
    bestFor: "Building apps, automating processes, coding without a dev team.",
    novUpdate: "Retained at #8 as a cornerstone terminal builder alongside #1 Codex and #22 Cursor AI.",
    trainingLabTitle: "Lab 08: Terminal-to-Prototype Internal Automation",
    trainingSteps: [
      "Open Claude Code in your project directory and ask it to map the repository architecture first.",
      "Describe a concrete internal utility or automation script in plain English with clear inputs and outputs.",
      "Have Claude Code run the test suite, fix any errors iteratively, and summarize the diff."
    ],
    sopPrompt: `CLAUDE CODE TERMINAL BRIEF:
1. Inspect the current directory structure and summarize how data flows through the app.
2. Build a clean, modular script/feature that [describe internal process automation].
3. Run tests to verify zero regressions and explain how to execute it in 3 steps.`
  },
  {
    rank: 9,
    id: "apex",
    name: "Apex",
    url: "https://apex.host/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=apex-featured",
    category: "Chatbots & AI Agents",
    roleTag: "Shared Business Memory",
    status: "Repositioned (#8 → #9)",
    venture: "Ventures Portfolio",
    takeQuote: "Apex gives your AI the context it's missing: your business, your relationships, your meetings, and the things you've committed to.",
    takeSummary: "Eliminates the time wasted re-explaining who a client is, what happened on the last call, and what you promised to send. Apex connects your existing tools into a shared business memory so Claude, ChatGPT, and Grok work from the same context and can take permissioned action back in those tools.",
    bestFor: "Founders who want their AI tools to understand the business and pick up where the last conversation left off. Access is currently through a waitlist.",
    novUpdate: "Major repositioning in the updated doc: evolved from a '24/7 digital twin' description into the cross-platform Shared Business Memory layer uniting Claude, ChatGPT, and Grok.",
    trainingLabTitle: "Lab 09: Cross-Model Shared Context & Permission Architecture",
    trainingSteps: [
      "List the 4 context silos you repeat most often to AI tools (Client History, Call Commitments, Active OKRs, Brand Voice).",
      "Map which systems hold that ground truth (CRM, Granola notes, Calendar, Slack/Email).",
      "Define read vs. write-back permission tiers before connecting autonomous actions."
    ],
    sopPrompt: `SHARED BUSINESS MEMORY AUDIT (APEX PREPARATION):
Before starting this task, align on the following persistent business context:
- Client / Stakeholder Profile: [Name, Role, Relationship History]
- Last Call Summary & Open Commitments: [Commitments + Due Dates]
- Approved Action Scope: Read-only analysis + draft creation (require human sign-off before external send).`
  },
  {
    rank: 10,
    id: "hermes-agent",
    name: "Hermes Agent",
    url: "https://hermes-agent.nousresearch.com/",
    category: "Chatbots & AI Agents",
    roleTag: "Open-Source Customizable Skill Agent",
    status: "New in Nov 2026 Update",
    venture: null,
    takeQuote: "If you want an AI assistant you can make your own, Hermes Agent is worth a serious look. It's open source, remembers context, and can turn useful workflows into reusable skills.",
    takeSummary: "Built by Nous Research around keeping long-term project memories, conversations, and reusable skills so you always pick up where you left off. Runs on desktop, in the terminal, or through messaging apps for scheduled reports and recurring briefings.",
    bestFor: "A customizable AI assistant, ongoing projects, reusable skills, and recurring work.",
    novUpdate: "Brand-new addition at #10 in the updated 22-tool stack, replacing OpenClaw (#9) and NotebookLM/Notion AI with an open-source, skill-building personal agent.",
    trainingLabTitle: "Lab 10: Converting a Manual Workflow into a Reusable Agent Skill",
    trainingSteps: [
      "Complete a multi-step research or reporting task once alongside your agent.",
      "Instruct Hermes Agent to extract the exact steps, formatting rules, and edge-case checks into a reusable Skill definition.",
      "Schedule the Skill as a recurring briefing via terminal or messaging gateway."
    ],
    sopPrompt: `HERMES AGENT SKILL EXTRACTION PROMPT:
Review the workflow we just completed successfully.
1. Distill the repeatable process into a reusable Skill named [skill-name].
2. Document required inputs, step-by-step execution logic, and output quality gates.
3. Save to persistent memory so we can trigger this workflow on schedule.`
  },
  {
    rank: 11,
    id: "granola",
    name: "Granola",
    url: "https://www.granola.ai/",
    category: "Productivity & Knowledge",
    roleTag: "Bot-Free Local Meeting Notes",
    status: "Core Retained (#10 → #11)",
    venture: null,
    takeQuote: "Meeting notes that make sense, without joining your calls. I replaced Otter.ai with Granola and I'm not going back.",
    takeSummary: "Records locally on your device so other participants on your call never see an intrusive recording bot join—and generates structured, intelligent notes and action items rather than a raw transcript dump.",
    bestFor: "Meeting notes, action items, call summaries.",
    novUpdate: "Retained as the #1 meeting intelligence tool (#11 overall), standing alongside Loom and Wispr Flow as the streamlined 3-tool Productivity & Knowledge stack.",
    trainingLabTitle: "Lab 11: Bot-Free Meeting Capture & Action Commitment Loop",
    trainingSteps: [
      "Jot 3–5 short keyword bullets during your call while Granola captures local audio.",
      "Immediately after the call ends, generate structured decisions, owner-assigned action items, and follow-up email drafts.",
      "Route commitments into your shared business memory / CRM within 2 minutes of hanging up."
    ],
    sopPrompt: `GRANOLA POST-CALL SYNTHESIS TEMPLATE:
From today's meeting notes and transcript, extract:
1. Core Decisions Made (with rationale)
2. Action Items (Owner + Exact Deliverable + Deadline)
3. Client/Partner Risks or Unspoken Concerns flagged during the conversation
4. Ready-to-send 5-sentence follow-up note`
  },
  {
    rank: 12,
    id: "loom",
    name: "Loom",
    url: "https://www.loom.com/",
    category: "Productivity & Knowledge",
    roleTag: "Async Video & Auto-SOP Communication",
    status: "Core Retained (#13 → #12)",
    venture: null,
    takeQuote: "If you're still scheduling meetings to explain things you could show in a 3-minute video, you're wasting everyone's time.",
    takeSummary: "Record your screen and face, share a link, no editing needed. Loom's AI auto-generates titles, chapters, summaries, and action items so the teammate or client watching doesn't even have to take notes.",
    bestFor: "Team communication, client updates, async feedback, onboarding, process documentation, replacing unnecessary meetings.",
    novUpdate: "Retained at #12 as the backbone of async team communication and meeting elimination.",
    trainingLabTitle: "Lab 12: The '3-Minute Loom vs. 30-Minute Meeting' Audit",
    trainingSteps: [
      "Audit next week's calendar and cancel at least two status or walkthrough meetings.",
      "Record a focused 3-minute Loom walking through the visual artifact, metrics, or feedback.",
      "Use Loom AI's auto-summary and action items to request a specific async decision by a set deadline."
    ],
    sopPrompt: `LOOM ASYNC BRIEFING STRUCTURE (3 MINUTES MAX):
0:00 - 0:30 | Context & The Single Decision Needed Today
0:30 - 2:15 | Screen Walkthrough of the Data / Prototype / Process
2:15 - 3:00 | Recommended Path Forward & Exact Next Step Required from Viewer`
  },
  {
    rank: 13,
    id: "wispr-flow",
    name: "Wispr Flow",
    url: "https://wisprflow.ai/r?DANIEL96092",
    category: "Productivity & Knowledge",
    roleTag: "200+ WPM Voice-to-Text Everywhere",
    status: "Core Retained (#14 → #13)",
    venture: null,
    takeQuote: "I talk, it types. Went from 80 WPM to 200+. Best productivity upgrade I've made this year.",
    takeSummary: "Works across your computer and phone in every application to dictate emails, messages, documents, and high-context AI prompts with remarkable accuracy—the single fastest daily throughput upgrade.",
    bestFor: "Dictation, email, messages, documents, ideation.",
    novUpdate: "Retained at #13 (updated name from 'Wispr' to 'Wispr Flow'); serves as the high-bandwidth input layer for feeding deep context into Codex, Claude, and Grok Bot at 200+ WPM.",
    trainingLabTitle: "Lab 13: High-Bandwidth Voice Prompting at 200+ WPM",
    trainingSteps: [
      "Replace typed 1-sentence prompts with a 60-second spoken Wispr Flow context dump (~200 words of rich background, constraints, and examples).",
      "Use Wispr Flow to clear your email and Slack/DM queue in one 15-minute vocal sprint.",
      "Add your company's custom product names and acronyms to Wispr's dictionary."
    ],
    sopPrompt: `60-SECOND WISPR FLOW VOICE PROMPT FORMULA:
Speak naturally covering 4 beats:
1. "Here is what we are trying to accomplish..."
2. "Here is the background context you need to know..."
3. "Avoid these common mistakes or tone traps..."
4. "Deliver the output in this exact structure..."`
  },
  {
    rank: 14,
    id: "winly",
    name: "Winly",
    url: "https://getwinly.ai/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=winly-tool",
    category: "Business Tools",
    roleTag: "Social DM Sales CRM",
    status: "New in Nov 2026 Update",
    venture: "Ventures Portfolio",
    takeQuote: "If your team sells in the DMs, take a look at Winly. It brings your Instagram and Facebook sales conversations into a CRM so the pipeline stops living in someone's inbox.",
    takeSummary: "Prevents high-intent social leads from disappearing under fifty other messages when a rep forgets to follow up. Tracks every conversation, manages next steps, and uses AI to draft replies and follow-ups so the whole team can see the pipeline.",
    bestFor: "Teams selling through Instagram and Facebook, DM follow-up, and social sales pipelines.",
    novUpdate: "Brand-new addition at #14 in the updated stack, directly replacing Revio (#16 in the old 35-tool doc) with full DM-to-CRM pipeline visibility.",
    trainingLabTitle: "Lab 14: Zero-Leakage Social DM Pipeline Architecture",
    trainingSteps: [
      "Connect Instagram and Facebook business inboxes into Winly so leads no longer sit in isolated rep DMs.",
      "Define 4 clear pipeline stages (New Inquiry → Qualified Pain → Call/Offer Sent → Closed/Follow-Up).",
      "Configure AI reply drafting guardrails to match your authentic founder/brand voice without sounding robotic."
    ],
    sopPrompt: `WINLY DM FOLLOW-UP PLAYBOOK:
Stage: Prospect asked a question 24h ago but hasn't booked next step.
AI Draft Guideline:
- Acknowledge their specific context in 1 warm sentence
- Share 1 relevant insight or resource (zero pressure)
- End with a simple binary question to advance the conversation`
  },
  {
    rank: 15,
    id: "frank",
    name: "Frank",
    url: "https://hellofrank.ai/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=frank-featured",
    category: "Business Tools",
    roleTag: "Real-Time Automated Financial AI",
    status: "Core Retained (#18 → #15)",
    venture: "Ventures Portfolio",
    takeQuote: "Stop making critical growth decisions with last month's data. Hello Frank gives you real-time financial clarity.",
    takeSummary: "Solves the 'flying blind financially' problem where founders wait two weeks after month-end for bookkeeper reports. Connects bank accounts, QuickBooks, Stripe, and HubSpot into instant charts, forecasts, and scenario models.",
    bestFor: "Scaling founders, SaaS companies, any founder who needs real-time financial visibility and scenario modeling.",
    novUpdate: "Retained at #15 in the consolidated Business Tools category as the dedicated financial intelligence engine.",
    trainingLabTitle: "Lab 15: Real-Time Cash & Hiring Scenario Modeling",
    trainingSteps: [
      "Connect live banking, Stripe, QuickBooks, and CRM feeds into Hello Frank.",
      "Replace lagging monthly static spreadsheets with a Monday morning 10-minute cash, burn, and margin pulse.",
      "Run a forward scenario model before approving any new headcount or ad-spend increase."
    ],
    sopPrompt: `WEEKLY FINANCIAL PULSE CHECK (HELLO FRANK):
1. Current Cash Position & 90-Day Runway Forecast vs. Plan
2. Gross Margin & Net Burn Variance over the trailing 30 days
3. Scenario Check: Impact on cash trough if revenue collection slows by 15% next quarter`
  },
  {
    rank: 16,
    id: "precision",
    name: "Precision",
    url: "https://precision.co/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=precision-tool",
    category: "Business Tools",
    roleTag: "AI Agent Platform + Human Operators",
    status: "Repositioned (#19 → #16)",
    venture: "Ventures Partner",
    takeQuote: "Precision combines an AI agent platform with operators who build, train, and run those agents with your team.",
    takeSummary: "Most founders don't need another tool to experiment with—they need someone to help figure out where AI should go, connect it to the business, and make sure it actually gets used across sales call reviews, customer follow-up, research, and recurring ops.",
    bestFor: "Companies with 10–50 people that want hands-on help putting AI agents to work.",
    novUpdate: "Major update in the Nov 2026 doc: shifted from 'KPI dashboards' (Ventures Portfolio) to 'AI agent platform + dedicated operators' (Ventures Partner) for 10–50 person companies.",
    trainingLabTitle: "Lab 16: Operator-Led AI Agent Deployment Audit (10–50 Person Teams)",
    trainingSteps: [
      "Identify the top 3 recurring operational bottlenecks landing on your team (e.g., 100% sales call QA, post-call client follow-up, weekly research).",
      "Separate workflows your team shouldn't build from scratch from those best deployed with a dedicated Precision operator.",
      "Establish weekly adoption and cycle-time KPIs to verify real team usage."
    ],
    sopPrompt: `PRECISION OPERATOR DEPLOYMENT BRIEF:
Target Department: [Sales / Client Success / Operations]
Recurring Bottleneck: [e.g., Reviewing every rep call for playbook adherence & coaching]
Success Metric: 100% call coverage + automated coaching scorecard delivered within 10 minutes of call completion.`
  },
  {
    rank: 17,
    id: "socialsweep",
    name: "SocialSweep",
    url: "https://socialsweep.ai/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=socialsweep-tool",
    category: "Business Tools",
    roleTag: "Network Mapping & Warm Intro Engine",
    status: "Core Retained (#23 → #17)",
    venture: "Ventures Portfolio",
    takeQuote: "It looks at your whole social network to tell you who you should reach out to AND what to say.",
    takeSummary: "One of the most underrated revenue levers in the stack. Tell SocialSweep who you want to reach—investors, strategic partners, enterprise customers—and it maps your entire social graph to find the warmest introduction path and exact outreach script.",
    bestFor: "Network mapping, warm introductions, relationship-based sales.",
    novUpdate: "Retained at #17 inside Business Tools as the premier relationship-led growth engine.",
    trainingLabTitle: "Lab 17: Weekly Warm-Path Relationship Sprint",
    trainingSteps: [
      "Define your top 10 dream partners, enterprise prospects, or podcast/keynote hosts for this quarter.",
      "Run SocialSweep to uncover 1st- and 2nd-degree mutual connectors across your team's network.",
      "Send 5 warm, high-context introduction requests per week using SocialSweep's tailored messaging."
    ],
    sopPrompt: `SOCIALSWEEP WARM INTRO CAMPAIGN:
Target Persona: [Enterprise Decision Maker / Strategic Partner / Investor]
Mutual Connector Identified: [Connector Name]
Double Opt-In Forwardable Blurb:
- 1 sentence on why we respect Target's recent work
- 1 sentence on the specific mutual value/outcome
- Zero-friction offer for a 12-minute intro chat`
  },
  {
    rank: 18,
    id: "topicfinder",
    name: "TopicFinder",
    url: "https://topicfinder.ai/?utm_source=danmartell.com&utm_medium=referral&utm_campaign=ai-tech-stack&utm_content=topicfinder-featured",
    category: "Content Creation",
    roleTag: "Evidence-Based Video Ideation & Scripting",
    status: "New in Nov 2026 Update",
    venture: "Ventures Portfolio",
    takeQuote: "Stop guessing what to make your next video about. TopicFinder helps you find the topics and videos already getting attention in your niche, then turn that research into scripts in your voice.",
    takeSummary: "A blank page is an expensive place to start. Instead of guessing for an hour, filming, editing, and finding out nobody cares, start with evidence of what is already outperforming, understand why it works, and inject your own lived experience into a first-draft script.",
    bestFor: "Content research, finding strong video topics, and writing original scripts. Access is rolling out through a waitlist.",
    novUpdate: "Brand-new addition at #18 anchoring the Content Creation category with evidence-based topic research and voice-matched scripting.",
    trainingLabTitle: "Lab 18: Evidence-First Video Scripting Workflow",
    trainingSteps: [
      "Use TopicFinder to identify 3 outlier videos in your niche that achieved 3x–10x the channel's baseline views.",
      "Analyze the structural hook, tension arc, and packaging—then pair that proven topic with your own original case study or story.",
      "Generate a voice-calibrated first draft so 80% of your energy goes into personal conviction and delivery."
    ],
    sopPrompt: `EVIDENCE-FIRST SCRIPT BRIEF (TOPICFINDER):
Proven Outlier Topic: [Topic + Packaging Angle]
Why It Outperformed: [Core viewer curiosity gap / pain point]
My Lived Experience / Case Study to Inject: [Specific story, numbers, and lesson]
Output: 3 high-retention hook options + full spoken-voice script outline.`
  },
  {
    rank: 19,
    id: "elevenlabs",
    name: "ElevenLabs",
    url: "https://elevenlabs.io/",
    category: "Content Creation",
    roleTag: "Industry-Standard Voice Cloning & Audio",
    status: "Core Retained (#25 → #19)",
    venture: null,
    takeQuote: "Top-tier AI voice generator for creating realistic voices and audio fixes. The standard for voice cloning.",
    takeSummary: "Used to clone founder voice for AI phone agents, training library narration, and seamless audio fixes in post-production where it is nearly indistinguishable from a live studio recording.",
    bestFor: "Voice cloning, audio production.",
    novUpdate: "Retained at #19 as the sole voice synthesis & audio standard (consolidating the old Vapi #26 entry out of the core list).",
    trainingLabTitle: "Lab 19: Voice-Cloned Training Module & Audio Patch Workflow",
    trainingSteps: [
      "Train a high-fidelity Professional Voice Clone using clean studio audio samples.",
      "Use ElevenLabs to patch single-word or metric updates in recorded videos without re-shooting on camera.",
      "Generate narrated audio companions for written SOPs and training guides."
    ],
    sopPrompt: `ELEVENLABS AUDIO PRODUCTION CHECKLIST:
1. Voice Profile: Verified Founder/Instructor Professional Clone
2. Pacing & Stability Settings: Natural conversational inflection (avoid over-smoothed robotic cadence)
3. Use Case: Patching updated 2026 metrics into existing training module or generating mobile audio briefing.`
  },
  {
    rank: 20,
    id: "higgsfield",
    name: "Higgsfield",
    url: "https://higgsfield.ai/",
    category: "Content Creation",
    roleTag: "2026 Go-To AI Video Studio (Replaced Sora)",
    status: "Core Retained (#27 → #20)",
    venture: null,
    takeQuote: "This is my go-to for video generation in 2026. Replaced Sora in my stack.",
    takeSummary: "Powers AI video production, marketing creative, and cinematic b-roll through Higgsfield Cinema Studio with deep team guides and repeatable visual direction.",
    bestFor: "AI video generation, marketing video, b-roll.",
    novUpdate: "Consolidated as the single AI Video champion at #20 (replacing Sora, and pruning separate Kling 3.0 #28 and Runway #29 entries from the old 35-tool list).",
    trainingLabTitle: "Lab 20: Directing Cinematic B-Roll in Higgsfield Cinema Studio",
    trainingSteps: [
      "Identify 3 key visual metaphors or high-impact b-roll moments in your video script.",
      "Specify subject, lighting, lens focal length, and camera motion inside Higgsfield Cinema Studio.",
      "Cut the generated 4K b-roll over spoken A-roll hooks to boost first-15-second viewer retention."
    ],
    sopPrompt: `HIGGSFIELD CINEMA STUDIO SHOT PROMPT:
Subject & Action: [Clear physical action and subject detail]
Environment & Lighting: [Golden hour / warm editorial studio / high-contrast cinematic lighting]
Camera & Lens: [35mm anamorphic, slow push-in dolly shot, shallow depth of field]
Purpose: 4-second visual hook b-roll for training/social opener.`
  },
  {
    rank: 21,
    id: "lovable",
    name: "Lovable",
    url: "https://lovable.dev/",
    category: "Apps and Building",
    roleTag: "No-Code Idea-to-App in Seconds",
    status: "Core Retained (#31 → #21)",
    venture: null,
    takeQuote: "Build fully functional websites and apps from scratch without writing a single line of code. Idea to app in seconds.",
    takeSummary: "Recommended for non-technical founders and operators who want to build internal tools, department-specific apps, or MVPs without waiting on a developer—describe what you want and get something functional fast.",
    bestFor: "Non-technical founders, internal tools, MVPs, rapid prototyping.",
    novUpdate: "Retained at #21 as the premier non-technical full-stack app builder.",
    trainingLabTitle: "Lab 21: Rapid Internal Tool & Client Portal Prototyping",
    trainingSteps: [
      "Write a 1-page functional spec describing the user role, core problem, 3 key screens, and data fields.",
      "Prompt Lovable to scaffold the working UI and interactive logic in minutes.",
      "Test with 2 real team members on day one before investing engineering cycles."
    ],
    sopPrompt: `LOVABLE APP SCAFFOLD PROMPT:
Build a clean, functional internal web app for [Department / Use Case]:
1. Primary User Goal: Allow team members to [core action] in under 60 seconds.
2. Core Views: (a) Input & Triage Form, (b) Live Status Queue, (c) Executive Summary Scorecard.
3. Design: Clean editorial layout, high legibility, mobile-responsive, zero clutter.`
  },
  {
    rank: 22,
    id: "cursor-ai",
    name: "Cursor AI",
    url: "https://cursor.com/",
    category: "Apps and Building",
    roleTag: "AI-First Code Editor",
    status: "Updated Copy (#32 → #22)",
    venture: null,
    takeQuote: "AI-first code editor. Best for technical users who want AI assistance inside their existing coding workflow.",
    takeSummary: "Makes technical founders and developers dramatically faster inside their native IDE workflow, and serves as the refinement environment for editing and hardening AI-generated code.",
    bestFor: "Technical founders, developers, editing AI-generated code.",
    novUpdate: "Retained at #22 with updated guidance: removed the deprecated 'refine code that Manus generates' reference to reflect editing AI-generated code from Codex, Lovable, or Claude Code.",
    trainingLabTitle: "Lab 22: The Hybrid Builder Loop (Scaffold → Cursor Refinement)",
    trainingSteps: [
      "Generate an initial prototype or feature branch using Lovable (#21) or Codex (#1).",
      "Open the repository in Cursor AI to refactor architecture, enforce type safety, and harden edge cases.",
      "Use Cursor's multi-file context to keep documentation and tests synchronized with every commit."
    ],
    sopPrompt: `CURSOR AI PRODUCTION HARDENING PROMPT:
Review the AI-generated feature across @[files]:
1. Refactor any duplicated logic into clean, reusable modules.
2. Add strict input validation, error handling, and accessibility attributes.
3. Verify zero broken links or console errors before deployment.`
  }
];

const SUNSETTED_TOOLS = [
  { oldRank: 5, name: "Manus", oldCat: "Agents", replacement: "Replaced by #1 Codex, #2 Grok Bot & #10 Hermes Agent" },
  { oldRank: 6, name: "Claude Cowork", oldCat: "Agents", replacement: "Consolidated directly into #3 Claude" },
  { oldRank: 9, name: "OpenClaw", oldCat: "Agents", replacement: "Replaced by #9 Apex (Shared Memory) & #10 Hermes Agent" },
  { oldRank: 11, name: "Notion AI", oldCat: "Productivity & Knowledge", replacement: "Pruned to focus on #9 Apex, #10 Hermes Agent & #11 Granola" },
  { oldRank: 12, name: "NotebookLM", oldCat: "Productivity & Knowledge", replacement: "Covered by #5 Gemini (YouTube/Docs) & #7 Perplexity" },
  { oldRank: 15, name: "Your Atlas", oldCat: "Sales, Revenue & CRM", replacement: "Streamlined out of core 22; voice workflows via #19 ElevenLabs" },
  { oldRank: 16, name: "Revio", oldCat: "Sales, Revenue & CRM", replacement: "Directly replaced by #14 Winly (DM Sales CRM)" },
  { oldRank: 17, name: "Latch AI", oldCat: "Sales, Revenue & CRM", replacement: "Consolidated into #9 Apex & #16 Precision operator workflows" },
  { oldRank: 20, name: "Hero Hire", oldCat: "Finance, BI, Ops", replacement: "Pruned in 22-tool core stack consolidation" },
  { oldRank: 21, name: "Membership.io", oldCat: "Community & Outreach", replacement: "Pruned in 22-tool core stack consolidation" },
  { oldRank: 22, name: "Buddy Pro", oldCat: "Community & Outreach", replacement: "Consolidated into #9 Apex & #10 Hermes Agent skills" },
  { oldRank: 24, name: "Nano Banana", oldCat: "Content Creation", replacement: "Covered natively by #4 ChatGPT Images & #6 Grok Imagine" },
  { oldRank: 26, name: "Vapi", oldCat: "Content Creation", replacement: "Consolidated around #19 ElevenLabs voice platform" },
  { oldRank: 28, name: "Kling 3.0", oldCat: "Content Creation", replacement: "Consolidated under #20 Higgsfield Cinema Studio" },
  { oldRank: 29, name: "Runway", oldCat: "Content Creation", replacement: "Consolidated under #20 Higgsfield Cinema Studio" },
  { oldRank: 30, name: "Gamma", oldCat: "Content Creation", replacement: "Pruned to focus Content Creation on #18 TopicFinder, #19 ElevenLabs & #20 Higgsfield" },
  { oldRank: 33, name: "Zapier", oldCat: "Automation & Workflow", replacement: "Entire category retired ('becoming obsolete') → #1 Codex & #2 Grok Bot" },
  { oldRank: 34, name: "n8n", oldCat: "Automation & Workflow", replacement: "Entire category retired → #8 Claude Code & #10 Hermes Agent" },
  { oldRank: 35, name: "Make", oldCat: "Automation & Workflow", replacement: "Entire category retired → #16 Precision & #1 Codex" }
];

const ROLE_BLUEPRINTS = [
  {
    id: "founder-exec",
    title: "Founder & Executive OS",
    subtitle: "Decision clarity, shared memory & 200+ WPM throughput",
    goal: "Stop acting as the human router between disconnected tools. Dictate context at 200+ WPM, delegate outcomes with a clear Definition of Done, and maintain real-time financial visibility.",
    steps: [
      { step: "Step 1 · Input & Memory", tool: "#13 Wispr Flow + #9 Apex", desc: "Dictate context at 200+ WPM and keep client/meeting commitments unified across Claude, ChatGPT, and Grok." },
      { step: "Step 2 · Daily Execution", tool: "#1 Codex + #2 Grok Bot", desc: "Delegate project outcomes to Codex and assign weekly recurring briefings and inbox triage to Grok Bot teammates." },
      { step: "Step 3 · Meeting & Async", tool: "#11 Granola + #12 Loom", desc: "Capture bot-free local meeting notes with Granola and replace 30-minute status calls with 3-minute Looms." },
      { step: "Step 4 · Financial Clarity", tool: "#15 Frank (Hello Frank)", desc: "Review live cash, margin, and scenario forecasts from Stripe/QuickBooks/HubSpot instead of 2-week-old reports." }
    ],
    metric: "Target Fluency Outcome: 10+ hours/week reclaimed from status meetings & re-explaining context; real-time financial visibility."
  },
  {
    id: "ops-ci",
    title: "Operations & Continuous Improvement",
    subtitle: "Human-Centered Lean AI & managed agent execution",
    goal: "Eliminate manual handoffs, brittle legacy zaps, and repetitive admin work by combining process discipline (Clarify → Simplify → Integrate) with autonomous agents.",
    steps: [
      { step: "Step 1 · Process & Specs", tool: "#3 Claude + #7 Perplexity", desc: "Stress-test operational SOPs with Claude and benchmark vendor/industry standards with Perplexity citations." },
      { step: "Step 2 · Managed Agents", tool: "#16 Precision", desc: "For 10–50 person teams, pair Precision's AI agent platform with dedicated operators to run call reviews and recurring ops." },
      { step: "Step 3 · Custom Skills", tool: "#10 Hermes Agent", desc: "Convert repeatable multi-step workflows into persistent, open-source Hermes Agent skills and scheduled briefings." },
      { step: "Step 4 · Internal Tooling", tool: "#8 Claude Code + #21 Lovable", desc: "Spin up department-specific internal apps and automated scripts in hours instead of waiting quarters on dev backlogs." }
    ],
    metric: "Target Fluency Outcome: Replace brittle Zapier/Make chains with resilient, operator-verified agentic workflows and reusable skills."
  },
  {
    id: "revenue-sales",
    title: "Revenue, Social Sales & Partnerships",
    subtitle: "Warm network mapping, DM CRM & live market intelligence",
    goal: "Turn your existing social graph into warm introductions and stop losing high-intent Instagram/Facebook DM conversations inside individual rep inboxes.",
    steps: [
      { step: "Step 1 · Warm Outbound", tool: "#17 SocialSweep", desc: "Map your entire network to find the warmest introduction path to target investors, partners, and customers—plus exact scripts." },
      { step: "Step 2 · Social DM Pipeline", tool: "#14 Winly", desc: "Centralize Instagram and Facebook sales DMs into a shared team CRM with AI-assisted reply drafting and follow-up tracking." },
      { step: "Step 3 · Live Market Pulse", tool: "#6 Grok (Grok Heavy)", desc: "Monitor real-time competitor moves, buyer sentiment, and breaking category trends on X." },
      { step: "Step 4 · Call QA & Coaching", tool: "#11 Granola + #16 Precision", desc: "Capture every discovery call locally and run automated sales call reviews so zero leads slip through the cracks." }
    ],
    metric: "Target Fluency Outcome: Zero dropped DM leads, faster response cycle times, and warm relationship-led pipeline growth."
  },
  {
    id: "content-media",
    title: "Content & Media Production Engine",
    subtitle: "Evidence-first scripting, voice cloning & Cinema Studio video",
    goal: "Never start from a blank page. Validate outlier topics with evidence before filming, clone your voice for audio scale, and produce cinematic AI b-roll.",
    steps: [
      { step: "Step 1 · Evidence & Scripting", tool: "#18 TopicFinder", desc: "Find topics and videos already outperforming in your niche and turn that research into first-draft scripts in your voice." },
      { step: "Step 2 · Deep Research", tool: "#5 Gemini + #3 Claude", desc: "Use Gemini's free tier for YouTube/historical research and Claude to sharpen narrative structure and hooks." },
      { step: "Step 3 · Voice & Audio", tool: "#19 ElevenLabs", desc: "Clone your voice for training narration, AI phone agents, and seamless post-production audio fixes." },
      { step: "Step 4 · Cinematic Video", tool: "#20 Higgsfield", desc: "Generate marketing video and cinematic b-roll in Higgsfield Cinema Studio (which officially replaced Sora in the 2026 stack)." }
    ],
    metric: "Target Fluency Outcome: Higher outlier hit-rate per video with 50% less wasted ideation and production friction."
  },
  {
    id: "builders-dev",
    title: "App Builders (Non-Technical & Technical)",
    subtitle: "Idea-to-MVP in Lovable to production hardening in Cursor & Codex",
    goal: "Bridge non-technical rapid prototyping with production-grade engineering across Lovable, Codex, Claude Code, and Cursor AI.",
    steps: [
      { step: "Step 1 · Instant MVP", tool: "#21 Lovable", desc: "Describe the internal tool or MVP in plain English to generate a working full-stack application without writing code." },
      { step: "Step 2 · Autonomous Tasks", tool: "#1 Codex + #8 Claude Code", desc: "Delegate feature builds, test suites, and repo-wide tasks with a clear Definition of Done." },
      { step: "Step 3 · IDE Refinement", tool: "#22 Cursor AI", desc: "Open the codebase in Cursor AI to refine AI-generated code, enforce architecture standards, and ship to production." },
      { step: "Step 4 · Voice Spec Input", tool: "#13 Wispr Flow + #4 ChatGPT", desc: "Brainstorm architecture hands-free in ChatGPT Voice Mode and dictate detailed specs at 200+ WPM via Wispr Flow." }
    ],
    metric: "Target Fluency Outcome: Compress prototype-to-production cycle time from weeks to hours."
  }
];

const DIAGNOSTIC_QUESTIONS = [
  {
    id: "diag-1",
    text: "We start daily work by delegating clear outcomes + a Definition of Done (Codex / Claude Code) rather than typing one-off chat prompts.",
    weight: 15
  },
  {
    id: "diag-2",
    text: "We have deployed at least one repeatable AI teammate role (Grok Bot / Hermes Agent / Precision) for weekly recurring work.",
    weight: 15
  },
  {
    id: "diag-3",
    text: "Our team uses voice dictation (Wispr Flow at 200+ WPM) and async 3-minute video (Loom) to eliminate unnecessary typing and meetings.",
    weight: 15
  },
  {
    id: "diag-4",
    text: "We verify AI research claims one level deeper by opening primary sources (Perplexity) and real-time market signals (Grok Heavy).",
    weight: 15
  },
  {
    id: "diag-5",
    text: "Our meeting notes are captured locally without intrusive bots (Granola) and feed into shared business context (Apex).",
    weight: 15
  },
  {
    id: "diag-6",
    text: "We have audited our subscriptions—cutting overlapping paid seats (using Gemini free tier for YouTube/Gmail) and retiring brittle legacy automations.",
    weight: 15
  },
  {
    id: "diag-7",
    text: "Our content, DM sales, and financial decisions run on evidence and live data (TopicFinder, Winly, Hello Frank, SocialSweep).",
    weight: 10
  }
];

// State
let activeCategory = "ALL";
let activeStatusFilter = "ALL";
let searchQuery = "";
let activeRoleId = ROLE_BLUEPRINTS[0].id;

function renderShifts() {
  const container = document.getElementById("shifts-grid");
  if (!container) return;
  container.innerHTML = STACK_SHIFTS.map(shift => `
    <article class="shift-card" id="${shift.id}">
      <div class="shift-meta">
        <span class="shift-tag ${shift.tagClass}">${shift.tag}</span>
        <span>${shift.date}</span>
      </div>
      <h3 class="shift-title">${shift.title}</h3>
      <div class="shift-transition">
        <span class="shift-old">${shift.oldState}</span>
        <span aria-hidden="true">→</span>
        <span class="shift-new">${shift.newState}</span>
      </div>
      <p class="shift-body">${shift.body}</p>
    </article>
  `).join("");
}

function renderTools() {
  const grid = document.getElementById("tools-grid");
  const summary = document.getElementById("results-summary");
  if (!grid) return;

  const filtered = TOOLS_DATA.filter(tool => {
    const matchesCat = activeCategory === "ALL" || tool.category === activeCategory;
    const matchesStatus =
      activeStatusFilter === "ALL" ||
      (activeStatusFilter === "NEW" && (tool.status.includes("New") || tool.status.includes("Promoted"))) ||
      (activeStatusFilter === "REPOSITIONED" && (tool.status.includes("Repositioned") || tool.status.includes("Updated"))) ||
      (activeStatusFilter === "VENTURE" && tool.venture !== null);

    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      tool.name.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q) ||
      tool.roleTag.toLowerCase().includes(q) ||
      tool.takeQuote.toLowerCase().includes(q) ||
      tool.takeSummary.toLowerCase().includes(q) ||
      tool.bestFor.toLowerCase().includes(q) ||
      tool.novUpdate.toLowerCase().includes(q);

    return matchesCat && matchesStatus && matchesSearch;
  });

  if (summary) {
    summary.textContent = `Showing ${filtered.length} of ${TOOLS_DATA.length} active tools in the November 5, 2026 stack`;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="tool-card" style="grid-column: 1 / -1; text-align: center; padding: 2.5rem;">
        <h3 class="tool-name">No matching tools found</h3>
        <p class="tool-take-summary" style="margin-top: 0.5rem;">Try clearing your search query or switching the category filter back to All 22 Tools.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(tool => `
    <article class="tool-card" id="tool-card-${tool.id}">
      <div class="tool-card-top">
        <div class="tool-header-row">
          <div class="tool-identity">
            <span class="tool-rank">#${tool.rank}</span>
            <div>
              <h3 class="tool-name">${tool.name}</h3>
              <span class="tool-role-badge">${tool.roleTag}</span>
            </div>
          </div>
          <div class="badge-group">
            <span class="badge badge-category">${tool.category}</span>
            ${tool.venture ? `<span class="badge badge-venture">${tool.venture}</span>` : ""}
            <span class="badge badge-driver">${tool.status}</span>
          </div>
        </div>

        <div class="tool-take-box">
          <div class="tool-take-label">Dan Martell's Take</div>
          <p class="tool-take-quote">“${tool.takeQuote}”</p>
          <p class="tool-take-summary">${tool.takeSummary}</p>
        </div>

        <div class="tool-nov-update">
          <strong>Nov 5, 2026 Library Update</strong>
          ${tool.novUpdate}
        </div>

        <p class="tool-best-for"><strong>Best for:</strong> ${tool.bestFor}</p>
      </div>

      <div class="tool-card-footer">
        <button type="button" class="btn-card-lab" id="btn-lab-${tool.id}" data-tool-id="${tool.id}">
          Open Training Lab & SOP
        </button>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="link-external" id="link-ext-${tool.id}">
          Visit Tool ↗
        </a>
      </div>
    </article>
  `).join("");

  // Attach modal triggers
  grid.querySelectorAll(".btn-card-lab").forEach(btn => {
    btn.addEventListener("click", () => {
      openToolModal(btn.getAttribute("data-tool-id"));
    });
  });
}

function renderSunsettedTable() {
  const tbody = document.getElementById("sunsetted-tbody");
  if (!tbody) return;
  tbody.innerHTML = SUNSETTED_TOOLS.map(item => `
    <tr>
      <td style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem;">#${item.oldRank}</td>
      <td style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); font-weight: 600;">${item.name}</td>
      <td style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--text-secondary); font-size: 0.85rem;">${item.oldCat}</td>
      <td style="padding: 0.65rem 0.85rem; border-bottom: 1px solid var(--border-subtle); color: var(--accent-sage); font-weight: 500; font-size: 0.85rem;">${item.replacement}</td>
    </tr>
  `).join("");
}

function renderRoleBlueprints() {
  const selectorList = document.getElementById("role-selector-list");
  const panel = document.getElementById("role-blueprint-panel");
  if (!selectorList || !panel) return;

  selectorList.innerHTML = ROLE_BLUEPRINTS.map(role => `
    <button type="button" class="role-btn ${role.id === activeRoleId ? "active" : ""}" id="role-btn-${role.id}" data-role-id="${role.id}">
      <span class="role-btn-title">${role.title}</span>
      <span class="role-btn-sub">${role.subtitle}</span>
    </button>
  `).join("");

  selectorList.querySelectorAll(".role-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      activeRoleId = btn.getAttribute("data-role-id");
      renderRoleBlueprints();
    });
  });

  const current = ROLE_BLUEPRINTS.find(r => r.id === activeRoleId) || ROLE_BLUEPRINTS[0];
  panel.innerHTML = `
    <div class="blueprint-header">
      <div class="section-eyebrow">Role Implementation Playbook</div>
      <h3 class="blueprint-title">${current.title}</h3>
      <p class="blueprint-goal">${current.goal}</p>
    </div>
    <div class="blueprint-steps">
      ${current.steps.map(s => `
        <div class="blueprint-step">
          <div class="step-num">${s.step}</div>
          <div class="step-tool">${s.tool}</div>
          <p class="step-desc">${s.desc}</p>
        </div>
      `).join("")}
    </div>
    <div class="blueprint-metric">${current.metric}</div>
  `;
}

function renderDiagnostic() {
  const list = document.getElementById("diagnostic-checklist");
  if (!list) return;

  list.innerHTML = DIAGNOSTIC_QUESTIONS.map((q, idx) => `
    <label class="check-item" for="${q.id}">
      <input type="checkbox" id="${q.id}" data-weight="${q.weight}" ${idx < 2 ? "checked" : ""} />
      <span>${q.text}</span>
    </label>
  `).join("");

  list.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener("change", updateDiagnosticScore);
  });

  updateDiagnosticScore();
}

function updateDiagnosticScore() {
  const boxes = document.querySelectorAll('#diagnostic-checklist input[type="checkbox"]');
  let score = 0;
  boxes.forEach(b => {
    if (b.checked) score += Number(b.getAttribute("data-weight") || 0);
  });

  const numEl = document.getElementById("score-number");
  const tierEl = document.getElementById("score-tier");
  const fillEl = document.getElementById("score-bar-fill");
  const recEl = document.getElementById("score-recommendation");

  if (numEl) numEl.textContent = `${score}%`;
  if (fillEl) fillEl.style.width = `${score}%`;

  let tier = "Stage 1: Ad-Hoc Prompting";
  let rec = "Start by installing Wispr Flow (#13) for 200+ WPM input, replacing status calls with 3-minute Looms (#12), and delegating one well-defined task to Codex (#1).";

  if (score >= 85) {
    tier = "Stage 4: Autonomous AI Operating System";
    rec = "Your stack is aligned with the November 5, 2026 frontier. Focus on scaling shared business memory (Apex #9), reusable skills (Hermes #10), and operator-led agents (Precision #16).";
  } else if (score >= 55) {
    tier = "Stage 3: Multi-Tool Operational Fluency";
    rec = "Strong foundation. Next step: transition from manual tool-switching to repeatable weekly AI teammates in Grok Bot (#2) and source-verified decision briefs in Perplexity (#7).";
  } else if (score >= 30) {
    tier = "Stage 2: Structured Co-Pilot Adoption";
    rec = "You have core tools in place. Eliminate bot clutter on calls with Granola (#11) and define clear Definitions of Done before handing work to Codex (#1) or Claude (#3).";
  }

  if (tierEl) tierEl.textContent = tier;
  if (recEl) recEl.textContent = rec;
}

function openToolModal(toolId) {
  const tool = TOOLS_DATA.find(t => t.id === toolId);
  const modal = document.getElementById("tool-modal");
  const content = document.getElementById("tool-modal-content");
  if (!tool || !modal || !content) return;

  content.innerHTML = `
    <div class="modal-top">
      <div>
        <div class="section-eyebrow">Tool #${tool.rank} · ${tool.category}</div>
        <h2 class="section-title">${tool.name} — ${tool.roleTag}</h2>
      </div>
      <button type="button" class="modal-close" id="btn-close-modal">Close ✕</button>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">Why It's in the November 5, 2026 Stack</div>
      <p style="font-size: 0.94rem; color: var(--text-secondary); margin-bottom: 0.5rem;"><strong>“${tool.takeQuote}”</strong></p>
      <p style="font-size: 0.9rem; color: var(--text-secondary);">${tool.takeSummary}</p>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">Hands-On Fluency Exercise: ${tool.trainingLabTitle}</div>
      <ol style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-primary); display: flex; flex-direction: column; gap: 0.45rem;">
        ${tool.trainingSteps.map(step => `<li>${step}</li>`).join("")}
      </ol>
    </div>

    <div class="modal-section">
      <div class="modal-section-label">Copyable Team SOP & Prompt Template</div>
      <pre class="prompt-box" id="modal-prompt-text">${tool.sopPrompt}</pre>
      <div style="display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap;">
        <button type="button" class="btn-primary" id="btn-copy-prompt">Copy SOP Template</button>
        <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary" id="modal-visit-link">Open ${tool.name} ↗</a>
      </div>
    </div>
  `;

  modal.classList.add("open");

  document.getElementById("btn-close-modal").addEventListener("click", closeToolModal);
  document.getElementById("btn-copy-prompt").addEventListener("click", (e) => {
    navigator.clipboard.writeText(tool.sopPrompt);
    e.currentTarget.textContent = "Copied to Clipboard ✓";
  });
}

function closeToolModal() {
  const modal = document.getElementById("tool-modal");
  if (modal) modal.classList.remove("open");
}

function initControls() {
  // Category pills
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.getAttribute("data-category");
      renderTools();
    });
  });

  // Search input
  const searchInput = document.getElementById("tool-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderTools();
    });
  }

  // Status filter dropdown
  const statusSelect = document.getElementById("status-filter-select");
  if (statusSelect) {
    statusSelect.addEventListener("change", (e) => {
      activeStatusFilter = e.target.value;
      renderTools();
    });
  }

  // Theme toggle
  const themeBtn = document.getElementById("btn-theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      themeBtn.textContent = next === "dark" ? "☀ Light Mode" : "☾ Dark Mode";
    });
  }

  // Modal backdrop click & Escape
  const modal = document.getElementById("tool-modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeToolModal();
    });
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeToolModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderShifts();
  renderTools();
  renderSunsettedTable();
  renderRoleBlueprints();
  renderDiagnostic();
  initControls();
});
