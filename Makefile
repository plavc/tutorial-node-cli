
init:
	npm install

build:
	npm run build

docker-run:
	docker run --rm --tty tutornode

docker-build:
	docker build -f docker/Dockerfile -t tutornode .