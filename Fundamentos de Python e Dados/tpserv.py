temperatura = int(input("Digite a temperatura atual: "))

if temperatura >= 30:
    print("Alerta! Temperatura acima do limite permitido.")
elif temperatura < 0:
    print("Alerta! Temperatura excessivamente baixa.")
else:
    print("A temperatura está na faixa esperada.")