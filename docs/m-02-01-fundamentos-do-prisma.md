o prisma chama a estrutura que representa tabelas de models

##### instala o prisma 

> Instala uma interface de linha de comando para o prisma no CLI(terminal)

```bash
npm i prisma -D
```

> Acessando a ajuda do prisma
```bash
npm prisma -h
```

---
##### Utilizando o npx para executar o prisma
***
npx
> shorthand (atalho) para executar scripts que são instalados na pasta node_modules/.bin
***

```bash
npx prisma init
```
1. Vai inicializar a criação de conexão do banco de dados da aplicação
2. Vai criar a pasta prisma com o arquivo schema.prisma
  - O arquivo schema.prisma vai conter uma representaçaão das tabelas do banco de dados

##### Criando a tipagem do banco de dados

> Integração com typescript para que o código seja interpretado pelo typescript

```bash
npx prisma generate
```

##### Adicionando dependência do prisma para acesso ao banco de dados (dependência de produção)

```bash
npm i @prisma/client
```

> A partir daqui o prisma já está integrado e só precisa ser importado para ser utilizado.

ex.:

```typescript
import { PrismaClient } from '@prisma/client' // importando o prisma

const prisma = new PrismaClient() // instanciando o prisma

async function main() {
  const allUsers = await prisma.user.findMany() // utilizando o método findMany para buscar todos os usuários
  console.log(allUsers)
}

