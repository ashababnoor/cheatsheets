---
title: "Docker Commands"
description: "Docker command cheatsheet — containers, images, volumes, networks, docker-compose, and common workflows."
category: "Tools & DevOps"
icon: "🐳"
---
# Docker Commands Cheatsheet

## Images

| Command | Description |
|---------|-------------|
| `docker pull <image>` | Pull an image from a registry |
| `docker pull <image>:<tag>` | Pull a specific tagged version |
| `docker build -t <name>:<tag> .` | Build image from Dockerfile in current dir |
| `docker build -f <file> .` | Build image from a specific Dockerfile |
| `docker tag <image> <new_name>:<tag>` | Tag an image with a new name |
| `docker push <image>:<tag>` | Push an image to a registry |
| `docker images` | List all local images |
| `docker images -a` | List all images including intermediates |
| `docker rmi <image>` | Remove an image |
| `docker rmi $(docker images -q)` | Remove all images |
| `docker inspect <image>` | Show detailed image information |
| `docker history <image>` | Show image layer history |
| `docker image prune` | Remove dangling images |
| `docker image prune -a` | Remove all unused images |
| `docker save -o <file>.tar <image>` | Save image to a tar archive |
| `docker load -i <file>.tar` | Load image from a tar archive |

## Containers

| Command | Description |
|---------|-------------|
| `docker run <image>` | Create and start a container |
| `docker run -d <image>` | Run container in detached (background) mode |
| `docker run -p <host>:<container> <image>` | Map host port to container port |
| `docker run -v <host>:<container> <image>` | Bind mount a host path into the container |
| `docker run -e KEY=VALUE <image>` | Set environment variable |
| `docker run --name <name> <image>` | Assign a name to the container |
| `docker run --rm <image>` | Automatically remove container on exit |
| `docker run --network <net> <image>` | Connect container to a network |
| `docker run --restart=unless-stopped <image>` | Set restart policy |
| `docker run -it <image> /bin/sh` | Run interactive shell in container |
| `docker ps` | List running containers |
| `docker ps -a` | List all containers |
| `docker start <container>` | Start a stopped container |
| `docker stop <container>` | Stop a running container |
| `docker restart <container>` | Restart a container |
| `docker rm <container>` | Remove a stopped container |
| `docker rm -f <container>` | Force remove a running container |
| `docker container prune` | Remove all stopped containers |
| `docker logs <container>` | Show container logs |
| `docker logs -f <container>` | Follow (tail) container logs |
| `docker logs --tail 100 <container>` | Show last 100 lines of logs |
| `docker exec -it <container> /bin/sh` | Open interactive shell in running container |
| `docker exec <container> <cmd>` | Run a command in a running container |
| `docker inspect <container>` | Show detailed container information |
| `docker cp <container>:<path> <host_path>` | Copy file from container to host |
| `docker cp <host_path> <container>:<path>` | Copy file from host to container |
| `docker stats` | Show live resource usage for all containers |
| `docker stats <container>` | Show live resource usage for a container |
| `docker top <container>` | Show running processes in a container |
| `docker rename <old> <new>` | Rename a container |

## Docker Compose

| Command | Description |
|---------|-------------|
| `docker compose up` | Create and start all services |
| `docker compose up -d` | Start all services in detached mode |
| `docker compose up --build` | Build images before starting services |
| `docker compose down` | Stop and remove containers, networks |
| `docker compose down -v` | Also remove named volumes |
| `docker compose down --rmi all` | Also remove all images used by services |
| `docker compose build` | Build or rebuild services |
| `docker compose logs` | View output from all services |
| `docker compose logs -f <service>` | Follow logs for a specific service |
| `docker compose ps` | List running service containers |
| `docker compose exec <service> <cmd>` | Run a command in a running service container |
| `docker compose pull` | Pull latest images for all services |
| `docker compose config` | Validate and view the composed configuration |
| `docker compose restart` | Restart all services |
| `docker compose restart <service>` | Restart a specific service |
| `docker compose stop` | Stop services without removing them |
| `docker compose run <service> <cmd>` | Run a one-off command against a service |

## Volumes

| Command | Description |
|---------|-------------|
| `docker volume create <name>` | Create a named volume |
| `docker volume ls` | List all volumes |
| `docker volume inspect <name>` | Show detailed volume information |
| `docker volume rm <name>` | Remove a volume |
| `docker volume prune` | Remove all unused volumes |
| `docker run -v <vol>:<path> <image>` | Mount a named volume to a container |
| `docker run -v <host_path>:<path> <image>` | Bind mount a host directory |
| `docker run -v <path> <image>` | Create an anonymous volume |

## Networks

| Command | Description |
|---------|-------------|
| `docker network create <name>` | Create a network |
| `docker network create --driver bridge <name>` | Create a bridge network |
| `docker network ls` | List all networks |
| `docker network inspect <name>` | Show detailed network information |
| `docker network rm <name>` | Remove a network |
| `docker network connect <net> <container>` | Connect a container to a network |
| `docker network disconnect <net> <container>` | Disconnect a container from a network |
| `docker network prune` | Remove all unused networks |

## System

| Command | Description |
|---------|-------------|
| `docker info` | Display system-wide information |
| `docker system df` | Show Docker disk usage |
| `docker system df -v` | Show detailed disk usage |
| `docker system prune` | Remove unused containers, networks, images |
| `docker system prune -a` | Also remove unused images (not just dangling) |
| `docker system prune -a --volumes` | Remove everything unused including volumes |
| `docker system events` | Stream real-time events from the daemon |
| `docker system events --filter type=container` | Filter events by type |
| `docker version` | Show Docker version info |

## Common Run Flag Combinations

| Command | Description |
|---------|-------------|
| `docker run -it --rm <image> /bin/sh` | Disposable interactive shell |
| `docker run -d -p 8080:80 <image>` | Detached with port mapping |
| `docker run -d -p 8080:80 -v ./data:/data <image>` | Detached with port and volume |
| `docker run -d -e DB_HOST=db -e DB_PORT=5432 <image>` | Detached with env vars |
| `docker run -d --name app --network mynet <image>` | Named container on custom network |
| `docker run -d -p 5432:5432 -v pgdata:/var/lib/postgresql/data -e POSTGRES_PASSWORD=secret --name db postgres` | Full Postgres example |
| `docker run -d -p 6379:6379 --restart=unless-stopped --name cache redis` | Persistent service with auto-restart |
| `docker run --rm -v $(pwd):/app -w /app node:20 npm install` | Run a one-off command with working dir |
