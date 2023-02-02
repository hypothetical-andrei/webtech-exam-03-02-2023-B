#Subiect 3 (2.5 pts)
#TOPIC: REST

# Having the `app.js` file complete `POST` and `DELETE` methods on paths `/device` and `/device/:id`:
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `body` is null (0.5 pts);
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `price < 0` (0.5 pts);
- `POST /device` returns status code 400 and response `{message: 'bad request'}` if `name contains less than 4 characters` (0.5 pts);
- `POST /device` returns status code 201 and response `{message: "device created"}` if `body is valid` (0.5 pts);
- `DELETE /device/:id` returns status code 202 and response `{message: "device deleted"}` if `id` for a device is present in the database (0.5 pts);