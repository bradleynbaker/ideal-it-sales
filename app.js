const modules = [
  {
    id: "doe-landscape",
    number: 1,
    title: "DOE Landscape & Accounts",
    outcome: "Classifies western DOE accounts by mission, budget-weighted priority, and sales motion.",
    summary: "Map the western DOE landscape across classified NNSA, open science, applied missions, cleanup, and power marketing so early calls sound informed instead of generic.",
    scenario: "You have back-to-back meetings with LLNL and Berkeley Lab. One requires classified mission awareness; the other may split into core LBNL, NERSC, and JGI discovery tracks.",
    say: "I want to align to the mission first because a weapons-support environment, an open-science environment, and a site-operations environment are very different conversations.",
    mustKnow: [
      "NNSA and classified accounts require a different tone, partner motion, and discovery path than open-science labs.",
      "Hanford is a cleanup and site-operations motion, not an open-science lab conversation.",
      "BPA belongs in the territory map, but it has a utility-style cycle rather than a lab-style buying rhythm.",
      "LBNL should be broken into core lab discovery plus the distinct NERSC and JGI motions.",
      "Priority should be driven by mission relevance and budget scale, not by geography alone."
    ],
    priorityOrder: [
      { account: "LANL", note: "Largest western NNSA budget signal and highest-security mission motion." },
      { account: "SNL", note: "Major systems-engineering and national security account with dense stakeholder coverage." },
      { account: "Hanford", note: "Large cleanup and site-operations budget with long-cycle execution pressure." },
      { account: "LLNL", note: "Critical Bay Area classified account with HPC and weapons stewardship relevance." },
      { account: "INL", note: "Applied nuclear energy and national security mission with meaningful infrastructure potential." },
      { account: "LBNL", note: "Broad open-science account, elevated by NERSC and JGI sub-motions." },
      { account: "PNNL", note: "Hybrid national security and science account with strong mission diversity." },
      { account: "BPA", note: "Important regional account, but a different commercial cycle than the labs." },
      { account: "SLAC", note: "Open-science account that matters strategically but is smaller by funding signal." }
    ],
    subAccounts: [
      {
        name: "NERSC",
        detail: "Treat as the Berkeley Lab HPC and scientific-computing motion for AI, throughput, and data-intensive research conversations."
      },
      {
        name: "JGI",
        detail: "Treat as the Berkeley Lab genomics and data-workflow motion where sequencing, analytics, and large-scale science data management matter."
      }
    ],
    comparisonRows: [
      {
        account: "LANL",
        category: "Classified / NNSA",
        mission: "Weapons, plutonium, simulation, national security",
        priority: "Tier 1",
        motion: "High-security, partner-led, mission-first"
      },
      {
        account: "SNL",
        category: "Classified / NNSA",
        mission: "Weapons systems engineering, national security tech",
        priority: "Tier 1",
        motion: "Engineering-heavy, stakeholder-dense"
      },
      {
        account: "Hanford",
        category: "Cleanup / EM",
        mission: "Cleanup, vitrification, waste treatment, site operations",
        priority: "Tier 1",
        motion: "Long-cycle, compliance-heavy, operational"
      },
      {
        account: "LLNL",
        category: "Classified / NNSA",
        mission: "Weapons stewardship, scientific computing, stockpile support",
        priority: "Tier 1",
        motion: "HPC plus classified nuance"
      },
      {
        account: "INL",
        category: "Applied / Multi-Mission DOE",
        mission: "Nuclear energy, test facilities, homeland security",
        priority: "Tier 2",
        motion: "Program-driven, applied mission selling"
      },
      {
        account: "LBNL",
        category: "Open Science / DOE",
        mission: "Unclassified science, user facilities, compute",
        priority: "Tier 2",
        motion: "Open-science discovery motion"
      },
      {
        account: "PNNL",
        category: "Applied / Multi-Mission DOE",
        mission: "National security, nonproliferation, energy, nuclear materials",
        priority: "Tier 2",
        motion: "Hybrid science and security motion"
      },
      {
        account: "BPA",
        category: "Power Marketing",
        mission: "Self-financed power and transmission business",
        priority: "Tier 2",
        motion: "Utility-style cycle, not lab-style"
      },
      {
        account: "SLAC",
        category: "Open Science / DOE",
        mission: "Accelerator and photon science, user-facility model",
        priority: "Tier 3",
        motion: "Smaller open-science motion"
      }
    ],
    coaching: [
      "The rep should classify western accounts correctly before she talks product.",
      "She should distinguish LLNL, Hanford, LBNL, and BPA with different opening language.",
      "She should recognize NERSC and JGI as separate Berkeley Lab paths rather than one generic LBNL pitch.",
      "She should stay in orchestrator mode and avoid pretending to be the architect."
    ],
    question: "Which account motion should be treated as cleanup and site-operations rather than open science?",
    options: [
      "Hanford",
      "SLAC",
      "NERSC"
    ],
    correctIndex: 0
  },
  {
    id: "procurement",
    number: 2,
    title: "Procurement Pathways & Acronyms",
    outcome: "Understands how DOE deals move through federal, M&O, subcontract, and clearance-heavy pathways.",
    summary: "Build working fluency in FAR, TAA, Q and L clearances, SCMC, primes, subcontractors, and DOE's Management and Operating contractor model so procurement conversations stop feeling opaque.",
    scenario: "A DOE contact says the requirement may move through a site prime, security requirements are still being assessed, and your team needs the right partner structure before the deal advances.",
    say: "We want to stay aligned with the actual acquisition path, so let's confirm whether this will move as a federal buy, through an M&O prime, or as a subcontract motion and bring CTG in now.",
    mustKnow: [
      "The FAR is the primary regulation for executive-agency acquisition of supplies and services with appropriated funds.",
      "DOE is unusual because most of its procurement base flows through Management and Operating contractors, not just direct federal prime awards.",
      "For many DOE opportunities, the practical path is prime-to-sub rather than direct manufacturer-to-government.",
      "DOE uses L and Q access authorizations instead of the more familiar Secret and Top Secret language used elsewhere.",
      "SCMC matters because it simplifies buying and creates multi-site commodity agreements for DOE Environmental Management and NNSA prime contractors."
    ],
    priorityHeading: "How Deals Usually Move",
    priorityOrder: [
      { account: "1. Qualify the Path", note: "Is this a direct federal acquisition, an M&O prime-led buy, or a subcontracting motion?" },
      { account: "2. Confirm Security", note: "Determine early whether L or Q access, cleared personnel, or cleared facilities will shape the pursuit." },
      { account: "3. Map the Prime", note: "Identify which site prime, integrator, or contract vehicle controls execution." },
      { account: "4. Bring CTG Early", note: "CTG should be involved before architecture, compliance, and execution details harden." },
      { account: "5. Validate TAA", note: "Confirm country-of-origin and supply-chain compliance before the deal gets late-stage attention." },
      { account: "6. Check SCMC", note: "Ask whether an SCMC agreement or enterprise sourcing motion affects how the buy will happen." }
    ],
    comparisonHeading: "Acronyms And Pathways",
    comparisonColumns: ["Term", "What It Means", "Why The Seller Cares", "Field Signal", "Action"],
    comparisonRows: [
      {
        account: "FAR",
        category: "Federal Acquisition Regulation",
        mission: "Baseline procurement rule set for executive agencies",
        priority: "Federal rules are in play",
        motion: "Do not improvise around contracting policy"
      },
      {
        account: "TAA",
        category: "Trade Agreements Act compliance",
        mission: "Country-of-origin can affect eligibility",
        priority: "Hardware sourcing can become a blocker",
        motion: "Validate compliance before late-stage quoting"
      },
      {
        account: "L Clearance",
        category: "DOE access authorization roughly aligned to Secret-level background/access needs",
        mission: "May be enough for lower classified requirements",
        priority: "The opportunity is not fully open but may not require Q",
        motion: "Check role-by-role access needs early"
      },
      {
        account: "Q Clearance",
        category: "DOE access authorization roughly aligned to Top Secret and required for some Restricted Data access",
        mission: "Critical in many NNSA and Restricted Data environments",
        priority: "The opportunity may need cleared people, facilities, or partners",
        motion: "Escalate partner and staffing planning immediately"
      },
      {
        account: "SCMC",
        category: "Supply Chain Management Center",
        mission: "Strategic sourcing program for EM and NNSA prime contractors",
        priority: "Enterprise agreements may shape the buying path",
        motion: "Ask if an existing sourcing channel already exists"
      },
      {
        account: "M&O Prime",
        category: "Management and Operating contractor",
        mission: "DOE's dominant operating model across many sites",
        priority: "Most DOE small-business dollars flow through these primes",
        motion: "Win the prime-led pathway, not just the end-user interest"
      },
      {
        account: "Subcontract",
        category: "Partner or supplier role under a prime",
        mission: "Often the real route into DOE execution",
        priority: "CTG and site primes become central to the deal",
        motion: "Align to the prime's execution model early"
      }
    ],
    coaching: [
      "The rep should ask how the requirement will actually be bought before she starts solutioning too deeply.",
      "She should distinguish direct federal procurement from M&O prime and subcontract motions.",
      "She should recognize that Q and L language is not optional vocabulary in DOE conversations.",
      "She should bring CTG in before security, architecture, and contract-vehicle questions become blockers."
    ],
    question: "What is usually the most practical route for many DOE opportunities?",
    options: [
      "Direct manufacturer-to-government every time",
      "M&O prime or subcontract pathway with CTG engaged early",
      "Avoid procurement until after the technical win"
    ],
    correctIndex: 1
  },
  {
    id: "storage-environments",
    number: 3,
    title: "Storage in DOE",
    outcome: "Maps NetApp to HPC, enterprise, and classified mission environments.",
    summary: "Differentiate storage conversations by environment: throughput-heavy HPC and AI, general enterprise workloads, and air-gapped mission systems with strict compliance constraints.",
    scenario: "A DOE contact mentions AI training, simulation output, and a separate classified enclave. You need to frame the conversation without over-generalizing one platform to every need.",
    say: "It sounds like there may be three different conversations here: high-throughput research storage, enterprise support systems, and mission-isolated environments. We should qualify them separately.",
    question: "Which environment usually emphasizes throughput over latency?",
    options: [
      "HPC and AI training environments",
      "General collaboration file shares",
      "Only small classified clusters"
    ],
    correctIndex: 0
  },
  {
    id: "protocols",
    number: 4,
    title: "Storage Protocol Primer",
    outcome: "Can follow technical discussions around NFS, SMB/CIFS, and object storage.",
    summary: "Get enough protocol fluency to stay credible in discovery without pretending to be the engineer, especially across Linux-heavy research and Windows-heavy enterprise contexts.",
    scenario: "An architect says the lab is mostly Linux-based for compute but still has a Windows-heavy business operations environment. You need to keep the conversation moving without getting lost.",
    say: "If the research side is Linux-centric, I’d expect NFS to matter, while the business side may lean more toward SMB. We can pull CTG in to validate the fit as we scope the design.",
    question: "Which protocol is most commonly associated with HPC environments in this training?",
    options: [
      "SMB/CIFS",
      "NFS",
      "FTP"
    ],
    correctIndex: 1
  },
  {
    id: "fiscal-cycles",
    number: 5,
    title: "Federal Fiscal Cycles",
    outcome: "Aligns pipeline strategy to DOE buying windows and year-end execution pressure.",
    summary: "Internalize the seasonal rhythm: early funding spend, planning lull, major spring purchases, and the year-end shove toward shovel-ready execution.",
    scenario: "It is late July and a lab team suddenly needs pricing for an expansion before fiscal year-end. Your preparation determines whether the opportunity lives or dies.",
    say: "We can move quickly if we structure the expansion now with pre-built quote options and approval-ready positioning before the year-end crunch peaks.",
    question: "What is the key tactic for the July to September period?",
    options: [
      "Pause outreach until the next fiscal year",
      "Prepare shovel-ready expansion quotes in advance",
      "Avoid quoting until all stakeholders agree on architecture"
    ],
    correctIndex: 1
  },
  {
    id: "ctg-integration",
    number: 6,
    title: "CTG Federal Integration",
    outcome: "Uses CTG early for technical depth, architecture, and DOE credibility.",
    summary: "Reinforce the operating model: the salesperson owns relationships and opportunity creation, while CTG expands technical confidence and full-solution capability.",
    scenario: "A promising DOE account asks detailed architecture questions in the second meeting. You have enough context to stay credible, but not enough to solve the full design live.",
    say: "I want to keep this moving and get you the right answer quickly, so I’m bringing CTG into the next step to work through architecture and execution with us.",
    question: "What is the rule for CTG engagement?",
    options: [
      "Bring CTG in only after the RFP is released",
      "Bring CTG in early and always",
      "Use CTG only for classified opportunities"
    ],
    correctIndex: 1
  },
  {
    id: "competition",
    number: 7,
    title: "Competitive Landscape",
    outcome: "Identifies disruptable environments and weak-reseller openings.",
    summary: "Read the field: hyperscalers, aging incumbents, and low-trust VAR relationships all create openings when buyers lack confidence in current partners.",
    scenario: "A contact says the current reseller is responsive only at renewal time and the account is considering cloud alternatives because on-prem support feels stale.",
    say: "If trust in the current reseller is weak, that’s usually where we can differentiate by bringing a stronger partner motion, clearer architecture, and a more credible execution path.",
    question: "What does a 'jump ball' usually signal in this training?",
    options: [
      "A closed market with no room for disruption",
      "Weak reseller trust and a possible opening",
      "A deal that should be left to engineering"
    ],
    correctIndex: 1
  },
  {
    id: "pricing",
    number: 8,
    title: "Pricing & Deal Strategy",
    outcome: "Navigates internal approvals and builds persuasive discount justifications.",
    summary: "Understand the flow from solution design to salesperson target price, NetApp approval, CTG markup, and customer pricing. Most meaningful deals will require red-level justification.",
    scenario: "You need aggressive pricing to displace an incumbent in a strategic account with 5x expansion potential. Leadership will ask for a strong narrative, not just a number.",
    say: "This is a strategic displacement with strong growth potential, and we have a path to expand well beyond the initial footprint if we win the platform decision now.",
    question: "What color band is the expected reality for most deals?",
    options: [
      "Green",
      "Yellow",
      "Red"
    ],
    correctIndex: 2
  },
  {
    id: "compliance",
    number: 9,
    title: "Compliance",
    outcome: "Avoids gift, ethics, and conflict-of-interest mistakes in federal selling.",
    summary: "Stay inside the lines on FAR and ethics. The safest behavior is disciplined restraint when situations feel ambiguous or appearance risk is high.",
    scenario: "A well-connected contact suggests an informal dinner and hints that small gestures go a long way. You want the relationship, but not the risk.",
    say: "We take ethics and perception seriously in federal work, so I’d rather keep things clean and focus on how we can help your mission within the proper channels.",
    question: "What is the standing rule when something feels questionable?",
    options: [
      "Do nothing until it is clearly compliant",
      "Proceed if the dollar value is small",
      "Ask the customer to decide what is acceptable"
    ],
    correctIndex: 0
  },
  {
    id: "travel",
    number: 10,
    title: "Travel Strategy",
    outcome: "Uses travel time efficiently across high-value western DOE geographies.",
    summary: "Travel is a force multiplier when stacked well. Focus on Bay Area labs, Idaho, and PNNL, with Tuesday through Thursday as the default field pattern.",
    scenario: "You are planning a west-coast swing and want maximum account density without losing Monday and Friday to constant transit disruption.",
    say: "I’m planning a Tuesday-through-Thursday block so we can stack the right meetings, stay productive, and preserve the rest of the week for execution.",
    question: "What travel pattern is preferred?",
    options: [
      "Monday through Friday on-site every week",
      "Tuesday through Thursday with stacked meetings",
      "Single-meeting day trips whenever possible"
    ],
    correctIndex: 1
  },
  {
    id: "marketing",
    number: 11,
    title: "Marketing & Outreach",
    outcome: "Uses events, EBCs, and conferences to create relationship density.",
    summary: "Operationalize co-OEM events, Executive Briefing Centers, and key conferences like NLIT and Supercomputing to create momentum across accounts.",
    scenario: "A target account has gone quiet, but several of their peers will attend NLIT and your partner ecosystem can support a joint AI-focused event.",
    say: "If we can reconnect them through an EBC or a partner-led event around AI and infrastructure, we create a more strategic conversation than a standard check-in call.",
    question: "Which conferences are called out as critical?",
    options: [
      "RSA and CES",
      "NLIT and Supercomputing",
      "Dreamforce and NRF"
    ],
    correctIndex: 1
  },
  {
    id: "validation",
    number: 12,
    title: "External Validation",
    outcome: "Uses remote validation environments instead of defaulting to on-site POCs.",
    summary: "Protect time and momentum by favoring external demo or validation environments that prove the solution without triggering slow, expensive on-site pilots.",
    scenario: "The customer asks whether you can stand up a proof of concept in their environment next month, but the internal overhead would stall the deal.",
    say: "We can usually validate this faster in a controlled external environment and still answer the questions that matter for your decision.",
    question: "What is the preferred validation motion?",
    options: [
      "On-site POCs as the default for every deal",
      "External validation environments and remote testing",
      "Skipping validation entirely"
    ],
    correctIndex: 1
  },
  {
    id: "ecosystem",
    number: 13,
    title: "Ecosystem Networking",
    outcome: "Builds a partner map that expands deal surface area across the territory.",
    summary: "Develop and maintain active relationships with NVIDIA, Red Hat, VMware, Cisco, Splunk, and adjacent players that can unlock broader conversations.",
    scenario: "A DOE team starts asking about AI infrastructure readiness, observability, and virtualization dependencies. A strong ecosystem map can widen the opportunity.",
    say: "We should bring the right ecosystem voices in where they add credibility and help the customer connect storage decisions to the broader platform roadmap.",
    question: "What is required for each territory?",
    options: [
      "A partner contact list that is actively maintained",
      "One contact at one OEM",
      "Only NetApp relationships"
    ],
    correctIndex: 0
  },
  {
    id: "post-sale",
    number: 14,
    title: "Post-Sale Execution",
    outcome: "Turns installs into relationships, QBRs, and expansion opportunities.",
    summary: "Early in role development, the salesperson should show up for installs, meet operators and engineers, and use delivery moments to grow the account.",
    scenario: "A deployment is scheduled at a strategic account. You could skip it and focus on prospecting, or attend and deepen ties with the people who will influence future buys.",
    say: "I want to stay close to the install because that is where we learn what matters operationally and where future expansion signals usually show up first.",
    question: "Why attend installs early in your career?",
    options: [
      "To replace the implementation team",
      "To build relationships and spot expansion opportunities",
      "To avoid doing QBRs later"
    ],
    correctIndex: 1
  },
  {
    id: "stakeholders",
    number: 15,
    title: "Stakeholder Mapping",
    outcome: "Builds multi-threaded coverage with technical buyers, procurement, and champions.",
    summary: "Map technical buyers, procurement stakeholders, influencers, and champions so deals do not rest on a single relationship or single-threaded momentum.",
    scenario: "You have a strong relationship with one architect, but the opportunity is stalling. The account needs broader coverage to survive budget, procurement, and technical reviews.",
    say: "To make this durable, I want to understand who else needs confidence in the solution, the process, and the outcome so we are not relying on one champion alone.",
    question: "What is the target number of champions per account?",
    options: [
      "One strong champion",
      "Two champions maximum",
      "Three or more champions"
    ],
    correctIndex: 2
  }
];

const scenarioWalkthrough = {
  title: "Two California Meetings, Two Different Motions",
  tag: "Opportunity Simulation",
  overview: "You are heading into two early discovery calls. One is with LLNL, where mission context, protected environments, and scientific computing shape the conversation. The other is with Berkeley Lab, where you may need to separate core lab needs from NERSC and JGI motions.",
  stats: [
    { label: "Meeting One", value: "LLNL classified discovery" },
    { label: "Meeting Two", value: "Berkeley Lab open-science discovery" },
    { label: "Critical Skill", value: "Classify the account before pitching" },
    { label: "Coaching Test", value: "Stay orchestrator, not engineer" }
  ],
  steps: [
    "Open the LLNL conversation with mission-aware language that acknowledges a classified and scientific-computing context.",
    "Ask whether the Berkeley Lab discussion is best treated as a core LBNL motion, a NERSC computing motion, or a JGI data-workflow motion.",
    "Avoid collapsing Hanford, BPA, and the California labs into one generic DOE story because the sales motions are different.",
    "Use the account map to decide where CTG needs to be pulled in before the conversation drifts into architecture detail.",
    "Close each meeting with the right next step for that account type rather than forcing one standard follow-up."
  ]
};

const storageKey = "doe-sales-training-state";

function getDefaultState() {
  const moduleState = {};
  modules.forEach((module) => {
    moduleState[module.id] = {
      complete: false,
      confidence: 3,
      selectedAnswer: null,
      correct: false
    };
  });
  return { moduleState };
}

function loadState() {
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) {
    return getDefaultState();
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      moduleState: {
        ...getDefaultState().moduleState,
        ...parsed.moduleState
      }
    };
  } catch {
    return getDefaultState();
  }
}

let state = loadState();

function saveState() {
  window.localStorage.setItem(storageKey, JSON.stringify(state));
}

function getModuleStatus(moduleId) {
  const record = state.moduleState[moduleId];
  if (record.complete) {
    return { label: "Complete", className: "complete" };
  }
  if (record.selectedAnswer !== null || record.confidence !== 3) {
    return { label: "In Progress", className: "in-progress" };
  }
  return { label: "Not Started", className: "not-started" };
}

function renderModules() {
  const moduleGrid = document.getElementById("moduleGrid");
  const template = document.getElementById("moduleCardTemplate");
  moduleGrid.innerHTML = "";

  modules.forEach((module) => {
    const fragment = template.content.cloneNode(true);
    const card = fragment.querySelector(".module-card");
    const record = state.moduleState[module.id];
    const status = getModuleStatus(module.id);

    fragment.querySelector(".module-kicker").textContent = `Module ${module.number}`;
    fragment.querySelector(".module-title").textContent = module.title;
    fragment.querySelector(".module-outcome").textContent = module.outcome;
    fragment.querySelector(".module-summary").textContent = module.summary;
    fragment.querySelector(".module-scenario").textContent = module.scenario;
    fragment.querySelector(".say-example").textContent = module.say;

    if (module.number === 1) {
      card.classList.add("featured");
    }

    renderModuleDeepDive(fragment, module);

    const statusPill = fragment.querySelector(".status-pill");
    statusPill.textContent = status.label;
    statusPill.classList.add(status.className);

    const slider = fragment.querySelector(".confidence-slider");
    const confidenceValue = fragment.querySelector(".confidence-value");
    slider.value = record.confidence;
    confidenceValue.textContent = confidenceLabel(record.confidence);
    slider.addEventListener("input", (event) => {
      state.moduleState[module.id].confidence = Number(event.target.value);
      saveState();
      renderAll();
    });

    fragment.querySelector(".quiz-question").textContent = module.question;
    const optionsContainer = fragment.querySelector(".quiz-options");
    module.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;

      if (record.selectedAnswer !== null) {
        if (optionIndex === module.correctIndex) {
          button.classList.add("correct");
        } else if (optionIndex === record.selectedAnswer && !record.correct) {
          button.classList.add("incorrect");
        }
      }

      button.addEventListener("click", () => {
        state.moduleState[module.id].selectedAnswer = optionIndex;
        state.moduleState[module.id].correct = optionIndex === module.correctIndex;
        saveState();
        renderAll();
      });

      optionsContainer.appendChild(button);
    });

    const markCompleteButton = fragment.querySelector(".mark-complete-button");
    markCompleteButton.textContent = record.complete ? "Completed" : "Mark Complete";
    markCompleteButton.disabled = record.complete;
    markCompleteButton.addEventListener("click", () => {
      state.moduleState[module.id].complete = true;
      saveState();
      renderAll();
    });

    if (record.complete) {
      card.style.borderColor = "rgba(47, 143, 82, 0.32)";
    }

    moduleGrid.appendChild(fragment);
  });
}

function renderModuleDeepDive(fragment, module) {
  const highlightsBlock = fragment.querySelector(".module-highlights");
  const highlightsList = fragment.querySelector(".module-highlights-list");
  if (module.mustKnow?.length) {
    highlightsBlock.hidden = false;
    module.mustKnow.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      highlightsList.appendChild(li);
    });
  }

  const priorityBlock = fragment.querySelector(".account-priority");
  const priorityHeading = fragment.querySelector(".priority-heading");
  const priorityList = fragment.querySelector(".priority-list");
  if (module.priorityOrder?.length) {
    priorityBlock.hidden = false;
    priorityHeading.textContent = module.priorityHeading || "Priority Order";
    module.priorityOrder.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${item.account}</strong> - ${item.note}`;
      priorityList.appendChild(li);
    });
  }

  const subaccountBlock = fragment.querySelector(".subaccount-detail");
  const subaccountGrid = fragment.querySelector(".subaccount-grid");
  if (module.subAccounts?.length) {
    subaccountBlock.hidden = false;
    module.subAccounts.forEach((item) => {
      const card = document.createElement("div");
      card.className = "subaccount-card";
      card.innerHTML = `<h4>${item.name}</h4><p>${item.detail}</p>`;
      subaccountGrid.appendChild(card);
    });
  }

  const comparisonBlock = fragment.querySelector(".comparison-detail");
  const comparisonHeading = fragment.querySelector(".comparison-heading");
  const comparisonHeaderRow = fragment.querySelector(".comparison-header-row");
  const comparisonBody = fragment.querySelector(".comparison-table-body");
  if (module.comparisonRows?.length) {
    comparisonBlock.hidden = false;
    comparisonHeading.textContent = module.comparisonHeading || "Comparison";
    if (module.comparisonColumns?.length) {
      comparisonHeaderRow.innerHTML = "";
      module.comparisonColumns.forEach((column) => {
        const th = document.createElement("th");
        th.textContent = column;
        comparisonHeaderRow.appendChild(th);
      });
    }
    module.comparisonRows.forEach((row) => {
      const tr = document.createElement("tr");
      const cells = [row.account, row.category, row.mission, row.priority, row.motion];
      tr.innerHTML = cells
        .map((cell, index) => (index === 0 ? `<td><strong>${cell}</strong></td>` : `<td>${cell}</td>`))
        .join("");
      comparisonBody.appendChild(tr);
    });
  }

  const coachingBlock = fragment.querySelector(".coaching-detail");
  const coachingHeading = fragment.querySelector(".coaching-heading");
  const coachingList = fragment.querySelector(".coaching-list");
  if (module.coaching?.length) {
    coachingBlock.hidden = false;
    coachingHeading.textContent = module.coachingHeading || "Manager Review";
    module.coaching.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      coachingList.appendChild(li);
    });
  }
}

function renderScenario() {
  const panel = document.getElementById("scenarioPanel");
  panel.innerHTML = "";

  const wrapper = document.createElement("article");
  wrapper.className = "scenario-card";

  const tag = document.createElement("div");
  tag.className = "scenario-tag";
  tag.textContent = scenarioWalkthrough.tag;

  const title = document.createElement("h3");
  title.textContent = scenarioWalkthrough.title;

  const overview = document.createElement("p");
  overview.className = "module-summary";
  overview.textContent = scenarioWalkthrough.overview;

  const statGrid = document.createElement("div");
  statGrid.className = "scenario-grid";
  scenarioWalkthrough.stats.forEach((stat) => {
    const statCard = document.createElement("div");
    statCard.className = "scenario-stat";
    statCard.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
    statGrid.appendChild(statCard);
  });

  const stepList = document.createElement("ol");
  stepList.className = "plain-list";
  scenarioWalkthrough.steps.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    stepList.appendChild(item);
  });

  wrapper.append(tag, title, overview, statGrid, stepList);
  panel.appendChild(wrapper);
}

function renderSnapshot() {
  const list = document.getElementById("snapshotStats");
  const completedCount = modules.filter((module) => state.moduleState[module.id].complete).length;
  const correctCount = modules.filter((module) => state.moduleState[module.id].correct).length;
  const averageConfidence = (
    modules.reduce((total, module) => total + state.moduleState[module.id].confidence, 0) / modules.length
  ).toFixed(1);
  const readyModules = modules.filter((module) => {
    const record = state.moduleState[module.id];
    return record.complete && record.correct && record.confidence >= 4;
  }).length;

  list.innerHTML = `
    <li><strong>${completedCount}/${modules.length}</strong> modules completed</li>
    <li><strong>${correctCount}/${modules.length}</strong> quizzes answered correctly</li>
    <li><strong>${averageConfidence}/5</strong> average self-reported confidence</li>
    <li><strong>${readyModules}</strong> modules marked as conversation-ready</li>
  `;

  const progressPercent = Math.round((completedCount / modules.length) * 100);
  document.getElementById("overallProgressLabel").textContent = `${progressPercent}% complete`;
  document.getElementById("overallProgressBar").style.width = `${progressPercent}%`;
}

function renderDashboard() {
  const dashboard = document.getElementById("managerDashboard");
  const lowConfidenceModules = modules
    .filter((module) => state.moduleState[module.id].confidence <= 2)
    .map((module) => module.title);
  const missedQuizModules = modules
    .filter((module) => state.moduleState[module.id].selectedAnswer !== null && !state.moduleState[module.id].correct)
    .map((module) => module.title);
  const criticalUnfinished = [
    "Federal Fiscal Cycles",
    "CTG Federal Integration",
    "Pricing & Deal Strategy",
    "Compliance"
  ].filter((title) => {
    const module = modules.find((item) => item.title === title);
    return module && !state.moduleState[module.id].complete;
  });

  dashboard.innerHTML = `
    <li><strong>Coaching priority:</strong> ${lowConfidenceModules[0] || "No low-confidence module flagged"}</li>
    <li><strong>Quiz recovery:</strong> ${missedQuizModules[0] || "No missed quiz currently flagged"}</li>
    <li><strong>Critical incomplete:</strong> ${criticalUnfinished.join(", ") || "None"}</li>
    <li><strong>Manager readout:</strong> ${managerReadout()}</li>
  `;
}

function managerReadout() {
  const completedCount = modules.filter((module) => state.moduleState[module.id].complete).length;
  if (completedCount >= 12) {
    return "Trainee is nearing independent DOE conversation readiness.";
  }
  if (completedCount >= 6) {
    return "Trainee is building fluency; manager should coach on pricing, procurement, and CTG timing.";
  }
  return "Trainee is still in ramp mode; reinforce foundations before high-stakes customer meetings.";
}

function confidenceLabel(value) {
  const labels = {
    1: "1 - Need Help",
    2: "2 - Unsteady",
    3: "3 - Working",
    4: "4 - Confident",
    5: "5 - Ready"
  };
  return labels[value];
}

function renderAll() {
  renderModules();
  renderScenario();
  renderSnapshot();
  renderDashboard();
}

document.getElementById("resumeButton").addEventListener("click", () => {
  document.querySelector(".module-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.getElementById("resetButton").addEventListener("click", () => {
  state = getDefaultState();
  saveState();
  renderAll();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The app still works without offline support, so ignore registration errors.
    });
  });
}

renderAll();
