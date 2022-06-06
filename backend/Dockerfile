FROM python:3.8.10-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
COPY requirements.txt requirements.txt
RUN apk add --update \
    # build-base \
    # cairo \
    # cairo-dev \
    # cargo \
    # freetype-dev \
    gcc \
    # gdk-pixbuf-dev \
    # gettext \
    jpeg-dev \
    # lcms2-dev \
    # libffi-dev \
    musl-dev \
    # openjpeg-dev \
    # openssl-dev \
    # pango-dev \
    # poppler-utils \
    postgresql-client \
    postgresql-dev \
    # py-cffi \
    python3-dev \
    # rust \
    # tcl-dev \
    # tiff-dev \
    # tk-dev \
    zlib-dev
RUN python -m pip install --upgrade pip
RUN pip3 install -r requirements.txt
COPY . .