from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_RIGHT
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.fonts import addMapping
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table,
                                TableStyle, HRFlowable, KeepTogether, ListFlowable, ListItem)
import sys

OUT = sys.argv[1]
F = "/System/Library/Fonts/Supplemental/"
pdfmetrics.registerFont(TTFont("Arial", F + "Arial.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Bold", F + "Arial Bold.ttf"))
pdfmetrics.registerFont(TTFont("Arial-Italic", F + "Arial Italic.ttf"))
pdfmetrics.registerFont(TTFont("Arial-BoldItalic", F + "Arial Bold Italic.ttf"))
addMapping("Arial", 0, 0, "Arial")
addMapping("Arial", 1, 0, "Arial-Bold")
addMapping("Arial", 0, 1, "Arial-Italic")
addMapping("Arial", 1, 1, "Arial-BoldItalic")

INK = HexColor("#1a1a1a")
MUTED = HexColor("#555555")
LINK = HexColor("#1155cc")
RULE = HexColor("#cccccc")

name = ParagraphStyle("name", fontName="Arial-Bold", fontSize=24, leading=28, textColor=INK)
title = ParagraphStyle("title", fontName="Arial-Bold", fontSize=11.5, leading=15, textColor=INK, spaceBefore=2)
contact = ParagraphStyle("contact", fontName="Arial", fontSize=9.5, leading=13.5, textColor=MUTED)
h2 = ParagraphStyle("h2", fontName="Arial-Bold", fontSize=14, leading=17, textColor=INK, spaceBefore=9, spaceAfter=2)
body = ParagraphStyle("body", fontName="Arial", fontSize=9.6, leading=12.9, textColor=INK)
skill = ParagraphStyle("skill", parent=body, spaceAfter=2.5)
org = ParagraphStyle("org", fontName="Arial-Bold", fontSize=10.5, leading=14, textColor=INK)
date = ParagraphStyle("date", parent=org, alignment=TA_RIGHT)
role = ParagraphStyle("role", fontName="Arial-Italic", fontSize=10, leading=13.5, textColor=INK, spaceAfter=2)
bullet = ParagraphStyle("bullet", parent=body)
tech = ParagraphStyle("tech", parent=body, textColor=MUTED, spaceBefore=1)
pdesc = ParagraphStyle("pdesc", parent=body, spaceAfter=1)


def link(url, text=None):
    return f'<link href="{url}" color="#1155cc"><u>{text or url.split("://")[-1]}</u></link>'


def section(label):
    return [Paragraph(label, h2), HRFlowable(width="100%", thickness=0.6, color=RULE, spaceAfter=5)]


def bullets(items):
    return ListFlowable(
        [ListItem(Paragraph(t, bullet), leftIndent=12, value="•") for t in items],
        bulletType="bullet", start="•", leftIndent=12, bulletFontSize=8, bulletOffsetY=-1,
        spaceBefore=0, spaceAfter=0,
    )


def job(company, where, period, role_txt, items, stack):
    head = Table([[Paragraph(f"{company} <font name='Arial' color='#555555'>| {where}</font>", org),
                   Paragraph(period, date)]], colWidths=["72%", "28%"])
    head.setStyle(TableStyle([("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 0),
                              ("TOPPADDING", (0, 0), (-1, -1), 0), ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
                              ("VALIGN", (0, 0), (-1, -1), "BOTTOM")]))
    return KeepTogether([head, Paragraph(role_txt, role), bullets(items),
                         Paragraph(f"<i>Tech:</i> {stack}", tech), Spacer(1, 4)])


def project(name_txt, status, desc, stack):
    return KeepTogether([Paragraph(f"<b>{name_txt}</b> <font color='#555555'>({status})</font>", body),
                         Paragraph(desc, pdesc),
                         Paragraph(f"<i>Tech:</i> {stack}", tech), Spacer(1, 4)])


story = [
    Paragraph("Martin Tembo", name),
    Paragraph("Lead Software Engineer | Full Stack &amp; Systems Engineer", title),
    Spacer(1, 4),
    Paragraph("Zambia (Remote) &nbsp;·&nbsp; " + link("mailto:martin.codegene@gmail.com", "martin.codegene@gmail.com")
              + " &nbsp;·&nbsp; +260 779 699 188", contact),
    Paragraph(link("https://www.linkedin.com/in/martin-tembo-3844b3186", "linkedin.com/in/martin-tembo-3844b3186") + " &nbsp;·&nbsp; " + link("https://github.com/martin-codegene")
              + " &nbsp;·&nbsp; " + link("https://x.com/martintembo_1", "x.com/martintembo_1"), contact),
]

story += section("Professional Summary")
story.append(Paragraph(
    "Full stack and systems engineer with 4+ years of professional experience (coding since 2017), currently "
    "Lead Software Engineer for a U.S. company. I ship complete products end to end — iOS and Android apps, "
    "desktop apps, web platforms, and the backends behind them — in TypeScript, Go, Python, and Rust. Recent work "
    "spans AI tutoring with RAG, tool calling, and real-time voice; payment and subscription systems designed for "
    "correctness under failure; and media pipelines for adaptive video streaming. Experienced working remotely with "
    "teams in the USA, Australia, and Bangladesh.", body))

story += section("Technical Skills")
for k, v in [
    ("Languages", "TypeScript, JavaScript, Python, Go, Rust, Swift, SQL, GraphQL"),
    ("Frontend &amp; Mobile", "React, Next.js, React Native, Expo, Tauri, SwiftUI, TailwindCSS, Apollo Client"),
    ("Backend", "Node.js, Bun, Hono, NestJS, Express.js, FastAPI, Gin, GraphQL, WebSockets"),
    ("AI Engineering", "LLM integration (Gemini, OpenAI), RAG with pgvector, tool calling, real-time voice (Gemini Live), "
                       "AI agents, MCP, guardrails and cost controls"),
    ("Data &amp; Messaging", "PostgreSQL, MongoDB, Redis, MySQL, Prisma, TypeORM, BullMQ, RabbitMQ, pg-boss"),
    ("Cloud &amp; DevOps", "AWS (Lambda, S3), Fly.io, Cloudflare R2, Docker, Bazel, GitHub Actions, CI/CD, "
                          "OpenTelemetry, Sentry, PostHog, Linux"),
    ("Media &amp; Real-Time", "LiveKit, FFmpeg, HLS streaming, whisper.cpp, VoIP push / CallKit"),
    ("System Design", "Domain-Driven Design, modular monoliths, microservices, event-driven architecture, "
                      "transactional outbox, idempotency, reconciliation"),
]:
    story.append(Paragraph(f"<b>{k}:</b> {v}", skill))

story += section("Work Experience")
story.append(job(
    "ATB Applications LLC (formerly ShaftFitters LLC)", "USA (Remote)", "Apr 2026 – Present",
    "Lead Software Engineer",
    [
        "Lead engineer on ShaftFitters, a golf shaft recommendation platform built from golfers’ own swing data — "
        "owning backend, mobile, and web end to end. Live on the U.S. App Store.",
        "Built the iOS and Android apps in Expo and React Native, with swing-data visualisations in Skia and Reanimated.",
        "Architected the Hono REST API on AWS Lambda and Fly.io with PostgreSQL, Prisma, and Redis, plus BullMQ queues "
        "powering the recommendation engine, maintenance, and catalog sync.",
        "Implemented App Store and Google Play subscriptions via RevenueCat with webhook-driven entitlements, plus "
        "Stripe payments and pay-as-you-go plans.",
        "Built the Next.js web app and admin console, an affiliate product catalog with supplier purchase orders, and "
        "JWT/OTP auth with role-based access; ran production with Sentry, PostHog, and go-live database audits.",
    ],
    "React Native, Expo, Next.js, TypeScript, Hono, PostgreSQL, Prisma, Redis, BullMQ, AWS Lambda, Fly.io, "
    "RevenueCat, Stripe, Sentry, PostHog"))
story.append(job(
    "Homiee", "Australia (Remote)", "Feb 2025 – 2026", "Full Stack Developer",
    [
        "Architected core systems for an Australian real estate platform, including property search with sub-100ms "
        "latency and agent-facing dashboards for property management and analytics.",
        "Engineered a real-time AI chat system enabling Q&amp;A between users and OpenAI-based agents.",
        "Developed a Python computer-vision pipeline that detects buildings in 4K property videos, rendered as "
        "frame-synchronised, clickable HTML5 Canvas overlays.",
        "Cut detection payloads from 200MB+ to 2–4MB with whitespace stripping and Gzip, and built chunked 4K uploads "
        "with .ts streaming for unstable networks.",
    ],
    "Next.js, React, Node.js, Express.js, Python, MongoDB, AWS, OpenAI, HTML5 Canvas"))
story.append(job(
    "Elobbs Technologies", "Remote (Bangladesh)", "Jun 2023 – Jan 2025",
    "Backend &amp; Systems Lead / Full Stack Developer",
    [
        "Engineered NestJS backend systems supporting 100,000+ active job listings, with REST APIs for listings, "
        "contracts, and user workflows.",
        "Reduced database query times by 40% through advanced PostgreSQL indexing strategies.",
        "Designed secure authentication flows and role-based access control (RBAC).",
        "Built a Google Business Reviews aggregation system on Go (Gin) microservices, with real-time sync between "
        "external APIs and internal dashboards.",
        "Created responsive React interfaces for complex data visualisation.",
    ],
    "NestJS, TypeScript, PostgreSQL, MongoDB, Golang, Gin, React, Docker, GCP"))
story.append(job(
    "Shypass", "Zambia", "2022", "Full Stack Developer",
    ["First professional role, building frontend and backend features across the product."],
    "ReactJS, JavaScript, Express.js, MongoDB"))

story += section("Featured Projects")
story.append(project(
    "Tutorly-AF Academy", "Live — " + link("https://tutorly-af.academy", "tutorly-af.academy"),
    "Learning platform for multi-country curricula, launching in Zambia: an Expo app for students, a Tauri desktop "
    "studio for tutors, a GraphQL backend, and a Rust media pipeline. Features live classes on self-hosted LiveKit, "
    "an AI tutor with RAG, tool calling and real-time voice, end-to-end encrypted chat, transcript-based video "
    "editing, and adaptive HLS streaming.",
    "React Native, Expo, Tauri, Next.js, Bun, Hono, GraphQL, Rust, FFmpeg, LiveKit, Gemini, pgvector, PostgreSQL, Redis"))
story.append(project(
    "Paycore", "In development",
    "Payment and subscription platform for Zambia, built to stay correct under failure: a Go modular monolith with "
    "Lipila mobile money collections, idempotency keys, a transactional outbox, reconciliation, distributed locks, "
    "and auditable state machines, plus a native SwiftUI iOS app.",
    "Go, PostgreSQL, Redis, RabbitMQ, OpenTelemetry, Bazel, Protobuf, OpenAPI, SwiftUI"))
story.append(project(
    "PricePul", "Live — " + link("https://pricepul.com", "pricepul.com"),
    "B2B pricing intelligence SaaS that monitors competitor pricing pages 24/7 with AI-powered change detection and "
    "Slack/CRM alerts for sales teams.",
    "Next.js, Hono, Prisma, PostgreSQL, Redis, TailwindCSS"))
story.append(project(
    "AudienceAce", "Live — " + link("https://audienceace.com", "audienceace.com"),
    "AI-powered lead generation using NLP to scan social platforms (Reddit, LinkedIn) for high-intent buyer signals, "
    "with lead scoring and automated outreach.",
    "AI Agents, NestJS, TypeORM, Python, RabbitMQ, Redis, PostgreSQL"))
story.append(project(
    "Eurepraxis", "In development",
    "Research operating system that connects evidence, contradictions, and knowledge gaps across scientific literature "
    "into testable research directions, with every claim traceable to a source passage.",
    "Rust, Python, FastAPI, MCP, LLMs, MongoDB, Redis"))
story.append(project(
    "Peptide Maxxing", "Live — " + link("https://peptidemaxxing.com", "peptidemaxxing.com"),
    "U.S. e-commerce store for research-grade peptides. Contributed dashboard analytics and other admin dashboard "
    "features in 2026.",
    "Next.js, React"))


def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont("Arial", 8)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(A4[0] - 50, 28, f"Martin Tembo — Page {doc.page}")
    canvas.restoreState()


doc = SimpleDocTemplate(OUT, pagesize=A4, leftMargin=50, rightMargin=50, topMargin=40, bottomMargin=44,
                        title="Martin Tembo — CV", author="Martin Tembo",
                        subject="Lead Software Engineer | Full Stack & Systems Engineer")
doc.build(story, onFirstPage=footer, onLaterPages=footer)
print("wrote", OUT)
