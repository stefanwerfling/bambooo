[![Discord](https://img.shields.io/discord/1347133593578766369.svg?label=Discord&logo=discord&color=5865F2&logoColor=white)](https://discord.gg/52PQ2mbWQD) 

# Bambooo
AdminLTE Typescript Framework (The basic idea of the name is to build the front end like a bamboo frame.)

"Never repeat yourself" is one of the most important attitudes of a programmer. 
Since I now have several projects that I use with the same basic framework for a chic admin front end, 
I have now decided to outsource this as an extra project and thus make it easier to maintain the code.

## Installation
First, the following packages must be installed:
```shell
npm i admin-lte
npm i ionicons-css
npm i jquery
npm i jquery-ui-dist
```

For dev:
```shell
npm i --save-dev @types/jquery
```

## First use over Express Server

Go to your project folder and install bambooo:
```shell
npm install git+https://github.com/stefanwerfling/bambooo.git
```

### Sample working with submodule in git

After npm install go into the node modules direcotry and delete bambooo.
```shell
rm -R ./node_modules/bambooo
```

Now add to your git repository a submodule:
```shell
cd ./node_modules
```

```shell
git submodule add -f https://github.com/stefanwerfling/bambooo.git
```

Now go to your source code direcotry and add a system link:
```shell
cd src/inc/
```

```shell
ln -s ../../node_modules/bambooo/src/ Bambooo
```
