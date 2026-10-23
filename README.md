# AAST React Docker Lab

A small React application that displays **Hello World!!!**, created with AI assistance for the AAST Docker lab.

## Build and run with Docker

Install and start Docker Desktop (Linux containers), or use Docker Engine on Linux. Open a terminal in this project folder, then run:

```sh
docker build -t aast-react-hello .
docker run --rm -d -p 8080:80 --name aast-hello aast-react-hello
```

Visit **http://localhost:8080**. You should see **Hello World!!!**.

```sh
docker ps
docker logs aast-hello
docker stop aast-hello
```

The container is automatically removed when stopped because it uses `--rm`. The image remains available for your next run. If port 8080 is busy, use `-p 8081:80` and visit http://localhost:8081.

## Understand the Dockerfile

1. `FROM node:22-alpine AS build` provides Node.js for the build stage.
2. `WORKDIR /app` sets the working directory inside the image.
3. Copying the package files first allows Docker to reuse the dependency layer when only source code changes.
4. `npm ci` installs the versions recorded in `package-lock.json`.
5. `npm run build` produces static files in `dist`.
6. The second stage copies only those files into Nginx, keeping Node and build dependencies out of the final image.
7. `EXPOSE 80` documents the container port; `-p 8080:80` publishes it on your computer.
8. `daemon off;` keeps Nginx running in the foreground so the container stays alive.

The first build needs internet access to download the base images and npm dependencies. Base image tags can receive updates; npm dependency versions are locked by the committed lockfile.

## Run without Docker (optional)

Use Node.js 22.12 or newer:

```sh
npm ci
npm run dev
```

Visit http://localhost:5173. For a production build, run `npm run build`.

## Contributions

Make meaningful changes, commit them using an email linked to your GitHub account, and push to the default branch. GitHub may take up to 24 hours to update your contribution graph. This project does not generate artificial activity or alter commit dates.
