import { NextResponse } from "next/server";
import data from "./../../../data.json";

export async function GET() {
  try {
    const response = data.map((country) => {
      return {
        name: country.name,
        population: country.population.toLocaleString("pt-BR"),
        region: country.region,
        capital: country.capital,
        flag: country.flags.svg,
        code: country.numericCode,
      };
    });
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log(err);
    return NextResponse.json({ msg: "Operation failed!" }, { status: 500 });
  }
}
