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
        priority: "Tier 1",
        motion: "Program-driven, applied mission selling"
      },
      {
        account: "LBNL",
        category: "Open Science / DOE",
        mission: "Unclassified science, user facilities, compute",
        priority: "Tier 1",
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
    quizQuestions: [
      {
        question: "Which account motion should be treated as cleanup and site-operations rather than open science?",
        options: ["Hanford", "SLAC", "NERSC"],
        correctIndex: 0
      },
      {
        question: "Which Berkeley Lab sub-account should a rep associate most directly with HPC and scientific computing demand?",
        options: ["JGI", "NERSC", "BPA"],
        correctIndex: 1
      },
      {
        question: "Which account is best described as a utility-style motion instead of a lab-style motion?",
        options: ["BPA", "LBNL", "LLNL"],
        correctIndex: 0
      },
      {
        question: "What is the right first move in a western DOE account conversation?",
        options: [
          "Start with a generic storage pitch for all DOE entities",
          "Classify the account by mission and environment before positioning",
          "Avoid mission questions until engineering joins"
        ],
        correctIndex: 1
      }
    ]
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
      "ICPT is a DOE strategic-sourcing path built for M&O contractor usage, with pre-negotiated agreements that can simplify subcontract ordering.",
      "SCMC matters because it simplifies buying, supports online catalogs, and creates multi-site commodity agreements for DOE Environmental Management and NNSA prime contractors.",
      "Marketplace buying is now its own motion: reps need to distinguish punch-out supplier-direct catalogs from hosted catalogs because the sales and enablement work is different."
    ],
    priorityHeading: "How Deals Usually Move",
    priorityOrder: [
      { account: "1. Qualify the Path", note: "Is this a direct federal acquisition, an M&O prime-led buy, or a subcontracting motion?" },
      { account: "2. Confirm Security", note: "Determine early whether L or Q access, cleared personnel, or cleared facilities will shape the pursuit." },
      { account: "3. Map the Vehicle", note: "Identify whether the buy will move through an M&O prime, ICPT agreement, SCMC agreement, or another approved path." },
      { account: "4. Separate Marketplace Motions", note: "Ask whether the site buys through a punch-out supplier-direct catalog or a hosted catalog because onboarding and account control differ." },
      { account: "5. Bring CTG Early", note: "CTG should be involved before architecture, compliance, and execution details harden." },
      { account: "6. Validate TAA", note: "Confirm country-of-origin and supply-chain compliance before the deal gets late-stage attention." }
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
        account: "ICPT",
        category: "Integrated Contractor Purchasing Team",
        mission: "DOE strategic-sourcing agreements built for M&O contractor usage",
        priority: "Pre-negotiated agreements may let sites place subcontract orders faster",
        motion: "Ask whether an ICPT agreement already covers the commodity or reseller path"
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
      },
      {
        account: "Punch-Out Marketplace",
        category: "Supplier-direct electronic catalog",
        mission: "Buyer shops from the supplier's connected catalog within the site's marketplace flow",
        priority: "Catalog integration and supplier-direct experience drive adoption",
        motion: "Treat this as a scalable site-by-site channel worth expanding"
      },
      {
        account: "Hosted Catalog",
        category: "Marketplace catalog managed inside the platform",
        mission: "Items are loaded into the marketplace rather than punched out to the supplier site",
        priority: "Content quality, SKU hygiene, and contract alignment matter most",
        motion: "Sell the catalog-operating model, not just the product line"
      }
    ],
    coaching: [
      "The rep should ask how the requirement will actually be bought before she starts solutioning too deeply.",
      "She should distinguish direct federal procurement from M&O prime, ICPT, SCMC, and subcontract motions.",
      "She should recognize that Q and L language is not optional vocabulary in DOE conversations.",
      "She should separate punch-out and hosted marketplace motions because the growth strategy and control points differ.",
      "She should bring CTG in before security, architecture, and contract-vehicle questions become blockers."
    ],
    quizQuestions: [
      {
        question: "What is usually the most practical route for many DOE opportunities?",
        options: [
          "Direct manufacturer-to-government every time",
          "M&O prime or subcontract pathway with CTG engaged early",
          "Avoid procurement until after the technical win"
        ],
        correctIndex: 1
      },
      {
        question: "What should the rep clarify when a site says it buys through a marketplace?",
        options: [
          "Whether the site uses a punch-out supplier-direct catalog or a hosted catalog",
          "Whether procurement can be ignored until after technical approval",
          "Whether every marketplace order is treated as a federal prime contract"
        ],
        correctIndex: 0
      },
      {
        question: "Why does Q-clearance language matter in DOE sales?",
        options: [
          "Because it can affect which people, partners, and facilities can participate",
          "Because it only matters after award",
          "Because it replaces the need for procurement review"
        ],
        correctIndex: 0
      },
      {
        question: "What should a rep do if an ICPT or SCMC path may already exist?",
        options: [
          "Ignore it and build a fresh sourcing path",
          "Ask whether an approved agreement already covers the commodity or reseller motion",
          "Wait for legal to bring it up at the end"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "storage-environments",
    number: 3,
    title: "Storage in DOE",
    outcome: "Maps NetApp credibly across DOE HPC, enterprise, and classified storage environments.",
    summary: "Differentiate the three core DOE storage motions: throughput-led HPC and AI pipelines, enterprise platforms that value unified file and block services, and classified environments where isolation, control, and compliance shape the design.",
    scenario: "A DOE contact mentions AI training data, simulation checkpoints, enterprise collaboration shares, and a separate air-gapped enclave. You need to frame NetApp by environment without pretending one answer fits all four needs.",
    say: "It sounds like we should treat this as at least three motions: a high-throughput HPC and AI data path, a more standard enterprise storage path, and a separate classified environment with its own controls and constraints.",
    mustKnow: [
      "HPC and AI environments usually care more about aggregate throughput, scalable capacity, and data pipeline efficiency than about classic enterprise latency talking points.",
      "Enterprise storage conversations often center on mixed protocols, operational simplicity, cyber resilience, and consolidation across business workloads.",
      "Classified and mission storage environments are often smaller and more isolated, but the compliance and security expectations are much higher.",
      "NetApp should be positioned by workload and environment: not every DOE conversation is an AFF conversation, an E-Series conversation, or an object conversation.",
      "NetApp has official HPC and AI positioning around scale, reliability, and ecosystem integration, while ONTAP supports unified file, block, and object protocols that matter in enterprise and mixed environments."
    ],
    priorityHeading: "Storage Qualification Flow",
    priorityOrder: [
      { account: "1. Identify the Environment", note: "Is this HPC and AI, enterprise IT, or a classified mission environment?" },
      { account: "2. Qualify the Access Pattern", note: "Ask whether the workload is mostly file, object, block, or a combination across teams." },
      { account: "3. Match the Buying Driver", note: "Determine whether the customer is chasing throughput, operational simplicity, cyber resilience, or enclave control." },
      { account: "4. Map NetApp by Fit", note: "Use the right NetApp lens for the environment instead of forcing one family across every requirement." },
      { account: "5. Pull CTG Into Design", note: "Bring CTG in once the storage motion is clear and the architecture needs to be validated." }
    ],
    comparisonHeading: "DOE Storage Environments",
    comparisonColumns: ["Environment", "Primary Need", "Typical Signal", "NetApp Lens", "Seller Move"],
    comparisonRows: [
      {
        account: "HPC / AI",
        category: "High throughput and scale",
        mission: "Training sets, simulation output, checkpointing, large sequential data movement",
        priority: "Throughput and growth dominate the discussion",
        motion: "Position NetApp HPC and AI strengths, then bring CTG into architecture"
      },
      {
        account: "Enterprise",
        category: "Mixed workloads and protocol flexibility",
        mission: "File shares, virtualization, business systems, collaboration, cyber resilience",
        priority: "Operational simplicity and broad consolidation matter",
        motion: "Position ONTAP and unified data services around real workload mix"
      },
      {
        account: "Classified / Mission",
        category: "Isolation and control",
        mission: "Air-gapped or tightly governed environments with strict security expectations",
        priority: "Security and operational control shape the design",
        motion: "Treat as a separate enclave conversation and avoid over-generalizing from open environments"
      },
      {
        account: "Object / Data Lake",
        category: "Unstructured scale",
        mission: "Large data sets, archives, analytics repositories, AI-adjacent object use cases",
        priority: "Scale and lifecycle management become more important",
        motion: "Use object positioning where it truly fits instead of assuming file alone"
      }
    ],
    coaching: [
      "The rep should separate HPC, enterprise, and classified conversations instead of collapsing them into a single storage pitch.",
      "She should know the difference between a throughput-led problem and a mixed-enterprise operations problem.",
      "She should be comfortable saying 'this may be multiple storage conversations' before architecture gets too detailed.",
      "She should use NetApp as an environment-specific fit, not as a one-size-fits-all answer."
    ],
    quizQuestions: [
      {
        question: "Which environment usually emphasizes throughput over latency in DOE storage conversations?",
        options: [
          "HPC and AI training environments",
          "General collaboration file shares",
          "Only small classified clusters"
        ],
        correctIndex: 0
      },
      {
        question: "What is the strongest first move when a customer mentions AI training, enterprise shares, and a classified enclave in one call?",
        options: [
          "Recommend one storage platform for everything immediately",
          "Break the discussion into separate environment-specific motions",
          "Avoid the topic until pricing is requested"
        ],
        correctIndex: 1
      },
      {
        question: "Which statement best fits enterprise storage in this training?",
        options: [
          "It usually involves mixed workloads, operational simplicity, and protocol flexibility",
          "It only matters if the lab has no HPC at all",
          "It is mainly about air-gapped mission systems"
        ],
        correctIndex: 0
      },
      {
        question: "When should object storage enter the conversation?",
        options: [
          "Only when the customer mentions backup",
          "When unstructured scale, data-lake behavior, or large object-oriented workflows are part of the requirement",
          "Never in DOE environments"
        ],
        correctIndex: 1
      },
      {
        question: "What is the seller's role when the storage fit becomes architectural?",
        options: [
          "Finalize the design alone to preserve speed",
          "Use the right NetApp lens and bring CTG in to validate the architecture",
          "Hand the meeting over completely and stop leading"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "protocols",
    number: 4,
    title: "Storage Protocol Primer",
    outcome: "Can follow technical discussions around NFS, SMB/CIFS, and object storage.",
    summary: "Get enough protocol fluency to stay credible in discovery without pretending to be the engineer, especially across Linux-heavy research and Windows-heavy enterprise contexts.",
    scenario: "An architect says the lab is mostly Linux-based for compute but still has a Windows-heavy business operations environment. You need to keep the conversation moving without getting lost.",
    say: "If the research side is Linux-centric, I would expect NFS to matter, while the business side may lean more toward SMB. If object workflows are part of the design, we should separate that motion and bring CTG in to validate the fit.",
    mustKnow: [
      "NFS is commonly associated with Linux and UNIX-heavy research, HPC, and AI environments.",
      "SMB, sometimes still called CIFS in conversation, is more common in Windows-centric enterprise and business operations environments.",
      "Object storage is a different access model from traditional file protocols and usually shows up in data-lake, archive, analytics, and application-driven workflows.",
      "A DOE account can legitimately need more than one protocol at the same time, so protocol discovery should clarify who is using the data and how.",
      "The salesperson does not need to design the protocol layout, but should be able to recognize the likely motion and bring CTG in before the conversation gets too detailed."
    ],
    priorityHeading: "Protocol Discovery Flow",
    priorityOrder: [
      { account: "1. Identify the User Base", note: "Ask whether the dominant users are Linux researchers, Windows business teams, application owners, or a mix." },
      { account: "2. Clarify the Access Pattern", note: "Determine whether the need is shared file access, object-oriented application access, or block access that should be escalated separately." },
      { account: "3. Separate Research From Enterprise", note: "Do not assume the protocol for an HPC environment is the same as the protocol for finance, HR, or collaboration shares." },
      { account: "4. Watch for Multi-Protocol Reality", note: "Many DOE environments will need more than one protocol because research and business operations coexist." },
      { account: "5. Pull CTG in for Architecture", note: "Once the likely protocol mix is clear, use CTG to validate fit, performance expectations, and design choices." }
    ],
    comparisonHeading: "Protocol Signals In Discovery",
    comparisonColumns: ["Protocol", "Typical Environment", "What It Suggests", "Field Signal", "Seller Move"],
    comparisonRows: [
      {
        account: "NFS",
        category: "Linux, UNIX, HPC, and research compute environments",
        mission: "Shared file access for technical users, clusters, and data-intensive workflows",
        priority: "Linux-heavy language, research users, and compute workflows show up early",
        motion: "Stay credible on the use case, then bring CTG in for performance and design detail"
      },
      {
        account: "SMB / CIFS",
        category: "Windows-centric enterprise and business operations environments",
        mission: "Department shares, collaboration, and user-facing file services",
        priority: "Business teams, Windows admins, and office workflow language dominate",
        motion: "Position enterprise storage simply and avoid treating it like an HPC motion"
      },
      {
        account: "Object",
        category: "Applications, archives, analytics, and unstructured scale",
        mission: "API-driven access, data lakes, repositories, and large-scale unstructured data",
        priority: "The customer talks about buckets, S3-style access, archives, or analytics platforms",
        motion: "Treat this as a distinct conversation rather than forcing file protocol language"
      },
      {
        account: "Mixed Protocol Environment",
        category: "DOE environments where research and enterprise teams both matter",
        mission: "Different user groups need different access patterns across the same account",
        priority: "One meeting includes Linux compute users and Windows operations stakeholders",
        motion: "Break the problem into multiple motions and show orchestration discipline"
      }
    ],
    coaching: [
      "The rep should know enough to hear NFS and think research or HPC, not generic file sharing.",
      "She should hear SMB or CIFS and recognize a more standard enterprise or business operations motion.",
      "She should avoid pretending object storage is just another file protocol with a new label.",
      "She should be comfortable saying the account may have multiple protocol needs before CTG validates architecture."
    ],
    quizQuestions: [
      {
        question: "Which protocol is most commonly associated with Linux-heavy HPC environments in this training?",
        options: ["SMB / CIFS", "NFS", "FTP"],
        correctIndex: 1
      },
      {
        question: "What should SMB or CIFS usually signal to the seller in this course?",
        options: [
          "A Windows-centric enterprise or business operations file-sharing motion",
          "A classified enclave by default",
          "An object-storage-first architecture"
        ],
        correctIndex: 0
      },
      {
        question: "How should the seller treat object storage in discovery?",
        options: [
          "As basically the same thing as NFS with a different name",
          "As a distinct access model that may fit archives, analytics, or application-driven workflows",
          "As irrelevant unless the customer asks about backup"
        ],
        correctIndex: 1
      },
      {
        question: "What is the strongest move when one DOE account includes Linux researchers and Windows business users?",
        options: [
          "Assume one protocol will cover everyone and keep the meeting simple",
          "Separate the user groups, clarify access patterns, and expect a multi-protocol conversation",
          "Stop the conversation until engineering is available"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "fiscal-cycles",
    number: 5,
    title: "Federal Fiscal Cycles",
    outcome: "Aligns pipeline strategy to DOE buying windows and year-end execution pressure.",
    summary: "Internalize the seasonal rhythm: early funding spend, planning lull, major spring purchases, and the year-end shove toward shovel-ready execution.",
    scenario: "It is late July and a lab team suddenly needs pricing for an expansion before fiscal year-end. Your preparation determines whether the opportunity lives or dies.",
    say: "We can move quickly if we structure the expansion now with pre-built quote options and approval-ready positioning before the year-end crunch peaks.",
    mustKnow: [
      "The federal fiscal year runs from October 1 through September 30, and DOE buying behavior often changes noticeably across that cycle.",
      "Early-year funds may support smaller or already-planned buys, while larger actions often require groundwork laid well before the spring and summer push.",
      "Spring is often a strong period for larger purchases because budgets, priorities, and technical planning are clearer than they were in the winter lull.",
      "Late July through September is not the time to start from zero; it is the time to advance shovel-ready opportunities with quotes, approvals, and execution plans already aligned.",
      "A good seller uses the fiscal cycle to stage outreach, partner engagement, pricing requests, and internal approvals before the customer urgency peaks."
    ],
    priorityHeading: "Fiscal-Year Selling Rhythm",
    priorityOrder: [
      { account: "1. October to December", note: "Re-engage funded priorities, look for early spend, and begin mapping next-wave opportunities while budgets are fresh." },
      { account: "2. January to March", note: "Expect a planning-heavy stretch where discovery, stakeholder mapping, and solution shaping matter more than last-minute quoting." },
      { account: "3. April to June", note: "Push larger purchases and mature pursuits because technical scope, partner alignment, and budget direction are usually firmer." },
      { account: "4. July to September", note: "Operate with urgency on expansion and execution-ready deals using prebuilt pricing, approvals, and clear next steps." },
      { account: "5. Year-Round Discipline", note: "Always back-schedule internal approvals, CTG coordination, and pricing strategy before the customer creates deadline pressure." }
    ],
    comparisonHeading: "Seasonal Field Signals",
    comparisonColumns: ["Window", "Typical Motion", "What The Seller Hears", "Risk", "Best Move"],
    comparisonRows: [
      {
        account: "October to December",
        category: "Fresh-year funding and reset",
        mission: "New priorities, early funds, and reopened planning conversations",
        priority: "Waiting too long can miss early spend or let competitors shape the agenda",
        motion: "Reconnect quickly and turn planning conversations into qualified paths"
      },
      {
        account: "January to March",
        category: "Planning and shaping",
        mission: "Discovery, technical exploration, and internal alignment dominate",
        priority: "Mistaking this for a dead period can create a weak spring pipeline",
        motion: "Build champions, clarify architecture paths, and position CTG early"
      },
      {
        account: "April to June",
        category: "Major purchase window",
        mission: "Larger buys, clearer priorities, and stronger pursuit momentum emerge",
        priority: "Late pricing work or weak partner alignment can stall otherwise viable deals",
        motion: "Advance mature opportunities and tighten the approval path"
      },
      {
        account: "July to September",
        category: "Year-end execution pressure",
        mission: "Expansions, shovel-ready buys, and deadline-driven action accelerate",
        priority: "Starting net-new opportunities this late usually leaves no time to execute",
        motion: "Lead with ready quotes, approval narratives, and fast coordination"
      }
    ],
    coaching: [
      "The rep should treat fiscal timing as part of account strategy, not as background trivia.",
      "She should know that late-year urgency rewards preparation rather than improvisation.",
      "She should use quieter planning periods to build pipeline quality instead of misreading them as dead time.",
      "She should coordinate CTG, pricing, and approvals before the customer asks for impossible turnaround."
    ],
    quizQuestions: [
      {
        question: "What is the key tactic for the July to September period in this training?",
        options: [
          "Pause outreach until the next fiscal year",
          "Prepare shovel-ready expansion quotes in advance",
          "Avoid quoting until all stakeholders agree on architecture"
        ],
        correctIndex: 1
      },
      {
        question: "What is the strongest use of the January to March window?",
        options: [
          "Treat it as a dead quarter and wait for spring demand",
          "Use it for discovery, shaping, and stakeholder alignment that fuels later purchases",
          "Focus only on year-end expansion deals"
        ],
        correctIndex: 1
      },
      {
        question: "Why is April to June important in this module?",
        options: [
          "It is often a stronger window for larger purchases as priorities and budgets become clearer",
          "It is mainly a compliance blackout period",
          "It usually matters less than October for most pursuits"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest mistake a seller can make in late summer?",
        options: [
          "Assuming net-new opportunities can still be built from scratch with no preparation",
          "Bringing CTG in before architecture is finalized",
          "Using prepared pricing narratives for expansion deals"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "ctg-integration",
    number: 6,
    title: "CTG Federal Integration",
    outcome: "Uses CTG early for technical depth, architecture, and DOE credibility.",
    summary: "Reinforce the operating model: the salesperson owns relationships and opportunity creation, while CTG expands technical confidence and full-solution capability.",
    scenario: "A promising DOE account asks detailed architecture questions in the second meeting. You have enough context to stay credible, but not enough to solve the full design live.",
    say: "I want to keep this moving and get you the right answer quickly, so I am bringing CTG into the next step to work through architecture and execution with us while I keep the business motion aligned.",
    mustKnow: [
      "The salesperson still owns the relationship, discovery flow, and next-step control even after CTG joins the account motion.",
      "CTG should come in early when technical depth, architecture, procurement pathing, compliance nuance, or execution credibility starts to matter.",
      "Waiting until an RFP or a late-stage technical crisis usually puts CTG in a reactive role instead of a shaping role.",
      "Bringing CTG in does not mean handing the account over; it means expanding the team so the customer gets the right answers faster.",
      "One of the seller's core skills is knowing when to stop improvising technically and bring in the right partner expertise."
    ],
    priorityHeading: "CTG Engagement Playbook",
    priorityOrder: [
      { account: "1. Own The First Motion", note: "Open the account, qualify the mission, and keep the business context clear before the technical discussion gets too deep." },
      { account: "2. Spot The Trigger", note: "Bring CTG in when the conversation shifts toward architecture, integration, procurement complexity, security requirements, or execution planning." },
      { account: "3. Frame The Handoff Correctly", note: "Introduce CTG as part of the team that helps validate the path, not as a rescue step after the seller loses control." },
      { account: "4. Stay In The Room", note: "Keep leading the customer motion, stakeholder mapping, and follow-up while CTG adds technical and federal depth." },
      { account: "5. Convert Expertise Into Momentum", note: "Use CTG involvement to create better next steps, stronger credibility, and a faster route to executable opportunity shape." }
    ],
    comparisonHeading: "When CTG Should Enter",
    comparisonColumns: ["Situation", "What Is Happening", "Risk If Delayed", "What CTG Adds", "Seller Move"],
    comparisonRows: [
      {
        account: "Early Discovery With Technical Signals",
        category: "The customer starts asking how the environment should be designed",
        mission: "Architecture questions are showing up before the seller has full technical coverage",
        priority: "The rep may overreach or lose confidence if she tries to answer everything alone",
        motion: "Bring CTG into the next step while keeping control of the business conversation"
      },
      {
        account: "Procurement Or Compliance Complexity",
        category: "Vehicle, clearance, partner, or execution constraints start shaping the path",
        mission: "The opportunity is no longer just about interest; it is about executable pathing",
        priority: "Late partner alignment can block momentum or create avoidable rework",
        motion: "Use CTG early to validate structure, partner fit, and execution assumptions"
      },
      {
        account: "Detailed Solution Validation",
        category: "The account needs design confidence before it will move",
        mission: "Technical credibility becomes necessary to preserve deal momentum",
        priority: "Waiting until formal bid stages weakens the ability to shape requirements",
        motion: "Position CTG as the team that helps turn interest into a viable approach"
      },
      {
        account: "Post-Sale Or Expansion Planning",
        category: "Execution success and future growth depend on coordinated delivery",
        mission: "The technical and commercial threads need to stay connected",
        priority: "A disjointed handoff can cost trust and future account expansion",
        motion: "Keep CTG involved as part of the broader account-growth motion"
      }
    ],
    coaching: [
      "The rep should not treat CTG as a last-minute escalation after she is already underwater technically.",
      "She should stay visibly in control of the account motion even when CTG is doing most of the technical heavy lifting.",
      "She should introduce CTG as a strength of the team rather than an admission that she cannot lead.",
      "She should know the difference between staying credible and pretending to be the architect."
    ],
    quizQuestions: [
      {
        question: "What is the rule for CTG engagement in this training?",
        options: [
          "Bring CTG in only after the RFP is released",
          "Bring CTG in early and always",
          "Use CTG only for classified opportunities"
        ],
        correctIndex: 1
      },
      {
        question: "What should the seller still own after CTG joins the opportunity?",
        options: [
          "Only calendar scheduling",
          "The relationship, discovery flow, and next-step control",
          "Nothing, because CTG should take over the account"
        ],
        correctIndex: 1
      },
      {
        question: "Why is waiting until late-stage technical pressure a mistake?",
        options: [
          "Because CTG works best as a shaping partner, not only as a reactive rescue team",
          "Because CTG is only useful before the first meeting",
          "Because late-stage deals never involve architecture"
        ],
        correctIndex: 0
      },
      {
        question: "What is the strongest way to introduce CTG to the customer?",
        options: [
          "As the team that helps validate architecture and execution while the seller keeps the business motion aligned",
          "As a replacement for the salesperson once technical questions begin",
          "As a classified-only specialist group"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "competition",
    number: 7,
    title: "Competitive Landscape",
    outcome: "Identifies disruptable environments and weak-reseller openings.",
    summary: "Read the field: hyperscalers, aging incumbents, and low-trust VAR relationships all create openings when buyers lack confidence in current partners.",
    scenario: "A contact says the current reseller is responsive only at renewal time and the account is considering cloud alternatives because on-prem support feels stale.",
    say: "If trust in the current reseller is weak, that is usually where we can differentiate by bringing a stronger partner motion, clearer architecture, and a more credible execution path.",
    mustKnow: [
      "A competitive opening often starts with partner dissatisfaction, weak reseller trust, or low confidence in current execution rather than pure product dissatisfaction alone.",
      "Aging incumbents can still be dangerous if they are deeply embedded, but they are more vulnerable when the account feels neglected or unsupported.",
      "Hyperscaler interest does not automatically mean the customer wants to leave on-prem; it often signals frustration, experimentation, or a desire for a fresh comparison point.",
      "A 'jump ball' in this training usually means the account is not locked, stakeholder confidence is unsettled, and the right partner-led motion can still shape the outcome.",
      "The seller's job is to diagnose where trust is weak, where the incumbent is stale, and where CTG plus NetApp can create a safer and more credible path."
    ],
    priorityHeading: "Competitive Displacement Playbook",
    priorityOrder: [
      { account: "1. Diagnose The Dissatisfaction", note: "Find out whether the opening is about reseller trust, incumbent performance, support quality, commercial friction, or strategic drift." },
      { account: "2. Separate Product From Partner Weakness", note: "Do not assume the incumbent platform is the only problem if the real pain is poor partner execution or weak account coverage." },
      { account: "3. Read The Cloud Signal Correctly", note: "When hyperscalers show up, ask whether the customer wants true migration, leverage against the incumbent, or a more modern architecture conversation." },
      { account: "4. Build A Safer Alternative", note: "Use CTG, architecture credibility, and execution confidence to show why switching is realistic instead of risky." },
      { account: "5. Turn Jump Ball Into Control", note: "Once you see an opening, multi-thread the account and define the next step before the incumbent re-stabilizes the relationship." }
    ],
    comparisonHeading: "Competitive Signals In The Field",
    comparisonColumns: ["Signal", "What It Usually Means", "Risk", "Opportunity", "Seller Move"],
    comparisonRows: [
      {
        account: "Weak Reseller Trust",
        category: "The customer feels under-supported or only hears from the partner at renewal time",
        mission: "The relationship layer is vulnerable even if the technology footprint remains in place",
        priority: "If ignored, the incumbent can recover by improving attention late in the cycle",
        motion: "Lead with a better partner motion and fast follow-through"
      },
      {
        account: "Aging Incumbent",
        category: "The installed base feels stale, expensive, or strategically dated",
        mission: "The customer may be ready to hear a modernization story",
        priority: "Deep entrenchment can still slow displacement if the migration story feels risky",
        motion: "Pair technical credibility with a realistic transition path"
      },
      {
        account: "Hyperscaler Interest",
        category: "Cloud options are entering the conversation",
        mission: "The account is looking for alternatives, leverage, or modernization ideas",
        priority: "Misreading this as a guaranteed cloud move can distort the pursuit strategy",
        motion: "Clarify the true driver and position NetApp where on-prem or hybrid control still matters"
      },
      {
        account: "Jump Ball",
        category: "The account is open, unsettled, and not fully claimed by any team",
        mission: "Confidence is still being formed across technical and commercial stakeholders",
        priority: "Openings close fast if the seller does not create structure and momentum",
        motion: "Move quickly to define next steps, partners, and stakeholder coverage"
      }
    ],
    coaching: [
      "The rep should hear weak reseller trust as a real opening, not as background noise.",
      "She should know that competitive displacement is usually won by reducing perceived risk, not just attacking the incumbent.",
      "She should not confuse cloud curiosity with an automatic cloud decision.",
      "She should turn vague dissatisfaction into a clear multi-step pursuit before the incumbent recovers."
    ],
    quizQuestions: [
      {
        question: "What does a 'jump ball' usually signal in this training?",
        options: [
          "A closed market with no room for disruption",
          "Weak reseller trust and a possible opening",
          "A deal that should be left to engineering"
        ],
        correctIndex: 1
      },
      {
        question: "What is often the most important first diagnosis in a displacement motion?",
        options: [
          "Whether the opening is really driven by reseller weakness, incumbent dissatisfaction, or both",
          "Whether the customer has already issued an RFP",
          "Whether the current solution uses only file storage"
        ],
        correctIndex: 0
      },
      {
        question: "How should the seller interpret hyperscaler interest in this module?",
        options: [
          "As proof the account has already committed to leaving on-prem",
          "As a signal to clarify whether the customer wants migration, leverage, or a modernization alternative",
          "As something irrelevant to infrastructure conversations"
        ],
        correctIndex: 1
      },
      {
        question: "What is the strongest response to a weak incumbent relationship?",
        options: [
          "Wait for the incumbent to fail completely before engaging",
          "Offer a stronger partner-led motion with credible execution and clear next steps",
          "Focus only on discounting before understanding the account"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "pricing",
    number: 8,
    title: "Pricing & Deal Strategy",
    outcome: "Navigates internal approvals and builds persuasive discount justifications.",
    summary: "Understand the flow from solution design to salesperson target price, NetApp approval, CTG markup, and customer pricing. Most meaningful deals will require red-level justification.",
    scenario: "You need aggressive pricing to displace an incumbent in a strategic account with 5x expansion potential. Leadership will ask for a strong narrative, not just a number.",
    say: "This is a strategic displacement with strong growth potential, and we have a path to expand well beyond the initial footprint if we win the platform decision now.",
    mustKnow: [
      "In this training, pricing is not just a number; it is a strategic narrative tied to account fit, competitive pressure, growth potential, and win probability.",
      "The typical flow runs from solution design to salesperson target price, then through NetApp approval, CTG markup, and final customer pricing.",
      "Most meaningful opportunities will not live in an easy approval band, so red-level justification should be treated as expected work rather than as an exception.",
      "Aggressive pricing requests need a business case: strategic displacement, expansion upside, competitive urgency, partner strength, or account relevance.",
      "Discounting without a strong story weakens credibility internally and externally, while disciplined pricing strategy helps leadership support the ask."
    ],
    priorityHeading: "Pricing Approval Playbook",
    priorityOrder: [
      { account: "1. Start With The Deal Logic", note: "Clarify why this opportunity matters before talking about discount level: displacement, strategic fit, footprint expansion, or territory priority." },
      { account: "2. Set The Target Price", note: "Build the salesperson target price from real competitive context and account strategy, not from hope or random discounting." },
      { account: "3. Prepare The Approval Story", note: "Frame the deal in terms leadership understands: platform win, growth multiple, incumbent displacement, account visibility, and execution confidence." },
      { account: "4. Coordinate NetApp And CTG", note: "Treat manufacturer approval and partner markup as part of one pricing path, not as separate surprises at the end." },
      { account: "5. Present A Controlled Offer", note: "Take a disciplined final price to the customer with a clear rationale and next-step plan instead of signaling desperation." }
    ],
    comparisonHeading: "Pricing Signals And Moves",
    comparisonColumns: ["Situation", "What It Means", "Risk", "Best Justification", "Seller Move"],
    comparisonRows: [
      {
        account: "Strategic Displacement",
        category: "The goal is to replace an incumbent and win the platform decision",
        mission: "The deal matters beyond the immediate revenue because future share is in play",
        priority: "Weak justification makes aggressive pricing look reckless instead of strategic",
        motion: "Tie the ask to platform capture, expansion path, and competitive urgency"
      },
      {
        account: "Expansion Potential",
        category: "The initial footprint could grow materially after the first win",
        mission: "Leadership may support lower near-term economics if the land-and-expand path is credible",
        priority: "Overstating upside without account evidence will damage trust",
        motion: "Show why the expansion path is believable, not just possible"
      },
      {
        account: "Standard Renewal Or Commodity Buy",
        category: "The opportunity is real but less strategic",
        mission: "The pricing ask may need more discipline because the long-term upside is smaller",
        priority: "Using strategic-deal language on every quote weakens future approval credibility",
        motion: "Match the price request to the actual importance of the deal"
      },
      {
        account: "Red-Level Approval",
        category: "The expected reality for many meaningful deals in this training",
        mission: "Leadership needs a persuasive narrative, not just a low number",
        priority: "Submitting a weak business case slows approvals and reduces confidence in the seller",
        motion: "Bring a tight written justification with competitive, strategic, and execution context"
      }
    ],
    coaching: [
      "The rep should assume that strong pricing requests require a strong internal story.",
      "She should not use discounting as a substitute for account strategy.",
      "She should be able to explain why a deal deserves support in business terms, not only in technical terms.",
      "She should coordinate NetApp and CTG pricing logic early enough that the final offer still feels controlled."
    ],
    quizQuestions: [
      {
        question: "What color band is the expected reality for most deals in this training?",
        options: [
          "Green",
          "Yellow",
          "Red"
        ],
        correctIndex: 2
      },
      {
        question: "What is the strongest basis for an aggressive pricing request?",
        options: [
          "A clear strategic story such as displacement, expansion upside, and platform capture",
          "The hope that a lower number will always create urgency",
          "The fact that leadership usually approves every ask"
        ],
        correctIndex: 0
      },
      {
        question: "Why is a weak approval narrative dangerous?",
        options: [
          "Because it makes aggressive pricing look undisciplined instead of strategic",
          "Because pricing never needs leadership support",
          "Because customers always prefer list price discussions"
        ],
        correctIndex: 0
      },
      {
        question: "What should the seller coordinate before taking final pricing to the customer?",
        options: [
          "Only the manufacturer's approval, because partner economics can be handled later",
          "NetApp approval, CTG markup, and the business case as one connected pricing path",
          "Nothing, because final pricing should be improvised in the meeting"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "compliance",
    number: 9,
    title: "Compliance",
    outcome: "Avoids gift, ethics, and conflict-of-interest mistakes in federal selling.",
    summary: "Stay inside the lines on FAR and ethics. The safest behavior is disciplined restraint when situations feel ambiguous or appearance risk is high.",
    scenario: "A well-connected contact suggests an informal dinner and hints that small gestures go a long way. You want the relationship, but not the risk.",
    say: "We take ethics and perception seriously in federal work, so I would rather keep things clean and focus on how we can help your mission within the proper channels.",
    mustKnow: [
      "In federal selling, appearance risk matters almost as much as actual rule violation, so behavior that feels ambiguous can still be dangerous.",
      "Gift, meal, entertainment, and favor situations should be treated conservatively because even small gestures can create ethics concerns or perception problems.",
      "The customer does not get to decide what is acceptable for you; compliance standards are your responsibility and your company's responsibility.",
      "When something feels questionable, the safest move is to stop, avoid action, and get clarity before proceeding.",
      "Strong federal sellers protect trust by being disciplined, transparent, and willing to walk away from gray-area behavior."
    ],
    priorityHeading: "Compliance Decision Pattern",
    priorityOrder: [
      { account: "1. Pause Immediately", note: "If a situation feels ethically gray, do not try to improvise your way through it in real time." },
      { account: "2. Check The Appearance Risk", note: "Ask whether the behavior could look improper even if someone tried to justify it technically." },
      { account: "3. Avoid Customer-Led Rule Setting", note: "Do not let the contact define what is acceptable for gifts, dinners, favors, or access." },
      { account: "4. Escalate For Clarity", note: "Use internal compliance, management, or legal guidance before you proceed with anything that feels uncertain." },
      { account: "5. Protect The Relationship The Right Way", note: "Keep the conversation focused on mission support, business value, and proper channels rather than personal gestures." }
    ],
    comparisonHeading: "Ethics Signals In Federal Selling",
    comparisonColumns: ["Situation", "What It Means", "Risk", "Right Response", "Seller Move"],
    comparisonRows: [
      {
        account: "Suggested Dinner Or Gift",
        category: "A contact hints that informal hospitality would help the relationship",
        mission: "The customer may be normalizing behavior that creates ethics exposure",
        priority: "Small-dollar logic can still create appearance and compliance problems",
        motion: "Decline cleanly and redirect toward proper business engagement"
      },
      {
        account: "Conflict-Of-Interest Concern",
        category: "A personal relationship or side arrangement may influence the deal",
        mission: "The opportunity could be exposed to scrutiny beyond normal selling risk",
        priority: "Ignoring the signal can create reputational and legal consequences",
        motion: "Pause and escalate before moving anything forward"
      },
      {
        account: "Customer Says It Is Fine",
        category: "The contact tries to reassure you that the gray-area behavior is acceptable",
        mission: "The customer is not the authority over your compliance obligations",
        priority: "Letting the buyer define the rule creates avoidable exposure",
        motion: "Rely on internal guidance, not informal customer permission"
      },
      {
        account: "Questionable But Not Clear",
        category: "You cannot tell immediately whether the situation violates a rule",
        mission: "Ambiguity itself is the warning sign",
        priority: "Trying to move quickly can turn uncertainty into an actual mistake",
        motion: "Do nothing until the path is clearly compliant"
      }
    ],
    coaching: [
      "The rep should treat gray areas as stop signs, not as negotiation points.",
      "She should understand that perception risk is real risk in federal accounts.",
      "She should not ask the customer to set the ethics boundary for her.",
      "She should know that disciplined restraint protects both the account and her credibility."
    ],
    quizQuestions: [
      {
        question: "What is the standing rule when something feels questionable?",
        options: [
          "Do nothing until it is clearly compliant",
          "Proceed if the dollar value is small",
          "Ask the customer to decide what is acceptable"
        ],
        correctIndex: 0
      },
      {
        question: "Why are small gifts or informal dinners still risky in this training?",
        options: [
          "Because appearance risk and ethics concerns can exist even when the amount seems minor",
          "Because customers are never allowed to meet outside the office",
          "Because all federal relationships must be purely written"
        ],
        correctIndex: 0
      },
      {
        question: "What should the seller do if a customer says a questionable gesture is acceptable?",
        options: [
          "Accept the customer's judgment because they know their environment best",
          "Rely on internal compliance standards rather than customer permission",
          "Proceed only if the account is strategic enough"
        ],
        correctIndex: 1
      },
      {
        question: "What is the best way to preserve the relationship when declining a gray-area request?",
        options: [
          "Shift the conversation back to mission help and proper business channels",
          "Ignore the request and hope it disappears",
          "Offer a smaller version of the same gesture"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "travel",
    number: 10,
    title: "Travel Strategy",
    outcome: "Uses travel time efficiently across high-value western DOE geographies.",
    summary: "Travel is a force multiplier when stacked well. Focus on Bay Area labs, Idaho, and PNNL, with Tuesday through Thursday as the default field pattern.",
    scenario: "You are planning a west-coast swing and want maximum account density without losing Monday and Friday to constant transit disruption.",
    mustKnow: [
      "Travel is a force multiplier only when it increases meeting density, partner coordination, and account momentum rather than scattering time across low-yield trips.",
      "The default field pattern in this training is Tuesday through Thursday because it preserves Monday and Friday for planning, follow-up, and internal execution.",
      "Priority western travel zones include the Bay Area labs, Idaho, and PNNL-linked motions where account density or strategic relevance can justify being on-site.",
      "Single-meeting trips often consume too much time relative to the value created unless the account is unusually strategic.",
      "A strong seller treats travel as part of territory design, not as proof of effort for its own sake."
    ],
    priorityHeading: "Travel Planning Rhythm",
    priorityOrder: [
      { account: "1. Travel Only With Density", note: "Stack multiple customer, partner, or internal strategic meetings into one trip whenever possible." },
      { account: "2. Protect Monday", note: "Use Monday for prep, account strategy, quote work, and internal coordination instead of defaulting to airport time." },
      { account: "3. Work The Core Field Window", note: "Plan Tuesday through Thursday as the main customer-facing block for western travel." },
      { account: "4. Protect Friday", note: "Use Friday for follow-up, next-step capture, and pipeline conversion while the meetings are still fresh." },
      { account: "5. Prioritize Strategic Geographies", note: "Bias travel toward the Bay Area labs, Idaho, PNNL, and other zones where account density or importance supports the trip." }
    ],
    comparisonHeading: "Travel Patterns In The Field",
    comparisonColumns: ["Pattern", "What It Looks Like", "Cost", "Value", "Seller Move"],
    comparisonRows: [
      {
        account: "Tuesday To Thursday Block",
        category: "A stacked trip with multiple planned meetings",
        mission: "Travel supports account density and preserves admin time on both ends",
        priority: "Requires disciplined planning but usually gives the best return",
        motion: "Use this as the default western DOE field pattern"
      },
      {
        account: "Monday To Friday Road Week",
        category: "Being on-site all week by default",
        mission: "Looks busy but often burns execution time and creates travel fatigue",
        priority: "Can weaken preparation and follow-through if overused",
        motion: "Avoid unless a rare high-value situation truly justifies it"
      },
      {
        account: "Single-Meeting Trip",
        category: "Traveling for one isolated meeting",
        mission: "Consumes a disproportionate amount of time for limited surface area",
        priority: "May still make sense for a highly strategic account, but not as a norm",
        motion: "Try to add nearby meetings or convert to remote unless the account warrants it"
      },
      {
        account: "Geography Stack",
        category: "Bay Area, Idaho, or PNNL-centered trip planning",
        mission: "Concentrates effort where strategic account density exists",
        priority: "Requires intentional routing and meeting orchestration",
        motion: "Use territory knowledge to make each trip do more than one job"
      }
    ],
    coaching: [
      "The rep should not confuse frequent travel with productive travel.",
      "She should use Monday and Friday as execution days whenever possible.",
      "She should plan trips around account density and strategic value, not around habit.",
      "She should treat follow-up speed after travel as part of the value of the trip."
    ],
    quizQuestions: [
      {
        question: "What travel pattern is preferred in this training?",
        options: [
          "Monday through Friday on-site every week",
          "Tuesday through Thursday with stacked meetings",
          "Single-meeting day trips whenever possible"
        ],
        correctIndex: 1
      },
      {
        question: "Why are Monday and Friday usually protected in this module?",
        options: [
          "To preserve time for planning, follow-up, and internal execution instead of default travel",
          "Because customers are never available on those days",
          "Because DOE sites do not allow visits then"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest weakness of single-meeting trips?",
        options: [
          "They always violate travel policy",
          "They often consume too much time relative to the value created",
          "They are impossible in federal sales"
        ],
        correctIndex: 1
      },
      {
        question: "How should the seller choose where to travel most often?",
        options: [
          "By rotating evenly across all geographies regardless of opportunity density",
          "By prioritizing strategic zones like the Bay Area, Idaho, and PNNL-linked motions",
          "By traveling wherever there is the cheapest airfare"
        ],
        correctIndex: 1
      }
    ]
  },
  {
    id: "marketing",
    number: 11,
    title: "Marketing & Outreach",
    outcome: "Uses events, EBCs, and conferences to create relationship density.",
    summary: "Operationalize co-OEM events, Executive Briefing Centers, and key conferences like NLIT and Supercomputing to create momentum across accounts.",
    scenario: "A target account has gone quiet, but several of their peers will attend NLIT and your partner ecosystem can support a joint AI-focused event.",
    say: "If we can reconnect them through an EBC or a partner-led event around AI and infrastructure, we create a more strategic conversation than a standard check-in call.",
    mustKnow: [
      "Events and outreach are not side activities in this training; they are tools for creating relationship density and reopening stalled account motion.",
      "Executive Briefing Centers can elevate the conversation beyond routine check-ins by giving the customer a more strategic, curated experience.",
      "Partner-led or co-OEM events are useful when they connect the customer to a broader AI and infrastructure narrative instead of a narrow product pitch.",
      "NLIT and Supercomputing are called out because they create natural concentration of DOE stakeholders, peers, and ecosystem conversations.",
      "Good outreach is targeted and account-specific, not generic event spam sent to every contact."
    ],
    priorityHeading: "Outreach Activation Flow",
    priorityOrder: [
      { account: "1. Diagnose The Silence", note: "Decide whether the account has gone quiet because of timing, low urgency, weak relationship density, or lack of strategic relevance." },
      { account: "2. Pick The Right Vehicle", note: "Use an EBC, partner-led event, conference touchpoint, or co-marketing motion based on what will create the most strategic re-entry." },
      { account: "3. Anchor To A Real Theme", note: "Frame the outreach around AI infrastructure, modernization, mission fit, or ecosystem relevance rather than a generic meeting request." },
      { account: "4. Use Peer Gravity", note: "Leverage events like NLIT and Supercomputing where DOE peers already gather and conversations can restart naturally." },
      { account: "5. Convert Interest Into Next Steps", note: "Treat the event as a door opener, then move quickly to a concrete follow-up meeting or account plan." }
    ],
    comparisonHeading: "Outreach Motions That Matter",
    comparisonColumns: ["Motion", "What It Does", "Best Use", "Risk", "Seller Move"],
    comparisonRows: [
      {
        account: "Executive Briefing Center",
        category: "Creates a curated strategic experience",
        mission: "Helps elevate the conversation beyond routine vendor meetings",
        priority: "Low-value attendees or weak themes can make it feel performative",
        motion: "Use it when the account is ready for a higher-level strategic discussion"
      },
      {
        account: "Partner-Led Event",
        category: "Uses ecosystem voices to widen the conversation",
        mission: "Can reconnect quiet accounts through stronger market relevance and shared presence",
        priority: "A vague theme can reduce the event to generic marketing noise",
        motion: "Tie the event to AI, infrastructure, or mission-relevant modernization"
      },
      {
        account: "NLIT / Supercomputing",
        category: "High-value conference environment for DOE and HPC conversations",
        mission: "Creates concentrated access to stakeholders, peers, and adjacent accounts",
        priority: "If unmanaged, conference energy can turn into lots of activity with little follow-through",
        motion: "Use conference timing to restart or deepen strategic conversations"
      },
      {
        account: "Generic Check-In Outreach",
        category: "Standard follow-up with no real hook",
        mission: "Rarely creates new energy when the account is already quiet",
        priority: "Can reinforce the sense that the seller has nothing new to offer",
        motion: "Replace generic outreach with a sharper event or theme-based re-entry"
      }
    ],
    coaching: [
      "The rep should use events to create relationship density, not just attendance counts.",
      "She should connect outreach to a real account-specific theme instead of sending generic invitations.",
      "She should know when an EBC creates more value than another routine meeting.",
      "She should treat post-event follow-up as the real conversion moment."
    ],
    quizQuestions: [
      {
        question: "Which conferences are called out as critical in this training?",
        options: [
          "RSA and CES",
          "NLIT and Supercomputing",
          "Dreamforce and NRF"
        ],
        correctIndex: 1
      },
      {
        question: "What is the best reason to use an Executive Briefing Center?",
        options: [
          "To create a more strategic conversation than a routine vendor check-in",
          "To replace all normal follow-up activity",
          "To avoid bringing partners into the account"
        ],
        correctIndex: 0
      },
      {
        question: "What makes partner-led outreach effective in this module?",
        options: [
          "It broadens the conversation around meaningful themes like AI infrastructure and modernization",
          "It works best when the event is as generic as possible",
          "It removes the need for any post-event next step"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest mistake after a good conference or event touchpoint?",
        options: [
          "Failing to convert the contact into a concrete follow-up step",
          "Using the event to meet more than one stakeholder",
          "Bringing ecosystem voices into the conversation"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "validation",
    number: 12,
    title: "External Validation",
    outcome: "Uses remote validation environments instead of defaulting to on-site POCs.",
    summary: "Protect time and momentum by favoring external demo or validation environments that prove the solution without triggering slow, expensive on-site pilots.",
    scenario: "The customer asks whether you can stand up a proof of concept in their environment next month, but the internal overhead would stall the deal.",
    say: "We can usually validate this faster in a controlled external environment and still answer the questions that matter for your decision.",
    mustKnow: [
      "Validation matters, but the default should not be a slow, expensive on-site proof of concept when a faster external path can answer the key questions.",
      "External validation environments help preserve momentum by proving fit without forcing the customer into heavy internal setup and approval work.",
      "The goal of validation is to reduce decision risk, not to create a giant project before the deal is ready.",
      "A good seller distinguishes between necessary proof and unnecessary operational overhead.",
      "Remote testing and controlled demos can often answer the real objections faster than an on-prem pilot."
    ],
    priorityHeading: "Validation Decision Flow",
    priorityOrder: [
      { account: "1. Clarify The Real Question", note: "Figure out what the customer actually needs validated: performance, fit, workflow, integration confidence, or buying comfort." },
      { account: "2. Choose The Lightest Effective Path", note: "Use the smallest validation motion that still answers the customer's decision-critical concerns." },
      { account: "3. Favor External Environments First", note: "Start with controlled demo or validation environments before proposing a customer-site pilot." },
      { account: "4. Protect Momentum", note: "Avoid validation designs that create weeks of internal friction before the account is ready." },
      { account: "5. Convert Proof Into Decision", note: "Treat validation as a step toward commitment, not as an endless technical sandbox." }
    ],
    comparisonHeading: "Validation Motions Compared",
    comparisonColumns: ["Motion", "What It Does", "Best Use", "Risk", "Seller Move"],
    comparisonRows: [
      {
        account: "External Validation Environment",
        category: "Controlled demo or proof outside the customer's environment",
        mission: "Answers key technical and workflow questions with less friction",
        priority: "May be underused if the team assumes only on-site proof is credible",
        motion: "Use this as the preferred default when it can answer the real objection"
      },
      {
        account: "Remote Testing",
        category: "Guided validation without full on-site deployment",
        mission: "Lets the customer see proof while preserving speed and flexibility",
        priority: "Needs clear success criteria or it can feel too abstract",
        motion: "Keep the test focused on the specific question blocking the deal"
      },
      {
        account: "On-Site POC",
        category: "Proof of concept in the customer's environment",
        mission: "Can be appropriate when environment-specific proof is truly necessary",
        priority: "Often creates cost, delay, approvals, and operational drag",
        motion: "Use selectively, not as the automatic next step"
      },
      {
        account: "No Validation",
        category: "Skipping proof altogether",
        mission: "Keeps speed high but may leave decision risk unresolved",
        priority: "Can backfire if the customer still lacks confidence",
        motion: "Avoid unless the account truly does not need additional proof"
      }
    ],
    coaching: [
      "The rep should not default to on-site POCs just because the customer mentions proof.",
      "She should ask what actually needs to be validated before proposing a method.",
      "She should use external validation to protect momentum and reduce wasted effort.",
      "She should make sure validation leads to a decision instead of an endless technical loop."
    ],
    quizQuestions: [
      {
        question: "What is the preferred validation motion in this training?",
        options: [
          "On-site POCs as the default for every deal",
          "External validation environments and remote testing",
          "Skipping validation entirely"
        ],
        correctIndex: 1
      },
      {
        question: "Why are external validation environments favored here?",
        options: [
          "Because they can prove fit faster without triggering as much customer-side overhead",
          "Because customers never care about proof in their own environment",
          "Because remote validation removes the need for technical questions"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest risk of defaulting to an on-site POC?",
        options: [
          "It often creates delay, approvals, and operational drag before the deal is ready",
          "It is never technically possible",
          "It guarantees the customer will not buy"
        ],
        correctIndex: 0
      },
      {
        question: "What should the seller define before choosing a validation path?",
        options: [
          "The exact question or concern the customer needs validated",
          "The cheapest available demo asset",
          "Which team wants to travel most"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "ecosystem",
    number: 13,
    title: "Ecosystem Networking",
    outcome: "Builds a partner map that expands deal surface area across the territory.",
    summary: "Develop and maintain active relationships with NVIDIA, Red Hat, VMware, Cisco, Splunk, and adjacent players that can unlock broader conversations.",
    scenario: "A DOE team starts asking about AI infrastructure readiness, observability, and virtualization dependencies. A strong ecosystem map can widen the opportunity.",
    say: "We should bring the right ecosystem voices in where they add credibility and help the customer connect storage decisions to the broader platform roadmap.",
    mustKnow: [
      "A strong territory is supported by an actively maintained ecosystem map, not by a handful of static names.",
      "Partners like NVIDIA, Red Hat, VMware, Cisco, Splunk, and adjacent players can expand the conversation when the customer's problem reaches beyond storage alone.",
      "The right ecosystem voice adds credibility and context; the wrong partner at the wrong time can create noise.",
      "Ecosystem networking is not just about collecting contacts. It is about knowing which relationships matter for which account motions.",
      "A good seller uses partner relationships to widen opportunity surface area while still keeping the account strategy coherent."
    ],
    priorityHeading: "Ecosystem Mapping Flow",
    priorityOrder: [
      { account: "1. Build The Map", note: "Maintain an active contact list across relevant OEMs, platforms, and adjacent ecosystem players for the territory." },
      { account: "2. Match Partner To Motion", note: "Decide whether the account needs AI, virtualization, observability, networking, or platform credibility before bringing in outside voices." },
      { account: "3. Use Partners To Add Context", note: "Bring ecosystem players in when they make the customer's broader roadmap clearer, not when they merely add more logos to the meeting." },
      { account: "4. Keep The Story Coherent", note: "Make sure every partner interaction supports the main account strategy instead of turning the motion into a scattered technology parade." },
      { account: "5. Refresh The Network", note: "Treat partner relationships as active territory assets that need regular maintenance, not as a one-time list." }
    ],
    comparisonHeading: "Ecosystem Motions By Need",
    comparisonColumns: ["Partner Type", "What They Add", "Best Use", "Risk", "Seller Move"],
    comparisonRows: [
      {
        account: "AI / GPU Ecosystem",
        category: "Partners like NVIDIA and AI-adjacent players",
        mission: "Add relevance when the account is discussing AI readiness, training infrastructure, or accelerated platforms",
        priority: "Can become hype-heavy if not tied to the actual account need",
        motion: "Use when AI infrastructure is a real part of the roadmap"
      },
      {
        account: "Platform / Virtualization",
        category: "Partners like VMware or Red Hat",
        mission: "Help connect storage conversations to broader platform and operations choices",
        priority: "Too many platform voices can dilute a focused deal motion",
        motion: "Bring in when platform architecture is shaping the opportunity"
      },
      {
        account: "Networking / Observability",
        category: "Partners like Cisco or Splunk",
        mission: "Expand the conversation when infrastructure visibility, networking, or operations concerns are in play",
        priority: "Irrelevant partner involvement can waste customer time",
        motion: "Use when the customer is clearly linking storage to wider infrastructure operations"
      },
      {
        account: "Maintained Territory Map",
        category: "An actively refreshed set of ecosystem relationships",
        mission: "Lets the seller respond quickly when a broader solution motion emerges",
        priority: "A stale list creates the illusion of coverage without real access",
        motion: "Review and refresh the partner map continuously"
      }
    ],
    coaching: [
      "The rep should maintain an active partner map for the territory, not just a few disconnected contacts.",
      "She should bring partners in when they add clarity and credibility, not when they only make the meeting bigger.",
      "She should understand which partner types fit which account motions.",
      "She should keep the core account strategy coherent even when multiple ecosystem players are involved."
    ],
    quizQuestions: [
      {
        question: "What is required for each territory in this training?",
        options: [
          "A partner contact list that is actively maintained",
          "One contact at one OEM",
          "Only NetApp relationships"
        ],
        correctIndex: 0
      },
      {
        question: "When should the seller bring ecosystem partners into the conversation?",
        options: [
          "When they add credibility to the actual account motion such as AI, platform, networking, or observability",
          "At the start of every meeting regardless of topic",
          "Only after the deal is already closed"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest risk of poor ecosystem use?",
        options: [
          "Turning the opportunity into a scattered conversation with extra noise and weak focus",
          "Making the customer too interested in the account",
          "Reducing the need for follow-up"
        ],
        correctIndex: 0
      },
      {
        question: "What makes an ecosystem map valuable?",
        options: [
          "It is actively refreshed and tied to real territory motions",
          "It includes as many logos as possible whether they matter or not",
          "It is only needed for AI accounts"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "post-sale",
    number: 14,
    title: "Post-Sale Execution",
    outcome: "Turns installs into relationships, QBRs, and expansion opportunities.",
    summary: "Early in role development, the salesperson should show up for installs, meet operators and engineers, and use delivery moments to grow the account.",
    scenario: "A deployment is scheduled at a strategic account. You could skip it and focus on prospecting, or attend and deepen ties with the people who will influence future buys.",
    say: "I want to stay close to the install because that is where we learn what matters operationally and where future expansion signals usually show up first.",
    mustKnow: [
      "The sale is not over at award. Installs, delivery moments, and early operational experience often shape the next expansion opportunity.",
      "Showing up for installs helps the seller meet operators, engineers, and real day-to-day stakeholders who may influence future buys.",
      "Post-sale presence builds credibility because the customer sees that the seller cares about outcomes, not just bookings.",
      "QBRs and follow-up conversations turn delivery events into structured account-growth discussions.",
      "A good seller does not replace the implementation team; she stays close enough to learn, build trust, and spot the next opportunity."
    ],
    priorityHeading: "Post-Sale Growth Flow",
    priorityOrder: [
      { account: "1. Show Up At Delivery Moments", note: "Attend important installs or post-sale milestones so you can hear operational feedback directly." },
      { account: "2. Meet The Real Operators", note: "Use installs and early usage periods to build relationships with engineers, admins, and day-to-day stakeholders." },
      { account: "3. Capture Expansion Signals", note: "Listen for performance gaps, adjacent needs, support patterns, and future project hints that could shape the next opportunity." },
      { account: "4. Turn Delivery Into Review Rhythm", note: "Use QBRs or structured follow-ups to move from implementation talk into account-growth planning." },
      { account: "5. Stay Supportive, Not Disruptive", note: "Stay close enough to learn and help, without trying to replace the technical delivery team." }
    ],
    comparisonHeading: "Post-Sale Motions That Matter",
    comparisonColumns: ["Moment", "What It Creates", "Best Use", "Risk", "Seller Move"],
    comparisonRows: [
      {
        account: "Install Attendance",
        category: "Being present during key deployment moments",
        mission: "Creates operator relationships and firsthand operational insight",
        priority: "Skipping the moment can mean missing the people who shape future demand",
        motion: "Attend strategically important installs, especially early in role development"
      },
      {
        account: "QBR",
        category: "Structured business review after deployment",
        mission: "Connects delivery results to business value and next-step planning",
        priority: "Without clear follow-through, QBRs can become routine status theater",
        motion: "Use reviews to surface expansion paths and stakeholder alignment"
      },
      {
        account: "Operator Feedback",
        category: "What admins, engineers, and end users say after go-live",
        mission: "Reveals pain points, wins, and adjacent opportunity signals",
        priority: "If ignored, the seller loses the clearest clues about account growth",
        motion: "Capture patterns and feed them into the account plan"
      },
      {
        account: "Hands-Off Selling",
        category: "Disappearing after the deal closes",
        mission: "Protects calendar time but weakens long-term account growth",
        priority: "Creates the impression that the relationship mattered only until the order landed",
        motion: "Stay engaged enough to grow the account without micromanaging delivery"
      }
    ],
    coaching: [
      "The rep should view installs as relationship and learning moments, not as distractions from prospecting.",
      "She should know that operators and engineers often shape expansion more than the original buying contact alone.",
      "She should use QBRs to turn operational success into account planning.",
      "She should stay involved without trying to become the implementation lead."
    ],
    quizQuestions: [
      {
        question: "Why attend installs early in your career?",
        options: [
          "To replace the implementation team",
          "To build relationships and spot expansion opportunities",
          "To avoid doing QBRs later"
        ],
        correctIndex: 1
      },
      {
        question: "What is the biggest post-sale advantage of meeting operators and engineers?",
        options: [
          "They often reveal the real operational signals that shape future expansion",
          "They remove the need for any business review process",
          "They can approve discounts on the spot"
        ],
        correctIndex: 0
      },
      {
        question: "What should a QBR accomplish in this training?",
        options: [
          "Connect delivery outcomes to business value and next-step growth planning",
          "Replace all normal account communication for the year",
          "Focus only on whether implementation tickets are closed"
        ],
        correctIndex: 0
      },
      {
        question: "What is the best balance for the seller after a deal closes?",
        options: [
          "Stay close enough to learn and grow the account without taking over delivery",
          "Disappear until the next renewal",
          "Run the implementation personally to protect the relationship"
        ],
        correctIndex: 0
      }
    ]
  },
  {
    id: "stakeholders",
    number: 15,
    title: "Stakeholder Mapping",
    outcome: "Builds multi-threaded coverage with technical buyers, procurement, and champions.",
    summary: "Map technical buyers, procurement stakeholders, influencers, and champions so deals do not rest on a single relationship or single-threaded momentum.",
    scenario: "You have a strong relationship with one architect, but the opportunity is stalling. The account needs broader coverage to survive budget, procurement, and technical reviews.",
    say: "To make this durable, I want to understand who else needs confidence in the solution, the process, and the outcome so we are not relying on one champion alone.",
    mustKnow: [
      "A deal is fragile when it rests on one relationship, no matter how strong that one champion seems.",
      "Multi-threaded coverage should include technical buyers, procurement stakeholders, influencers, and multiple champions.",
      "A strong architect relationship is valuable, but it rarely carries a federal opportunity through budget, process, technical validation, and execution alone.",
      "The target in this training is three or more champions per account so momentum survives turnover, delay, and internal review.",
      "Stakeholder mapping is not a one-time exercise; it should evolve as the opportunity matures."
    ],
    priorityHeading: "Stakeholder Coverage Flow",
    priorityOrder: [
      { account: "1. Map The Buying Circle", note: "Identify who shapes technical confidence, procurement path, budget influence, and final support across the account." },
      { account: "2. Test For Single-Thread Risk", note: "Look for places where the opportunity depends too heavily on one person or one team." },
      { account: "3. Build Multiple Champions", note: "Develop at least three meaningful supporters across different parts of the account." },
      { account: "4. Expand Beyond Technical Agreement", note: "Make sure procurement, operational, and business stakeholders also have confidence in the path." },
      { account: "5. Refresh The Map Constantly", note: "Update the stakeholder view as the opportunity moves through review, budget, and execution stages." }
    ],
    comparisonHeading: "Stakeholder Roles In The Account",
    comparisonColumns: ["Role", "What They Influence", "Why They Matter", "Risk If Missing", "Seller Move"],
    comparisonRows: [
      {
        account: "Technical Buyer",
        category: "Architecture, fit, and technical confidence",
        mission: "Helps validate whether the solution makes sense operationally",
        priority: "Without technical support, the opportunity can stall before it matures",
        motion: "Build trust early and keep technical alignment moving"
      },
      {
        account: "Procurement Stakeholder",
        category: "Vehicle, process, and buying path",
        mission: "Shapes how the opportunity can actually be transacted",
        priority: "A missing procurement thread can delay or derail otherwise strong demand",
        motion: "Bring procurement awareness in before the deal gets late-stage"
      },
      {
        account: "Champion",
        category: "Internal advocacy and momentum",
        mission: "Carries the opportunity inside the account when you are not in the room",
        priority: "One champion is rarely enough for a durable federal motion",
        motion: "Develop three or more real supporters across the account"
      },
      {
        account: "Influencer / Operator",
        category: "Practical reality and day-to-day credibility",
        mission: "Can validate whether the solution will actually help the team",
        priority: "Ignoring influencers can create hidden resistance late in the cycle",
        motion: "Include the people who live with the outcome, not just the formal buyers"
      }
    ],
    coaching: [
      "The rep should see single-threaded momentum as a warning sign, not as comfort.",
      "She should deliberately build three or more champions across the account.",
      "She should map procurement and operational voices alongside technical ones.",
      "She should keep updating the stakeholder map as the opportunity changes shape."
    ],
    quizQuestions: [
      {
        question: "What is the target number of champions per account in this training?",
        options: [
          "One strong champion",
          "Two champions maximum",
          "Three or more champions"
        ],
        correctIndex: 2
      },
      {
        question: "Why is a single strong architect relationship usually not enough?",
        options: [
          "Because federal opportunities also depend on procurement, broader stakeholder confidence, and internal advocacy",
          "Because architects are never important",
          "Because only procurement matters in federal sales"
        ],
        correctIndex: 0
      },
      {
        question: "What is the biggest danger of single-threaded momentum?",
        options: [
          "The deal becomes fragile if one person loses interest, leaves, or cannot carry it alone",
          "The opportunity closes too quickly",
          "The account stops needing technical validation"
        ],
        correctIndex: 0
      },
      {
        question: "What should the seller include in a real stakeholder map?",
        options: [
          "Technical buyers, procurement stakeholders, influencers, and multiple champions",
          "Only the original contact and their manager",
          "Only the loudest person in the account"
        ],
        correctIndex: 0
      }
    ]
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
    const quizQuestions = getQuizQuestions(module);
    moduleState[module.id] = {
      complete: false,
      confidence: 3,
      quizAnswers: quizQuestions.map(() => null)
    };
  });
  return {
    selectedModuleId: modules[0]?.id || null,
    moduleState
  };
}

function loadState() {
  const raw = window.localStorage.getItem(storageKey);
  if (!raw) {
    return getDefaultState();
  }

  try {
    const parsed = JSON.parse(raw);
    const defaultState = getDefaultState();
    return {
      selectedModuleId: parsed.selectedModuleId || defaultState.selectedModuleId,
      moduleState: {
        ...defaultState.moduleState,
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
  const anyQuizAnswered = Array.isArray(record.quizAnswers)
    ? record.quizAnswers.some((answer) => answer !== null)
    : record.selectedAnswer !== null;
  if (record.complete) {
    return { label: "Complete", className: "complete" };
  }
  if (anyQuizAnswered || record.confidence !== 3) {
    return { label: "In Progress", className: "in-progress" };
  }
  return { label: "Not Started", className: "not-started" };
}

function getQuizQuestions(module) {
  if (module.quizQuestions?.length) {
    return module.quizQuestions;
  }

  if (module.question && module.options) {
    return [{
      question: module.question,
      options: module.options,
      correctIndex: module.correctIndex
    }];
  }

  return [];
}

function getQuizAnswers(record, questionCount) {
  if (Array.isArray(record.quizAnswers) && record.quizAnswers.length === questionCount) {
    return record.quizAnswers;
  }

  if (Array.isArray(record.quizAnswers) && record.quizAnswers.length) {
    return Array.from({ length: questionCount }, (_, index) => record.quizAnswers[index] ?? null);
  }

  if (record.selectedAnswer !== undefined && questionCount > 0) {
    return [record.selectedAnswer, ...Array.from({ length: questionCount - 1 }, () => null)];
  }

  return Array.from({ length: questionCount }, () => null);
}

function getQuizCorrectCount(moduleId) {
  const module = modules.find((item) => item.id === moduleId);
  const questions = getQuizQuestions(module);
  const answers = getQuizAnswers(state.moduleState[moduleId], questions.length);
  return questions.reduce((count, question, index) => count + (answers[index] === question.correctIndex ? 1 : 0), 0);
}

function getSelectedModule() {
  return modules.find((module) => module.id === state.selectedModuleId) || modules[0];
}

function renderModuleNavigation() {
  const moduleNav = document.getElementById("moduleNav");
  const template = document.getElementById("moduleNavItemTemplate");
  moduleNav.innerHTML = "";

  modules.forEach((module) => {
    const fragment = template.content.cloneNode(true);
    const button = fragment.querySelector(".module-nav-item");
    const status = getModuleStatus(module.id);

    fragment.querySelector(".module-nav-kicker").textContent = `Module ${module.number}`;
    fragment.querySelector(".module-nav-title").textContent = module.title;
    fragment.querySelector(".module-nav-outcome").textContent = module.outcome;
    fragment.querySelector(".module-nav-status").textContent = status.label;

    if (module.id === state.selectedModuleId) {
      button.classList.add("active");
    }

    button.addEventListener("click", () => {
      state.selectedModuleId = module.id;
      saveState();
      renderAll();
      document.getElementById("moduleDetail")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    moduleNav.appendChild(fragment);
  });
}

function renderSelectedModule() {
  const moduleDetail = document.getElementById("moduleDetail");
  const template = document.getElementById("moduleCardTemplate");
  const module = getSelectedModule();
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector(".module-card");
  const record = state.moduleState[module.id];
  const status = getModuleStatus(module.id);
  const quizQuestions = getQuizQuestions(module);
  const quizAnswers = getQuizAnswers(record, quizQuestions.length);

  moduleDetail.innerHTML = "";
  document.getElementById("selectedModuleHeading").textContent = `Module ${module.number}: ${module.title}`;

  fragment.querySelector(".module-kicker").textContent = `Module ${module.number}`;
  fragment.querySelector(".module-title").textContent = module.title;
  fragment.querySelector(".module-outcome").textContent = module.outcome;
  fragment.querySelector(".module-summary").textContent = module.summary;
  fragment.querySelector(".module-scenario").textContent = module.scenario;
  fragment.querySelector(".say-example").textContent = module.say;

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

  const quizList = fragment.querySelector(".quiz-list");
  quizQuestions.forEach((question, questionIndex) => {
    const quizItem = document.createElement("div");
    quizItem.className = "quiz-item";

    const quizMeta = document.createElement("p");
    quizMeta.className = "quiz-meta";
    quizMeta.textContent = `Question ${questionIndex + 1}`;

    const prompt = document.createElement("p");
    prompt.className = "quiz-question";
    prompt.textContent = question.question;

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "quiz-options";

    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "quiz-option";
      button.textContent = option;

      if (quizAnswers[questionIndex] !== null) {
        if (optionIndex === question.correctIndex) {
          button.classList.add("correct");
        } else if (optionIndex === quizAnswers[questionIndex]) {
          button.classList.add("incorrect");
        }
      }

      button.addEventListener("click", () => {
        const nextAnswers = getQuizAnswers(state.moduleState[module.id], quizQuestions.length);
        nextAnswers[questionIndex] = optionIndex;
        state.moduleState[module.id].quizAnswers = nextAnswers;
        saveState();
        renderAll();
      });

      optionsContainer.appendChild(button);
    });

    quizItem.append(quizMeta, prompt, optionsContainer);
    quizList.appendChild(quizItem);
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

  moduleDetail.appendChild(fragment);
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
  const selectedModule = getSelectedModule();
  const panel = document.getElementById("scenarioPanel");
  panel.innerHTML = "";
  document.getElementById("scenarioHeading").textContent = `${selectedModule.title} Scenario`;

  const wrapper = document.createElement("article");
  wrapper.className = "scenario-card";

  const tag = document.createElement("div");
  tag.className = "scenario-tag";
  tag.textContent = `Module ${selectedModule.number} Walkthrough`;

  const title = document.createElement("h3");
  title.textContent = selectedModule.title;

  const overview = document.createElement("p");
  overview.className = "module-summary";
  overview.textContent = selectedModule.scenario;

  const statGrid = document.createElement("div");
  statGrid.className = "scenario-grid";
  const selectedStats = [
    { label: "Outcome", value: selectedModule.outcome },
    { label: "Confidence", value: confidenceLabel(state.moduleState[selectedModule.id].confidence) },
    {
      label: "Quiz Score",
      value: `${getQuizCorrectCount(selectedModule.id)}/${getQuizQuestions(selectedModule).length} correct`
    },
    { label: "Status", value: getModuleStatus(selectedModule.id).label }
  ];
  selectedStats.forEach((stat) => {
    const statCard = document.createElement("div");
    statCard.className = "scenario-stat";
    statCard.innerHTML = `<span>${stat.label}</span><strong>${stat.value}</strong>`;
    statGrid.appendChild(statCard);
  });

  const stepList = document.createElement("ol");
  stepList.className = "plain-list";
  const scenarioSteps = selectedModule.priorityOrder?.length
    ? selectedModule.priorityOrder.map((item) => `${item.account}: ${item.note}`)
    : scenarioWalkthrough.steps;
  scenarioSteps.forEach((step) => {
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
  const totalQuestions = modules.reduce((total, module) => total + getQuizQuestions(module).length, 0);
  const correctCount = modules.reduce((total, module) => total + getQuizCorrectCount(module.id), 0);
  const averageConfidence = (
    modules.reduce((total, module) => total + state.moduleState[module.id].confidence, 0) / modules.length
  ).toFixed(1);
  const readyModules = modules.filter((module) => {
    const record = state.moduleState[module.id];
    const questions = getQuizQuestions(module);
    return record.complete && getQuizCorrectCount(module.id) === questions.length && record.confidence >= 4;
  }).length;

  list.innerHTML = `
    <li><strong>${completedCount}/${modules.length}</strong> modules completed</li>
    <li><strong>${correctCount}/${totalQuestions}</strong> quiz questions answered correctly</li>
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
    .filter((module) => {
      const questions = getQuizQuestions(module);
      const answers = getQuizAnswers(state.moduleState[module.id], questions.length);
      return answers.some((answer, index) => answer !== null && answer !== questions[index].correctIndex);
    })
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

function getResumeModuleId() {
  const missedQuizModule = modules.find((module) => {
    const questions = getQuizQuestions(module);
    const answers = getQuizAnswers(state.moduleState[module.id], questions.length);
    return answers.some((answer, index) => answer !== null && answer !== questions[index].correctIndex);
  });
  if (missedQuizModule) {
    return missedQuizModule.id;
  }

  const lowConfidenceModule = modules.find((module) => {
    const record = state.moduleState[module.id];
    return !record.complete && record.confidence <= 2;
  });
  if (lowConfidenceModule) {
    return lowConfidenceModule.id;
  }

  const incompleteModule = modules.find((module) => !state.moduleState[module.id].complete);
  return incompleteModule?.id || state.selectedModuleId || modules[0]?.id || null;
}

function renderAll() {
  renderModuleNavigation();
  renderSelectedModule();
  renderScenario();
  renderSnapshot();
  renderDashboard();
}

document.getElementById("resumeButton").addEventListener("click", () => {
  const resumeModuleId = getResumeModuleId();
  if (resumeModuleId) {
    state.selectedModuleId = resumeModuleId;
    saveState();
    renderAll();
  }
  document.getElementById("moduleDetail")?.scrollIntoView({ behavior: "smooth", block: "start" });
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
