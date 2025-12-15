# classificando estudantes por média

primeira = float(input("Digite a primeira nota: "))
segunda = float(input("Digite a segunda nota: "))
terceira = float(input("Digite a terceira nota: "))

media = 0.0
media = (primeira + segunda + terceira)/3

print(f"Média: {media:.2f}")

if media >= 7:
    print("Aprovado")
elif media >= 5 and media < 7:
    print("Recuperação")
else:
    print("Reprovado")