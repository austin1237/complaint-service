.PHONY: wipe_and_seed_complaintdb
wipe_and_seed_complaintdb:
	docker-compose rm  -f -s complaintdb
	docker volume rm ombudtest_mysql_data
	docker-compose build  --no-cache complaintdb
	docker-compose up complaintdb

	