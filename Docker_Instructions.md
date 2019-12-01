## Getting Started

1. [Fork repository](https://github.com/mitre/aura/fork) and clone it locally
2. Change into the directory
3. Find the [Meetup API Key](https://secure.meetup.com/meetup_api/key/) and paste it [here](/src/config/key.js), also replace the chapter URL from `Meetup.com/[gdg-chapter-url]`
4. Update `Meta Tag`, `Title Tag` and [Google Analytics Code](https://analytics.google.com/analytics/web/#/) from [Basic Info](/public/index.html), [manifest.json](/public/manifest.json) and [Resources](/src/assets/data)

## Build your image with Docker

1. The Dockerfile and /nginix_config are already included
2. Issue the command
   `docker build -t vue-aura .`
3. This will take some time
4. After its completed verify the image is there

   ```shell
      docker images
      REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
      vue-aura            latest              dc21bfebeaee        10 minutes ago      241MB
   ```

5. Rename the image after your GDG group

   ```shell
      docker tag vue-aura gdg_cloudjacksonville:v1
      docker images
          REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
      gdg_cloudjacksonville   v1                  dc21bfebeaee        12 minutes ago      241MB
      vue-aura                latest              dc21bfebeaee        12 minutes ago      241MB
   ```

## Deploy your image with Docker

1. Issue the command

   ```shell
   docker run -d -p 80:80 gdg_cloudjacksonville:v1
   ```

2. Visit `http://localhost`
