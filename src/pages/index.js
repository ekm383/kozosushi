import React from "react"
import Layout from "../components/layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/seo"
import HeaderIndex from "../components/globals/header/HeaderIndex"
import Banner from "../components/globals/banner/Banner"
import Button from "../components/globals/button/Button"
import Section from "../components/globals/section/Section"
import LocationBox from "../components/LocationBox"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home | Kozo Sushi Hawaii"
      description="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around.`,
      author: `@restaurantmarketinghawaii"
      keywords={[
        `Kozo Sushi Hawaii`,
        `Kozo Sushi Honolulu`,
        `Hawaii Sushi`,
        `Honolulu Sushi`,
        `Sushi Platter Honolulu`,
      ]}
    />
    <HeaderIndex style={{ padding: "4rem 0rem" }}>
      <Section style={{ width: "100vw", alignItems: "center" }}>
        <Banner
          title="Kozo Sushi Hawaii"
          subtitle="You won't forget the tastes of our Japanese sushi, so visit us at our Hawaii restaurant today and see why we're known throughout Honolulu for the freshest flavors around."
        >
          <AniLink fade to="#locations">
            <Button>ORDER TAKEOUT</Button>
          </AniLink>
        </Banner>
      </Section>
    </HeaderIndex>
    <Section
      id="locations"
      style={{
        width: "100vw",
        marginTop: "1rem",
        justifyContent: "space-evenly",
      }}
    >
      <LocationBox
        name="kozo sushi pearlridge"
        address="98-1005 Moanalua Rd, Aiea, HI 96701"
        phone="(808) 483-6805"
        hours1="Mon-Sat 11:00am-7:00pm"
        hours2="Sun 12:00pm-6:00pm"
        link="/pearlridge"
      />
      <LocationBox
        name="kozo sushi pearl city"
        address="1029 Makolu St ste c, Pearl City, HI 96782"
        phone="(808) 455-6805"
        hours1="Mon-Fri 10:00am-8:00pm"
        hours2="Sun & Sat 10:00am-8:00pm"
        link="/pearlcity"
      />
      <LocationBox
        name="kozo sushi moiliili"
        address="2334 S King St, Honolulu, HI 96826"
        phone="(808) 951-5696"
        hours1="Mon-Thur 9:30am-7:00pm"
        hours2="Fri & Sat 9:30am-8:00pm"
        hours3="Sun 9:30am-6:00pm"
        link="moiliili"
      />
      <LocationBox
        name="kozo sushi kahala mall"
        address="4618 Kilauea Ave, Honolulu, HI 9681"
        phone="(808) 738-5696"
        hours1="Mon-Thur 9:30am-7:00pm"
        hours2="Fri & Sat 9:30am-8:00pm"
        hours3="Sun 9:30am-6:00pm"
        link="kahala"
      />
    </Section>
  </Layout>
)

export default IndexPage
