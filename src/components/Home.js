import React from "react";
import Cards from "./Cards";
import { supabase } from "../supabase";

function Home() {
  async function getCountry() {
    let { data: countries, error } = await supabase
      .from('countries')
      .select('*')
      console.log(countries  )

    // const { data, error } = await supabase.auth.signUp({
    //   email: 'example@email.com',
    //   password: 'example-password',
    // })
  }
  getCountry();

  return (
    <div>
      <h2>Painterlygirl</h2>
      <p>Fine Art of Sharon Lee Martin</p>
      <Cards />
    </div>
  );
}

export default Home;
