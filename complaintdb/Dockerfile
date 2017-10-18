FROM mysql:5.7
ADD devSeedSql /docker-entrypoint-initdb.d
RUN gunzip -d /docker-entrypoint-initdb.d/*.gz
