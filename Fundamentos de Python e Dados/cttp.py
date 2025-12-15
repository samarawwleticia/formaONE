atvA = int(input("Informe os dias para a atividade A: "))
atvB = int(input("Informe os dias para a atividade B: "))
atvC = int(input("Informe os dias para a atividade C: "))

if atvA < 0 or atvB < 0 or atvC < 0:
    print("Erro: Os dias não podem ser negativos.") 
else: 
    print("São necessários", atvA + atvB + atvC,  "para concluir as atividades!")