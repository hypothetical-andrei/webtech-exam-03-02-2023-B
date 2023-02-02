# Subiect 2 (2.5 pts)
# Tematica: Javascript

# Avand urmatoarea functie  `removeOrderItem(orderInfo, position)` unde:
- `orderInfo` este un obiect cu proprietatile total si items
- `position` este un numar intreg ce determina un element din items

# Completati urmatoarele taskuri:
- validati proprietatea `items` sa fie de tip `array`. Daca este dat un input de alt tip se va arunca eroare cu mesajul `Items should be an array`; (0.5 pts)
- fiecare obiect din `items` este are proprietatile price si quantity. Daca cel putin un element nu respecta formatul se va arunca mesajul `Malformed item`; (0.5 pts)
- parametrul `position` este valid in relatie cu vectorul items (0.5 pts)
- se va returna obiectul orderInfo din care s-a eliminat elementul de pe pozitia data (0.5 pts)
- functia returneaza totalul corect pentru comanda in urma eliminarii elementului de pe pozitia data. (0.5 pts)