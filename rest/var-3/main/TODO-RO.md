#Subiect 3 (2.5 pts)
#TOPIC: REST

# Dată fiind aplicația `app` completați metodele `POST` si `DELETE` pe pathurile `/device` si `/device/:id`:
- `POST /device` returneaza status code 400 si raspuns `{message: "bad request"}` daca `body-ul` este gol. (0.5 pts)
- `POST /device` returneaza status code 400 si raspuns `{message: "bad request"}` daca `pretul < 0`. (0.5 pts)
- `POST /device` returneaza status code 400 si raspuns `{message: "bad request"}` daca `numele are mai putin de 4 caractere`. (0.5 pts)
- `POST /device` returneaza status code 201 si raspuns `{message: "device created"}` daca `body-ul este valid`. (0.5 pts)
- `DELETE /device/:id` returneaza status code 202 si raspuns `{message: "device deleted"}` daca `id-ul` trimis ca request parameter este gasit in baza de date. (0.5 pts)