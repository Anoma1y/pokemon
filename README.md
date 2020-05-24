# Development environment

There are a few different options to get started:

## 1\. Manual setup:

### Install prerequisites

- Node.js 12 or 14 (and a modern version of npm)

### Clone thi git repository

```sh
$ git clone https://github.com/Anoma1y/pokemon.git
```

### Install the dependencies

```sh
$ yarn install
```

### Run

```sh
$ yarn dev
```

## 2\. Using Docker

- First, install [Docker](https://www.docker.com/community-edition) and [Docker Compose](https://docs.docker.com/compose/install/).
- Export required environment variable `UID` (`export UID`).

  - Make sure to do this before using any of docker-compose commands.
  - Alternatively add the command to shell initialisation file like `~/.profile` or `~/.zshrc`.

- Run `docker-compose build` and `docker-compose up` in the main directory.
- Due to the nature of Docker (a container is killed when the command running in it finishes), the Yarn container will be run in watch mode.
- To run any of the below commands, make sure you are in the docker container: `docker-compose exec {service} {cmd}`.