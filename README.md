# Jenkins Lab 1 – Installing Jenkins

Lab guide for the **CI/CD with Jenkins** module (Master 2 and Engineering 2).

**Students: read the lab here 👉 https://nouhakhyari-sys.github.io/jenkins-lab/**

## What the lab covers

1. Before you start: Jenkins and Java, LTS vs weekly releases, prerequisites
2. Installation channels: standalone WAR, Linux packages, servlet container, **Docker (lab path)**, Kubernetes (Helm)
3. Setup wizard: unlock, plugins, first admin user, instance URL
4. Tour of the dashboard
5. Checklist and troubleshooting

## For the teacher

### Publish the site (once)
Settings → **Pages** → Source: **Deploy from a branch** → Branch: **main**, folder **/ (root)** → **Save**.
After a minute or two the site is online at the address above.

### Add the videos
Upload each video to YouTube as **Unlisted**, then open [`assets/videos.js`](assets/videos.js), click the pencil icon, and paste each link between the quotes:

```js
"install-jenkins-with-the-docker-command-line": "https://youtu.be/AbCdEf12345",
```

Commit the change. Empty values hide the video from the page.

### Edit the text
After changing a file in `assets/`, also increase the `?v=` number at the bottom of each page (for example `?v=3`) so browsers load the new version at once.

Each page is one HTML file (`index.html`, `1-before-you-start.html`, …). Open it on GitHub, click the pencil icon, edit, and commit. The site updates by itself within a minute or two.

### Content checked against
The official Jenkins documentation (October 2026): Java 21 or 25, Docker image `jenkins/jenkins:lts-jdk21`, Linux repository key `jenkins.io-2026.key`, Helm chart `jenkinsci/jenkins`.
