## Clone The Project
- You can either use your git commands to clone the project or you can simple download the whole Project

## Installing the Packages
- To install all the dependecies
```
npm install
```

## Configure React Router
- As I have used React Router here to navigate between some pages. This Router has a base URL hardly coded inside the ```src/App.js``` file. Please replace your ```basename``` found inside this App.js file(line number ```43```) with yours. As my demo URL is in a subdirectory(https://zonayedpca.github.io/react-micro-blog) called ```react-micro-blog```, I have used the ```basename``` as ```/react-micro-blog```. Please configure yours accordingly.

## Configure Homepage
- Same for the production version, I have added a field called ```homepage``` inside package.json file. Please replace it with yours if you want your production version to work properly.

## Production Build
- Once you are ready to publish the project, you can easily make a production using this command:
```
npm run build
```

## Thanks
- React JS
- React Router
- Talk.js Group
- And all of my friends who continuously inspire me
