
condicao1 = False
condicao2 = False 

while condicao1 is False or condicao2 is False: 
    nomeUsuario = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")

    if len(nomeUsuario) < 5:
        print("O nome de usuário deve ter pelo menos 5 caracteres.")
        continue
    elif len(senha) < 8:
        print("A senha deve ter pelo menos 8 caracteres")
        continue
    else:
        condicao1 = True
        condicao2 = True

print("Cadastro realizado com sucesso!")

#sol prof

while True:
    nome_usuario = input("Digite seu nome de usuário: ")
    senha = input("Digite sua senha: ")

    if len(nome_usuario) < 5:
        print("O nome de usuário deve ter pelo menos 5 caracteres.")
        continue

    if len(senha) < 8:
        print("A senha deve ter pelo menos 8 caracteres.")
        continue

    print("Cadastro realizado com sucesso!")
    break