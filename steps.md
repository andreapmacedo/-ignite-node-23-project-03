
## Steps

#### 1. Create a new node project

```bash
npm init -y
```


#### 2. Install the required extensions

```bash
npm i typescript @types/node tsx tsup -D
```

```bash
npm i fastify
```


#### 3. Create the tsconfig.json file

```bash
npx tsc --init
```


#### 4. Change target to "ES2020" in tsconfig.json

"target": "ES2020",

### 5. Create the src folder

### 6. Create .gitignore file

### 7. Create the src/server.ts file

```typescript
...
```

### 8. configure scripts in package.json

```json
  "scripts": {
    "start:dev": "tsx watch src/server.ts",
    "start": "node build/server.js",
    "build": "tsup src --out-dir build"
  },
```

### 9. Test the server

```bash
npm run start:dev
```

### 10. Using the exact npm version

 - Create a .nvmrc file
  - Add the node version to the file


### 11. Using environment variables
#### 11.1 Create the .env file

#### 11.2 Install the dotenv extension

```bash
npm install dotenv
```

#### 11.3 Using zod library to validate the environment variables

```bash
npm install zod
```

#### 11.4 Add .env to .gitignore

### 12. Configuring ESLint

#### 12.1 Install the eslint extension

```bash
npm install eslint -D
```
 > with rocketseat config
```bash
npm i @rocketseat/eslint-config -D
```

#### 12.2 Create the .eslintrc.json file

```json
{
  "extends": "@rocketseat/eslint-config/node"
}
```

#### 12.2 Create the .eslintignore file

```json
node_modules
build
```