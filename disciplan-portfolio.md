# DisciPlan — The Gamified Academic OS

🌐 **Live Website:** [www.disciplan.xyz](https://www.disciplan.xyz/)

---

## 📖 Project Overview

**DisciPlan** is a centralized academic operating system and gamified task-management engine designed to unite students and faculty in a single, frictionless ecosystem. Built as a unified productivity "second brain," DisciPlan replaces stressful deadline panic with structured, mindful execution. By housing daily task planning, collaborative workspaces, section repositories, and community discussions under one roof, it eliminates the heavy administrative cognitive overhead and decision fatigue traditionally caused by switching between fragmented learning applications.

### 🎯 Core Engineering Objectives
1. **Centralize the Learning Environment:** Fuse fragmented academic utilities (calendars, task trackers, course material repositories, and communication portals) into a single homepage.
2. **Optimize Cognitive Load:** Deliver adaptive, energy-aware scheduling algorithms that dynamically break down major deliverables and align workload intensity with fluctuating daily cognitive levels.
3. **Streamline Section Coordination:** Empower faculty with automated tools to manage course distribution, grading workflows, project team allocations, and asynchronous student doubts.
4. **Drive Organic Engagement:** Cultivate a self-sustaining peer-learning network using forums, academic blogs, practice hubs, and a point-based gamified progression ladder.

---

## 🛠️ Technology Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend Architecture** | React 19, TypeScript, TanStack Router / TanStack Start, TanStack Query (React Query), Tailwind CSS, Radix UI, shadcn/ui |
| **Build Tools & Runtime** | Vite, Bun (with Node/NPM fallback environments) |
| **Backend Engineering** | FastAPI, Uvicorn (Asynchronous ASGI Server) |
| **Security & Authentication** | JSON Web Tokens (JWT) via `python-jose`, Passwords hashed using `bcrypt` |
| **Database & Storage** | Aiven for MySQL (Cloud-hosted Relational DB), Cloudinary (Binary Object Storage) |
| **Infrastructure & Deployment** | Render Infrastructure-as-Code (`render.yaml` orchestration pipeline) |

---

## 🚀 Advanced Core Features & Engineering Breakthroughs

### 1. Intelligent Daily Planner & Predictive Scheduler
* **Algorithmic Task Slicing (The 5-Part Guardrail):** To prevent cognitive over-saturation and task paralysis, long-term major deadlines are automatically split into micro-tasks by a custom workload-balancing engine.
    * *Deadlines ≤ 5 days away:* Spreads the work uniformly by creating exactly one subtask block per day.
    * *Deadlines > 5 days away:* Rigidly caps the breakdown to a maximum of 5 chunks spaced out intelligently across the timeframe.
* **Smart Load-Balancing Optimization:** The scheduler maps subtasks to upcoming calendar days by evaluating the baseline total task count for each day, routing subtasks to days with the lightest weight. Ties are resolved by defaulting to the earliest available date.
* **Intelligent Overdue Carry-Over:** Missed or incomplete tasks are never blindly piled onto the next morning's stack. The backend automatically executes the load-balancing logic to scatter outstanding items across future low-density windows.
* **Live Task Weighting Engine:** A continuous background sorting algorithm that ranks items by a calculated `Total Priority Weight` to eliminate decision fatigue. This score is re-evaluated hourly based on three main metrics:
    $$\text{Total Priority Weight} = f(\text{Base Weight}, \text{Time-Urgency}, \text{Progress Volume})$$
    * *Base Weight:* Initial importance tier defined by the user (High, Medium, Low).
    * *Time-Urgency:* Multiplies exponentially as the absolute deadline clock ticks closer.
    * *Progress Volume:* Automatically scales upward if a high ratio of subtasks remains uncompleted, forcing lagging milestones to aggressively climb to the top of the user's daily view.
* **Energy-Aware Prioritization:** Features an interactive **Daily Energy Slider** (ranging from *Low* to *Peak* energy states). When adjusted, the client reorders the daily task list to reflect the user's current cognitive state:
    * *Low Energy:* Surfaces quick, low-effort maintenance tasks to secure psychological easy wins.
    * *Peak Energy:* Pulls heavy, high-effort, deeply complex assignments into view during windows of high productivity.

### 2. Unified Academic Hubs & Workspaces
* **Interactive Student Dashboard (`/dashboard`):** A centralized landing interface displaying real-time task queues, unified calendar layers, energy configurations, and active study streaks.
* **Course Section Hubs:** A distinct workspace assigned for every enrolled section, giving students instantaneous access to:
    * *Announcements:* Live direct noticeboards pushed by section professors.
    * *Resource Vault:* Shared assets, presentation slides, and syllabus documents.
    * *Gradebook:* Real-time, transparent portal to view individual grading scales, class test marks, and textual qualitative feedback.
* **Faculty-Assigned Project Team Spaces:** Distributed group environments featuring isolated team boards, progress-tracking milestone checklists, and real-time project group chats.

### 3. Community-Driven Peer Learning
* **Verified Doubt Resolution Forums:** A structured academic Q&A forum supporting upvotes, content tagging, and a "Faculty-Verified" answer system to ensure resource credibility.
* **Academic Blogging Engine:** A built-in platform allowing students to write comprehensive study guides and write-ups, expanding the internal institutional knowledge base.
* **Targeted Self-Assessment Repositories:** Topic-specific question banks mapped directly to course syllabus headers (e.g., *Loops, Pointers, File I/O* in Structured Programming) allowing targeted pre-exam preparation.

### 4. Engagement Mechanics & Gamification
* **10-Tier Experience Ladder:** A comprehensive progression index spanning from *Recruit* up to the ultimate *Titan* rank. Experience points (XP) are safely minted into the database upon 100% task completion and verified community feedback.
* **Milestone Badges:** Dynamic reward items unlocked by consistent productivity loops (e.g., the *Catalyst* badge suite earned for receiving high upvote thresholds on singular technical blog entries).
* **GitHub-Style Activity Heatmaps:** A visual matrix embedded inside user profile cards mapping aggregate productivity scores, platform interactions, and study behaviors continuously over a 365-day timeline.

---

## ⚡ Backend Architecture & Relational Database Design

### 🚀 Zero-ORM Raw Performance Strategy
Unlike traditional applications built on top of high-overhead Object-Relational Mappers (ORMs), DisciPlan's backend architecture executes **raw, parameterized SQL queries** directly through an asynchronous repository layer (`app/repositories/`). This intentional design choice eliminates serialization bottlenecks, simplifies complicated data mutations, and grants complete optimization authority over database execution paths.

```
[ Frontend: React 19 + TanStack Start ]
                  │ (Asynchronous REST API Calls)
                  ▼
   [ Backend: FastAPI + Uvicorn ]
                  │ (Raw Parameterized SQL Queries)
                  ▼
  [ Asynchronous Driver: asyncmy (SSL) ]
                  │ (High-Performance Pooling)
                  ▼
      [ Database: Aiven for MySQL ]
```

### 🗄️ Complex Relational Database Schema
* **80+ Table Core Database:** Highly normalized schema incorporating structural integrity through rigid foreign key constraints, lookup definitions for system-level enums, and explicit junction tables managing many-to-many entities (e.g., Student-to-Section allocations).
* **Custom Database-Side Materialization & Views:** Computes heavy aggregations—such as global leaderboard ranking computations and active unread message counts—via highly optimized MySQL views rather than exhausting server-side runtime memory.
* **Binary Object Storage Separation:** Heavy binaries (lecture PDFs, slide presentations, media assets) are stored off the database on Cloudinary, while secure URL strings and asset metadata are indexed natively in MySQL table columns.

---

## 📈 Technical Accomplishments & Business Impact
* **Eliminated App Switching Friction:** Successfully integrated productivity workflows, course repositories, group team collaboration environments, and direct peer chats into a single application environment.
* **Minimized Student Burnout:** Built a resilient, predictable planning rhythm that systematically divides heavy project milestones into manageable daily micro-steps.
* **Empowered Faculty Management:** Shifted manual coordination (such as team sorting, announcement blasting, and homework grading verification) into fully automated, data-driven administrative panels.
* **Guaranteed Data Scalability:** Demonstrated sub-millisecond query evaluation response times across complex relational structures by utilizing key indexing practices on frequent foreign keys and avoiding ORM mapping abstractions.

---

## 🔮 Future Roadmap
1. **Automated Institutional Course Enrollment:** Integrating direct hooks into external university database schemas to automate user-to-section provisioning.
2. **Interactive Live Section Hubs:** Incorporating low-latency WebSockets to support live peer coding, screen-sharing sessions, and real-time virtual collaborative spaces.
3. **Cross-Platform Native Mobile Implementations:** Transforming core scheduler engines and real-time notifications into a dedicated mobile footprint using React Native.
