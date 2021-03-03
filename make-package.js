const fs = require('fs');
const packageJsonTemplate = `{
  "name": "@md-tailwind/react",
  "homepage": "https://demos.creative-tim.com/md-tailwind",
  "version": "0.1.0",
  "description": "Material Design Tailwind by Creative Tim: Tailwind CSS components ma
  "repository": "https://github.com/creativetimofficial/md-tailwind",
  "license": "MIT",
  "dependencies": {},
  "scripts": {},
  "eslintConfig": {
   "extends": "react-app"
  },
  "browserslist": {
   "production": [
   ">0.2%",
   "not dead",
   "not op_mini all"
   ],
   "development": [
   "last 1 chrome version",
   "last 1 firefox version",
   "last 1 safari version"
   ]
  },
  "optionalDependencies": {},
  "peerDependencies": {
   "tailwind": "2.0.3",
   "react": "17.0.1"
  }
}`;
fs.mkdirSync('./lib', { recursive: true });
fs.writeFileSync('./lib/package.json', packageJsonTemplate);
