# API - Gerador de documentos

### Rodando o projeto

Inicie um container Docker

```
docker run -it --rm --name=gerador-documentos -p 3000:3000 seniocaires/gerador-documentos
```

### Gerando CPFs

```
curl "http://localhost:3000?tipo=cpf&formatacao=true&total=3"
```

#### Parâmetros

- **tipo** *[obrigatório]*:
  - Tipo de documento a ser gerado (cpf)
- **formatacao** *[opcional]*:
  - Retornar o(s) documento(s) com formatação (padrao = false)
- **total** *[opcional]*:
  - Quantidade de documentos para serem gerados (padrão = 1)

#### Exemplo de retorno
```
[
    "423.314.154-98",
    "465.587.473-24",
    "755.852.057-65"
]
```