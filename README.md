 ![GitHUb Repo Views](https://visitor-badge.glitch.me/badge?page_id=DIOBootcampNodejs-Desafios.visitor-badge) ![GitHub Repo stars](https://badgen.net/github/stars/trepichio/DIOBootcampNodejs-Desafios)
 ![GitHub top language](https://img.shields.io/github/languages/top/trepichio/DIOBootcampNodejs-Desafios?style=falt)

<h1 align="center">Bootcamp Node.js da Digital Innovation One</h1>

- [Descrição](#descrição)
- [Antes de continuar](#antes-de-continuar)
- [AVISOS IMPORTANTES](#avisos-importantes)
- [Execução](#execução)
- [Autor](#autor)
- [Módulos publicados](#módulos-publicados)

### Descrição
- Código dos desafios propostos no bootcamp de Node.js disponibilizado na plataforma da Digital Innovation One [DIO](https://web.digitalinnovation.one/)
- Link para [o meu certificado de conclusão](https://certificates.digitalinnovation.one/48CEDE47)

### Antes de continuar
- É **importante** salientar que se você for *um(a) aluno(a)* da plataforma DIO, então será de melhor aproveitamento revisar o código e comparar com sua solução, ou apenas usar o código-fonte como inspiração para sua criatividade.
- **Leia as seções AVISOS IMPORTANTES e Execução**.
- **Não proibo** o uso do meu código na plataforma, mas isto não agregará para o seu aprendizado, e provavelmente só irá favorecer o crescimento da plataforma DIO, e não o seu.
- **E por último, mas não menos importante**, independente do que você fizer, peço por gentileza apenas que dê uma ⭐ (Star) neste repositório e/ou siga meu perfil do GitHub como meio de sinalizar que consegui contribuir para seu aprendizado.

### AVISOS IMPORTANTES
- Para os *desavisados* e *desatentos*, os desafios deste repositório estão **100% em javascript**.
- Por favor, **leia os comentários de cada desafio**, pois alguns **podem conter informações adicionais** como, por exemplo, **bugs encontrados nos testes da DIO** na época que o código foi escrito, e, portanto, os mesmos podem ter sido corrigido quando você utilizar o mesmo código. Atente-se às estas informações para que você possa refatorar o código se necessário.
- A comunidade me contatou para informar que o código do desafio **Barras de Ouro não passa em apenas um dos testes fechados**. **Tentei contato com a DIO** por e-mail e pelo Discord, **mas obtive nenhuma resposta**. Apesar disso, **uma outra pessoa da comunidade conseguiu uma resposta** - o Luan Fernandes - e ele postou a imagem da resposta que recebeu:
  ![](https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/confirmado_bug_barras_de_ouro.png)
Com isso vocês devem aguardar que a DIO corrija o tal bug.

- **UPDATE 19/12:** Notificaram que "já corrigiram o bug", porém notei apenas que removeram dois testes, e o problemático permaneceu.
No entanto, **graças à refatoração feita pela Dev Camila#6476 (no Discord), eu pude analisar o código e encontrar os pontos que necessitavam de alteração** para que o algoritmo fosse aprovado na plataforma da DIO.
  ![mensagem da Camila no Discord onde compartilha sua refatoração e cita meu repositório](./assets/images/refatoracao_barras_de_ouro.png)

  **Obrigado 👉 Camila 👈 por sua contribuição!** ✌

- Quanto ao desafio **Tabuleiro Secreto**, este certamente deveria passar em todos os testes, mas a comunidade informou que não está, porque retorna o erro *tempo limite de execução excedido*.
No entanto, o algoritmo rodava, com a entrada mais massiva de dados fornecida pelo site [uDebug](https://www.udebug.com/URI/2467) em *até 10 segundos* na minha máquina, a qual não deve ser mais performática que o servidor da DIO. Refatorei o código e reduzi para entre *3.982 e 5.446 segundos*, e ainda assim o erro persiste. Portanto, concluo que é uma instabilidade na plataforma da DIO, ou um novo bug, ou eles propositadamente alteraram algo no teste específico. O último é o menos provável, na minha opinião.

- **UPDATE 28/12:** A procura pela solução do desafio do **Tabuleiro Secreto** foi grande, e meu conselho foi categoricamente o mesmo para todos que me pediram uma luz💡:
   > *Refatorem o algoritmo para reduzir o tempo de execução*

  Como já citei, a solução era antes aceita sem problemas. E havia feito o meu melhor para escrever um código elegante e performático. Mas não foi o suficiente né? Pois então refatorei e **escrevi uma feitiçaria que executa em torno de 2.5 segundos** na pior carga dos testes, **e a entrega foi aprovada novamente!!** So, enjoy! 😎

- Os códigos deste repositório são disponibilizados como são, e apesar de todos terem sidos aprovados quando os escrevi, os mesmos são disponibilizados sem nenhuma garantia. Agradeço a compreensão.
### Execução
- Os códigos estão preparados tanto para serem executados na plataforma da DIO quanto localmente, exigindo apenas uma pequena refatoração.

- Caso queira executar na plataforma da DIO deverá remover/comentar o array de entrada e onde mais for atribuido os elementos do array de entrada, e descomentar onde a leitura dos dados é feita através do comando _gets();_
- Para facilitar há comentários indicando onde o uso é local e na DIO.


Bons estudos!


### Autor
| [<img alt="João Trepichio" src="https://avatars2.githubusercontent.com/u/11396817?s=460&u=085712d4f1296e6ad0a220ae7c0ea5278a9c40ed&v=4" width="100">](https://trepichio.github.io) |
|:--------------------------------------------------:|
| [João Trepichio](https://trepichio.github.io)    |

### Módulos publicados

**01-Introdução a Programação com JavaScript (Básico <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-1.svg" alt="barras que indicam nível básico" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Visita na Feira](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/01-Introdu%C3%A7%C3%A3o%20a%20Programa%C3%A7%C3%A3o%20com%20JavaScript/Desafio-01.js) | Princípios Básicos
| [Multiplicação Simples](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/01-Introdu%C3%A7%C3%A3o%20a%20Programa%C3%A7%C3%A3o%20com%20JavaScript/Desafio-02.js) | Princípios Básicos
| [Folha de Pagamento](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/01-Introdu%C3%A7%C3%A3o%20a%20Programa%C3%A7%C3%A3o%20com%20JavaScript/Desafio-03.js) | Princípios Básicos

**02-Fundamentos Aritméticos em JavaScript (Básico <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-1.svg" alt="barras que indicam nível básico" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Quantidade de Números Positivos](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/02-Fundamentos%20Aritm%C3%A9ticos%20em%20JavaScript/Desafio-01.js) | Princípios Básicos
| [Exibindo Números Pares](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/02-Fundamentos%20Aritm%C3%A9ticos%20em%20JavaScript/Desafio-02.js) | Princípios Básicos
| [Análise de Números](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/02-Fundamentos%20Aritm%C3%A9ticos%20em%20JavaScript/Desafio-03.js) | Princípios Básicos
| [Contagem de Cédulas](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/02-Fundamentos%20Aritm%C3%A9ticos%20em%20JavaScript/Desafio-04.js) | Princípios Básicos
| [Consumo Médio do Automóvel](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/02-Fundamentos%20Aritm%C3%A9ticos%20em%20JavaScript/Desafio-05.js) | Princípios Básicos

**03-Ordenação e Filtros em JavaScript (Intermediário <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-2.svg" alt="barras que indicam nível intermediário" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Ordenando Números Pares e Ímpares](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%20e%20Filtros%20em%20JavaScript/Desafio-01.js) | Estrutura de Dados
| [Compras no Supermercado](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%20e%20Filtros%20em%20JavaScript/Desafio-02.js) | Estrutura de Dados
| [Uniformes de final de ano](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%20e%20Filtros%20em%20JavaScript/Desafio-03.js) | Estrutura de Dados
| [Fila do Banco](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%20e%20Filtros%20em%20JavaScript/Desafio-04.js) | Estrutura de Dados
| [Gincana no Acampamento](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/03-Ordena%C3%A7%C3%A3o%20e%20Filtros%20em%20JavaScript/Desafio-05.js) | Estrutura de Dados

**04-Introdução a Busca e Substituição em JavaScript (Intermediário <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-2.svg" alt="barras que indicam nível intermediário" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Ordenação de palavras por tamanho](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/04-Introdu%C3%A7%C3%A3o%20a%20Busca%20e%20Substitui%C3%A7%C3%A3o%20em%20JavaScript/Desafio-01.js) | Estrutura de Dados
| [Encontre a maior substring](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/04-Introdu%C3%A7%C3%A3o%20a%20Busca%20e%20Substitui%C3%A7%C3%A3o%20em%20JavaScript/Desafio-02.js) | Strings
| [Validador de senhas com requisitos](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/04-Introdu%C3%A7%C3%A3o%20a%20Busca%20e%20Substitui%C3%A7%C3%A3o%20em%20JavaScript/Desafio-03.js) | Strings
| [Pedra, Papel, Tesoura, Lagarto e Spock](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/04-Introdu%C3%A7%C3%A3o%20a%20Busca%20e%20Substitui%C3%A7%C3%A3o%20em%20JavaScript/Desafio-04.js) | Strings
| [Atalhos para o Weblogger Brasil](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/04-Introdu%C3%A7%C3%A3o%20a%20Busca%20e%20Substitui%C3%A7%C3%A3o%20em%20JavaScript/Desafio-05.js) | Strings

**05-Solução de Problemas com JavaScript (Avançado <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-3.svg" alt="barras que indicam nível avançado" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Contagem repetida de números](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-01.js) | Ad-Hoc
| [Vogais Extraterrestres](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-02.js) | Strings
| [Melhor amigo do Pablo](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-03.js) | Estrutura de Dados
| [Entrevista embaraçosa](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-04.js) | Strings
| [Conjuntos bons ou ruins?](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-05.js) | Strings
| [Produto e divisão](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-06.js) | Ad-Hoc
| [Barras de ouro](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/05-Solu%C3%A7%C3%A3o%20de%20Problemas%20com%20JavaScript/Desafio-07.js) | Grafos

**06-Resolvendo Algoritmos com JavaScript (Avançado <img src="https://raw.githubusercontent.com/trepichio/DIOBootcampNodejs-Desafios/master/assets/images/level-3.svg" alt="barras que indicam nível avançado" width="50" height="50"> )**
| Desafio | Tipo
|--|--
| [Coração das cartas](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-01.js) | Paradigmas
| [Abreviando posts do blog](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-02.js) | Strings
| [Combinação de strings](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-03.js) | Strings
| [Hash Mágico](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-04.js) | Strings
| [O tabuleiro secreto](https://github.com/trepichio/DIOBootcampNodejs-Desafios/blob/master/06-Resolvendo%20Algoritmos%20com%20JavaScript/Desafio-05.js) | Ad-Hoc