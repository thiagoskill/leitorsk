# leitorsk

A ideia é criar um sistema de cadastro de malotes que chegaram.

HTML composto de:
1 - um campo para inserção das informações (numero do malote)
2 - botão para envio dos dados para uma tabela dinamica criada embaixo
3 - Tabela dinamica com os dados inseridos no campo acima
4 - Botão para envio de dados (formato JSON) para API. (No momento estamos enviado ao LocalStorage)


Detalhes do projeto:

1- A tabela deste projeto precisa ser inserida em um arquivo PDF, indicando cada malote que veio. 
A ideia é saber quais malotes vieram e quais não vieram. Penso que os que não estão cadastrados não vieram

2- Ideia de relatório quinzenal fica inviável sem o uso de um backend. Talvez fazer em MongoDB? Não era 
prioridade estudar isso agora

3- Cliente precisa "bipar" em lugares diferentes. Um para cliente e outro para cargas. Não seria o caso de fazer isso em duas URLS com o mesmo conteúdo, cada uma conversando com uma tabela no BD diferente?

A idéia é avançar com propósito maior de estudo, visto que ainda preciso de constancia para criação de sistemas mais complexos.