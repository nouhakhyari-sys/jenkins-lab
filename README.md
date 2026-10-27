# Jenkins Labs – CI/CD with Jenkins

Lab guides for the **CI/CD with Jenkins** module (Master 2 and Engineering 2).

**Students: read the labs here 👉 https://nouhakhyari-sys.github.io/jenkins-lab/**

## Labs

**Lab 1 – Installing Jenkins** (`lab1.html`, pages `1-…` to `5-…`): prerequisites, installation channels (WAR, Linux packages, servlet container, **Docker**, Kubernetes), setup wizard, dashboard tour, checklist and troubleshooting.

**Lab 2 – Your First Pipeline** (`lab2.html`, pages `lab2-0-…` to `lab2-6-…`): installing the **Pipeline: Stage View** plugin, Hello World declarative pipeline, the code explained, shell commands with `sh`, a guided tour of the Jenkins buttons, exercises (three stages, break and fix with Replay, variables, `post`), checklist and troubleshooting.

**Lab 3 – Build a Java Project** (`lab3.html`, pages `lab3-1-…` to `lab3-7-…`, 1h30): runs the Java example `lab2/java-app` of the public template repository from GitHub (no token), with the JUnit, Artifacts, Timestamper, Workspace Cleanup, Input and AnsiColor plugins. Every script exists for Jenkins in Docker (`sh`) and Jenkins on Windows (`bat`).

Lab 1 and Lab 2 fit in one 1h30 session.

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
