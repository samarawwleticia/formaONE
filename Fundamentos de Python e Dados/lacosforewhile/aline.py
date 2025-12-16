count = 10

while count > 1:
    print(f"Faltam apenas {count} segundos - Não perca essa oportunidade!")
    count-=1
    print(f"A contagem continua: {count} segundos restantes.")
    count-=1

print("Aproveite a promoção agora!")

# sol professor

for segundos in range(10, 0, -1):  
    if segundos % 2 == 0: 
        print(f"Faltam apenas {segundos} segundos - Não perca essa oportunidade!")
    else: 
        print(f"A contagem continua: {segundos} segundos restantes.")

print("Aproveite a promoção agora!")