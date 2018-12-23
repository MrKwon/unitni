# CEOS 팀 프로젝트 unitni 개발 GitHub Repository

~~중간에 변경사항이 있어서 tdip에서 unitni로 바꿈.. 레포지토리명을 바꾸는 방법이 있으려나..~~

### Repository Structure

* All app code path : [\unitni\app](https://github.com/MrKwon/unitni/tree/master/app)
* All img file path : [\unitni\img](https://github.com/MrKwon/unitni/tree/master/img)
* App Dev Reference : [Wiki](https://github.com/MrKwon/unitni/wiki)

### Frameworks and Environment

* Frontend - Vue.js
* Backend - Node.js Express web server
* Server  - AWS EC2 Instance
* OS - Linux Ubuntu LTS 18.

#### Description 

* [Vuetify](https://vuetifyjs.com/ko/) - Vue.js material component framework 
* [Vuex](https://vuex.vuejs.org/) - Vue state management framework
* Express.js - Web server framework
* [Sequelize.js](http://docs.sequelizejs.com/) - managing user infos, managing unitni infos etc. related with DB


### How to run

#### \unitni\app\client
Firstable, install all packages with following command
```
npm i
```

Next, dev mode is
```
npm run dev
```

There is no prodduction mode, yet.

#### \unitni\app\server
This is same as **client** <br>
Firstable, install all packages with following command
```
npm i
```

Next, this command make run nodejs server with pm2 npm package
```
npm start
```

#### Dev log
[Wiki](https://github.com/MrKwon/unitni/wiki/Dev-log)
