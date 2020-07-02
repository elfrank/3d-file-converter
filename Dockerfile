# syntax=docker/dockerfile:experimental

#
# ---- Base Python Image
FROM elfrank/blender-cpu:2.83
RUN echo "BLENDER Version Installed:" && blender --version

#
# ---- Install node.js
RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh

RUN echo "NODE Version Installed:" && node --version
RUN echo "NPM Version Installed:" && npm --version

#
# ---- Custom Logic

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Prepare directory structure
WORKDIR /usr/src/app
RUN echo "/usr/src/app" && ls /usr/src/app

# ENTRYPOINT ["/bin/bash"]
