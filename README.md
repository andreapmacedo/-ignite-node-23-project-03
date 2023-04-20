### GymPass style app.



#### RFs (Requisitos Funcionais)

- [ ] Deve ser possível ...
- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter o histórico de check-ins;
- [ ] Deve ser possível o usuário buscar por academias próximas;
- [ ] Deve ser possível o usuário buscar por academias pelo nome;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;





#### RNs (Regras de Negócio)

- [ ] O usuário não pode se cadastrar com um e-mail já existente;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;



#### RNFs (Requisitos Não-Funcionais) - Não partem do cliente, são mais técnicos 
  - Qual banco de dados usar
  - [ ] A senha do usuário deve ser armazenada criptografada;
  - [ ] Os dados da aplicação precisam estar presistidos em banco PostgresSQL;
  - [ ] Todas as listas de dados precisam estar paginadas com 20 itens por página;
  - [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
