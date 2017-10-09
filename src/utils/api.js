/*
const API_ID = process.env.REACT_APP_API_ID
const APP_KEY = process.env.REACT_APP_APP_KEY

 export function fetchRecipes (food = '') {
  food = food.trim()

  return fetch(`https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${APP_KEY}`)
    .then((res) => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe))
}
 */

export const fetchRecipes = (food = '') => new Promise(function (then) {
    const hits = result["hits"];
    console.log(hits);
    then(hits.map(({ recipe }) => recipe))
});
  


const result = {
    "q" : "Pizza",
    "from" : 0,
    "to" : 10,
    "params" : {
      "sane" : [ ],
      "q" : [ "Pizza" ]
    },
    "more" : true,
    "count" : 7491,
    "hits" : [ {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_23086a94b64c2ba96e12b0dde8b23eb4",
        "label" : "Pizza Frizza",
        "image" : "https://www.edamam.com/web-img/9a8/9a87dd2cd93448b915b0199a2e2c646e.jpg",
        "source" : "Martha Stewart",
        "url" : "http://www.marthastewart.com/284463/pizza-frizza",
        "shareAs" : "http://www.edamam.com/recipe/pizza-frizza-23086a94b64c2ba96e12b0dde8b23eb4/pizza",
        "yield" : 4.0,
        "dietLabels" : [ ],
        "healthLabels" : [ "Vegan", "Vegetarian", "Dairy-Free", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "1 basic pizza dough", "Sugar", "Oil" ],
        "ingredients" : [ {
          "text" : "1 basic pizza dough",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "pizza dough",
          "weight" : 228.0
        }, {
          "text" : "Sugar",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Sugar",
          "weight" : 2.736
        }, {
          "text" : "Oil",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Oil",
          "weight" : 3.1008
        } ],
        "calories" : 655.8793919999999,
        "totalWeight" : 233.83679999999998,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 655.8793919999999,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 11.0808,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 2.17777392,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 0.012248160000000001,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 3.813422208,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 4.041827135999999,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 116.73545279999999,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 6.156,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 4.622928,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 20.064,
            "unit" : "g"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 1397.66736,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 177.86735999999996,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 61.559999999999995,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 250.85472,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 6.704567999999999,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 1.9610736,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 234.83999999999997,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 1.0784399999999998,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 0.66627984,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 9.98868,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 0.10944,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 693.1199999999999,
            "unit" : "µg"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 1.20259968,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 4.9468704,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 32.7939696,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 17.047384615384615,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 10.8888696,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 38.91181759999999,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 24.624000000000002,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 40.128,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 58.23614,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 17.786735999999998,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 15.389999999999997,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 7.167277714285714,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 37.2476,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 13.073824,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 33.54857142857142,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 71.89599999999999,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 39.19293176470588,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 49.943400000000004,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 5.4719999999999995,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 173.27999999999997,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 6.0129984,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 6.183587999999999,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 11.0808,
          "hasRDI" : true,
          "daily" : 17.047384615384615,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 2.17777392,
            "hasRDI" : true,
            "daily" : 10.8888696,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.012248160000000001,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 3.813422208,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 4.041827135999999,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 116.73545279999999,
          "hasRDI" : true,
          "daily" : 38.91181759999999,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 110.57945279999998,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 6.156,
            "hasRDI" : true,
            "daily" : 24.624000000000002,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 4.622928,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 20.064,
          "hasRDI" : true,
          "daily" : 40.128,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 1397.66736,
          "hasRDI" : true,
          "daily" : 58.23614,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 177.86735999999996,
          "hasRDI" : true,
          "daily" : 17.786735999999998,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 61.559999999999995,
          "hasRDI" : true,
          "daily" : 15.389999999999997,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 250.85472,
          "hasRDI" : true,
          "daily" : 7.167277714285714,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 6.704567999999999,
          "hasRDI" : true,
          "daily" : 37.2476,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 1.9610736,
          "hasRDI" : true,
          "daily" : 13.073824,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 234.83999999999997,
          "hasRDI" : true,
          "daily" : 33.54857142857142,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 1.0784399999999998,
          "hasRDI" : true,
          "daily" : 71.89599999999999,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 0.66627984,
          "hasRDI" : true,
          "daily" : 39.19293176470588,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 9.98868,
          "hasRDI" : true,
          "daily" : 49.943400000000004,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 0.10944,
          "hasRDI" : true,
          "daily" : 5.4719999999999995,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 693.1199999999999,
          "hasRDI" : true,
          "daily" : 173.27999999999997,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 1.20259968,
          "hasRDI" : true,
          "daily" : 6.0129984,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 4.9468704,
          "hasRDI" : true,
          "daily" : 6.183587999999999,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_3b53c9a0508d5f707a0dfd525f1e4412",
        "label" : "Breakfast Pizza",
        "image" : "https://www.edamam.com/web-img/2cc/2cc78c72b75b0c31f6f2bbe6060acf24.jpg",
        "source" : "Leite's Culinaria",
        "url" : "http://leitesculinaria.com/94320/recipes-breakfast-pizza.html",
        "shareAs" : "http://www.edamam.com/recipe/breakfast-pizza-3b53c9a0508d5f707a0dfd525f1e4412/pizza",
        "yield" : 14.0,
        "dietLabels" : [ "Low-Carb" ],
        "healthLabels" : [ "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "12 slices thick-cut, applewood-smoked bacon", "1 batch Pizza Dough", "1/2 cup crème fraîche", "1 cup Caramelized Onions", "8 large eggs", "2 cups shredded part-skim mozzarella cheese" ],
        "ingredients" : [ {
          "text" : "12 slices thick-cut, applewood-smoked bacon",
          "quantity" : 12.0,
          "measure" : "slice",
          "food" : "applewood-smoked bacon",
          "weight" : 336.0
        }, {
          "text" : "1 batch Pizza Dough",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "Pizza Dough",
          "weight" : 228.0
        }, {
          "text" : "1/2 cup crème fraîche",
          "quantity" : 0.5,
          "measure" : "cup",
          "food" : "crème fraîche",
          "weight" : 112.0
        }, {
          "text" : "1 cup Caramelized Onions",
          "quantity" : 1.0,
          "measure" : "cup",
          "food" : "Caramelized Onions",
          "weight" : 160.0
        }, {
          "text" : "8 large eggs",
          "quantity" : 8.0,
          "measure" : "<unit>",
          "food" : "large eggs",
          "weight" : 400.0
        }, {
          "text" : "2 cups shredded part-skim mozzarella cheese",
          "quantity" : 2.0,
          "measure" : "cup",
          "food" : "mozzarella cheese",
          "weight" : 224.0
        } ],
        "calories" : 3583.48,
        "totalWeight" : 1460.0,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 3583.48,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 256.82959999999997,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 106.93964,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 0.59888,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 96.51584,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 35.20936,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 144.8832,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 8.876,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 19.0044,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 165.16960000000003,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 1967.3600000000001,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 5839.4,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1866.6400000000003,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 224.12,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 2027.6,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 16.0552,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 17.2936,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 2608.76,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 1315.3600000000001,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 12.848000000000003,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 2.3155599999999996,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 3.60656,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 24.320840000000004,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 2.0779199999999998,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 937.2799999999999,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 7.1888000000000005,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 437.76,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 7.3012,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 12.192000000000002,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 179.174,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 395.1224615384615,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 534.6982,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 48.294399999999996,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 35.504,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 330.33920000000006,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 655.7866666666666,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 243.30833333333334,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 186.66400000000002,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 56.03,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 57.93142857142857,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 89.19555555555556,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 115.29066666666668,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 372.68000000000006,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 146.1511111111111,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 21.413333333333338,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 154.37066666666664,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 212.15058823529412,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 121.60420000000002,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 103.89599999999999,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 234.31999999999996,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 119.81333333333335,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 109.44,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 36.506,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 15.240000000000004,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 256.82959999999997,
          "hasRDI" : true,
          "daily" : 395.1224615384615,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 106.93964,
            "hasRDI" : true,
            "daily" : 534.6982,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.59888,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 96.51584,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 35.20936,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 144.8832,
          "hasRDI" : true,
          "daily" : 48.294399999999996,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 136.00719999999998,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 8.876,
            "hasRDI" : true,
            "daily" : 35.504,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 19.0044,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 165.16960000000003,
          "hasRDI" : true,
          "daily" : 330.33920000000006,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 1967.3600000000001,
          "hasRDI" : true,
          "daily" : 655.7866666666666,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 5839.4,
          "hasRDI" : true,
          "daily" : 243.30833333333334,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1866.6400000000003,
          "hasRDI" : true,
          "daily" : 186.66400000000002,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 224.12,
          "hasRDI" : true,
          "daily" : 56.03,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 2027.6,
          "hasRDI" : true,
          "daily" : 57.93142857142857,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 16.0552,
          "hasRDI" : true,
          "daily" : 89.19555555555556,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 17.2936,
          "hasRDI" : true,
          "daily" : 115.29066666666668,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 2608.76,
          "hasRDI" : true,
          "daily" : 372.68000000000006,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 1315.3600000000001,
          "hasRDI" : true,
          "daily" : 146.1511111111111,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 12.848000000000003,
          "hasRDI" : true,
          "daily" : 21.413333333333338,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 2.3155599999999996,
          "hasRDI" : true,
          "daily" : 154.37066666666664,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 3.60656,
          "hasRDI" : true,
          "daily" : 212.15058823529412,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 24.320840000000004,
          "hasRDI" : true,
          "daily" : 121.60420000000002,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 2.0779199999999998,
          "hasRDI" : true,
          "daily" : 103.89599999999999,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 937.2799999999999,
          "hasRDI" : true,
          "daily" : 234.31999999999996,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 7.1888000000000005,
          "hasRDI" : true,
          "daily" : 119.81333333333335,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 437.76,
          "hasRDI" : true,
          "daily" : 109.44,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 7.3012,
          "hasRDI" : true,
          "daily" : 36.506,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 12.192000000000002,
          "hasRDI" : true,
          "daily" : 15.240000000000004,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_8bd6cf59300b9d01d6657a46f74f7ab8",
        "label" : "Pizza Pronto",
        "image" : "https://www.edamam.com/web-img/3ce/3ce9101bab9dd8ed3e493f76b6d70b69.jpg",
        "source" : "Self",
        "url" : "http://www.self.com/challenge/2011/nutrition/recipe/dinners/pizza-pronto",
        "shareAs" : "http://www.edamam.com/recipe/pizza-pronto-8bd6cf59300b9d01d6657a46f74f7ab8/pizza",
        "yield" : 4.0,
        "dietLabels" : [ "Balanced" ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "1/2 Kashi Mediterranean Pizza" ],
        "ingredients" : [ {
          "text" : "1/2 Kashi Mediterranean Pizza",
          "quantity" : 0.5,
          "measure" : "<unit>",
          "food" : "Pizza",
          "weight" : 226.0
        } ],
        "calories" : 605.68,
        "totalWeight" : 226.0,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 605.68,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 27.752799999999997,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 9.65472,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 9.59596,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 4.30078,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 65.58519999999999,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 4.9719999999999995,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 8.0682,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 23.413599999999995,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 31.639999999999997,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 1010.2199999999999,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 404.53999999999996,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 51.98,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 343.52,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 5.130199999999999,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 2.9832,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 404.53999999999996,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 149.16,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 2.7119999999999997,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 0.47685999999999995,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 0.5830799999999999,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 4.96296,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 0.18758,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 146.89999999999998,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 1.7628,
            "unit" : "µg"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 2.2826,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 14.915999999999999,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 30.283999999999995,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 42.69661538461538,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 48.2736,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 21.86173333333333,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 19.887999999999998,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 46.82719999999999,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 10.546666666666665,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 42.092499999999994,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 40.454,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 12.995,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 9.814857142857143,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 28.50111111111111,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 19.887999999999998,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 57.79142857142857,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 16.573333333333334,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 4.52,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 31.790666666666663,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 34.29882352941176,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 24.814799999999998,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 9.379,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 36.724999999999994,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 29.38,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 11.413,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 18.645,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 27.752799999999997,
          "hasRDI" : true,
          "daily" : 42.69661538461538,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 9.65472,
            "hasRDI" : true,
            "daily" : 48.2736,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 9.59596,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 4.30078,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 65.58519999999999,
          "hasRDI" : true,
          "daily" : 21.86173333333333,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 60.613199999999985,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 4.9719999999999995,
            "hasRDI" : true,
            "daily" : 19.887999999999998,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 8.0682,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 23.413599999999995,
          "hasRDI" : true,
          "daily" : 46.82719999999999,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 31.639999999999997,
          "hasRDI" : true,
          "daily" : 10.546666666666665,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 1010.2199999999999,
          "hasRDI" : true,
          "daily" : 42.092499999999994,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 404.53999999999996,
          "hasRDI" : true,
          "daily" : 40.454,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 51.98,
          "hasRDI" : true,
          "daily" : 12.995,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 343.52,
          "hasRDI" : true,
          "daily" : 9.814857142857143,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 5.130199999999999,
          "hasRDI" : true,
          "daily" : 28.50111111111111,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 2.9832,
          "hasRDI" : true,
          "daily" : 19.887999999999998,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 404.53999999999996,
          "hasRDI" : true,
          "daily" : 57.79142857142857,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 149.16,
          "hasRDI" : true,
          "daily" : 16.573333333333334,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 2.7119999999999997,
          "hasRDI" : true,
          "daily" : 4.52,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 0.47685999999999995,
          "hasRDI" : true,
          "daily" : 31.790666666666663,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 0.5830799999999999,
          "hasRDI" : true,
          "daily" : 34.29882352941176,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 4.96296,
          "hasRDI" : true,
          "daily" : 24.814799999999998,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 0.18758,
          "hasRDI" : true,
          "daily" : 9.379,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 146.89999999999998,
          "hasRDI" : true,
          "daily" : 36.724999999999994,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 1.7628,
          "hasRDI" : true,
          "daily" : 29.38,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 0.0,
          "hasRDI" : false,
          "daily" : 0.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 2.2826,
          "hasRDI" : true,
          "daily" : 11.413,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 14.915999999999999,
          "hasRDI" : true,
          "daily" : 18.645,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_1b6dfeaf0988f96b187c7c9bb69a14fa",
        "label" : "Pizza Dough",
        "image" : "https://www.edamam.com/web-img/284/2849b3eb3b46aa0e682572d48f86d487.jpg",
        "source" : "Lottie + Doof",
        "url" : "http://www.lottieanddoof.com/2010/01/pizza-pulp-fiction-jim-lahey/",
        "shareAs" : "http://www.edamam.com/recipe/pizza-dough-1b6dfeaf0988f96b187c7c9bb69a14fa/pizza",
        "yield" : 4.0,
        "dietLabels" : [ "High-Fiber" ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "500 g bread flour(3 3/4 cups)", "2 1/2 tsp Dry Yeast instant or active (10 grams)", "3/4 tsp Table Salt(5 grams)", "3/4 tsp Sugar, plus a pinch (about 3 grams)", "1 1/2 cup water at room temperature", "extra-virgin olive oil for pans", "2 x yellow onions(medium), finely chopped (pizza cipolla)", "1/3 cup Heavy Cream(pizza cipolla)", "1 tsp Kosher Salt(pizza cipolla)", "2 tsp fresh thyme, coarsely chopped(pizza cipolla)", "7 oz diced tomatoes, drained(pizza pomodoro)", "3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)", "2 tsp Extra Virgin Olive Oil(pizza pomodoro)", "1/2 tsp Kosher Salt(pizza pomodoro)", "1 pinch Red Pepper Flakes(pizza pomodoro)", "8 x fresh basil (large leaves), chopped(pizza pomodoro)" ],
        "ingredients" : [ {
          "text" : "500 g bread flour(3 3/4 cups)",
          "quantity" : 3.75,
          "measure" : "cup",
          "food" : "bread flour",
          "weight" : 513.75
        }, {
          "text" : "2 1/2 tsp Dry Yeast instant or active (10 grams)",
          "quantity" : 10.0,
          "measure" : "gram",
          "food" : "Yeast",
          "weight" : 10.0
        }, {
          "text" : "3/4 tsp Table Salt(5 grams)",
          "quantity" : 5.0,
          "measure" : "gram",
          "food" : "Table Salt",
          "weight" : 5.0
        }, {
          "text" : "3/4 tsp Sugar, plus a pinch (about 3 grams)",
          "quantity" : 0.75,
          "measure" : "teaspoon",
          "food" : "Sugar",
          "weight" : 3.1500000953674316
        }, {
          "text" : "3/4 tsp Sugar, plus a pinch (about 3 grams)",
          "quantity" : 1.0,
          "measure" : "pinch",
          "food" : "Sugar",
          "weight" : 3.0
        }, {
          "text" : "1 1/2 cup water at room temperature",
          "quantity" : 1.5,
          "measure" : "cup",
          "food" : "water",
          "weight" : 355.5
        }, {
          "text" : "extra-virgin olive oil for pans",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "extra-virgin olive oil",
          "weight" : 21.79558089108467
        }, {
          "text" : "2 x yellow onions(medium), finely chopped (pizza cipolla)",
          "quantity" : 2.0,
          "measure" : "<unit>",
          "food" : "yellow onions(medium), finely chopped",
          "weight" : 220.0
        }, {
          "text" : "1/3 cup Heavy Cream(pizza cipolla)",
          "quantity" : 0.3333333432674408,
          "measure" : "cup",
          "food" : "Heavy Cream",
          "weight" : 79.33333587646484
        }, {
          "text" : "1 tsp Kosher Salt(pizza cipolla)",
          "quantity" : 1.0,
          "measure" : "teaspoon",
          "food" : "Kosher Salt",
          "weight" : 4.924167156219482
        }, {
          "text" : "2 tsp fresh thyme, coarsely chopped(pizza cipolla)",
          "quantity" : 2.0,
          "measure" : "teaspoon",
          "food" : "fresh thyme, coarsely chopped",
          "weight" : 1.600000023841858
        }, {
          "text" : "7 oz diced tomatoes, drained(pizza pomodoro)",
          "quantity" : 7.0,
          "measure" : "ounce",
          "food" : "diced tomatoes, drained",
          "weight" : 198.4466552734375
        }, {
          "text" : "3/4 cup Canned Tomatoes (reserved juice) (pizza pomodoro)",
          "quantity" : 0.75,
          "measure" : "cup",
          "food" : "Canned Tomatoes",
          "weight" : 180.0
        }, {
          "text" : "2 tsp Extra Virgin Olive Oil(pizza pomodoro)",
          "quantity" : 2.0,
          "measure" : "teaspoon",
          "food" : "Extra Virgin Olive Oil",
          "weight" : 9.0
        }, {
          "text" : "1/2 tsp Kosher Salt(pizza pomodoro)",
          "quantity" : 0.5,
          "measure" : "teaspoon",
          "food" : "Kosher Salt",
          "weight" : 2.462083578109741
        }, {
          "text" : "1 pinch Red Pepper Flakes(pizza pomodoro)",
          "quantity" : 1.0,
          "measure" : "pinch",
          "food" : "Red Pepper Flakes",
          "weight" : 0.44999998807907104
        }, {
          "text" : "8 x fresh basil (large leaves), chopped(pizza pomodoro)",
          "quantity" : 8.0,
          "measure" : "<unit>",
          "food" : "fresh basil",
          "weight" : 16.0
        } ],
        "calories" : 2612.149409049986,
        "totalWeight" : 1620.3938612620184,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 2612.149409049986,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 70.81127680190205,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 24.127731591024038,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 32.30420370750418,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 8.595369633066694,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 419.8571791033684,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 26.55288645029068,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 29.016644874370098,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 73.2743169620216,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 108.68667015075683,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 5306.014792426176,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 356.5897206249566,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 216.39836156606677,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 1780.211969254288,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 26.55422581951315,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 6.38974890972376,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 751.3345996302367,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 457.16184131562704,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 70.25567860877514,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 7.573055601687432,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 3.4102123298853644,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 46.02201368593633,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 1.0861829544723034,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 1800.9260658550265,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 0.1498000045776367,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 21.420000686645505,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 9.854169480718442,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 100.10781947201673,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 130.60747045249929,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 108.94042584908007,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 120.6386579551202,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 139.95239303445612,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 106.21154580116271,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 146.5486339240432,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 36.228890050252275,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 221.083949684424,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 35.658972062495664,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 54.09959039151669,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 50.86319912155109,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 147.52347677507305,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 42.598326064825066,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 107.33351423289095,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 50.79576014618078,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 117.0927976812919,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 504.8703734458288,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 200.6007252873744,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 230.11006842968163,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 54.30914772361517,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 450.23151646375663,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 2.496666742960612,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 5.355000171661376,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 49.270847403592214,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 125.13477434002091,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 70.81127680190205,
          "hasRDI" : true,
          "daily" : 108.94042584908007,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 24.127731591024038,
            "hasRDI" : true,
            "daily" : 120.6386579551202,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 32.30420370750418,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 8.595369633066694,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 419.8571791033684,
          "hasRDI" : true,
          "daily" : 139.95239303445612,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 393.30429265307777,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 26.55288645029068,
            "hasRDI" : true,
            "daily" : 106.21154580116271,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 29.016644874370098,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 73.2743169620216,
          "hasRDI" : true,
          "daily" : 146.5486339240432,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 108.68667015075683,
          "hasRDI" : true,
          "daily" : 36.228890050252275,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 5306.014792426176,
          "hasRDI" : true,
          "daily" : 221.083949684424,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 356.5897206249566,
          "hasRDI" : true,
          "daily" : 35.658972062495664,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 216.39836156606677,
          "hasRDI" : true,
          "daily" : 54.09959039151669,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 1780.211969254288,
          "hasRDI" : true,
          "daily" : 50.86319912155109,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 26.55422581951315,
          "hasRDI" : true,
          "daily" : 147.52347677507305,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 6.38974890972376,
          "hasRDI" : true,
          "daily" : 42.598326064825066,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 751.3345996302367,
          "hasRDI" : true,
          "daily" : 107.33351423289095,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 457.16184131562704,
          "hasRDI" : true,
          "daily" : 50.79576014618078,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 70.25567860877514,
          "hasRDI" : true,
          "daily" : 117.0927976812919,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 7.573055601687432,
          "hasRDI" : true,
          "daily" : 504.8703734458288,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 3.4102123298853644,
          "hasRDI" : true,
          "daily" : 200.6007252873744,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 46.02201368593633,
          "hasRDI" : true,
          "daily" : 230.11006842968163,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 1.0861829544723034,
          "hasRDI" : true,
          "daily" : 54.30914772361517,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 1800.9260658550265,
          "hasRDI" : true,
          "daily" : 450.23151646375663,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 0.1498000045776367,
          "hasRDI" : true,
          "daily" : 2.496666742960612,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 21.420000686645505,
          "hasRDI" : true,
          "daily" : 5.355000171661376,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 9.854169480718442,
          "hasRDI" : true,
          "daily" : 49.270847403592214,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 100.10781947201673,
          "hasRDI" : true,
          "daily" : 125.13477434002091,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_2a8e26625b572ca52865c4ac9493c6c8",
        "label" : "Pizza",
        "image" : "https://www.edamam.com/web-img/f2b/f2b3fc42f971644191de4b5028d9e218.jpg",
        "source" : "Cooking Channel",
        "url" : "http://www.cookingchanneltv.com/recipes/pizza.html",
        "shareAs" : "http://www.edamam.com/recipe/pizza-2a8e26625b572ca52865c4ac9493c6c8/pizza",
        "yield" : 12.0,
        "dietLabels" : [ "Balanced" ],
        "healthLabels" : [ "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "1/2 pound flour", "1/2-ounce bakers yeast", "1 tablespoon water to blend yeast", "1 tablespoon olive oil, plus extra to dampen pizza at end", "Salt and pepper", "1 egg", "1/4 cup hot water", "2 (1 pound 12-ounce) tins or 3 pounds fresh egg-shaped tomatoes, skinned, seeded and roughly chopped", "2 teaspoons capers", "1/2 small tin anchovies in oil, drained", "5 slices mozzarella cheese", "10 black olive halves", "1 sprig oregano", "1 small garlic clove, finely sliced", "Freshly ground black pepper, for garnish" ],
        "ingredients" : [ {
          "text" : "1/2 pound flour",
          "quantity" : 0.5,
          "measure" : "pound",
          "food" : "flour",
          "weight" : 226.7961883544922
        }, {
          "text" : "1/2-ounce bakers yeast",
          "quantity" : 0.5,
          "measure" : "ounce",
          "food" : "yeast",
          "weight" : 14.174761772155762
        }, {
          "text" : "1 tablespoon water to blend yeast",
          "quantity" : 1.0,
          "measure" : "tablespoon",
          "food" : "yeast",
          "weight" : 12.0
        }, {
          "text" : "1 tablespoon olive oil, plus extra to dampen pizza at end",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "pizza",
          "weight" : 452.0
        }, {
          "text" : "Salt and pepper",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Salt",
          "weight" : 11.452584219932556
        }, {
          "text" : "Salt and pepper",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "pepper",
          "weight" : 5.726292109966278
        }, {
          "text" : "1 egg",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "egg",
          "weight" : 43.0
        }, {
          "text" : "1/4 cup hot water",
          "quantity" : 0.25,
          "measure" : "cup",
          "food" : "water",
          "weight" : 59.25
        }, {
          "text" : "2 (1 pound 12-ounce) tins or 3 pounds fresh egg-shaped tomatoes, skinned, seeded and roughly chopped",
          "quantity" : 2.0,
          "measure" : "pound",
          "food" : "tomatoes, skinned, seeded and roughly chopped",
          "weight" : 907.1847534179688
        }, {
          "text" : "2 teaspoons capers",
          "quantity" : 2.0,
          "measure" : "teaspoon",
          "food" : "capers",
          "weight" : 4.733333110809326
        }, {
          "text" : "1/2 small tin anchovies in oil, drained",
          "quantity" : 0.5,
          "measure" : "can",
          "food" : "anchovies in oil, drained",
          "weight" : 16.875
        }, {
          "text" : "5 slices mozzarella cheese",
          "quantity" : 5.0,
          "measure" : "slice",
          "food" : "mozzarella cheese",
          "weight" : 141.5
        }, {
          "text" : "10 black olive halves",
          "quantity" : 10.0,
          "measure" : "<unit>",
          "food" : "black olive",
          "weight" : 27.0
        }, {
          "text" : "1 sprig oregano",
          "quantity" : 1.0,
          "measure" : "sprig",
          "food" : "oregano",
          "weight" : 2.0
        }, {
          "text" : "1 small garlic clove, finely sliced",
          "quantity" : 1.0,
          "measure" : "clove",
          "food" : "small garlic clove, finely sliced",
          "weight" : 2.25
        } ],
        "calories" : 2887.3210167965935,
        "totalWeight" : 1915.4443337706343,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 2887.3210167965935,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 105.33576781110888,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 44.41755759056469,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 0.01634,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 35.140289740742624,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 13.001069040656557,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 361.8278188371965,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 37.35619360666417,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 42.356313658707805,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 130.92010165939755,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 363.51875,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 8521.148301767045,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1910.0847596308756,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 333.4020909477376,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 3702.26822418735,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 20.086232223185867,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 15.861780610284283,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 2165.8558315766245,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 1037.8950286229945,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 130.98136882734295,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 4.507028998988668,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 3.1459719581994054,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 32.41054812283989,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 1.8572554788481763,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 1141.9275337274885,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 5.108072333240509,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 72.37375,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 11.8243696507885,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 131.38164826144552,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 144.36605083982965,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 162.05502740170596,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 222.08778795282348,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 120.60927294573217,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 149.42477442665668,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 261.8402033187951,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 121.17291666666667,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 355.0478459069602,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 191.00847596308756,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 83.3505227369344,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 105.77909211963858,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 111.59017901769926,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 105.74520406856189,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 309.40797593951777,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 115.32166984699938,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 218.3022813789049,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 300.4685999325779,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 185.05717401172976,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 162.05274061419945,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 92.86277394240882,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 285.4818834318721,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 85.13453888734182,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 18.0934375,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 59.121848253942495,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 164.2270603268069,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 105.33576781110888,
          "hasRDI" : true,
          "daily" : 162.05502740170596,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 44.41755759056469,
            "hasRDI" : true,
            "daily" : 222.08778795282348,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.01634,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 35.140289740742624,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 13.001069040656557,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 361.8278188371965,
          "hasRDI" : true,
          "daily" : 120.60927294573217,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 324.4716252305323,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 37.35619360666417,
            "hasRDI" : true,
            "daily" : 149.42477442665668,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 42.356313658707805,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 130.92010165939755,
          "hasRDI" : true,
          "daily" : 261.8402033187951,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 363.51875,
          "hasRDI" : true,
          "daily" : 121.17291666666667,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 8521.148301767045,
          "hasRDI" : true,
          "daily" : 355.0478459069602,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1910.0847596308756,
          "hasRDI" : true,
          "daily" : 191.00847596308756,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 333.4020909477376,
          "hasRDI" : true,
          "daily" : 83.3505227369344,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 3702.26822418735,
          "hasRDI" : true,
          "daily" : 105.77909211963858,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 20.086232223185867,
          "hasRDI" : true,
          "daily" : 111.59017901769926,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 15.861780610284283,
          "hasRDI" : true,
          "daily" : 105.74520406856189,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 2165.8558315766245,
          "hasRDI" : true,
          "daily" : 309.40797593951777,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 1037.8950286229945,
          "hasRDI" : true,
          "daily" : 115.32166984699938,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 130.98136882734295,
          "hasRDI" : true,
          "daily" : 218.3022813789049,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 4.507028998988668,
          "hasRDI" : true,
          "daily" : 300.4685999325779,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 3.1459719581994054,
          "hasRDI" : true,
          "daily" : 185.05717401172976,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 32.41054812283989,
          "hasRDI" : true,
          "daily" : 162.05274061419945,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 1.8572554788481763,
          "hasRDI" : true,
          "daily" : 92.86277394240882,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 1141.9275337274885,
          "hasRDI" : true,
          "daily" : 285.4818834318721,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 5.108072333240509,
          "hasRDI" : true,
          "daily" : 85.13453888734182,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 72.37375,
          "hasRDI" : true,
          "daily" : 18.0934375,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 11.8243696507885,
          "hasRDI" : true,
          "daily" : 59.121848253942495,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 131.38164826144552,
          "hasRDI" : true,
          "daily" : 164.2270603268069,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_63bca78ecf26e6f4cd742bc29a867b59",
        "label" : "Lemon Pizza",
        "image" : "https://www.edamam.com/web-img/6fe/6fed47bfde361e1d24e7cb65f56d3990.jpg",
        "source" : "Food52",
        "url" : "https://food52.com/recipes/4707-lemon-pizza",
        "shareAs" : "http://www.edamam.com/recipe/lemon-pizza-63bca78ecf26e6f4cd742bc29a867b59/pizza",
        "yield" : 8.0,
        "dietLabels" : [ "Balanced" ],
        "healthLabels" : [ "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "12 ounces prepared pizza dough. (see my blog for recipe)", "2-3 whole lemons, ends removed and discarded, sliced paper thin", "Freshly ground pepper", "Extra-virgin olive oil", "1/4 cup créme fraîche", "4 ounces smoked salmon" ],
        "ingredients" : [ {
          "text" : "12 ounces prepared pizza dough. (see my blog for recipe)",
          "quantity" : 12.0,
          "measure" : "ounce",
          "food" : "prepared pizza dough",
          "weight" : 340.19427490234375
        }, {
          "text" : "2-3 whole lemons, ends removed and discarded, sliced paper thin",
          "quantity" : 2.5,
          "measure" : "<unit>",
          "food" : "whole lemons, ends removed and discarded, sliced paper thin",
          "weight" : 145.0
        }, {
          "text" : "Freshly ground pepper",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Freshly ground pepper",
          "weight" : 1.9637771072387695
        }, {
          "text" : "Extra-virgin olive oil",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Extra-virgin olive oil",
          "weight" : 8.90245621948242
        }, {
          "text" : "1/4 cup créme fraîche",
          "quantity" : 0.25,
          "measure" : "cup",
          "food" : "créme fraîche",
          "weight" : 56.0
        }, {
          "text" : "4 ounces smoked salmon",
          "quantity" : 4.0,
          "measure" : "ounce",
          "food" : "smoked salmon",
          "weight" : 113.3980941772461
        } ],
        "calories" : 1288.3590486921232,
        "totalWeight" : 665.458602406311,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 1288.3590486921232,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 37.255872643217465,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 11.719186277440553,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 14.420284352531784,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 7.412865421712554,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 186.47977291125108,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 13.742081030494692,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 8.073980655175781,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 53.62450424844894,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 55.2015616607666,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 2877.2169025682992,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 385.91388193058776,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 132.8221700289154,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 877.9079895201569,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 12.171331994577484,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 3.6003738036857604,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 627.0757454295349,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 130.02372430503846,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 77.354,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 1.7154813612246702,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 1.236754156626892,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 20.484787200973436,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 0.6321745451479339,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 1056.6623996949006,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 3.8535778701782224,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 784.6169451141358,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 4.27926341802063,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 13.777711161683653,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 64.41795243460616,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 57.31672714341149,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 58.59593138720277,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 62.15992430375035,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 54.96832412197877,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 107.24900849689787,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 18.400520553588866,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 119.88403760701246,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 38.591388193058776,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 33.20554250722885,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 25.083085414861625,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 67.61851108098602,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 24.002492024571737,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 89.58224934707641,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 14.447080478337606,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 128.92333333333332,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 114.36542408164468,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 72.75024450746425,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 102.42393600486719,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 31.608727257396694,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 264.16559992372515,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 64.22629783630371,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 196.15423627853394,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 21.39631709010315,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 17.222138952104565,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 37.255872643217465,
          "hasRDI" : true,
          "daily" : 57.31672714341149,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 11.719186277440553,
            "hasRDI" : true,
            "daily" : 58.59593138720277,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 14.420284352531784,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 7.412865421712554,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 186.47977291125108,
          "hasRDI" : true,
          "daily" : 62.15992430375035,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 172.7376918807564,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 13.742081030494692,
            "hasRDI" : true,
            "daily" : 54.96832412197877,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 8.073980655175781,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 53.62450424844894,
          "hasRDI" : true,
          "daily" : 107.24900849689787,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 55.2015616607666,
          "hasRDI" : true,
          "daily" : 18.400520553588866,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 2877.2169025682992,
          "hasRDI" : true,
          "daily" : 119.88403760701246,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 385.91388193058776,
          "hasRDI" : true,
          "daily" : 38.591388193058776,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 132.8221700289154,
          "hasRDI" : true,
          "daily" : 33.20554250722885,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 877.9079895201569,
          "hasRDI" : true,
          "daily" : 25.083085414861625,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 12.171331994577484,
          "hasRDI" : true,
          "daily" : 67.61851108098602,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 3.6003738036857604,
          "hasRDI" : true,
          "daily" : 24.002492024571737,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 627.0757454295349,
          "hasRDI" : true,
          "daily" : 89.58224934707641,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 130.02372430503846,
          "hasRDI" : true,
          "daily" : 14.447080478337606,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 77.354,
          "hasRDI" : true,
          "daily" : 128.92333333333332,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 1.7154813612246702,
          "hasRDI" : true,
          "daily" : 114.36542408164468,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 1.236754156626892,
          "hasRDI" : true,
          "daily" : 72.75024450746425,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 20.484787200973436,
          "hasRDI" : true,
          "daily" : 102.42393600486719,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 0.6321745451479339,
          "hasRDI" : true,
          "daily" : 31.608727257396694,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 1056.6623996949006,
          "hasRDI" : true,
          "daily" : 264.16559992372515,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 3.8535778701782224,
          "hasRDI" : true,
          "daily" : 64.22629783630371,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 784.6169451141358,
          "hasRDI" : true,
          "daily" : 196.15423627853394,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 4.27926341802063,
          "hasRDI" : true,
          "daily" : 21.39631709010315,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 13.777711161683653,
          "hasRDI" : true,
          "daily" : 17.222138952104565,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_1a44b7fdeacc2e065a9849f9e78bece0",
        "label" : "Pizza Bianco",
        "image" : "https://www.edamam.com/web-img/9ce/9ceb6392ae7f8a76979b87e5645559e3.jpg",
        "source" : "BBC Good Food",
        "url" : "http://www.bbcgoodfood.com/recipes/3617/",
        "shareAs" : "http://www.edamam.com/recipe/pizza-bianco-1a44b7fdeacc2e065a9849f9e78bece0/pizza",
        "yield" : 8.0,
        "dietLabels" : [ "Balanced" ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "olive oil", "1 sliced Spanish onion , sliced", "2 medium potatoes , peeled and thinly sliced", "200.0g pack pizza dough mix (from supermarkets)", "150.0g taleggio cheese , sliced (or mozzarella)", "2 sprigs rosemary , chopped", "2 garlic cloves , crushed" ],
        "ingredients" : [ {
          "text" : "olive oil",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "olive oil",
          "weight" : 12.4712
        }, {
          "text" : "1 sliced Spanish onion , sliced",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "sliced Spanish onion , sliced",
          "weight" : 125.0
        }, {
          "text" : "2 medium potatoes , peeled and thinly sliced",
          "quantity" : 2.0,
          "measure" : "<unit>",
          "food" : "medium potatoes , peeled and thinly sliced",
          "weight" : 426.0
        }, {
          "text" : "200.0g pack pizza dough mix (from supermarkets)",
          "quantity" : 1.0,
          "measure" : "pack",
          "food" : "pizza dough mix",
          "weight" : 200.0
        }, {
          "text" : "150.0g taleggio cheese , sliced (or mozzarella)",
          "quantity" : 150.0,
          "measure" : "gram",
          "food" : "cheese , sliced",
          "weight" : 150.0
        }, {
          "text" : "2 sprigs rosemary , chopped",
          "quantity" : 2.0,
          "measure" : "sprig",
          "food" : "rosemary , chopped",
          "weight" : 10.0
        }, {
          "text" : "2 garlic cloves , crushed",
          "quantity" : 2.0,
          "measure" : "clove",
          "food" : "garlic cloves , crushed",
          "weight" : 6.0
        } ],
        "calories" : 1805.305408,
        "totalWeight" : 929.4712,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 1805.305408,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 64.32560000000001,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 31.226423296,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 1.7685,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 21.882542232000002,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 3.771314376,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 234.9458,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 18.833000000000002,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 20.502800000000004,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 69.55280000000002,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 153.0,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 2200.429424,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1595.0547119999999,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 161.57999999999998,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 2180.944712,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 15.10213872,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 6.7555000000000005,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 1004.3499999999999,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 409.1,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 97.224,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 0.45439999999999997,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 0.84287,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 4.82674,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 1.5879,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 141.99,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 1.32,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 36.0,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 3.0320172,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 20.553662400000004,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 90.26527039999999,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 98.96246153846155,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 156.13211647999998,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 78.31526666666666,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 75.33200000000001,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 139.10560000000004,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 51.0,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 91.68455933333334,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 159.5054712,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 40.394999999999996,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 62.312706057142854,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 83.90077066666666,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 45.03666666666667,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 143.4785714285714,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 45.455555555555556,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 162.04,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 30.293333333333333,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 49.58058823529412,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 24.133699999999997,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 79.39500000000001,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 35.4975,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 22.0,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 9.0,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 15.160085999999998,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 25.692078000000002,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 64.32560000000001,
          "hasRDI" : true,
          "daily" : 98.96246153846155,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 31.226423296,
            "hasRDI" : true,
            "daily" : 156.13211647999998,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 1.7685,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 21.882542232000002,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 3.771314376,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 234.9458,
          "hasRDI" : true,
          "daily" : 78.31526666666666,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 216.1128,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 18.833000000000002,
            "hasRDI" : true,
            "daily" : 75.33200000000001,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 20.502800000000004,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 69.55280000000002,
          "hasRDI" : true,
          "daily" : 139.10560000000004,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 153.0,
          "hasRDI" : true,
          "daily" : 51.0,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 2200.429424,
          "hasRDI" : true,
          "daily" : 91.68455933333334,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1595.0547119999999,
          "hasRDI" : true,
          "daily" : 159.5054712,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 161.57999999999998,
          "hasRDI" : true,
          "daily" : 40.394999999999996,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 2180.944712,
          "hasRDI" : true,
          "daily" : 62.312706057142854,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 15.10213872,
          "hasRDI" : true,
          "daily" : 83.90077066666666,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 6.7555000000000005,
          "hasRDI" : true,
          "daily" : 45.03666666666667,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 1004.3499999999999,
          "hasRDI" : true,
          "daily" : 143.4785714285714,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 409.1,
          "hasRDI" : true,
          "daily" : 45.455555555555556,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 97.224,
          "hasRDI" : true,
          "daily" : 162.04,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 0.45439999999999997,
          "hasRDI" : true,
          "daily" : 30.293333333333333,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 0.84287,
          "hasRDI" : true,
          "daily" : 49.58058823529412,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 4.82674,
          "hasRDI" : true,
          "daily" : 24.133699999999997,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 1.5879,
          "hasRDI" : true,
          "daily" : 79.39500000000001,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 141.99,
          "hasRDI" : true,
          "daily" : 35.4975,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 1.32,
          "hasRDI" : true,
          "daily" : 22.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 36.0,
          "hasRDI" : true,
          "daily" : 9.0,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 3.0320172,
          "hasRDI" : true,
          "daily" : 15.160085999999998,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 20.553662400000004,
          "hasRDI" : true,
          "daily" : 25.692078000000002,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_7523f1c7cb0095d7bbd8cd41d5294c4e",
        "label" : "Fried pizza (Pizza fritta)",
        "image" : "https://www.edamam.com/web-img/04b/04b04c37616cce012e41555408145541.jpg",
        "source" : "Jamie Oliver",
        "url" : "http://www.jamieoliver.com/recipes/bread-recipes/fried-pizza-pizza-fritta/",
        "shareAs" : "http://www.edamam.com/recipe/fried-pizza-pizza-fritta-7523f1c7cb0095d7bbd8cd41d5294c4e/pizza",
        "yield" : 10.0,
        "dietLabels" : [ ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "1 basic pizza dough recipe", "Flour, for dusting", "Vegetable oil, for frying", "2 x 150 g buffalo mozzarella balls", "5 teaspoons dried oregano, optional", "Extra virgin olive oil", "1 clove garlic, peeled and finely sliced", "1 bunch fresh basil, leaves picked", "400 g good-quality tinned plum tomatoes", "Sea salt", "Freshly ground black pepper" ],
        "ingredients" : [ {
          "text" : "1 basic pizza dough recipe",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "pizza dough",
          "weight" : 228.0
        }, {
          "text" : "Flour, for dusting",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Flour",
          "weight" : 8.145
        }, {
          "text" : "Vegetable oil, for frying",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Vegetable oil",
          "weight" : 12.308
        }, {
          "text" : "2 x 150 g buffalo mozzarella balls",
          "quantity" : 2.0,
          "measure" : "ball",
          "food" : "buffalo mozzarella balls",
          "weight" : 224.0
        }, {
          "text" : "Extra virgin olive oil",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Extra virgin olive oil",
          "weight" : 12.308
        }, {
          "text" : "1 clove garlic, peeled and finely sliced",
          "quantity" : 1.0,
          "measure" : "clove",
          "food" : "garlic, peeled and finely sliced",
          "weight" : 3.0
        }, {
          "text" : "1 bunch fresh basil, leaves picked",
          "quantity" : 1.0,
          "measure" : "bunch",
          "food" : "fresh basil, leaves picked",
          "weight" : 50.0
        }, {
          "text" : "400 g good-quality tinned plum tomatoes",
          "quantity" : 400.0,
          "measure" : "gram",
          "food" : "plum tomatoes",
          "weight" : 400.0
        }, {
          "text" : "Sea salt",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Sea salt",
          "weight" : 0.0
        }, {
          "text" : "Freshly ground black pepper",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "Freshly ground black pepper",
          "weight" : 2.715
        } ],
        "calories" : 2628.7428099999997,
        "totalWeight" : 1053.2389999999998,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 1631.91789,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 83.96333,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 34.09633007,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 0.09440236,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 34.61105216,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 8.87709723,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 144.734092,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 12.72581,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 14.9389675,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 76.134067,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 176.96,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 2825.5820600000006,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1456.3422800000003,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 189.54455000000002,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 1573.49058,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 10.832647799999997,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 9.710723499999999,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 1169.4763,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 701.6930500000001,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 64.73599999999999,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 1.3293461999999996,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 1.4251250000000002,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 13.20248495,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 0.6383544499999999,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 805.4692499999999,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 5.1072,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 35.84,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 8.131665,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 258.817306,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 81.5958945,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 129.17435384615385,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 170.48165035,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 48.244697333333335,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 50.90324,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 152.268134,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 58.986666666666665,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 117.73258583333336,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 145.63422800000004,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 47.386137500000004,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 44.95687371428571,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 60.18137666666665,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 64.73815666666665,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 167.06804285714287,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 77.96589444444446,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 107.8933333333333,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 88.62307999999997,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 83.83088235294119,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 66.01242475000001,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 31.917722499999996,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 201.36731249999997,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 85.11999999999999,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 8.96,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 40.658325000000005,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 323.5216325,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 83.96333,
          "hasRDI" : true,
          "daily" : 129.17435384615385,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 34.09633007,
            "hasRDI" : true,
            "daily" : 170.48165035,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.09440236,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 34.61105216,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 8.87709723,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 144.734092,
          "hasRDI" : true,
          "daily" : 48.244697333333335,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 132.008282,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 12.72581,
            "hasRDI" : true,
            "daily" : 50.90324,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 14.9389675,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 76.134067,
          "hasRDI" : true,
          "daily" : 152.268134,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 176.96,
          "hasRDI" : true,
          "daily" : 58.986666666666665,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 2825.5820600000006,
          "hasRDI" : true,
          "daily" : 117.73258583333336,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1456.3422800000003,
          "hasRDI" : true,
          "daily" : 145.63422800000004,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 189.54455000000002,
          "hasRDI" : true,
          "daily" : 47.386137500000004,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 1573.49058,
          "hasRDI" : true,
          "daily" : 44.95687371428571,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 10.832647799999997,
          "hasRDI" : true,
          "daily" : 60.18137666666665,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 9.710723499999999,
          "hasRDI" : true,
          "daily" : 64.73815666666665,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 1169.4763,
          "hasRDI" : true,
          "daily" : 167.06804285714287,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 701.6930500000001,
          "hasRDI" : true,
          "daily" : 77.96589444444446,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 64.73599999999999,
          "hasRDI" : true,
          "daily" : 107.8933333333333,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 1.3293461999999996,
          "hasRDI" : true,
          "daily" : 88.62307999999997,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 1.4251250000000002,
          "hasRDI" : true,
          "daily" : 83.83088235294119,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 13.20248495,
          "hasRDI" : true,
          "daily" : 66.01242475000001,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 0.6383544499999999,
          "hasRDI" : true,
          "daily" : 31.917722499999996,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 805.4692499999999,
          "hasRDI" : true,
          "daily" : 201.36731249999997,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 5.1072,
          "hasRDI" : true,
          "daily" : 85.11999999999999,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 35.84,
          "hasRDI" : true,
          "daily" : 8.96,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 8.131665,
          "hasRDI" : true,
          "daily" : 40.658325000000005,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 258.817306,
          "hasRDI" : true,
          "daily" : 323.5216325,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_e2c3b78605fd631174624bb83468b2c5",
        "label" : "Shaved asparagus pizza",
        "image" : "https://www.edamam.com/web-img/aa0/aa0469d49c151660e49c06c754190480.jpg",
        "source" : "Smitten Kitchen",
        "url" : "https://smittenkitchen.com/2010/05/shaved-asparagus-pizza/",
        "shareAs" : "http://www.edamam.com/recipe/shaved-asparagus-pizza-e2c3b78605fd631174624bb83468b2c5/pizza",
        "yield" : 1.0,
        "dietLabels" : [ "High-Fiber" ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "1 recipe really simple pizza dough or your favorite pizza dough", "1/2 pound asparagus", "1/4 cup grated parmesan", "1/2 pound mozzarella, shredded or cut into small cubes", "2 teaspoons olive oil", "1/2 teaspoon coarse salt", "Several grinds black pepper", "1 scallion, thinly sliced" ],
        "ingredients" : [ {
          "text" : "1 recipe really simple pizza dough or your favorite pizza dough",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "pizza dough",
          "weight" : 228.0
        }, {
          "text" : "1/2 pound asparagus",
          "quantity" : 0.5,
          "measure" : "pound",
          "food" : "asparagus",
          "weight" : 226.7961883544922
        }, {
          "text" : "1/4 cup grated parmesan",
          "quantity" : 0.25,
          "measure" : "cup",
          "food" : "grated parmesan",
          "weight" : 28.25
        }, {
          "text" : "1/2 pound mozzarella, shredded or cut into small cubes",
          "quantity" : 0.5,
          "measure" : "pound",
          "food" : "mozzarella, shredded or cut into small cubes",
          "weight" : 226.7961883544922
        }, {
          "text" : "2 teaspoons olive oil",
          "quantity" : 2.0,
          "measure" : "teaspoon",
          "food" : "olive oil",
          "weight" : 9.0
        }, {
          "text" : "1/2 teaspoon coarse salt",
          "quantity" : 0.5,
          "measure" : "teaspoon",
          "food" : "coarse salt",
          "weight" : 2.462083578109741
        }, {
          "text" : "Several grinds black pepper",
          "quantity" : 0.0,
          "measure" : null,
          "food" : "black pepper",
          "weight" : 2.2089133808612824
        }, {
          "text" : "1 scallion, thinly sliced",
          "quantity" : 1.0,
          "measure" : "<unit>",
          "food" : "scallion, thinly sliced",
          "weight" : 15.0
        } ],
        "calories" : 1544.2721753203366,
        "totalWeight" : 736.0512900898457,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 1544.2721753203366,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 75.33858909947045,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 37.78244624198619,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 25.468524830425338,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 6.158546390630107,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 131.18977874017847,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 11.86757504080224,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 9.081806126753234,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 85.93761220226123,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 198.37898880004883,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 4170.184160629701,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1733.3382227312254,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 157.90256675758124,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 978.3268291433834,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 13.28120202463529,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 10.672071269875788,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 1360.7276078609991,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 558.7216353420805,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 15.520586547851561,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 1.4924505323046016,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 1.737141882708597,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 12.62317013793885,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 0.4410245590320563,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 838.8827664038965,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 5.509953094482421,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 41.65489013671875,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 5.114032385440253,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 142.863767892092,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 77.21360876601683,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 115.905521691493,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 188.91223120993098,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 43.72992624672615,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 47.47030016320896,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 171.8752244045225,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 66.12632960001628,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 173.75767335957087,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 173.33382227312256,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 39.47564168939531,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 27.95219511838238,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 73.78445569241828,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 71.14714179917193,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 194.389658265857,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 62.08018170467561,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 25.867644246419268,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 99.4967021536401,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 102.18481662991746,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 63.115850689694255,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 22.051227951602815,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 209.72069160097413,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 91.83255157470701,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 10.413722534179687,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 25.570161927201262,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 178.579709865115,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 75.33858909947045,
          "hasRDI" : true,
          "daily" : 115.905521691493,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 37.78244624198619,
            "hasRDI" : true,
            "daily" : 188.91223120993098,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 25.468524830425338,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 6.158546390630107,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 131.18977874017847,
          "hasRDI" : true,
          "daily" : 43.72992624672615,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 119.32220369937623,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 11.86757504080224,
            "hasRDI" : true,
            "daily" : 47.47030016320896,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 9.081806126753234,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 85.93761220226123,
          "hasRDI" : true,
          "daily" : 171.8752244045225,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 198.37898880004883,
          "hasRDI" : true,
          "daily" : 66.12632960001628,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 4170.184160629701,
          "hasRDI" : true,
          "daily" : 173.75767335957087,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1733.3382227312254,
          "hasRDI" : true,
          "daily" : 173.33382227312256,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 157.90256675758124,
          "hasRDI" : true,
          "daily" : 39.47564168939531,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 978.3268291433834,
          "hasRDI" : true,
          "daily" : 27.95219511838238,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 13.28120202463529,
          "hasRDI" : true,
          "daily" : 73.78445569241828,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 10.672071269875788,
          "hasRDI" : true,
          "daily" : 71.14714179917193,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 1360.7276078609991,
          "hasRDI" : true,
          "daily" : 194.389658265857,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 558.7216353420805,
          "hasRDI" : true,
          "daily" : 62.08018170467561,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 15.520586547851561,
          "hasRDI" : true,
          "daily" : 25.867644246419268,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 1.4924505323046016,
          "hasRDI" : true,
          "daily" : 99.4967021536401,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 1.737141882708597,
          "hasRDI" : true,
          "daily" : 102.18481662991746,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 12.62317013793885,
          "hasRDI" : true,
          "daily" : 63.115850689694255,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 0.4410245590320563,
          "hasRDI" : true,
          "daily" : 22.051227951602815,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 838.8827664038965,
          "hasRDI" : true,
          "daily" : 209.72069160097413,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 5.509953094482421,
          "hasRDI" : true,
          "daily" : 91.83255157470701,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 41.65489013671875,
          "hasRDI" : true,
          "daily" : 10.413722534179687,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 5.114032385440253,
          "hasRDI" : true,
          "daily" : 25.570161927201262,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 142.863767892092,
          "hasRDI" : true,
          "daily" : 178.579709865115,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    }, {
      "recipe" : {
        "uri" : "http://www.edamam.com/ontologies/edamam.owl#recipe_c3095dd9cfb6f8a901ed6fbecebb3959",
        "label" : "Pizza Arizona",
        "image" : "https://www.edamam.com/web-img/9c6/9c62f24c2b5f2bd678fbefb2f94321a7.jpg",
        "source" : "Bon Appetit",
        "url" : "http://www.bonappetit.com/recipe/pizza-arizona",
        "shareAs" : "http://www.edamam.com/recipe/pizza-arizona-c3095dd9cfb6f8a901ed6fbecebb3959/pizza",
        "yield" : 2.0,
        "dietLabels" : [ "High-Fiber" ],
        "healthLabels" : [ "Vegetarian", "Egg-Free", "Peanut-Free", "Tree-Nut-Free", "Soy-Free", "Fish-Free", "Shellfish-Free" ],
        "cautions" : [ ],
        "ingredientLines" : [ "2 teaspoons yellow cornmeal", "1 10-ounce tube refrigerated pizza dough", "1 1/2 cups purchased chipotle salsa", "2 tablespoons olive oil", "1 1/2 teaspoons chili powder", "1 1/2 cups shredded mexican-style four-cheese mix or pizza cheese", "1/4 cup chopped fresh cilantro" ],
        "ingredients" : [ {
          "text" : "2 teaspoons yellow cornmeal",
          "quantity" : 2.0,
          "measure" : "teaspoon",
          "food" : "yellow cornmeal",
          "weight" : 6.599999904632568
        }, {
          "text" : "1 10-ounce tube refrigerated pizza dough",
          "quantity" : 1.0,
          "measure" : "tube",
          "food" : "refrigerated pizza dough",
          "weight" : 283.4952392578125
        }, {
          "text" : "1 1/2 cups purchased chipotle salsa",
          "quantity" : 1.5,
          "measure" : "cup",
          "food" : "salsa",
          "weight" : 390.0
        }, {
          "text" : "2 tablespoons olive oil",
          "quantity" : 2.0,
          "measure" : "tablespoon",
          "food" : "olive oil",
          "weight" : 27.0
        }, {
          "text" : "1 1/2 teaspoons chili powder",
          "quantity" : 1.5,
          "measure" : "teaspoon",
          "food" : "chili powder",
          "weight" : 4.050000190734863
        }, {
          "text" : "1 1/2 cups shredded mexican-style four-cheese mix or pizza cheese",
          "quantity" : 1.5,
          "measure" : "cup",
          "food" : "cheese",
          "weight" : 169.5
        }, {
          "text" : "1/4 cup chopped fresh cilantro",
          "quantity" : 0.25,
          "measure" : "cup",
          "food" : "chopped fresh cilantro",
          "weight" : 4.0
        } ],
        "calories" : 1844.9830985736849,
        "totalWeight" : 884.6452393531799,
        "totalNutrients" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 1844.9830985736849,
            "unit" : "kcal"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 95.62487339959144,
            "unit" : "g"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 39.21259530014038,
            "unit" : "g"
          },
          "FATRN" : {
            "label" : "Trans",
            "quantity" : 1.9984050000000002,
            "unit" : "g"
          },
          "FAMS" : {
            "label" : "Monounsaturated",
            "quantity" : 36.551196848526004,
            "unit" : "g"
          },
          "FAPU" : {
            "label" : "Polyunsaturated",
            "quantity" : 10.039719840164185,
            "unit" : "g"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 177.61331964793206,
            "unit" : "g"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 16.45317152261734,
            "unit" : "g"
          },
          "SUGAR" : {
            "label" : "Sugars",
            "quantity" : 18.625865498018264,
            "unit" : "g"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 72.80097107357979,
            "unit" : "g"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 172.89000000000001,
            "unit" : "mg"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 5697.861322112083,
            "unit" : "mg"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 1498.7642872476579,
            "unit" : "mg"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 189.99521485328674,
            "unit" : "mg"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 1661.6217667675016,
            "unit" : "mg"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 11.3763700630188,
            "unit" : "mg"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 9.230619065189362,
            "unit" : "mg"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 1246.9390969133378,
            "unit" : "mg"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 613.6525028181077,
            "unit" : "µg"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 8.518350001335143,
            "unit" : "mg"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 1.5723684816408159,
            "unit" : "mg"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 1.7579981000614167,
            "unit" : "mg"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 17.696279449272158,
            "unit" : "mg"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 1.0083117186641692,
            "unit" : "mg"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 947.2195270776749,
            "unit" : "µg"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 1.4916,
            "unit" : "µg"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 40.68,
            "unit" : "IU"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 12.429326266479492,
            "unit" : "mg"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 57.632293072700506,
            "unit" : "µg"
          }
        },
        "totalDaily" : {
          "ENERC_KCAL" : {
            "label" : "Energy",
            "quantity" : 92.24915492868425,
            "unit" : "%"
          },
          "FAT" : {
            "label" : "Fat",
            "quantity" : 147.1151898455253,
            "unit" : "%"
          },
          "FASAT" : {
            "label" : "Saturated",
            "quantity" : 196.0629765007019,
            "unit" : "%"
          },
          "CHOCDF" : {
            "label" : "Carbs",
            "quantity" : 59.204439882644024,
            "unit" : "%"
          },
          "FIBTG" : {
            "label" : "Fiber",
            "quantity" : 65.81268609046936,
            "unit" : "%"
          },
          "PROCNT" : {
            "label" : "Protein",
            "quantity" : 145.60194214715958,
            "unit" : "%"
          },
          "CHOLE" : {
            "label" : "Cholesterol",
            "quantity" : 57.63,
            "unit" : "%"
          },
          "NA" : {
            "label" : "Sodium",
            "quantity" : 237.4108884213368,
            "unit" : "%"
          },
          "CA" : {
            "label" : "Calcium",
            "quantity" : 149.8764287247658,
            "unit" : "%"
          },
          "MG" : {
            "label" : "Magnesium",
            "quantity" : 47.498803713321685,
            "unit" : "%"
          },
          "K" : {
            "label" : "Potassium",
            "quantity" : 47.474907621928615,
            "unit" : "%"
          },
          "FE" : {
            "label" : "Iron",
            "quantity" : 63.20205590566,
            "unit" : "%"
          },
          "ZN" : {
            "label" : "Zinc",
            "quantity" : 61.53746043459575,
            "unit" : "%"
          },
          "P" : {
            "label" : "Phosphorus",
            "quantity" : 178.1341567019054,
            "unit" : "%"
          },
          "VITA_RAE" : {
            "label" : "Vitamin A",
            "quantity" : 68.18361142423419,
            "unit" : "%"
          },
          "VITC" : {
            "label" : "Vitamin C",
            "quantity" : 14.197250002225239,
            "unit" : "%"
          },
          "THIA" : {
            "label" : "Thiamin (B1)",
            "quantity" : 104.82456544272105,
            "unit" : "%"
          },
          "RIBF" : {
            "label" : "Riboflavin (B2)",
            "quantity" : 103.41165294478921,
            "unit" : "%"
          },
          "NIA" : {
            "label" : "Niacin (B3)",
            "quantity" : 88.48139724636079,
            "unit" : "%"
          },
          "VITB6A" : {
            "label" : "Vitamin B6",
            "quantity" : 50.41558593320846,
            "unit" : "%"
          },
          "FOLDFE" : {
            "label" : "Folate (Equivalent)",
            "quantity" : 236.80488176941873,
            "unit" : "%"
          },
          "VITB12" : {
            "label" : "Vitamin B12",
            "quantity" : 24.86,
            "unit" : "%"
          },
          "VITD" : {
            "label" : "Vitamin D",
            "quantity" : 10.17,
            "unit" : "%"
          },
          "TOCPHA" : {
            "label" : "Vitamin E",
            "quantity" : 62.14663133239746,
            "unit" : "%"
          },
          "VITK1" : {
            "label" : "Vitamin K",
            "quantity" : 72.04036634087564,
            "unit" : "%"
          }
        },
        "digest" : [ {
          "label" : "Fat",
          "tag" : "FAT",
          "schemaOrgTag" : "fatContent",
          "total" : 95.62487339959144,
          "hasRDI" : true,
          "daily" : 147.1151898455253,
          "unit" : "g",
          "sub" : [ {
            "label" : "Saturated",
            "tag" : "FASAT",
            "schemaOrgTag" : "saturatedFatContent",
            "total" : 39.21259530014038,
            "hasRDI" : true,
            "daily" : 196.0629765007019,
            "unit" : "g"
          }, {
            "label" : "Trans",
            "tag" : "FATRN",
            "schemaOrgTag" : "transFatContent",
            "total" : 1.9984050000000002,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Monounsaturated",
            "tag" : "FAMS",
            "schemaOrgTag" : null,
            "total" : 36.551196848526004,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Polyunsaturated",
            "tag" : "FAPU",
            "schemaOrgTag" : null,
            "total" : 10.039719840164185,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Carbs",
          "tag" : "CHOCDF",
          "schemaOrgTag" : "carbohydrateContent",
          "total" : 177.61331964793206,
          "hasRDI" : true,
          "daily" : 59.204439882644024,
          "unit" : "g",
          "sub" : [ {
            "label" : "Carbs (net)",
            "tag" : "CHOCDF.net",
            "schemaOrgTag" : null,
            "total" : 161.16014812531472,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Fiber",
            "tag" : "FIBTG",
            "schemaOrgTag" : "fiberContent",
            "total" : 16.45317152261734,
            "hasRDI" : true,
            "daily" : 65.81268609046936,
            "unit" : "g"
          }, {
            "label" : "Sugars",
            "tag" : "SUGAR",
            "schemaOrgTag" : "sugarContent",
            "total" : 18.625865498018264,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          }, {
            "label" : "Sugars, added",
            "tag" : "SUGAR.added",
            "schemaOrgTag" : null,
            "total" : 0.0,
            "hasRDI" : false,
            "daily" : 0.0,
            "unit" : "g"
          } ]
        }, {
          "label" : "Protein",
          "tag" : "PROCNT",
          "schemaOrgTag" : "proteinContent",
          "total" : 72.80097107357979,
          "hasRDI" : true,
          "daily" : 145.60194214715958,
          "unit" : "g"
        }, {
          "label" : "Cholesterol",
          "tag" : "CHOLE",
          "schemaOrgTag" : "cholesterolContent",
          "total" : 172.89000000000001,
          "hasRDI" : true,
          "daily" : 57.63,
          "unit" : "mg"
        }, {
          "label" : "Sodium",
          "tag" : "NA",
          "schemaOrgTag" : "sodiumContent",
          "total" : 5697.861322112083,
          "hasRDI" : true,
          "daily" : 237.4108884213368,
          "unit" : "mg"
        }, {
          "label" : "Calcium",
          "tag" : "CA",
          "schemaOrgTag" : null,
          "total" : 1498.7642872476579,
          "hasRDI" : true,
          "daily" : 149.8764287247658,
          "unit" : "mg"
        }, {
          "label" : "Magnesium",
          "tag" : "MG",
          "schemaOrgTag" : null,
          "total" : 189.99521485328674,
          "hasRDI" : true,
          "daily" : 47.498803713321685,
          "unit" : "mg"
        }, {
          "label" : "Potassium",
          "tag" : "K",
          "schemaOrgTag" : null,
          "total" : 1661.6217667675016,
          "hasRDI" : true,
          "daily" : 47.474907621928615,
          "unit" : "mg"
        }, {
          "label" : "Iron",
          "tag" : "FE",
          "schemaOrgTag" : null,
          "total" : 11.3763700630188,
          "hasRDI" : true,
          "daily" : 63.20205590566,
          "unit" : "mg"
        }, {
          "label" : "Zinc",
          "tag" : "ZN",
          "schemaOrgTag" : null,
          "total" : 9.230619065189362,
          "hasRDI" : true,
          "daily" : 61.53746043459575,
          "unit" : "mg"
        }, {
          "label" : "Phosphorus",
          "tag" : "P",
          "schemaOrgTag" : null,
          "total" : 1246.9390969133378,
          "hasRDI" : true,
          "daily" : 178.1341567019054,
          "unit" : "mg"
        }, {
          "label" : "Vitamin A",
          "tag" : "VITA_RAE",
          "schemaOrgTag" : null,
          "total" : 613.6525028181077,
          "hasRDI" : true,
          "daily" : 68.18361142423419,
          "unit" : "µg"
        }, {
          "label" : "Vitamin C",
          "tag" : "VITC",
          "schemaOrgTag" : null,
          "total" : 8.518350001335143,
          "hasRDI" : true,
          "daily" : 14.197250002225239,
          "unit" : "mg"
        }, {
          "label" : "Thiamin (B1)",
          "tag" : "THIA",
          "schemaOrgTag" : null,
          "total" : 1.5723684816408159,
          "hasRDI" : true,
          "daily" : 104.82456544272105,
          "unit" : "mg"
        }, {
          "label" : "Riboflavin (B2)",
          "tag" : "RIBF",
          "schemaOrgTag" : null,
          "total" : 1.7579981000614167,
          "hasRDI" : true,
          "daily" : 103.41165294478921,
          "unit" : "mg"
        }, {
          "label" : "Niacin (B3)",
          "tag" : "NIA",
          "schemaOrgTag" : null,
          "total" : 17.696279449272158,
          "hasRDI" : true,
          "daily" : 88.48139724636079,
          "unit" : "mg"
        }, {
          "label" : "Vitamin B6",
          "tag" : "VITB6A",
          "schemaOrgTag" : null,
          "total" : 1.0083117186641692,
          "hasRDI" : true,
          "daily" : 50.41558593320846,
          "unit" : "mg"
        }, {
          "label" : "Folate (Equivalent)",
          "tag" : "FOLDFE",
          "schemaOrgTag" : null,
          "total" : 947.2195270776749,
          "hasRDI" : true,
          "daily" : 236.80488176941873,
          "unit" : "µg"
        }, {
          "label" : "Vitamin B12",
          "tag" : "VITB12",
          "schemaOrgTag" : null,
          "total" : 1.4916,
          "hasRDI" : true,
          "daily" : 24.86,
          "unit" : "µg"
        }, {
          "label" : "Vitamin D",
          "tag" : "VITD",
          "schemaOrgTag" : null,
          "total" : 40.68,
          "hasRDI" : true,
          "daily" : 10.17,
          "unit" : "µg"
        }, {
          "label" : "Vitamin E",
          "tag" : "TOCPHA",
          "schemaOrgTag" : null,
          "total" : 12.429326266479492,
          "hasRDI" : true,
          "daily" : 62.14663133239746,
          "unit" : "mg"
        }, {
          "label" : "Vitamin K",
          "tag" : "VITK1",
          "schemaOrgTag" : null,
          "total" : 57.632293072700506,
          "hasRDI" : true,
          "daily" : 72.04036634087564,
          "unit" : "µg"
        } ]
      },
      "bookmarked" : false,
      "bought" : false
    } ]
  };