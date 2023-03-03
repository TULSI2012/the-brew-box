const products = [
    {
        "id": 1,
        "title": "Ethiopian Yirgacheffe",
        "price": 15,
        "bestSeller" : true,
        "description": "This medium-roasted coffee features a floral aroma and bright acidity, with notes of lemon, blueberry, and chocolate in the cup.",
        "collection": "Ethiopian",
        "flavours": "Lemon, blueberry, chocolate",
        "geography": "Ethiopia",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 2,
        "title": "Colombian Supremo",
        "price": 15,
        "bestSeller" : true,
        "description": "This dark-roasted coffee is full-bodied with a rich, smooth flavor and a slightly sweet finish. It has notes of caramel, nutmeg, and dark chocolate.",
        "collection": "Colombian",
        "flavours": "Caramel, nutmeg, dark chocolate",
        "geography": "Colombia",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 3,
        "title": "Guatemalan Huehuetenango",
        "price": 15,
        "bestSeller" : true,
        "description": "This medium-roasted coffee has a bright, clean taste with notes of honey, apricot, and citrus. It has a medium body and a smooth finish.",
        "collection": "Roaster",
        "flavours": "Honey, apricot, citrus",
        "geography": "Guatemala",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 4,
        "title": "Costa Rican Tarrazu",
        "price": 15,
        "bestSeller" : true,
        "description": "This light-roasted coffee is known for its bright acidity and clean finish. It has notes of tangerine, caramel, and milk chocolate.",
        "collection": "Seasonal",
        "flavours": "Caramel, Milk chocolate",
        "geography": "Costa Rica",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 5,
        "title": "Colombian Blue Mountain",
        "price": 15,
        "bestSeller" : true,
        "description": "This medium-roasted coffee is highly sought after for its unique flavor and aroma. It has a delicate sweetness with notes of nuts, spices, and a hint of citrus.",
        "collection": "Colombian",
        "flavours": "Nuts, spices, citrus",
        "geography": "Jamaica",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 6,
        "title": "Tanzanian Peaberry",
        "price": 15,
        "bestSeller" : true,
        "description": "This light-roasted coffee has a bright, fruity flavor with notes of black currant, peach, and a hint of chocolate. It has a smooth finish and a medium body.",
        "collection": "Espresso",
        "flavours": "Black currant, Peach",
        "geography": "Tanzania",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 7,
        "title": "Sumatran Mandheling",
        "price": 15,
        "bestSeller" : true,
        "description": "This dark-roasted coffee has a heavy body and a complex, earthy flavor with notes of dark chocolate, tobacco, and a hint of spice.",
        "collection": "Signature",
        "flavours": "Dark chocolate, Tobacco, Spice",
        "geography": "Sumatra",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 8,
        "title": "Brazilian Santos",
        "price": 15,
        "bestSeller" : true,
        "description": "This medium-roasted coffee has a smooth, nutty flavor with notes of chocolate and a subtle fruitiness. It has a medium body and a clean finish.",
        "collection": "Roaster",
        "flavours": "Nutty, chocolate, fruit",
        "geography": "Brazil",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 9,
        "title": "Mexican Chiapas",
        "price": 15,
        "bestSeller" : false,
        "description": "This light-roasted coffee has a bright, clean taste with notes of caramel, nuts, and a hint of cinnamon. It has a medium body and a smooth finish.",
        "collection": "Seasonal",
        "flavours": "Caramel, nuts, cinnamon",
        "geography": "Mexico",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 10,
        "title": "Ethiopian Sidamo",
        "price": 15,
        "bestSeller" : false,
        "description": "This medium-roasted coffee has a balanced flavor with notes of blueberry, dark chocolate, and a hint of citrus. It has a medium body and a smooth finish.",
        "collection": "Ethiopian",
        "flavours": "Blueberry, Dark chocolate",
        "geography": "Ethiopia",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 11,
        "title": "Kenyan AA",
        "price": 15,
        "bestSeller" : false,
        "description": "This light-roasted coffee is known for its bright acidity and complex flavor profile. It has notes of black currant, grapefruit, and a hint of floral sweetness.",
        "collection": "Espresso",
        "flavours": "Black currant, Grapefruit",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 12,
        "title": " Indonesian Sulawesi",
        "price": 15,
        "bestSeller" : false,
        "description": "This medium-dark roasted coffee has a rich, full-bodied flavor with notes of dark chocolate, molasses, and a hint of spice. It has a smooth finish and a low acidity.",
        "collection": "Signature",
        "flavours": "Dark chocolate, molasses, spice",
        "geography": "Indonesia",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 13,
        "title": "Rwandan Bourbon",
        "price": 15,
        "bestSeller" : false,
        "description": "This medium-roasted coffee has a bright, fruity flavor with notes of red currant, honey, and a hint of floral sweetness. It has a medium body and a clean finish.",
        "collection": "Roaster",
        "flavours": "Red currant, floral sweetness",
        "geography": "Rwanda",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 14,
        "title": "Peruvian Coffee",
        "price": 15,
        "bestSeller" : false,
        "description": "This light-roasted coffee has a smooth, balanced flavor with notes of chocolate, caramel, and a hint of nuttiness. It has a medium body and a clean finish.",
        "collection": "Seasonal",
        "flavours": "Chocolate, caramel, nuttiness",
        "geography": "Peru",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
        
    },
    {
        "id": 15,
        "title": "Vietnamese Coffee",
        "price": 15,
        "bestSeller" : false,
        "description": "This dark-roasted coffee is known for its strong, bold flavor with notes of dark chocolate, hazelnut, and a hint of vanilla. It has a full body and a smooth finish.",
        "collection": "Espresso",
        "flavours": "Dark chocolate, hazelnut",
        "geography": "Vietnam",
        "bean": "Robusta",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 16,
        "title": "Indian Monsooned Malabar",
        "price": 15,
        "bestSeller" : false,
        "description": "This medium-dark roasted coffee has a unique, earthy flavor with notes of spice, tobacco, and a hint of fruitiness. It has a low acidity and a full body.",
        "collection": "Signature",
        "flavours": "Spice, tobacco, fruitiness",
        "geography": "India",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 17,
        "title": "Yemeni Mocha",
        "price": 15,
        "bestSeller" : false,
        "description": "This light-roasted coffee is known for its complex, fruity flavor with notes of blackberry, apricot, and a hint of wine. It has a medium body and a clean finish.",
        "collection": "Signature",
        "flavours": "Blackberry, apricot, wine",
        "geography": "Yemen",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
    {
        "id": 18,
        "title": "Nicaraguan Coffee",
        "price": 15,
        "bestSeller" : false,
        "description": "This medium-roasted coffee has a smooth, nutty flavor with notes of caramel, almond, and a hint of honey. It has a medium body and a clean finish.",
        "collection": "Espresso",
        "flavours": "Nutty, caramel, Almond",
        "geography": "Nicaragua",
        "bean": "Arabica",
        "image": "/coffee-bag.png",
        "rating": {
          "rate": 3.9,
          "count": 120
        }
    },
]

export default products
