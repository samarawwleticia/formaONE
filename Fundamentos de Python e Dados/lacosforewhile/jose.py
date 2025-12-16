livros = ["1984", "Dom Casmurro", "O Pequeno Príncipe", "O Hobbit", "Orgulho e Preconceito"]

busca = input("Digite o nome do livro: ")

for livro in livros:
    if livro == busca: 
        print("Livro encontrado:",livro)
        break


