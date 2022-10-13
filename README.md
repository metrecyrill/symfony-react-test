##Test React-Symfony


<a name="deployment"></a>
## Deployment
### Prerequisites

Install [Docker](https://www.docker.com/) on your system.

* [Install instructions](https://docs.docker.com/installation/mac/) for Mac OS X
* [Install instructions](https://docs.docker.com/installation/ubuntulinux/) for Ubuntu Linux
* [Install instructions](https://docs.docker.com/installation/) for other platforms

Install [Docker Compose](http://docs.docker.com/compose/) on your system.

* Python/pip: `sudo pip install -U docker-compose`
* Other: ``curl -L https://github.com/docker/compose/releases/download/1.1.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose; chmod +x /usr/local/bin/docker-compose``

<a name="setup"></a>
### Setup

Create `.env` file in backend folder following `.env.example`. Run:
```bash
docker-compose build
```
After start the application containers run:
 ```bash
 docker-compose up -d
 ``` 
Enter in `php` container and install composer dependencies run:
 ```bash
docker-compose exec php bash -c
composer install --no-scripts
 ``` 

Run migration and fixtures: 
 ```bash
php bin/console doctrine:migrations:migrate
php bin/console doctrine:fixtures:load
 ```

FRONTEND

into `/frontend` folder install dependencies run:
 ```bash
npm install
 ```
Start frontend run:
 ```bash
npm start
 ```

## Stay in touch

- Author - Kirill Mitroshev


## License

Nest is [MIT licensed](LICENSE).