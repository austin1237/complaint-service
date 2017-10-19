.PHONY: wipe_and_seed_complaintdb
wipe_and_seed_complaintdb:
	docker-compose rm  -f -s complaintdb
	docker volume rm $(shell basename $(CURDIR) | sed 's/[^a-zA-Z0-9]//g')_mysql_data
	docker-compose build  --no-cache complaintdb
	docker-compose up complaintdb


