FROM almalinux:9.4

ARG PY_VER=3.12

RUN dnf upgrade --refresh -y
RUN dnf install python${PY_VER} httpd httpd-tools python${PY_VER}-mod_wsgi -y

EXPOSE 8000
CMD ["/usr/sbin/httpd", "-DFOREGROUND"]


RUN echo "IncludeOptional conf.d/custom/*.conf" >> /etc/httpd/conf/httpd.conf
