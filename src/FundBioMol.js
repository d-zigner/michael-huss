import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardImg, Jumbotron } from "reactstrap";
import FoodCarousel from "./BiologyCourseWork/FoodCarousel";

class FundBioMol extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="ml-2 display-1">Fundamentals of Biomolecules</h1>
          <h1 className="ml-3 display-4 text-muted">BIOL395 Spring 2019</h1>
        </Jumbotron>
        <Card className="col-lg-6 p-0 m-auto shadow-lg">
          <CardHeader className="text-center">
            <b>BLK Water: An Analysis</b>
          </CardHeader>
          <CardImg
            className="pt-2 pb-2"
            src={process.env.PUBLIC_URL + "/tint-solid.svg"}
            style={{ maxHeight: "64px", backgroundColor: "ghostwhite" }}
          />
          <CardBody className="p-5">
            &emsp;&emsp;BLK water, is a <i>“healthy water”</i> that boasts
            claims of health benefits as a result of ingestion of alkaline water
            and fulvic acid. Fulvic acid is not a specific organic molecule, but
            a family of organic molecules that are organic acids with Nitrogen
            and Sulfur components. The majority of fulvic acid are classified as
            carboxyl functional groups but also contains alcohols, amines,
            ethers, ketones, carboxylic acids, esters, and benzene rings. The
            structure of fulvic acid seems to be a polar molecule and not a
            lipid. The carboxyl groups are the most responsible for releasing
            hydrogens. The most common way to make alkaline substances for
            consumption is the addition of baking soda or Sodium bicarbonate.
            Apparently fulvic acid is extracted from humus, the organic
            component of soil, so it may be a bit controversial to say that it
            is extracted from dirt. BLK water claims to make biomolecules more
            readily available for absorption in the body. In the sources
            available on their website, there is no mention to the actual
            benefits of fulvic acid in humans, but there is a paper included
            about the benefits if provides to plants. The other refences
            provided are also not from peer reviewed sources, and another
            discusses the benefits of alkaline diet, but not fulvic acid itself.
            Upon researching fulvic acid and its effects on health, there are
            two papers that state that there are no apparent biological effects
            or benefits when tested in two animal models, rats and bovine
            cattle.
            <sup>[1][2]</sup>
            <br />
            <br />
            [1] Duff GC, Harris MA, Sanders SR, Chirase NK, Bailey CR, Ibrahim
            RM. Effect of Humic/Fulvic Acid in Beef Cattle Finishing Diets on
            Animal Performance, Ruminal Ammonia and Serum Urea Nitrogen
            Concentration AU - McMurphy, C. P. Journal of Applied Animal
            Research. 2009;35:97-100.
            <br />
            [2] Vucskits AV, Hullár I, Bersényi A, Andrásofszky E, Kulcsár M,
            Szabó J. Effect of fulvic and humic acids on performance, immune
            response and thyroid function in rats. Journal of Animal Physiology
            and Animal Nutrition. 2010;94:721-8.
          </CardBody>
        </Card>
        <Card className="col-lg-6 p-0 mt-3 ml-auto mr-auto shadow-lg">
          <CardHeader className="text-center">
            <b>3 Day Sugar Free Challenge</b>
          </CardHeader>
          <CardImg
            className="pt-2 pb-2"
            src={process.env.PUBLIC_URL + "/candy-cane-solid.svg"}
            style={{ maxHeight: "64px", backgroundColor: "ghostwhite" }}
          />
          <CardBody className="p-5">
            As a part of learning about carbohydrates, Dr. Steel suggested we
            try to go 3 days without consuming foods that had added sugars in
            their ingredients (-ose sugars, high fructose corn syrups,
            artificial sweeteners etc.) Below is a summary of what my 3 days
            looked like.
            <br />
            <br />
            As I did not live blog through out the three days, I’ll write up a
            little summary of my experiences over the three day period.
            <br />
            <br />
            <hr />
            <br />
            &emsp;&emsp;On the first day I’ve discovered that snack foods were
            out of the question, even healthy snacks like granola had some kind
            of sweetener added. Fresh fruits were the way to go. For a salty
            snack I resorted to making my own, Almonds roasted in olive oil and
            salt. Almonds provide fiber, vitamins and minerals along with
            unsaturated lipids. Most days I only eat one meal, skipping
            breakfast and lunch, so unfortunately I had to cook for these three
            days so I could know for sure what was inside my food. For the first
            night I baked panko breaded chicken and mashed boiled potatoes.
            Panko does not have any added sugars but does contain wheat flour, a
            simple carbohydrate. Gravy was not an option for the mash potatoes
            as gravy mixes contain corn syrup solids. And that was the end of
            the first day, not to different form the average day as home cooked
            meals are pretty normal.
            <br />
            <br />
            &emsp;&emsp;For the second day I had my leftover almonds and chicken
            throughout the day. For dinner, I made a chicken and vegetable soup
            made with heavy cream. Heavy cream is a dairy product so it has milk
            sugars, known as lactose. By the end of day two, I had already ate
            all my almonds.
            <br />
            <br />
            &emsp;&emsp;For the third day I ate more leftovers and whole fruits.
            I have not noticed and significant changes in my mood and or general
            feeling at this point. This may be due to the fact that I was still
            ingesting fruit sugars in my diet. I was also intaking a lot of
            plant fibers and low lipid animal proteins. For the third dinner, I
            switched up my protein of choice from chicken to pork. The pork was
            marinated in soy sauce, lemon juice, and vinegar and then pan fried
            with vegetable oils; served with a side of steamed asparagus. And
            that was the end of the three days.
            <FoodCarousel />
          </CardBody>
        </Card>
        <Card className="col-lg-6 p-0 mt-3 ml-auto mr-auto shadow-lg">
          <CardHeader className="text-center">
            <b>Tuna Nigiri Infographic</b>
          </CardHeader>
          <CardImg src={process.env.PUBLIC_URL + "/img/tuna-info.png"} />
          <CardBody>
            <i className="text-muted">
              For this assignment, we were asked to examine the nutritional
              content of one of our favorite foods.
            </i>
          </CardBody>
        </Card>
        <Card className="col-lg-6 p-0 mt-3 ml-auto mr-auto shadow-lg">
          <CardHeader className="text-center">
            <b>BIO 395 Course Reflection</b>
          </CardHeader>
          <CardImg
            className="pt-2 pb-2"
            src={process.env.PUBLIC_URL + "/book-solid.svg"}
            style={{ maxHeight: "64px", backgroundColor: "ghostwhite" }}
          />
          <CardBody>
            &emsp;&emsp;Thinking back to the beginning of the semester I was not
            too sure what biomolecules were, and over the semester I have gained
            a better understanding of not only what biomolecules are, but also
            the functions they serve in living organisms. The instructor, Dr.
            Steel structured the course to accommodate all the students
            backgrounds and prior knowledge of chemistry. The instructor also
            wanted student input about what they wanted to learn. There was
            structure and organization to the material as we covered the major
            classes of biomolecules, their structures, interactions with other
            molecules, and their biological functions. Dr. Steel did not use the
            standard lecture format, but instead wanted us students to take the
            information into our own hands by drawing figures, looking at
            models, and applying the information into the real world. I felt
            this teaching format was more beneficial this way. Overall I found
            the course beneficial and an enjoyable experience, not to mention
            all the free food Dr. Steel gave to us!
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default FundBioMol;
