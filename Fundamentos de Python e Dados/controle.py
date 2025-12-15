# o escritorio so permite acesso entre 8h e 18h

hora_atual = int(input("Digite a hora atual (formato 24 horas): "))

if hora_atual < 8 or hora_atual > 18:
    print("Acesso negado.")
else: 
    print("Entrada liberada.")