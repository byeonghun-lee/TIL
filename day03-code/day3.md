# git 복습
명령어로 다시해보기
- git init
- git remote add origin url
- git push origin master

git을 이용해서 아이디.github.io 만드는법
https://www.gitignore.io/

# sass
node-sass -w -r sass/ -o css/ --output-style expanded --source-map-embed
-소스맵을 따로 만들지 않고 css안에 들어가는 node코드
npm init으로 json을 만들어 node에서 sass watch를 단축할 수 있음.
sass라는 단축을 만들어 쓸 때는 npm run sass
명령어를 매번 입력하기 어렵기 때문에 단축하기 위해 npm을 사용하는 것.
----
Sass 명령어 치는 것도 이제 지겹다, 명령어를 등록을 등록등록!

1. 해당 디렉토리로 이동
2. `npm init -y`를 통해 `package.json`파일을 만들고 파일을 연다!
3. scripts에 등록하고 싶은 명령을 등록한다: `"명령어이름": "명령어"` 
```"scripts": {
    "sass": "node-sass -w -r sass -o css --output-style expanded --source-map-embed"
  }
```
3.`npm run 명령어이름` => 바로 실행!
```npm run sass```
------

sass코드 앞에 .clearfix 말고 %clearfix로 바꾸면 css로 바꿀때 감출수 있음
