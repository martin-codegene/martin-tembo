export interface ProjectLink {
    link: string;
    linkText: string;
}

export interface ProjectSection {
    title: string;
    items: string[];
}

export interface PortfolioProject {
    slug: string;
    num: string;
    cat: string;
    title: string;
    status: 'Live' | 'In Development' | 'Unavailable';
    desc: string;
    overview: string[];
    sections: ProjectSection[];
    stack: { group: string; items: string[] }[];
    tags: string[];
    link: string;
    linkText: string;
    extraLinks?: ProjectLink[];
}

export const PROJECTS: PortfolioProject[] = [
    {
        slug: 'tutorly-af-academy',
        num: '01',
        cat: 'EdTech Platform',
        title: 'Tutorly-AF Academy',
        status: 'Live',
        desc: 'Full learning platform for multi-country curricula, launching in Zambia. Expo mobile app for students, a Tauri desktop studio for tutors, a GraphQL backend, and a Rust media pipeline — with live classes on self-hosted LiveKit, an AI tutor with voice and RAG, end-to-end encrypted chat, and a non-destructive video editor.',
        overview: [
            'Tutorly connects students with tutors through courses, live classrooms, 1:1 voice and video calls, an AI tutor, quizzes, study plans, Shorts, podcasts, scientific articles, and communities. It is built for multi-country curricula (country → education system → grade level → institution), with Zambia as the launch market and purchasing-power pricing.',
            'I designed and built the whole system: an Expo app for students on iOS, Android, and web; a Tauri desktop studio where tutors teach, record, and edit; a Bun + Hono server exposing GraphQL as its primary API; and a Rust worker that turns uploads into streamable, data-friendly media.',
            'Much of the engineering is shaped by the market — mobile data is expensive, devices are modest, many learners are minors, and many study above the official age for their grade — so the platform is built to be cheap to stream, safe by default, and welcoming rather than gatekeeping.',
        ],
        sections: [
            {
                title: 'AI Tutor',
                items: [
                    'Gemini-powered tutor that streams answers over SSE and accepts text, images, documents, and voice notes.',
                    'Real-time voice tutoring: the server bridges the app’s WebSocket to a Gemini Live session, so the API key never reaches the client and guardrails, metering, and safeguarding still apply.',
                    'Tool calling with 19 tools — search the curriculum, build a practice quiz, grade work, generate a diagram, review past mistakes, save notes, book a live session, enrol in a course, set a study reminder, and more.',
                    'Tool schemas never accept a user ID; the server binds the authenticated student itself, closing the most common IDOR hole in tool-calling apps.',
                    'Answers are grounded in published courses via a pgvector RAG index (HNSW) and in lesson transcripts, so the tutor can answer from what a teacher actually said.',
                    'Three-layer guardrails: a cheap Flash-Lite pre-classifier, a constrained main call, and an output check — including detection of requests to do graded work.',
                    'Safeguarding: if a child signals self-harm, the tutor keeps talking supportively while a durable escalation reaches a human, with regional crisis resources.',
                    'Cost control that makes “unlimited AI” safe on a K99/month plan: rolling, tutoring-aware history compaction, prompt caching, daily caps, a per-period cost ceiling, and Gemini → Nova provider failover.',
                ],
            },
            {
                title: 'Live Classes, Calls & Radio',
                items: [
                    'Group classes and 1:1 sessions on self-hosted LiveKit, metered separately per plan because their costs differ.',
                    'Session recording through LiveKit Egress, with replays for students who missed the class.',
                    'Native phone-style calls: CallKit on iOS via VoIP push, FCM on Android, and the tutor’s desktop app rings over WebSockets.',
                    'Live radio: audio-only broadcasts that automatically become podcast episodes — recorded, loudness-normalised, streamed, and published, with the tutor notified.',
                    'Session requests, tutor availability, and scheduled reminders.',
                ],
            },
            {
                title: 'Rust Media Pipeline',
                items: [
                    'A standalone Rust worker driven by a pg-boss queue and Postgres NOTIFY, running FFmpeg and writing results back to object storage.',
                    'Adaptive HLS from 1080p down to an always-present 360p rung for mobile data — never upscaled, portrait stays portrait.',
                    'Listen-only audio for learners on data bundles and compressed offline downloads for paid plans.',
                    'whisper.cpp transcription produces captions, word-level timings, and searchable transcripts.',
                    'Signed HLS playback out of a private bucket, with the signature in the path so native players that can’t send headers still work.',
                    'Speaker tracking for vertical Shorts: a ~1 MB UltraFace ONNX model compiled into the binary finds the tutor’s face and builds a smooth “patient camera operator” crop path from landscape lessons.',
                    'Audio processing for podcasts: loudness levelling, silence detection, and waveforms.',
                ],
            },
            {
                title: 'Tutor Desktop Studio',
                items: [
                    'Tauri 2 app for tutors: teach live, author courses and quizzes, manage students, track earnings, and moderate communities.',
                    'Non-destructive video editor: the timeline is a JSON document previewed live and rendered server-side; text layers are rasterised by the app so the render matches the preview exactly.',
                    'Edit a video by editing its transcript — deleting words cuts the matching source ranges, as a single undo step.',
                    'An AI editing assistant proposes cuts that are applied against the current edit, even if it changed since the proposal.',
                    'Shorts builder: pick moments from a lesson and get 9:16 clips with 2–3 word captions sized for phones.',
                    'Podcast audio editor: trim, cut pauses and “um”s, add intro/outro and a music bed, fade, and level loudness — the original is always restorable, and chapters and listeners’ positions move with the edit.',
                    'Brand kits (logo, colours, font, intro/outro), including automatic removal of a logo’s solid background with an edge flood fill.',
                    'Crash-safe recording saved to IndexedDB every second, access tokens in the OS keychain, and signed auto-updates.',
                    'Student insights: study time, course progress, and quiz performance per learner.',
                ],
            },
            {
                title: 'Privacy & Safety',
                items: [
                    'End-to-end encrypted chat with NaCl keys: the server stores only public keys and opaque message envelopes.',
                    'PIN-protected key recovery using scrypt, with server-enforced brute-force lockout.',
                    'Rich messages — equations, code, questions, assignments — that keep everything the user wrote inside the encrypted body.',
                    'Guardian consent for minors, and a “guide, don’t gate” age policy so over-age learners (common in Zambia) are never turned away.',
                    'Blocking, reporting, and moderation queues across chat, communities, and comments.',
                ],
            },
            {
                title: 'Learning & Content',
                items: [
                    'Courses with video, interactive, and text lessons, bookmarks, notes, and comments.',
                    'Quizzes with feedback, AI-generated practice quizzes, study plans, progress tracking, and streaks.',
                    'Shorts, podcasts with scheduled episodes and subscriptions, and topic communities with events.',
                    'Scientific articles with a block editor, co-authors, moderation, and PubMed/PMC import via NCBI E-utilities, rate-limited to stay within NCBI policy.',
                    'Offline-first mobile app with a persisted Apollo cache and downloadable lessons, plus a 3D onboarding built with React Three Fiber.',
                ],
            },
            {
                title: 'Business & Growth',
                items: [
                    'Purchasing-power pricing (K99 locally vs $19 in USD markets), with trials, entitlements frozen at purchase, and allowances that reset on the billing anniversary.',
                    'New markets are a data change, not a deploy — currencies for South Africa, Botswana, and Malawi are already seeded.',
                    'WhatsApp support bot that links a number to an account, answers from that account, books or enrols only after a confirm tap, and hands schoolwork to the in-app tutor.',
                    'Notifications over Expo push, email, and SMS (eSMS Africa), with per-user preferences.',
                    'Object storage on S3 with automatic Cloudflare R2 failover and an optional mirror mode.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'Layered routes/resolvers → controllers → services → Prisma, so GraphQL and REST share the same business logic.',
                    'About 5,000 lines of GraphQL schema across 29 domains; typed operations on mobile with gql.tada and live updates on desktop with graphql-ws.',
                    'Native Bun WebSockets for chat, calls, live sessions, and voice tutoring, with Redis pub/sub.',
                    'Local JWT plus Auth0 with just-in-time user provisioning.',
                    'Deployed on Fly.io and an Oracle VPS, with LiveKit, Egress, and the media worker in containers.',
                ],
            },
        ],
        stack: [
            { group: 'Mobile', items: ['Expo', 'React Native', 'Apollo Client', 'gql.tada', 'LiveKit', 'CallKit', 'Skia', 'Reanimated', 'React Three Fiber', 'Zustand'] },
            { group: 'Desktop', items: ['Tauri 2', 'Rust', 'Next.js', 'shadcn/ui', 'hls.js', 'KaTeX', 'graphql-ws'] },
            { group: 'Backend', items: ['Bun', 'Hono', 'GraphQL', 'WebSockets', 'Prisma', 'pg-boss'] },
            { group: 'Media', items: ['Rust', 'FFmpeg', 'HLS', 'whisper.cpp', 'ONNX'] },
            { group: 'AI', items: ['Gemini', 'Gemini Live', 'pgvector', 'RAG', 'Tool Calling'] },
            { group: 'Infra', items: ['PostgreSQL', 'Redis', 'LiveKit', 'S3', 'Cloudflare R2', 'Fly.io'] },
        ],
        tags: ['React Native', 'Expo', 'Tauri', 'Next.js', 'Bun', 'HonoJS', 'GraphQL', 'Rust', 'FFmpeg', 'LiveKit', 'Gemini', 'pgvector', 'PostgreSQL', 'Redis'],
        link: 'https://tutorly-af.academy',
        linkText: 'tutorly-af.academy',
    },
    {
        slug: 'shaftfitters',
        num: '02',
        cat: 'Sports Tech',
        title: 'ShaftFitters',
        status: 'Live',
        desc: 'Golf shaft recommendation platform with iOS & Android apps and an admin console. Background recommendation-engine jobs, in-app subscriptions across App Store and Google Play, an affiliate product catalog, and production monitoring. App Store available in the USA only.',
        overview: [
            'ShaftFitters recommends golf shafts from a golfer’s own swing data. Players log swing sessions in the mobile app, and a recommendation engine matches them against a catalog of hundreds of shafts.',
            'The product spans an Expo mobile app, a web app, an admin console, and a Hono REST API. The iOS app is live on the App Store in the USA, with Google Play coming soon.',
        ],
        sections: [
            {
                title: 'Product',
                items: [
                    'Swing session capture and analytics, including mishit tracking.',
                    'Shaft recommendations computed by background jobs on a dedicated queue.',
                    'Affiliate product catalog with supplier purchase-order emails.',
                    'Metric and imperial measurement units, usernames, and profile rewards.',
                ],
            },
            {
                title: 'Billing',
                items: [
                    'In-app subscriptions on the App Store and Google Play through RevenueCat, with webhook-driven entitlements.',
                    'Tiered plans plus a pay-as-you-go option.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'Hono API with a feature-module pattern (routes, service, repository, schema) and Zod validation.',
                    'BullMQ queues for the recommendation engine, maintenance, and catalog sync.',
                    'Deployed to AWS Lambda via Serverless Framework and to Fly.io, on PostgreSQL (Neon) with Prisma.',
                    'JWT auth with OTP, role-based admin access, Resend email, and Expo push notifications.',
                    'Sentry for errors and PostHog for product analytics.',
                ],
            },
        ],
        stack: [
            { group: 'Mobile', items: ['Expo', 'React Native', 'RevenueCat'] },
            { group: 'Backend', items: ['Hono', 'Node.js', 'Zod', 'BullMQ'] },
            { group: 'Data', items: ['PostgreSQL', 'Prisma', 'Redis'] },
            { group: 'Ops', items: ['AWS Lambda', 'Fly.io', 'Sentry', 'PostHog'] },
        ],
        tags: ['React Native', 'Expo', 'HonoJS', 'AWS Lambda', 'Fly.io', 'PrismaORM', 'PostgreSQL', 'Redis', 'BullMQ', 'RevenueCat', 'Sentry', 'PostHog'],
        link: 'https://app.shaftfitters.com',
        linkText: 'app.shaftfitters.com',
        extraLinks: [
            { link: 'https://apps.apple.com/app/id6762939666', linkText: 'App Store (USA)' },
            { link: '#', linkText: 'Google Play — coming soon' },
        ],
    },
    {
        slug: 'paycore',
        num: '03',
        cat: 'Fintech',
        title: 'Paycore',
        status: 'In Development',
        desc: 'Payment and subscription platform for Zambia, built to stay correct under failure: a Go service with mobile money collections through Lipila, idempotency keys, a transactional outbox, reconciliation, and auditable state machines — plus a native SwiftUI iOS app. (Currently in development)',
        overview: [
            'Paycore is a payment and subscription platform that starts small — recurring subscriptions and one-off collections in Zambian kwacha through Lipila — and is structured to grow into billing, a ledger, payouts, and multi-provider routing without rewriting the core.',
            'The guiding rule is that money must stay correct when things go wrong: webhooks that arrive twice or before the API response, a provider that is down, a worker that crashes mid-renewal, or two workers renewing the same subscription. The design covers each of these failure scenarios explicitly, alongside 12 written financial safety rules.',
            'The backend is about 11,000 lines of Go, organised as a modular monolith with clear bounded contexts, and built with Bazel alongside protobuf contracts and a native SwiftUI client.',
        ],
        sections: [
            {
                title: 'Correctness by Design',
                items: [
                    'Money is never a float: every amount is an integer count of minor units that always travels with its ISO 4217 currency.',
                    'Explicit state machines for subscriptions (incomplete, trialing, active, past due, canceled, expired) and payments — a failed payment can never be silently rewritten as succeeded.',
                    'Append-only payment attempts, so every retry stays auditable and every refund explicable.',
                    'Every subscription state change is recorded as an event, giving a full audit trail of the lifecycle.',
                ],
            },
            {
                title: 'Reliability Under Failure',
                items: [
                    'Idempotency keys on payment and subscription creation, enforced by a database constraint rather than read-then-write, so concurrent retries can never create a second payment.',
                    'Transactional outbox: events are written in the same transaction as the state change and drained to RabbitMQ by a worker with exponential backoff, so a crash never loses an event.',
                    'Reconciliation job that asks the provider what really happened to every in-flight payment, because webhooks get lost, arrive out of order, or land during downtime.',
                    'Redis distributed locks per aggregate — a worker whose lease expired can never release a lock another worker now holds — so duplicate workers or schedulers are harmless.',
                    'Durable background jobs on Redis (asynq) for renewals, payment retries, grace-period expiry, and cleanup — surviving deploys, crashes, and restarts.',
                    'Grace periods for failed renewals before a subscription stops being entitled.',
                ],
            },
            {
                title: 'Payments & Webhooks',
                items: [
                    'Provider-agnostic PaymentProvider port: everything Lipila-specific lives in one adapter, so adding a provider never touches the business domain.',
                    'Lipila webhooks verified with HMAC-SHA256 over the raw body, compared in constant time, and failing closed when a signature or secret is missing.',
                    'A fixed webhook pipeline — verify, parse, deduplicate, apply in one transaction, publish — that answers 200 to duplicates so the provider stops redelivering.',
                    'A local Lipila stub service for developing the full flow end to end without live credentials.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'Modular monolith with bounded contexts — customers, billing, subscriptions, payments, webhooks — each split into domain, ports, services, and adapters; contexts never import each other’s domains.',
                    'Three deployable processes: the API, a worker, and a migrator, with embedded SQL migrations.',
                    'Versioned REST API under /v1 with an OpenAPI contract, and language-neutral protobuf contracts for events and domains (Buf).',
                    'API keys stored only as SHA-256 digests, JWT bearer auth, and scoped permissions recorded on audit trails.',
                    'OpenTelemetry traces and a defined metrics catalog, plus health and readiness probes that check PostgreSQL, Redis, and RabbitMQ.',
                    'Polyglot monorepo built with Bazel (bzlmod), a Go workspace, and bun workspaces.',
                ],
            },
            {
                title: 'iOS App',
                items: [
                    'Native SwiftUI app with onboarding, sign-in, a home screen showing the current billing period and renewal amount, packages, payments, and profile.',
                    'A custom design system — palette, metrics, motion, and components — shared across every screen.',
                    'Built against the platform’s domain model: minor-unit amounts, ZMW, and the subscription statuses and entitlement rule.',
                    'Never calls the payments API directly, since an API key is full-access; it goes through the merchant’s own backend.',
                ],
            },
        ],
        stack: [
            { group: 'Backend', items: ['Go', 'chi', 'pgx', 'asynq', 'JWT'] },
            { group: 'Data & Messaging', items: ['PostgreSQL', 'Redis', 'RabbitMQ'] },
            { group: 'Contracts', items: ['OpenAPI', 'Protobuf', 'Buf'] },
            { group: 'Ops', items: ['Bazel', 'Docker', 'OpenTelemetry'] },
            { group: 'Clients', items: ['SwiftUI', 'Next.js'] },
            { group: 'Payments', items: ['Lipila', 'Mobile Money', 'Webhooks'] },
        ],
        tags: ['Golang', 'PostgreSQL', 'Redis', 'RabbitMQ', 'OpenTelemetry', 'Bazel', 'Protobuf', 'OpenAPI', 'SwiftUI', 'Payments'],
        link: '#',
        linkText: 'Under Development',
    },
    {
        slug: 'homiee',
        num: '04',
        cat: 'Real Estate',
        title: 'Homiee Real Estate',
        status: 'Live',
        desc: 'Platform handling 100+ active listings with AI-powered Q&A agents, video interaction panels, and streamlined UX for the Australian market.',
        overview: [
            'Homiee is a real estate platform for the Australian market. I worked on it as a full stack developer, building core systems across the web app, AI chat, and a computer-vision video pipeline.',
        ],
        sections: [
            {
                title: 'What I Built',
                items: [
                    'Production UIs in Next.js and React: dashboards, video interaction panels, and AI chat interfaces.',
                    'A real-time AI chat system for Q&A between users and intelligent agents.',
                    'A Python computer-vision pipeline that detects buildings of interest in 4K property videos and extracts frame-level coordinates.',
                    'Frame-synchronised, clickable overlays rendered on HTML5 Canvas.',
                    'Detection data compressed from 200MB+ to 2–4MB with whitespace stripping and Gzip.',
                    'Chunked 4K video uploads and .ts streaming for unstable networks.',
                ],
            },
        ],
        stack: [
            { group: 'Frontend', items: ['Next.js', 'React', 'HTML5 Canvas'] },
            { group: 'Backend', items: ['Node.js', 'Express.js', 'Python'] },
            { group: 'Data & AI', items: ['MongoDB', 'Mongoose', 'OpenAI', 'AWS'] },
        ],
        tags: ['Next.js', 'OpenAI', 'Real Estate', 'Express.js', 'Mongoose', 'MongoDB'],
        link: 'https://homiee.com.au',
        linkText: 'homiee.com.au',
    },
    {
        slug: 'pricepul',
        num: '05',
        cat: 'AI Platform',
        title: 'PricePul',
        status: 'Live',
        desc: 'B2B pricing intelligence SaaS. Monitors competitor pricing pages 24/7 with AI-powered change detection and Slack/CRM alerts for sales teams.',
        overview: [
            'PricePul is a B2B pricing intelligence SaaS. It watches competitor pricing pages around the clock, uses AI to detect meaningful changes, and alerts sales teams in Slack and their CRM.',
        ],
        sections: [
            {
                title: 'Features',
                items: [
                    '24/7 monitoring of competitor pricing pages.',
                    'AI-powered change detection that filters noise from real pricing changes.',
                    'Slack and CRM alerts for sales teams.',
                ],
            },
        ],
        stack: [
            { group: 'Frontend', items: ['Next.js', 'TailwindCSS'] },
            { group: 'Backend', items: ['Hono', 'Prisma', 'PostgreSQL', 'Redis'] },
        ],
        tags: ['Next.js', 'AI', 'HonoJS', 'PrismaORM', 'PostgreSQL', 'TailwindCSS', 'Redis', 'SaaS', 'B2B'],
        link: 'https://pricepul.com',
        linkText: 'pricepul.com',
    },
    {
        slug: 'audienceace',
        num: '06',
        cat: 'AI Platform',
        title: 'AudienceAce',
        status: 'Live',
        desc: 'AI-powered B2B lead generation platform utilizing an NLP engine to identify, qualify, and engage the right audiences at scale.',
        overview: [
            'AudienceAce is an AI-powered B2B lead generation platform. An NLP engine scans social media for high-intent buyer signals, then scores and routes leads for outreach.',
        ],
        sections: [
            {
                title: 'Features',
                items: [
                    'Real-time monitoring of social channels for buying intent.',
                    'Smart lead scoring and qualification.',
                    'Automated outreach workflows.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'NestJS API with a Python NLP service.',
                    'RabbitMQ for work distribution and Redis for caching.',
                ],
            },
        ],
        stack: [
            { group: 'Frontend', items: ['Next.js'] },
            { group: 'Backend', items: ['NestJS', 'TypeORM', 'Python'] },
            { group: 'Infra', items: ['PostgreSQL', 'RabbitMQ', 'Redis'] },
        ],
        tags: ['NLP', 'AI', 'B2B', 'Lead Gen', 'NestJS', 'TypeORM', 'PostgreSQL', 'Python', 'RabbitMQ', 'Redis'],
        link: 'https://audienceace.com',
        linkText: 'audienceace.com',
    },
    {
        slug: 'eurepraxis',
        num: '07',
        cat: 'Research AI',
        title: 'Eurepraxis',
        status: 'In Development',
        desc: 'Research operating system that connects evidence, contradictions, and knowledge gaps across scientific literature into testable research directions — every claim traceable to a source passage via an evidence graph. (Currently in development)',
        overview: [
            'Eurepraxis is infrastructure that shortens the time between scientific knowledge and new discovery. It automatically connects evidence, contradictions, knowledge gaps, unresolved problems, and hypotheses into experimentally testable research directions.',
            'It is deliberately not a RAG chatbot over papers: every claim is traceable to a passage in a source document, and every proposed research gap can be explained by walking an evidence chain.',
        ],
        sections: [
            {
                title: 'Core Ideas',
                items: [
                    'An evidence model with provenance and epistemic status on every claim.',
                    'A research knowledge graph linking papers, claims, contradictions, and gaps.',
                    'An autonomous scientific workflow that can answer “why was this research problem proposed?”.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'Rust CLI, ingestion, and crawler services; Python document, research, and report workers.',
                    'FastAPI API and a FastMCP server for agent access.',
                    'Paper resolution that queries Crossref and PubMed in parallel and merges results.',
                ],
            },
        ],
        stack: [
            { group: 'Systems', items: ['Rust', 'Cargo workspace'] },
            { group: 'Services', items: ['Python', 'FastAPI', 'FastMCP', 'uv'] },
            { group: 'Data', items: ['MongoDB', 'Redis', 'Knowledge Graph'] },
        ],
        tags: ['Rust', 'Python', 'FastAPI', 'MCP', 'LLMs', 'Knowledge Graph', 'MongoDB', 'Redis'],
        link: '#',
        linkText: 'In Development',
    },
    {
        slug: 'peptide-maxxing',
        num: '08',
        cat: 'E-Commerce',
        title: 'Peptide Maxxing',
        status: 'Live',
        desc: 'U.S. e-commerce store for research-grade peptides with batch verification and third-party testing. In 2026 I contributed to the admin dashboard — building its analytics and other dashboard features.',
        overview: [
            'Peptide Maxxing sells high-purity research peptides with batch verification, third-party testing, documented research quality, and fast U.S. shipping.',
            'In 2026 I worked on the store’s admin dashboard, building its analytics views and contributing to other dashboard features used to run the business day to day.',
        ],
        sections: [
            {
                title: 'My Contribution',
                items: [
                    'Dashboard analytics that give the team visibility into store performance.',
                    'Other improvements and features across the admin dashboard.',
                ],
            },
        ],
        stack: [
            { group: 'Frontend', items: ['Next.js', 'React'] },
        ],
        tags: ['Next.js', 'React', 'E-Commerce', 'Analytics', 'Dashboard'],
        link: 'https://peptidemaxxing.com',
        linkText: 'peptidemaxxing.com',
    },
    {
        slug: 'metibuy',
        num: '09',
        cat: 'E-Commerce',
        title: 'MetiBuy',
        status: 'Live',
        desc: 'Premium multi-vendor marketplace with scalable serverless architecture, handling complex vendor management and payment flows.',
        overview: [
            'MetiBuy is a multi-vendor e-commerce marketplace built on a serverless architecture, with real-time chat between buyers and vendors and secure payment processing.',
        ],
        sections: [
            {
                title: 'Features',
                items: [
                    'Multi-vendor storefronts and vendor management.',
                    'Real-time buyer–vendor chat.',
                    'Secure payment flows.',
                ],
            },
            {
                title: 'Architecture',
                items: [
                    'Hono API with GraphQL running on AWS Lambda.',
                    'PostgreSQL with Prisma, and Redis for caching.',
                ],
            },
        ],
        stack: [
            { group: 'Frontend', items: ['Next.js', 'TailwindCSS'] },
            { group: 'Backend', items: ['Hono', 'GraphQL', 'AWS Lambda'] },
            { group: 'Data', items: ['PostgreSQL', 'Prisma', 'Redis'] },
        ],
        tags: ['Serverless', 'E-Commerce', 'AWS', 'HonoJS', 'PrismaORM', 'PostgreSQL', 'TailwindCSS', 'Redis', 'Next.js'],
        link: 'https://metibuy.vercel.app',
        linkText: 'metibuy.vercel.app',
    },
    {
        slug: 'gmb-reviews-dashboard',
        num: '10',
        cat: 'Microservices',
        title: 'GMB Reviews Dashboard',
        status: 'Live',
        desc: 'Dashboard aggregating Google My Business data using Go microservices for real-time business intelligence and review insights.',
        overview: [
            'A dashboard that aggregates Google Business reviews for real-time reputation insights, built on Go microservices during my time at Elobbs Technologies.',
        ],
        sections: [
            {
                title: 'Features',
                items: [
                    'Aggregation of Google Business review data.',
                    'Real-time sync between external APIs and internal dashboards.',
                ],
            },
        ],
        stack: [{ group: 'Backend', items: ['Golang', 'Gin', 'Docker'] }],
        tags: ['Golang', 'Microservices', 'Dashboard'],
        link: 'https://gmbrevs.com',
        linkText: 'gmbrevs.com',
    },
    {
        slug: 'heartlink',
        num: '11',
        cat: 'Payments & Consulting',
        title: 'HeartLink (APP)',
        status: 'Live',
        desc: 'Dating app on Google Play. I built its payments integration and consulted on the matching algorithm and the overall product workflow.',
        overview: [
            'HeartLink is a dating app available on Google Play. Its backend is built with Django REST Framework, with real-time matching over WebSockets, GPS-based discovery, and in-app chat.',
            'My role was focused: I built the payments part of the app, and worked as a consultant on the matching algorithm and the overall workflow of the product.',
        ],
        sections: [
            {
                title: 'Payments',
                items: [
                    'Built the app’s payments integration.',
                ],
            },
            {
                title: 'Consulting',
                items: [
                    'Advised on the design of the matching algorithm.',
                    'Advised on the overall user and product workflow.',
                ],
            },
        ],
        stack: [
            { group: 'Backend', items: ['Python', 'Django REST Framework'] },
            { group: 'My Focus', items: ['Payments', 'Matching Algorithm', 'Product Workflow'] },
        ],
        tags: ['Payments', 'Python', 'Django', 'Matching Algorithm', 'Consulting'],
        link: 'https://play.google.com/store/apps/details?id=com.datadate.datingapp',
        linkText: 'Google Play Store',
    },
    {
        slug: 'meetingflow',
        num: '12',
        cat: 'Productivity',
        title: 'MeetingFlow',
        status: 'Live',
        desc: 'AI productivity platform interface for meeting optimization, helping teams extract more value from every session. (Landing Page only)',
        overview: [
            'MeetingFlow is the frontend for an AI productivity platform that improves meeting culture through agenda enforcement, decision tracking, and analytics. This project covers the landing page.',
        ],
        sections: [
            {
                title: 'Scope',
                items: [
                    'Clean, responsive landing page.',
                    'Product messaging for agenda enforcement, decision tracking, and analytics.',
                ],
            },
        ],
        stack: [{ group: 'Frontend', items: ['TypeScript', 'UI/UX'] }],
        tags: ['AI', 'Productivity', 'SaaS'],
        link: 'https://meetingflow.vercel.app',
        linkText: 'meetingflow.vercel.app',
    },
];

export function getProject(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
}
