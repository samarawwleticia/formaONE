limite = 3000.00

despesastotais = float(input("Digite o total de despesas do mês (R$): "))

if despesastotais > 3000.00:
    print("Atenção! Você ultrapassou o limite do orçamento.")
elif despesastotais == 3000.00:
    print("Você atingiu o limite e não pode mais gastar nada!")
else: 
    print("Você está dentro do limite! Restam",3000-despesastotais, "reais no seu limite!")