ARG PY_VER=3.12
ARG BUILD_CORES=4

FROM almalinux:9.5 AS base
RUN dnf upgrade --refresh -y

FROM base AS python3.12
RUN dnf install python3.12-pip python3.12-pip -y
RUN alias python=python3.12
RUN alias pip='python3.12 -m pip'

FROM base AS python3.11
RUN dnf install python3.11-pip python3.11-pip -y
RUN alias python=python3.11
RUN alias pip='python3.11 -m pip'

FROM base AS python3.13
RUN mkdir /build_python
WORKDIR /build_python
RUN dnf install make gcc openssl-devel bzip2-devel libffi-devel zlib-devel wget -y
RUN wget https://www.python.org/ftp/python/3.13.1/Python-3.13.1.tgz
RUN tar xzf Python-3.13.1.tgz
WORKDIR /build_python/Python-3.13.1
RUN ./configure --enable-optimizations
RUN make -j${BUILD_CORES}
RUN make altinstall
RUN python3.13 -m pip install --upgrade pip
RUN alias python=python3.13
RUN alias pip='python3.13 -m pip'
WORKDIR /
RUN rm -r /build_python
RUN dnf remove make gcc openssl-devel bzip2-devel libffi-devel zlib-devel wget -y


FROM python${PY_VER} AS final
pip install gunicorn

EXPOSE 8000
# RUN echo "IncludeOptional conf.d/custom/*.conf" >> /etc/httpd/conf/httpd.conf
