## Roteiro do Workshop WWC - Julho 2019 

# Usando GIT

Abrir um terminal, verificar se tem git instalado - Usaremos o GIT BASH
Baixar em: https://gitforwindows.org 

Versão do Git
```
git —-version
```

Configurando git
```
git config --global user.name “meu nome"<br>
git config --global user.email “meu-email@email.com"
```

Verificando as configurações 
```
git config --list
```

# Básicos do Terminal

Exibir localização atual
```
pwd
```

Listar arquivos e pastas
```
ls
```

Listar arquivos e pastas - incluindo detalhes e arquivos ocultos
```
ls -la
```

Criando um novo arquivo
```
touch nome-do-arquivo.extensao
```

Criando uma pasta
```
mkdir wwc
```

Entrar na pasta
```
cd wwc
```

Dica:
Usar a tecla tab para auto-completar

# Iniciando o Git

Iniciando o repositório git na pasta
```
git init
```

Criando um novo arquivo
```
touch index.txt
```

Adicionando texto no arquivo (nova linha)
```
echo “Meu primeiro arquivo” >> index.txt
```

Verificando o status dos arquivos (usaremos bastante esse comando)
```
git status 
```

# Status do Git

Adicionando os arquivos para staging (preparar o commit)
```
git add . 
```
> adiciona todos os arquivos modificados

Ou 
```
git add <nome-do-arquivo> 
```
> adiciona o arquivo específico

Verificar status dos arquivos novamente
```
git status
```

Submeter os arquivos adicionados
```
git commit -m “Repositorio iniciado, primeiro arquivo adicionado”
```

Verificar status dos arquivos novamente
```
git status
```

Verificar o histórico local
````
git log
````

# Comandos comuns
Descartar temporariamente alterações que não estão em staging
```
git stash
```

Adicionar de volta as últimas alterações descartadas
```
git stash pop
```

Remover do staging
```
git reset HEAD -— <nome-do-arquivo> 
```
> Remove o arquivo especificado do staging 

Ou 
```
git reset HEAD -- <nome-do-diretório> 
```
> Remove o diretório especificado do staging

Ou 
```
git reset --hard HEAD 
```
> Remove TUDO que estiver em staging - não apaga

Enviando para o repositório remoto
```
git push
```

Boa prática: sempre verificar o que acabou de fazer com o comando `git status`
    

# Usando GitHub
Crie sua conta em: https://github.com/

Crie um novo repositório, copie o link HTTPS gerado
ex: https://github.com/TigerRobocop/git-wwc.git

De volta ao terminal, verifique o repositório remoto configurado
```
git remote -v
```

Adicione o link do repositório GitHub
```
git remote add origin <link-repo-github>
```

Verifique a configuração do repositório remoto novamente
```
git remote -v 
```

# Enviando para o GitHub

Verificar o histórico local
```
git log
```

Subir para o repositório remoto (primeira vez)
```
git push -u origin master 
```

Vezes seguintes
```
git push
```

Volte ao site GitHub e atualize a página, para ver os arquivos disponibilizados!

# Contribuindo no GitHub

Crie um Fork do repositório: 
https://github.com/TigerRobocop/git-wwc

Faça um clone do repositório criado na seu local
```
git clone <link-https-do-repo> 
```

# Desafios

## Escolha UM dos desafios

Crie uma branch para cada desafio
```
git branch -b <nome-da-nova-branch>
```

### 1. Adicione seu nome no arquivo PARTICIPANTES.md

Adicione seu nome na lista `PARTICIPANTES.md` usando a seguinte convenção:

```markdown
#### Nome: [SEU NOME](Link GitHub)
- Onde moro: Cidade, estado, país
- Bio: Who are you?
- GitHub: [Nome do GitHub](Link GitHub)
```

### 2. Crie um arquivo de perfil no diretório Profiles
Crie um arquivo `Seu_Nome.md` no diretório `Profiles`. Siga o modelo:

```markdown
# Nome
Meu Nome

# Email
meu-email@email.com

### Onde moro
Cidade, estado, país

### Ocupação
Onde trabalho, nome do cargo 

### Formação
Faculdade, curso, etc

### Interesses
- Coisa que eu gosto 1
- Coisa que eu gosto 2
- Coisa que eu gosto 3


### Projects
- [Projeto 1](GitHub Link) descrição
- [Projeto 2](GitHub Link) descrição

### Meu GitHub
[Nome do GitHub](GitHub Link)
```

### 3. Crie um script `Hello, World!` em Javascript no diretório Scripts
Adicione um arquivo `hello_world_SEU_NOME.js` no diretório `Scripts`, siga o exemplo:

```Javascript
// LANGUAGE: Javascript
// AUTHOR: Liv Souza
// GITHUB: https://github.com/TigerRobocop

console.log('Hello World!');
```

