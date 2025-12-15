#Pegar qtd real
qtdMacas = int(input("Digite a quantidade de maçãs vendidas: "))
qtdBananas = int(input("Digite a quantidade de bananas vendidas: "))

if qtdMacas > qtdBananas:
    print("As maçãs tiveram mais vendas.")
elif qtdBananas > qtdMacas: 
    print("As bananas tiveram mais vendas.")
elif qtdMacas == qtdBananas:
    print("Houve um empate.")
else:
    print("ERRO")