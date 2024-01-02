FROM python:3.8-slim-bullseye AS base
RUN apt update && apt upgrade -y
RUN buildDeps="git wget" \
 && apt install -y $buildDeps \
    locales \
    fontconfig \
    libfreetype6 \
    libjpeg62-turbo \
    libpng16-16 \
    libx11-6 \
    libxcb1 \
    libxext6 \
    libxrender1 \
    xfonts-75dpi \
    xfonts-base \
    libcairo2 \
    libpango-1.0-0 \
    libpangocairo-1.0-0 \
    libgdk-pixbuf2.0-0 \
    libffi-dev \
    shared-mime-info \
    python3-dev \
    python3-pip \
    python3-cffi \
 && sed -i 's/^# *\(en_US.UTF-8\)/\1/' /etc/locale.gen \
 && locale-gen

WORKDIR /smb/app
# Pull source
COPY ./. /smb/app/
RUN pip3 install --upgrade pip \
 && pip3 install --no-cache-dir sourcedefender \
 && pip3 install opentelemetry-distro opentelemetry-exporter-otlp \
 && pip3 install --no-cache-dir --default-timeout=1000 -r /smb/app/requirements.txt

RUN pip3 opentelemetry-bootstrap -a install

# Clean up
RUN apt purge -y --auto-remove $buildDeps \
 && apt clean \
 && apt autoremove \
 && rm -rf /var/lib/apt/lists/* \
 && rm -rf /root/.ssh/* \
 && rm -Rf .git

RUN chgrp -R 0 /smb && chmod -R g=u /smb
RUN chown -R 1001:0 /smb
USER 1001

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
