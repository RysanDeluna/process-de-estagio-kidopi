---

# Descrição

Este é um projeto desenvolvido para o programa de estágio da Kidopi.
Um site desenvolvido em HTML, CSS, JavaScript e PhP, cujo principal objetivo é acessar dados de uma API disponibilizada em formato JSON pelos servidores da Kidopi.

---

# Instalação

Para que o projeto possa ser aberto e funcione como foi desenvolvido, é preciso ter instalado no sistema o NodeJS (para suporte à JavaScript) e o Apache 2.0, que pode ser adquirido com o conjunto de ferramentas disponibilizadas pelo XAMPP.

Em ambientes **Linux**, basta utilizar do gerenciador de pacotes do sistema, por exemplo, para distribuições Arch:

```
pacman -S nodejs
yay -S xampp
```

Após instalados os pacotes, é recomendado que estes sejam configurados ao gosto do usuário; porém, para este projeto, recomenda-se clonar o repositório na pasta root configurada pelo XAMPP (`/opt/lampp/htdocs/`) como forma mais rápida de rodar a aplicação.

```
git clone https://github.com/RysanDeluna/process-de-estagio-kidopi.git /opt/lampp/htdocs/
```

Obs.: pode ser necessário as permissões de usuário root para a instalação dos pacotes e clone do projeto na pasta de destino.

## Como executar

Para rodar o projeto, basta iniciar o servidor Apache ao iniciar o XAMPP e inserir o endereço `localhost/{caminho-do-projeto}` no navegador.

Alternativamente, o usuário pode navegar até a pasta do projeto e abrir o código HTML no navegador. 

---

# O que foi alcançado

No desafio proposto, apenas as etapas da parte 1 foram cumpridas com êxito. A interface é capaz de acessar a API e recuperar os dados de forma a apresentá-los em formato de uma tabela dinâmica para cada país diferente disponível.
Cada botão representa um país distinto, sendo estes Brasil, Canada e Australia. 

A tabela é gerada por um código JavaScript que é responsável por cuidar da interatividade com os botões e conectar-se à API e gerar as tabelas necessárias.

---
