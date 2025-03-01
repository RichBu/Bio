docker build --platform linux/amd64 -t richbu/img-bio:latest -f Dockerfile-bio .
docker tag richbu/img-bio richbu/img-bio:latest
docker push richbu/img-bio:latest
