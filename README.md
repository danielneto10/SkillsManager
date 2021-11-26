# SkillsManager

O projeto trata-se de um site em que diversos desenvolvedores possam se cadastrar e ficarem visíveis a outras pessoas que estão em busca de um desenvolvedor para o seu projeto.

## Instalação

### 1. API

1.1 Entre no projeto 'API/SkillsManager' e digite o comando para instalar todas as dependências:
```bash
npm i
```
1.2 Altere as credenciais de conexão do banco em 'API/SkillsManager/ormconfig.ts':
```node
export default {
  type: 'mysql', // Banco de dados que iria utilizar
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USER, // Alterar aqui (Username do banco)
  password: process.env.DB_PASSWORD, //Alterar aqui (Senha do banco)
  database: 'skills_manager', //Alterar aqui (Nome do banco de dados)
  /* Resto do código */
};
```
**Observação:** Não esquece de criar o banco em seu banco de dados com o mesmo nome colocado em 'database'

### 2. Front

2.1 Entre no projeto 'Front/skillManager' e digite o comando para instalar todas as dependências:
```bash
npm i
```
Caso necessário altere a apiURL de conexão com a Api em:  
'\Front\skillManager\src\environments\environment.ts' e  
'\Front\skillManager\src\environments\enviroments.prod.ts

```typescript
export const environment = {
  production: false, // Não alterar em nenhum dos dois arquivos
  apiURL: 'http://localhost:3000', //Alterar caso necessário
};
```
