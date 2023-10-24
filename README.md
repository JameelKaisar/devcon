# devcon
Dev Container Configuration/Automation Scripts

## SSH Access
SSH files are mounted at `/root/.ssh`. You need to use `sudo` for ssh commands like `sudo git clone` insted of `git clone`. Alternatively, you can run a command to copy files from `/root/.ssh` to `~/.ssh` after the container is build.

## simple-con
Simple Dev Container

## universal-con
Universal Dev Container

## custom-con
Dev Container with tmux pre-installed

## expressjs-con
Dev Container which sets up a simple ExpressJS app including port forwarding

## multi-server-con
Dev Container which demonstrates multiple ways to forward ports

## expressjs-reactjs-redis-con
Dev Container which sets up a simple ExpressJS, ReactJS and Redis app including port forwarding and cors handling.

### Debugging
```
# https://github.com/orgs/community/discussions/15351
```
