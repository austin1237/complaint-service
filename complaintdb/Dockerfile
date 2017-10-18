FROM mysql:5.7
ADD ${SQL_SEED} /docker-entrypoint-initdb.d
RUN gunzip -d /docker-entrypoint-initdb.d/*.gz
