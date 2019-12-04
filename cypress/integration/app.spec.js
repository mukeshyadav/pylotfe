import { API_KEY, API_URL } from "../../src/config.js";

describe("App E2E", () => {
  it("should render properly first time", () => {
    cy.visit("/");
    cy.get("h2").should("have.text", "Weather Monster");
    cy.get("input").should(
      "have.attr",
      "placeholder",
      "Type the name of a city"
    );
    cy.get(".grid-layout").should("have.class", "no-records");
  });

  it("searchbar should work properly", () => {
    cy.get("#cities option")
      .should("have.length", 10)
      .first()
      .should("have.value", "London")
      .next()
      .should("have.value", "Munich");
    cy.get("#cities option")
      .last()
      .should("have.value", "Zurich");
  });

  it("search and show result", () => {
    cy.get("input").type("London");
    cy.get("input").should("have.value", "London");
    cy.request(`${API_URL}London}&appid=${API_KEY}&units=metric`)
      .should(response => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(384);
        expect(response).to.have.property("headers");
        expect(response).to.have.property("duration");
      })
      .then(response => {
        cy.get(".grid-layout").not(".no-records");
        cy.get(".grid-layout .card")
          .eq(0)
          .get("h3")
          .should("have.text", "London");
      });
  });

  it("remove weather list on click", () => {
    cy.get(".card").click();
    cy.get(".grid-layout").should("have.class", "no-records");
  });
});
