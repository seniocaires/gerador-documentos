# API - Gerador de documentos

## Rodando o projeto

Inicie um container Docker

```
docker run -it --rm --name=gerador-documentos -p 3000:3000 seniocaires/gerador-documentos
```

## Gerando CPFs

```
curl "http://localhost:3000?tipo=cpf&formatacao=true&total=3"
```

### Parâmetros

- **tipo** *[obrigatório]*:
  - Tipo de documento a ser gerado (cpf)
- **formatacao** *[opcional]*:
  - Retornar o(s) documento(s) com formatação (padrao = false)
- **total** *[opcional]*:
  - Quantidade de documentos para serem gerados (padrão = 1)

### Exemplo de retorno
```
[
    "423.314.154-98",
    "465.587.473-24",
    "755.852.057-65"
]
```

## Gerando CNPJs

```
curl "http://localhost:3000?tipo=cnpj&formatacao=true&total=3"
```

### Parâmetros

- **tipo** *[obrigatório]*:
  - Tipo de documento a ser gerado (cnpj)
- **formatacao** *[opcional]*:
  - Retornar o(s) documento(s) com formatação (padrao = false)
- **total** *[opcional]*:
  - Quantidade de documentos para serem gerados (padrão = 1)

### Exemplo de retorno
```
[
    "18.342.813/0001-25",
    "07.370.648/0001-07",
    "81.012.316/0001-03"
]
```

## Gerando E-mails

```
curl "http://localhost:3000?tipo=email&total=3"
```

### Parâmetros

- **tipo** *[obrigatório]*:
  - Tipo de documento a ser gerado (e-mail)
- **total** *[opcional]*:
  - Quantidade de documentos para serem gerados (padrão = 1)

### Exemplo de retorno
```
[
    "1zp23m1jurx@zhbn3n.e99",
    "m3ob9io8iv@qsmk2s.luj",
    "sjxfc76yv2@9ays1k.v9e"
]
```