let resList =  [
      {
        "id": 1,
        "name": "Delicious Delights",
        "cuisine": "Italian",
        "address": "123 Main Street, Cityville",
        "phone": "+1 (555) 123-4567",
        "image": "https://example.com/delicious_delights.jpg",
        "rating": 4.5,
        "menu": [
          {
            "id": 101,
            "name": "Margherita Pizza",
            "price": 12.99
          },
          {
            "id": 102,
            "name": "Pasta Carbonara",
            "price": 15.99
          },
          {
            "id": 103,
            "name": "Tiramisu",
            "price": 8.99
          }
        ]
      },
      {
        "id": 2,
        "name": "Spicy Bites",
        "cuisine": "Mexican",
        "address": "456 Oak Avenue, Townsville",
        "phone": "+1 (555) 987-6543",
        "image": "https://example.com/spicy_bites.jpg",
        "rating": 4.2,
        "menu": [
          {
            "id": 201,
            "name": "Tacos",
            "price": 9.99
          },
          {
            "id": 202,
            "name": "Burrito Bowl",
            "price": 11.99
          },
          {
            "id": 203,
            "name": "Churros",
            "price": 6.99
          }
        ]
      },
      {
        "id": 3,
        "name": "Sushi Haven",
        "cuisine": "Japanese",
        "address": "789 Pine Street, Villagetown",
        "phone": "+1 (555) 234-5678",
        "image": "https://example.com/sushi_haven.jpg",
        "rating": 4.8,
        "menu": [
          {
            "id": 301,
            "name": "Sashimi Platter",
            "price": 18.99
          },
          {
            "id": 302,
            "name": "Dragon Roll",
            "price": 14.99
          },
          {
            "id": 303,
            "name": "Green Tea Ice Cream",
            "price": 7.99
          }
        ]
      },
      {
        "id": 4,
        "name": "Burger Bliss",
        "cuisine": "American",
        "address": "567 Cedar Lane, Suburbia",
        "phone": "+1 (555) 345-6789",
        "image": "https://example.com/burger_bliss.jpg",
        "rating": 4.0,
        "menu": [
          {
            "id": 401,
            "name": "Classic Cheeseburger",
            "price": 10.99
          },
          {
            "id": 402,
            "name": "Chicken Wings",
            "price": 8.99
          },
          {
            "id": 403,
            "name": "Chocolate Milkshake",
            "price": 5.99
          }
        ]
      },
      {
        "id": 5,
        "name": "Tandoori Temptations",
        "cuisine": "Indian",
        "address": "890 Maple Avenue, Spice City",
        "phone": "+1 (555) 876-5432",
        "image": "https://example.com/tandoori_temptations.jpg",
        "rating": 4.6,
        "menu": [
          {
            "id": 501,
            "name": "Chicken Tikka Masala",
            "price": 13.99
          },
          {
            "id": 502,
            "name": "Naan Bread",
            "price": 5.99
          },
          {
            "id": 503,
            "name": "Mango Lassi",
            "price": 4.99
          }
        ]
      },
      {
        "id": 6,
        "name": "Fresh and Green",
        "cuisine": "Vegetarian",
        "address": "234 Elm Street, Greensville",
        "phone": "+1 (555) 654-3210",
        "image": "https://example.com/fresh_and_green.jpg",
        "rating": 4.9,
        "menu": [
          {
            "id": 601,
            "name": "Avocado Salad",
            "price": 9.99
          },
          {
            "id": 602,
            "name": "Quinoa Bowl",
            "price": 12.99
          },
          {
            "id": 603,
            "name": "Vegan Chocolate Cake",
            "price": 7.99
          }
        ]
      },
      {
        "id": 7,
        "name": "Seafood Paradise",
        "cuisine": "Seafood",
        "address": "345 Ocean Boulevard, Beachtown",
        "phone": "+1 (555) 789-0123",
        "image": "https://example.com/seafood_paradise.jpg",
        "rating": 4.3,
        "menu": [
          {
            "id": 701,
            "name": "Grilled Salmon",
            "price": 16.99
          },
          {
            "id": 702,
            "name": "Shrimp Scampi",
            "price": 14.99
          },
          {
            "id": 703,
            "name": "Lobster Bisque",
            "price": 10.99
          }
        ]
      },
      {
        "id": 8,
        "name": "Café Cappuccino",
        "cuisine": "Coffee Shop",
        "address": "456 Espresso Lane, Mochaville",
        "phone": "+1 (555) 012-3456",
        "image": "https://example.com/cafe_cappuccino.jpg",
        "rating": 4.7,
        "menu": [
          {
            "id": 801,
            "name": "Cappuccino",
            "price": 3.99
          },
          {
            "id": 802,
            "name": "Croissant",
            "price": 2.99
          },
          {
            "id": 803,
            "name": "Chocolate Muffin",
            "price": 4.49
          }
        ]
      },
      {
        "id": 9,
        "name": "Mediterranean Flavors",
        "cuisine": "Mediterranean",
        "address": "789 Olive Street, Meditown",
        "phone": "+1 (555) 456-7890",
        "image": "https://example.com/mediterranean_flavors.jpg",
        "rating": 4.4,
        "menu": [
          {
            "id": 901,
            "name": "Hummus Platter",
            "price": 8.99
          },
          {
            "id": 902,
            "name": "Greek Salad",
            "price": 10.99
          },
          {
            "id": 903,
            "name": "Baklava",
            "price": 6.99
          }
        ]
      },
      {
        "id": 10,
        "name": "Rustic Pizzeria",
        "cuisine": "Pizza",
        "address": "234 Woodland Avenue, Pizzaville",
        "phone": "+1 (555) 789-1234",
        "image": "https://example.com/rustic_pizzeria.jpg",
        "rating": 4.1,
        "menu": [
          {
            "id": 1001,
            "name": "Pepperoni Pizza",
            "price": 14.99
          },
          {
            "id": 1002,
            "name": "Vegetarian Supreme",
            "price": 12.99
          },
          {
            "id": 1003,
            "name": "Garlic Knots",
            "price": 5.99
          }
        ]
      }
    ];

    export default resList;
  