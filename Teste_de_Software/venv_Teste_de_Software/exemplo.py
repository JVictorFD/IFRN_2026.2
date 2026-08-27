def classificar_triangulo(lado_a, lado_b, lado_c):
	"""Classifica um triângulo pelos comprimentos dos seus lados."""
	lados = (lado_a, lado_b, lado_c)

	if any(lado <= 0 for lado in lados):
		raise ValueError("Os lados devem ser positivos.")

	if (
		lado_a + lado_b <= lado_c
		or lado_a + lado_c <= lado_b
		or lado_b + lado_c <= lado_a
	):
		raise ValueError("Os lados não formam um triângulo.")

	if lado_a == lado_b == lado_c:
		return "equilátero"
	if lado_a == lado_b or lado_a == lado_c or lado_b == lado_c:
		return "isósceles"
	return "escaleno"


if __name__ == "__main__":
	lados = [float(valor) for valor in input().split()]
	if len(lados) != 3:
		raise ValueError("Informe exatamente três lados.")
	print(classificar_triangulo(*lados))
