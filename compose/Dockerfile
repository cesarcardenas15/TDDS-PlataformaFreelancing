FROM python:3.13.1-bookworm AS build

COPY ./backend/requirements.txt .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# copy project source code
COPY ./backend /backend

# set working directory
WORKDIR /backend

RUN python ./manage.py makemigrations
RUN python ./manage.py migrate

# entrypoint shell scripts to be executed
COPY ./entrypoint.sh /
ENTRYPOINT ["sh", "/entrypoint.sh"]