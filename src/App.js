import "./App.css";

function App() {
  return (
    <>
      <div className="aka">
        <header>
          <h1>Ajmeer’s Minimal Weight Loss Diet Plan</h1>
          <div className="tagline">
            Target: 70kg in 3 months &nbsp;|&nbsp; Budget: 3,000 INR/month
            &nbsp;|&nbsp; Night Shift
          </div>
        </header>
        <main>
          <section className="section-block">
            <h2>Personal Information (At a Glance)</h2>
            <table className="personal-table">
              <tr>
                <td className="personal-key">Name</td>
                <td className="personal-value">Ajmeer</td>
              </tr>
              <tr>
                <td className="personal-key">Age</td>
                <td className="personal-value">24</td>
              </tr>
              <tr>
                <td className="personal-key">Current Weight</td>
                <td className="personal-value">80kg</td>
              </tr>
              <tr>
                <td className="personal-key">Height</td>
                <td className="personal-value">5.7 feet</td>
              </tr>
              <tr>
                <td className="personal-key">Target Weight</td>
                <td className="personal-value">70kg</td>
              </tr>
              <tr>
                <td className="personal-key">Diet</td>
                <td className="personal-value">Mixed (Veg + Non-Veg)</td>
              </tr>
              <tr>
                <td className="personal-key">Schedule</td>
                <td className="personal-value">
                  Night shift (Mon–Fri, 7pm–6am)
                </td>
              </tr>
              <tr>
                <td className="personal-key">Workout</td>
                <td className="personal-value">
                  4x/week gym, Cardio 2km/18min
                </td>
              </tr>
              <tr>
                <td className="personal-key">Cooking Time</td>
                <td className="personal-value">≤ 2hrs/day</td>
              </tr>
              <tr>
                <td className="personal-key">Sleep</td>
                <td className="personal-value">≥ 8 hours</td>
              </tr>
              <tr>
                <td className="personal-key">Budget</td>
                <td className="personal-value">3,000 INR/month</td>
              </tr>
            </table>
          </section>

          <section className="section-block">
            <h2>Daily Diet Plan (Simple)</h2>
            <h3>Weekdays (Night Shift)</h3>
            <table>
              <tr>
                <th>Time</th>
                <th>Meal</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>6:30PM</td>
                <td>Main Meal</td>
                <td>Egg curry, 2 phulkas, dal tadka, salad</td>
              </tr>
              <tr>
                <td>10:00PM</td>
                <td>Work Dinner</td>
                <td>Chicken tikka, jeera rice, cucumber-mint raita</td>
              </tr>
              <tr>
                <td>2:00AM</td>
                <td>Midnight Snack</td>
                <td>Mixed veg stir-fry, chapati, buttermilk</td>
              </tr>
              <tr>
                <td>5:30AM</td>
                <td>Pre-Gym</td>
                <td>Banana, black coffee</td>
              </tr>
              <tr>
                <td>8:00AM</td>
                <td>Post-Workout</td>
                <td>Scrambled eggs, milk, fruit</td>
              </tr>
              <tr>
                <td>9:00AM</td>
                <td>Before Bed</td>
                <td>Roti with paneer bhurji, steamed veg</td>
              </tr>
            </table>

            <h3>Weekends (Day Routine)</h3>
            <table>
              <tr>
                <th>Time</th>
                <th>Meal</th>
                <th>Description</th>
              </tr>
              <tr>
                <td>8:00AM</td>
                <td>Breakfast</td>
                <td>Boiled eggs, roti/rice, dal, salad</td>
              </tr>
              <tr>
                <td>11:00AM</td>
                <td>Snack</td>
                <td>Fruit (banana/apple), coffee/tea</td>
              </tr>
              <tr>
                <td>2:00PM</td>
                <td>Lunch</td>
                <td>Chicken/beef curry, rice, curd</td>
              </tr>
              <tr>
                <td>5:00PM</td>
                <td>Evening Snack</td>
                <td>Veg sabzi, chapati, buttermilk</td>
              </tr>
              <tr>
                <td>7:00PM</td>
                <td>Nibble</td>
                <td>Roasted chana/peanuts, sprouts</td>
              </tr>
              <tr>
                <td>8:30PM</td>
                <td>Dinner</td>
                <td>Roti with paneer bhurji, steamed veg</td>
              </tr>
            </table>
          </section>

          <section className="section-block">
            <h2>Average Portion Sizes per Day</h2>
            <table>
              <tr>
                <th>Item</th>
                <th>Grams</th>
              </tr>
              <tr>
                <td>Eggs</td>
                <td>200g</td>
              </tr>
              <tr>
                <td>Chicken</td>
                <td>100g</td>
              </tr>
              <tr>
                <td>Paneer</td>
                <td>50g</td>
              </tr>
              <tr>
                <td>Roti/Chapati</td>
                <td>180g</td>
              </tr>
              <tr>
                <td>Rice</td>
                <td>150g</td>
              </tr>
              <tr>
                <td>Dal</td>
                <td>150g</td>
              </tr>
              <tr>
                <td>Veggies</td>
                <td>250g</td>
              </tr>
              <tr>
                <td>Salad</td>
                <td>100g</td>
              </tr>
              <tr>
                <td>Curd</td>
                <td>120g</td>
              </tr>
              <tr>
                <td>Buttermilk</td>
                <td>240g</td>
              </tr>
              <tr>
                <td>Milk</td>
                <td>200g</td>
              </tr>
              <tr>
                <td>Fruit</td>
                <td>300g</td>
              </tr>
            </table>
          </section>

          <section className="section-block">
            <h2>Quick Tips</h2>
            <ul>
              <li>Batch cook basic foods to save time.</li>
              <li>Track your calories (aim: 1,600 to 1,800 kcal/day).</li>
              <li>Drink 2.5–3L water daily.</li>
              <li>Minimize oil use (max 2–3 tsp/day).</li>
              <li>Prioritize protein from eggs & chicken for the budget.</li>
              <li>Follow workout schedule for sustainable results.</li>
              <li>Adjust quantity/portion if energy or weight loss stalls.</li>
              <li>
                Enjoy fresh herbs, lemon, and spices for taste without extra
                calories.
              </li>
            </ul>
          </section>

          <section className="section-block">
            <h2>Weekly Grocery Budget Overview</h2>
            <table>
              <tr>
                <th>Item</th>
                <th>Estimated Cost (₹)</th>
              </tr>
              <tr>
                <td>Eggs (30)</td>
                <td>210</td>
              </tr>
              <tr>
                <td>Chicken (1.5kg)</td>
                <td>750</td>
              </tr>
              <tr>
                <td>Rice (3–5kg/month)</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Dal/Lentils (2kg/month)</td>
                <td>300</td>
              </tr>
              <tr>
                <td>Veggies</td>
                <td>1,000</td>
              </tr>
              <tr>
                <td>Curd/Dahi</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Roti/Flour</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Milk & Paneer</td>
                <td>250</td>
              </tr>
              <tr>
                <td>Spices/Tea/Coffee</td>
                <td>40–50</td>
              </tr>
              <tr>
                <th>Total</th>
                <th>≈ 3,000</th>
              </tr>
            </table>
          </section>
        </main>
        <footer>
          Stay consistent, keep it simple, and celebrate every win!
        </footer>
      </div>
    </>
  );
}

export default App;
