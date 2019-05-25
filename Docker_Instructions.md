## Getting Started
1. [Fork repository](https://github.com/digikin/aura/fork) and clone it locally
1. Change into the directory
1. Find the [Meetup API Key](https://secure.meetup.com/meetup_api/key/) and paste it [here](/src/config/key.js), also replace the chapter URL from `Meetup.com/[gdg-chapter-url]`
1. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)

## Build you image with Docker
1. The Dockerfile and /nginix_config are already included
1. Issue the command
    docker build -t vue-aura .
1. This will take some time
1. After its completed verify the image is there
    docker images
    REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
    vue-aura            latest              dc21bfebeaee        10 minutes ago      241MB
1. Rename the image after your GDG group
    docker tag vue-aura gdg_cloudjacksonville:v1  
gdg_cloudjacksonville   v1                  dc21bfebeaee        12 minutes ago      241MB
vue-aura                latest              dc21bfebeaee        12 minutes ago      241MB

## Deploy your image with Docker
1. Issue the command
    docker run -d -p 80:80 gdg_cloudjacksonville:v1 
1. Visit http://localhost


