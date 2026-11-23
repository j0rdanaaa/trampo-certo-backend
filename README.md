
# 💼 Trampo Certo — API Back-end

API REST do projeto acadêmico **Trampo Certo (PMI III)**, uma plataforma em desenvolvimento para conectar estabelecimentos dos setores de hotelaria, gastronomia e eventos a profissionais freelancers.

**Estado do projeto:** versão acadêmica com operações CRUD de vagas e profissionais e persistência no MongoDB Atlas.

Alguns fluxos previstos para o produto final ainda não foram implementados.

---

## 🎯 Objetivo

Oferecer uma API para o cadastro e a consulta de vagas temporárias e perfis profissionais, permitindo a integração com o Front-end desenvolvido em React.

O Trampo Certo busca facilitar a conexão entre estabelecimentos que necessitam de profissionais temporários e trabalhadores que procuram oportunidades no setor de hospitalidade.

---

## 🛠️ Tecnologias

- **JavaScript** — linguagem de programação
- **Node.js** — ambiente de execução
- **Express** — criação de rotas e API REST
- **MongoDB Atlas** — banco de dados NoSQL
- **Mongoose** — modelos, validações e persistência
- **CORS** — comunicação com o Front-end
- **dotenv** — gerenciamento de variáveis de ambiente

---

## ✅ Funcionalidades implementadas

### 📋 Vagas

- [x] Cadastrar uma vaga
- [x] Listar vagas disponíveis
- [x] Atualizar uma vaga pelo ID
- [x] Excluir uma vaga pelo ID
- [x] Persistir os dados no MongoDB Atlas

**Campos do modelo Vaga:**

| Campo | Tipo | Obrigatório |
|---|---|---|
| cargo | String | Sim |
| empresa | String | Sim |
| valor | Number | Sim |
| createdAt | Date | Automático |
| updatedAt | Date | Automático |

O campo `valor` deve ser maior ou igual a zero.

### 👤 Profissionais

- [x] Cadastrar perfil profissional
- [x] Listar profissionais
- [x] Atualizar profissional pelo ID
- [x] Excluir profissional pelo ID
- [x] Persistir os dados no MongoDB Atlas

**Campos do modelo Profissional:**

| Campo | Tipo | Obrigatório |
|---|---|---|
| nome | String | Sim |
| profissao | String | Sim |
| cidade | String | Sim |
| disponibilidade | String | Não |
| experiencia | String | Não |
| createdAt | Date | Automático |
| updatedAt | Date | Automático |

O campo `disponibilidade` possui o valor padrão `"A combinar"`, enquanto `experiencia` possui valor padrão vazio.

---

## 🌐 Endpoints disponíveis

Com o Back-end rodando em `http://localhost:3000`:

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Verificar resposta básica da API |
| GET | `/api/vagas` | Listar vagas |
| POST | `/api/vagas` | Cadastrar vaga |
| PUT | `/api/vagas/:id` | Atualizar vaga |
| DELETE | `/api/vagas/:id` | Excluir vaga |
| GET | `/api/profissionais` | Listar profissionais |
| POST | `/api/profissionais` | Cadastrar profissional |
| PUT | `/api/profissionais/:id` | Atualizar profissional |
| DELETE | `/api/profissionais/:id` | Excluir profissional |

### Exemplo de cadastro de vaga

**POST** `/api/vagas`

```json
{
  "cargo": "Garçom",
  "empresa": "Hotel Floripa",
  "valor": 180
}
```

### Exemplo de cadastro de profissional

**POST** `/api/profissionais`

```json
{
  "nome": "Ana Souza",
  "profissao": "Garçonete",
  "cidade": "Florianópolis",
  "disponibilidade": "Finais de semana",
  "experiencia": "Atendimento em eventos"
}
```

---

## ▶️ Como executar localmente

### Pré-requisitos

- Node.js instalado
- npm instalado
- MongoDB Atlas configurado
- Git instalado

### 1. Clonar o repositório

```bash
git clone https://github.com/j0rdanaaa/trampo-certo-backend.git
cd trampo-certo-backend
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
MONGO_URI=sua_string_de_conexao_mongodb_atlas
PORT=3000
```

**Importante:** não publique o arquivo `.env` nem compartilhe suas credenciais de acesso ao banco de dados.

### 4. Iniciar o servidor

```bash
node server.js
```

Com a conexão configurada corretamente, a aplicação deverá apresentar mensagens semelhantes a:

```text
MongoDB conectado com sucesso!
Servidor rodando em http://localhost:3000
```

### 5. Testar a API

Acesse no navegador:

- http://localhost:3000/
- http://localhost:3000/api/vagas
- http://localhost:3000/api/profissionais

As demais operações podem ser testadas utilizando Postman, Insomnia ou outro cliente HTTP.

**Observação:** nesta versão do repositório, o `package.json` não possui um script `start`. Por isso, a execução é realizada utilizando `node server.js`.

---

## 🏗️ Arquitetura do projeto

O Trampo Certo utiliza uma arquitetura com separação entre Front-end, Back-end e banco de dados.

```text
        FRONT-END
       React + Vite
     localhost:5173
            |
            | HTTP / JSON
            v
         BACK-END
    Node.js + Express
     localhost:3000
            |
            v
         Mongoose
            |
            v
       MongoDB Atlas
```

### Organização do Back-end

```text
trampo-certo-backend/
|
|-- src/
|   |-- config/
|   |   |-- database.js
|   |
|   |-- models/
|   |   |-- Vaga.js
|   |   |-- Profissional.js
|   |
|   |-- routes/
|       |-- vagaRoutes.js
|       |-- profissionalRoutes.js
|
|-- server.js
|-- package.json
|-- README.md
```

**Responsabilidades:**

- `server.js`: inicialização do servidor e configuração das rotas.
- `src/config/database.js`: conexão com o MongoDB Atlas.
- `src/models/`: definição dos modelos Mongoose.
- `src/routes/`: implementação dos endpoints REST.

---

## 🧭 Limitações e próximos passos

O projeto está em desenvolvimento e ainda possui funcionalidades previstas para versões futuras.

### Funcionalidades pendentes

- [ ] Autenticação e autorização de usuários
- [ ] Cadastro completo de estabelecimentos
- [ ] Candidatura persistida às vagas
- [ ] Gerenciamento de pagamentos
- [ ] Avaliações de profissionais e estabelecimentos
- [ ] Histórico de serviços realizados
- [ ] Implementação de campos adicionais nas vagas, como data, horário e localização

Essas funcionalidades fazem parte da evolução planejada para o produto.

A versão atual prioriza o funcionamento das operações CRUD, a comunicação entre as camadas da aplicação e a persistência dos dados.

---

## 📚 Contexto acadêmico

O projeto **Trampo Certo** foi desenvolvido como parte das atividades do **Projeto Multidisciplinar Integrador III (PMI III)**, do curso de Análise e Desenvolvimento de Sistemas da UNICESUSC.

A proposta integra conhecimentos de:

- Engenharia de Software
- Desenvolvimento Front-end
- Desenvolvimento Back-end
- Banco de Dados NoSQL
- Metodologias Ágeis (Scrum)
- Modelagem de Sistemas
- Versionamento com Git e GitHub

A documentação descreve as funcionalidades presentes neste repositório. Testes e atividades desenvolvidos em outros repositórios acadêmicos não devem ser confundidos com scripts de teste deste projeto.

---

## 🤝 Equipe — PMI III

- **Jordana Góes**
- **Lucas Ricci**
- **Matheus Henrique**

**Curso:** Análise e Desenvolvimento de Sistemas  
**Instituição:** UNICESUSC  
**Projeto:** Trampo Certo — PMI III  
**Ano:** 2026

---

## 🔗 Repositórios relacionados

- [Front-end — Trampo Certo](https://github.com/mtxavier-labs/frontend-II)
- [Back-end — Trampo Certo](https://github.com/j0rdanaaa/trampo-certo-backend)

---

**💼 Trampo Certo — Conectando oportunidades e profissionais.**
