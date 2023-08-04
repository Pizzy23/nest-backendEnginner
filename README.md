# Crea

Apresentamos a nossa API Revolucionária: Submissão Simplificada de ART e CAT com Suporte de Chatbot Integrado

Está cansado do processo demorado e complicado de preencher formulários de ART e CAT? Encontra-se perdido nas diretrizes e regulamentos confusos? Não procure mais! Nossa inovadora API está aqui para revolucionar a forma como você submete suas aplicações de ART e CAT. Combinamos tecnologia de ponta com um design intuitivo para criar uma experiência sem falhas que simplifica e acelera todo o processo.

### Preenchimento de Formulários sem Esforço:

Chegaram ao fim os dias de luta com formulários longos e complexos. A interface intuitiva da nossa API torna o preenchimento de aplicações de ART e CAT uma tarefa fácil. Com um layout amigável e orientações passo a passo, você poderá completar seus formulários de forma rápida e precisa. Diga adeus à frustração e olá à eficiência.

### Assistência Inteligente de Chatbot:

Já teve alguma dúvida sobre sua submissão de ART ou CAT, mas teve dificuldade em encontrar a resposta certa? Nossa API apresenta um chatbot inteligente que está à sua disposição 24 horas por dia, 7 dias por semana. Precisa de esclarecimentos sobre um campo específico? Curioso sobre o prazo de submissão? Basta perguntar ao chatbot, e ele fornecerá informações precisas e atualizadas, garantindo que você esteja sempre bem informado.

### Submissão Mais Rápida de CAT:

Submeter aplicações de CAT nunca foi tão rápido. Nossa API otimiza o processo, permitindo que você faça upload de documentos necessários de forma simples. Sejam certificados, atestados ou arquivos de suporte, nossa plataforma garante que sua submissão de CAT esteja completa e sem erros.

### Suporte Completo para ART:

Navegar pelas complexidades da submissão de ART é coisa do passado. Nossa API simplifica todo o processo, orientando-o através de cada seção necessária e destacando possíveis problemas. Desde detalhes de registro até informações do projeto, você pode confiar que sua submissão de ART é precisa e está em conformidade.

### Atualizações em Tempo Real:

Diga adeus à ansiedade de esperar por confirmações. Nossa API mantém você informado a cada passo do caminho. Receba notificações instantâneas sobre o status de suas submissões de ART e CAT, garantindo que você esteja sempre atualizado.

### Segura e Confiável:

A segurança dos seus dados é nossa principal prioridade. Nossa API utiliza protocolos de criptografia de última geração para manter suas informações seguras e confidenciais. Tenha a certeza de que suas submissões estão protegidas em todas as etapas.

Num mundo em que o tempo é essencial, nossa API se destaca como um diferencial, permitindo que você navegue pelo mundo das submissões de ART e CAT com facilidade. Diga olá a formulários simplificados, processamento mais rápido e orientação especializada ao alcance de suas mãos. Experimente o futuro da submissão hoje mesmo - teste nossa API e transforme a maneira como você aborda as aplicações de ART e CAT.

### Como instalar a parte do Back

Certifique-se de ter o Node.js instalado em sua máquina.

Instalar o projeto.

```
npm install
```

Iniciar o projeto:

```
nest start
localhost:3000/api
```

# Casos de uso

1. Restrição de Engenheiro por Profissão:

- Garante que um engenheiro só possa criar ARTs dentro de sua própria área de especialização.
- Evita a emissão de ARTs por engenheiros não qualificados para determinado trabalho.

2. Assinatura de Documentos Online:

- Permite que tanto o usuário quanto o contratante acessem e assinem documentos online.
- Facilita o compartilhamento de documentos entre as partes envolvidas no processo de ART.

3. Serviço Plus Code para Locais sem CEP:

- Oferece a funcionalidade de obter o Plus Code de um local a partir do nome da rua.
- Resolve a questão de locais que não possuem um CEP cadastrado, permitindo uma forma alternativa de identificação.

4. Desumanização no Banco de Dados:

- Garante a privacidade e segurança dos dados dos usuários.
- As informações pessoais não são armazenadas no banco de dados, protegendo a identidade do usuário.

5. Tratamento de Erros e Feedback ao Usuário:

- Realiza um tratamento adequado de erros, identificando e informando os problemas no preenchimento da ART.
- Oferece feedback claro e compreensível ao usuário para corrigir os erros e melhorar a qualidade das submissões.

Estes casos de uso refletem uma abordagem completa e centrada no usuário para o sistema, abrangendo desde a emissão de ARTs dentro das especializações corretas até a segurança dos dados e a experiência de usuário aprimorada por meio de assinaturas online e serviços auxiliares, como o Plus Code. Isso certamente aumentará a eficiência e a confiabilidade de todo o processo de emissão e gerenciamento de ARTs.

# ChatBot Interativo e Bate-Papo para Engenheiros via Websocket

- Objetivo: Oferecer uma experiência de suporte eficiente por meio de um ChatBot interativo para esclarecer dúvidas e um bate-papo para facilitar a comunicação entre engenheiros da mesma área.

### Pré-condições:

- O usuário é um engenheiro registrado no sistema.
- O sistema possui um mecanismo de chatbot e bate-papo implementado via websocket.

### Fluxo Principal:

1. O usuário acessa a plataforma e seleciona a opção "Chat" ou "Bate-Papo".

2. Para o ChatBot:

- O sistema apresenta uma interface de chat interativo com o ChatBot.
- O usuário envia uma mensagem contendo sua dúvida ou pergunta específica.
- O ChatBot processa a mensagem em tempo real e responde com informações relevantes.
- O usuário pode continuar interagindo com o ChatBot para esclarecer mais dúvidas.

3. Para o Bate-Papo entre Engenheiros:

- O sistema exibe a lista de engenheiros online na mesma área de atuação.
- O usuário seleciona um engenheiro da lista para iniciar uma conversa.
- O sistema estabelece uma conexão de bate-papo em tempo real entre os engenheiros selecionados.
- Os engenheiros trocam mensagens, compartilham conhecimentos e discutem tópicos relevantes.

4. O usuário pode encerrar a conversa com o ChatBot ou o bate-papo a qualquer momento.

### Pós-condições:

- O usuário recebe respostas imediatas e relevantes para suas dúvidas por meio do ChatBot.
- O usuário pode se comunicar com outros engenheiros da mesma área no bate-papo, compartilhando experiências e conhecimentos.
- A colaboração entre os engenheiros é facilitada por meio do bate-papo em tempo real.

### Notas:

- O ChatBot deve ser capaz de compreender uma ampla variedade de perguntas e fornecer respostas precisas e úteis.
- O bate-papo entre engenheiros pode promover a troca de ideias, resolução colaborativa de problemas e compartilhamento de melhores práticas.
- O sistema deve fornecer recursos de segurança e privacidade para proteger as informações dos usuários durante as conversas.
- É importante fornecer uma interface de usuário intuitiva e fácil de usar para ambas as funcionalidades (ChatBot e Bate-Papo).

# Design Patterns (Backend)

- Decorators
- Singleton
- Factory

# External Packages (Backend)

- Websocket
- NestJs
- Jest
- Axios
- Socket.io

# Arquitetura usada (Backend)

- Hexagonal Architecture
- Modular

## Futuro

## Integração com DocuSign e Automação de Documentos com IA

### Objetivo

Aprimorar ainda mais a eficiência e segurança do sistema, incorporando a integração com o DocuSign para gerenciar documentos e implementando uma IA para automatizar a leitura e validação de documentos.

### Integração com o DocuSign:

1. Envio Seguro de Documentos: Implementar a integração com o DocuSign para enviar documentos importantes, como contratos, ARTs e CATs, para os contratantes de serviços. Isso garante um processo seguro e confiável de assinatura eletrônica.

2. Assinaturas Eletrônicas: O sistema permitirá que os usuários assinem documentos eletronicamente usando a plataforma do DocuSign. Isso elimina a necessidade de impressão, assinatura manual e digitalização.

3. Rastreamento e Notificações: A integração com o DocuSign fornecerá recursos avançados de rastreamento, permitindo que os usuários saibam quando os documentos foram abertos, assinados e finalizados. Notificações por e-mail serão enviadas em cada etapa.

### Automatização de Documentos com IA:

1. Leitura Automática de Documentos: Implementar uma IA especializada capaz de ler e extrair informações de documentos enviados pelos usuários, como contratos e atestados. Isso agiliza o processo de inserção de dados no sistema.

2. Validação de Documentos: A IA será treinada para verificar a validade e integridade dos documentos, identificando possíveis discrepâncias ou irregularidades. Isso ajuda a evitar erros humanos e assegura a conformidade legal.

3. Notificação de Irregularidades: Caso a IA identifique problemas nos documentos, o sistema enviará notificações aos usuários, indicando quais áreas precisam ser revisadas ou corrigidas.

### Benefícios:

- Maior Eficiência: A integração com o DocuSign agiliza o processo de assinatura de documentos, economizando tempo e recursos.
- Maior Segurança: A assinatura eletrônica e a validação automatizada garantem a autenticidade e integridade dos documentos.
- Redução de Erros: A IA reduz erros de inserção de dados e identifica discrepâncias nos documentos.
- Agilidade no Fluxo de Trabalho: Os processos de documentação e assinatura se tornam mais rápidos e fluidos.
- Melhoria na Experiência do Usuário: Os usuários têm acesso a um sistema mais avançado e eficiente, proporcionando maior satisfação.

### Nota:

- implementação de uma IA para automação de documentos requer um treinamento adequado do modelo, considerando diferentes tipos de documentos e variações possíveis. A precisão da IA dependerá da qualidade do treinamento e dos dados fornecidos.
