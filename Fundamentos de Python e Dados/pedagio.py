pedagio = int(input("Digite a distância percorrida (em km): "))

if pedagio < 100:
    print("Valor do pedágio: R$ 10,00")
elif 100 <= pedagio < 200:
    print("Valor do pedágio: R$ 20,00")
elif pedagio >= 200:
    print("Valor do pedágio: R$ 30,00")