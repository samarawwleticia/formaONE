#entradas
#peso
#altura

#saida
# valor do imc + indicar se esta abaixo do peso, com peso normal ou acima do peso

peso = float(input("Digite seu peso (kg): "))
altura = float(input("Digite sua altura (m): "))

IMC = peso / (altura**2)

print(f"Seu IMC é: {IMC:.2f}")

if IMC >= 25: 
    print("Você está acima do peso.")
elif IMC <= 18.5:
    print("Você esta abaixo do peso.")
else: 
    print("Você está dentro do peso normal.")