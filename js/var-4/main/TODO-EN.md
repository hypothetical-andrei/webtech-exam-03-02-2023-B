# Subject 2 (2.5 pts)
# TOPIC: Javascript

# Given the function  `removeOrderItem(orderInfo, position)` where:
- `orderInfo` is an object with the properties total and items
- `position` is an integer that determines one element in items

# Completati urmatoarele taskuri:
- validate `items` to be an `array`. If another type is given an error is thrown with the message `Items should be an array`; (0.5 pts)
- Each object from `items` should have the properties price and quantity. If at least one element is malformed an error is thrown with the message `Malformed item`; (0.5 pts)
- `position` is validated in relation with the items array (0.5 pts)
- the function will return orderInfo without the element on the given position (0.5 pts)
- the total will be updated with the new order content. (0.5 pts)