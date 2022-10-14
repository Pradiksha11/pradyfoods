import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Parotta",
    description: "Parotta is a Subcontinental layered flatbread made from Maida or Atta, alternatively known as flaky ribbon pancake.",
    price: 15,
  },
  {
    id: "m2",
    name: "Briyani",
    description: "Biryani is a spiced mix of meat and rice, traditionally cooked over an open fire in a leather pot",
    price: 120,
  },
  {
    id: "m3",
    name: "Falooda",
    description: "A falooda is a Mughlai Indian version of a cold dessert made with noodles!",
    price: 150,
  },
  {
    id: "m4",
    name: "Pani puri",
    description: "Gol gappa (also known as pani puri) is a popular bite-size chaat ",
    price: 20,
  },
  {
    id: "m5",
    name: "Schezwan noodles",
    description: "Schezwan noodles is completely vegan, and delicious to prepare as a tasty lunch or dinner.",
    price: 199,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
