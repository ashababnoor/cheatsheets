# Docker Commands Cheatsheet

This cheatsheet provides a list of useful Docker commands.

## Docker Images

| Command | Description |
|---------|-------------|
| `docker images` | Lists all Docker images. |
| `docker pull <image>` | Pulls an image from a Docker registry. |
| `docker rmi <image>` | Removes a Docker image. |

## Docker Containers

| Command | Description |
|---------|-------------|
| `docker ps` | Lists running Docker containers. |
| `docker ps -a` | Lists all Docker containers. |
| `docker run -it <image>` | Runs a Docker container interactively. |
| `docker run -d -p <host-port>:<container-port> <image>` | Runs a Docker container in detached mode with port forwarding. |
| `docker stop <container>` | Stops a running Docker container. |
| `docker rm <container>` | Removes a Docker container. |

## Docker Compose

| Command | Description |
|---------|-------------|
| `docker-compose up` | Starts all services defined in `docker-compose.yml`. |
| `docker-compose down` | Stops all services defined in `docker-compose.yml`. |
| `docker-compose ps` | Lists all running services defined in `docker-compose.yml`. |

## Docker System

| Command | Description |
|---------|-------------|
| `docker system df` | Shows Docker disk usage. |
| `docker system prune` | Removes unused data. |
