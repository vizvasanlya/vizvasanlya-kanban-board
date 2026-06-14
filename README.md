# Delivery Kanban Board

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

Manage delivery work with priorities, status flow, blockers, sprint health, and action tracking.

## Features

- **Task Management** — Create, assign, and track delivery tasks
- **Status Flow** — Todo, in progress, review, done pipeline
- **Blocker Tracking** — Identify and resolve blockers quickly
- **Sprint Health** — Monitor sprint progress and velocity
- **Priority System** — Critical, high, medium, low priority levels
- **Search & Filter** — Find tasks by status, priority, or assignee
- **Analytics View** — Sprint distribution and blocker insights
- **Import / Export** — JSON-based task data portability

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox) |
| Logic | Vanilla JavaScript (ES2022) |
| Storage | LocalStorage |
| Server | Python HTTP server (dev) |

## Getting Started

### Prerequisites

- Python 3.x (for dev server)
- Modern web browser

### Installation

```bash
git clone https://github.com/vizvasanlya/First.git
cd First/vizvasanlya-kanban-board
```

### Run

```bash
npm start
```

Open [http://localhost:5173](http://localhost:5173)

### Docker

```bash
docker compose up --build
```

## License

MIT
