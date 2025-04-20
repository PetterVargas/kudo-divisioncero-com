# Welcome to Kudo - Cybersecurity Compliance Open Source

## Requirements  
1. [Docker](https://www.docker.com/)
2. [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/getting-started/)

## Run development server

`Linux 🐧`

```  
docker run --rm -it -p 3002:8000 -v ${PWD}:/docs squidfunk/mkdocs-material:latest
```

## Create static site

```  
docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build
```

## Error solved

If you are using Docker for the first time, you may need to add your user to the Docker group to run Docker commands without `sudo`. You can do this by running the following command:

```
sudo usermod -aG docker $USER
newgrp docker
``` 
