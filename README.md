# Simple Microservice ⚙️

A hands-on implementation of microservice architecture using Laravel — built to explore how to structure a scalable app by splitting concerns into independent services that communicate via an API Gateway.

![PHP](https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white)
![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

---

## Architecture

```
┌─────────────┐
│   Frontend  │
└──────┬──────┘
       │
┌──────▼──────┐
│ API Gateway │  ← single entry point, routes to services
└──────┬──────┘
       │
┌──────┴───────────────────────────────┐
│                                      │
▼              ▼              ▼        ▼
service-user   service-resep  service-komentar   service-permintaan-resep
```

Each service is an independent Laravel app with its own database. They don't talk to each other directly — all traffic goes through the API Gateway.

---

## Services

| Service | Responsibility |
|---|---|
| `APi-gateway` | Routes all incoming requests to the right service |
| `service-user` | User authentication & profile management |
| `service-resep` | Recipe data & management |
| `service-komentar` | Comments per recipe |
| `service-permintaan-resep` | Recipe requests from users |
| `frontend` | UI that consumes the gateway |

---

## Tech Stack

- **Each service** — Laravel (PHP)
- **Communication** — REST HTTP via API Gateway
- **Containerization** — Docker + Docker Compose
- **Frontend** — Blade, JavaScript

---

## Running locally

Prerequisites: Docker & Docker Compose

```bash
git clone https://github.com/Aerossky/Simple-Microservice.git
cd Simple-Microservice

docker-compose up --build
```

Each service will spin up in its own container. Check `docker-compose.yml` for port mappings.

---

## Key Concepts Demonstrated

- **API Gateway pattern** — single entry point for all client requests
- **Service isolation** — each service owns its own data and logic
- **Independent deployability** — services can be scaled or updated separately
- **Docker Compose** — orchestrating multiple services locally

---

## License

MIT
